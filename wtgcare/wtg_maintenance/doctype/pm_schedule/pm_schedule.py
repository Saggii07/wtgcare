# -*- coding: utf-8 -*-
# Copyright (c) 2019, powercon and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from datetime import date,datetime
from datetime import timedelta

x = datetime.now()
frappe.msgprint(x.month)

class PMSchedule(Document):
    def insert_wtg(self):
        meta = frappe.get_meta("PM Schedule Table")
        wtg_details = frappe.get_all("PM Schedule Table", fields=["wtg_name","schedule_date"],
            filters={"parent": self.name})
        wtg_name = [c.wtg_name for c in wtg_details if c.wtg_name] if meta.get_field("wtg_name") else None
        schedule_date1 = [c.schedule_date for c in wtg_details if c.schedule_date] if meta.get_field("schedule_date") else None
        schedule_date = frappe.as_json(schedule_date1).replace("[", "").replace("]", "").split(',')
        for wtg in  wtg_name:
            index_sd = wtg_name.index(wtg)
            schedule_date_val = schedule_date1[index_sd]
            td_entry = frappe.new_doc("PM Activity")
            td_entry.wtg_name = wtg
            pm_type1 = None
            if self.pm_type == "Electrical":
                pm_type1 = "YE"
            elif self.pm_type == "Mechanical":
                pm_type1 = "YM"
            elif self.pm_type == "Visual":
                pm_type1 = "QV"
            elif self.pm_type == "Grease":
                pm_type1 = "HG"
            elif self.pm_type == "Electro-mechanical Maintenance" and self.pm_periodicity == "Yearly":
                pm_type1 = "YEM"
            elif self.pm_type == "Electro-mechanical Maintenance" and self.pm_periodicity == "Half Yearly":
                pm_type1 = "HEM"
            elif self.pm_type == "USS Maintenance" and self.pm_periodicity == "Yearly":
                pm_type1 = "YU"
            elif self.pm_type == "USS Maintenance" and self.pm_periodicity == "Half Yearly":
                pm_type1 = "HU"
            elif self.pm_type == "Rotor Blade Resistance Measurement" and self.pm_periodicity == "Yearly":
                pm_type1 = "YRB"

            pm_activity_name1 = str(wtg)+","+pm_type1+","+self.fiscal_year;
            td_entry.pm_activity_name= pm_activity_name1
            td_entry.pm_type=self.pm_type
            td_entry.fiscal_year=self.fiscal_year
            td_entry.pm_periodicity=self.pm_periodicity
            td_entry.scheduled_date=schedule_date_val
            td_entry.status="Pending"
            td_entry.save()

            doc1 = frappe.get_doc("PM Schedule Table", {"parent": self.name,"wtg_name": wtg})
            doc1.pm_activity= pm_activity_name1
            doc1.status= "Pending"
            doc1.save()

            meta = frappe.get_meta("PM Check Point")
            check_point = frappe.get_all("PM Check Point", fields=["check_point_name"],filters={"pm_type": self.pm_type})
            check_point_name1 = [c.check_point_name for c in check_point if c.check_point_name] if meta.get_field("check_point_name") else None
            meta = frappe.get_meta("PM PPE Details")
            ppe_name_details = frappe.get_all("PM PPE Details", fields=["ppe_name"])
            ppe_name_details1 = [c.ppe_name for c in ppe_name_details if c.ppe_name] if meta.get_field("ppe_name") else None

            for check_point_val in check_point_name1:
                target_doc = frappe.get_doc("PM Activity", pm_activity_name1)
                existing_row_id = frappe.db.get_value("PM Check Point Table", filters={"parent": pm_activity_name1, "check_point_code": check_point_val}, fieldname="name")
                if not existing_row_id:
                    target_doc.append("pm_check_points", {
			"check_point_code": check_point_val,
                        "status": "Pending"
                    })
                    target_doc.save()
                    frappe.db.commit()

            for ppe_val in ppe_name_details1:
                target_doc = frappe.get_doc("PM Activity", pm_activity_name1)
                existing_row_id = frappe.db.get_value("PM PPE Table", filters={"parent": pm_activity_name1, "name1": ppe_val}, fieldname="name")
                if not existing_row_id:
                    target_doc.append("ppe_used", {
			"name1": ppe_val
                    })
                    target_doc.save()
                    frappe.db.commit()
        frappe.msgprint(frappe._("Multiple Records added!"))


    def create_service_order(self):
        meta = frappe.get_meta("PM Schedule Table")
        wtg_details = frappe.get_all("PM Schedule Table", fields=["wtg_name","pm_activity"],filters={"parent": self.name})
        wtg_name = [c.wtg_name for c in wtg_details if c.wtg_name] if meta.get_field("wtg_name") else None
        pm_activity1 = [c.pm_activity for c in wtg_details if c.pm_activity] if meta.get_field("pm_activity") else None
        for wtg in  wtg_name:
            index_sd = wtg_name.index(wtg)
            pm_activity_val = pm_activity1[index_sd]
            existing_record = frappe.db.get_value("Service Report", filters={"pm_activity": pm_activity_val}, fieldname="name")
            if not existing_record:
                td_entry = frappe.new_doc("Service Report")
                td_entry.wtg_name= wtg
                td_entry.service_nature= "PM"
                td_entry.pm_activity= pm_activity_val
                td_entry.save()
                doc1=frappe.get_doc("PM Activity", pm_activity_val)
                doc1.service_log = td_entry.name
                doc1.status="Service Order Assigned"
                doc1.save()

                doc2 = frappe.get_doc("PM Schedule Table", {"parent": self.name,"pm_activity": pm_activity_val})
                doc2.pm_service_order= td_entry.name
                doc2.status= "Service Order Assigned"
                doc2.save()
                doc2.reload()

            else:
                frappe.msgprint(frappe._("Service Order Aleardy Created"))
                return existing_record
                 
        frappe.msgprint(frappe._("Service Order Created"))

    def create_measurement_log(self):
        meta = frappe.get_meta("PM Schedule Table")
        pm_details = frappe.get_all("PM Schedule Table", fields=["pm_activity"],filters={"parent": self.name})
        pm_activity1 = [c.pm_activity for c in pm_details if c.pm_activity] if meta.get_field("pm_activity") else None
        for pm_activity_val in pm_activity1:
            if self.pm_type == "Electrical": 
                existing_record_measurment_log = frappe.db.get_value("PM Electrical Measurement Log", filters={"pm_activity": pm_activity_val}, fieldname="name")
                
            elif self.pm_type == "Mechanical":           
                existing_record_measurment_log = frappe.db.get_value("PM Mechanical Measurement Log", filters={"pm_activity": pm_activity_val}, fieldname="name")
            
            elif self.pm_type == "Visual": 
                frappe.msgprint(frappe._("Measurement Log Not Applicable"))
                pass
            elif self.pm_type == "Grease": 
                frappe.msgprint(frappe._("Measurement Log Not Applicable"))
                pass
            if not existing_record_measurment_log:
                td_entry = None
                if self.pm_type == "Electrical":
                    td_entry = frappe.new_doc("PM Electrical Measurement Log")
                elif self.pm_type == "Mechanical":
                    td_entry = frappe.new_doc("PM Mechanical Measurement Log")
                td_entry1 = td_entry
                td_entry1.pm_activity= pm_activity_val
                td_entry.pm_type=self.pm_type
                td_entry.fiscal_year=self.fiscal_year
                td_entry1.save()

                doc1=frappe.get_doc("PM Activity", pm_activity_val)
                doc1.measurement_log = td_entry.name
                doc1.save()

                doc2 = frappe.get_doc("PM Schedule Table", {"parent": self.name,"pm_activity": pm_activity_val})
                doc2.measurement_log= td_entry.name
                doc2.save()

            else:
                return existing_record_measurment_log
            frappe.msgprint(frappe._("Measurement Logs Created!"))   


