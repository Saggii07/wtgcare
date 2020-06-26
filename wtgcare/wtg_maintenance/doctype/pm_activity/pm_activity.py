# -*- coding: utf-8 -*-
# Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.model.mapper import get_mapped_doc
from frappe import _
from dateutil import parser
from frappe.utils import flt, getdate


class PMActivity(Document):
        def create_measurement_log(self):
            update_modified=False
            if self.pm_type == "Electrical": 
                existing_record_measurment_log = frappe.db.get_value("PM Electrical Measurement Log", filters={"pm_activity": self.name}, fieldname="name")
                
            elif self.pm_type == "Mechanical": 
                
                existing_record_measurment_log = frappe.db.get_value("PM Mechanical Measurement Log", filters={"pm_activity": self.name}, fieldname="name")
            
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
                td_entry1.pm_activity= self.name
                td_entry.pm_type=self.pm_type
                td_entry.fiscal_year=self.fiscal_year
                td_entry1.save()
                frappe.msgprint(frappe._("Measurement Log Created")) 
                doc1=frappe.get_doc("PM Activity", self.name)
                doc1.measurement_log = td_entry.name
                doc1.save()
                doc1.reload()
            else:
                return existing_record_measurment_log
             

        def create_service_order(self):
            update_modified=False
            existing_record = frappe.db.get_value("Service Report", filters={"pm_activity": self.name}, fieldname="name")
            if not existing_record:
                td_entry = frappe.new_doc("Service Report")
                td_entry.wtg_name= self.wtg_name
                td_entry.service_nature= "PM"
                td_entry.pm_activity= self.name
                td_entry.save()
                frappe.msgprint(frappe._("Service Order Created"))
                doc1=frappe.get_doc("PM Activity", self.name)
                doc1.service_log = td_entry.name
                doc1.status="Service Order Assigned"
                doc1.reload()
                doc1.save()
                self.reload()
            else:
                return existing_record


 #       def create_remaining_list(self):
 #           update_modified=False
 #           existing_record = frappe.db.get_value("PM Work Remaining List", filters={"pm_activity": self.name}, fieldname="name")
 #           if not existing_record:
 #               meta = frappe.get_meta("PM Check Point Table")
 #               check_point_details = frappe.get_all("PM Check Point Table", fields=["check_point_code","remark"],
 #               filters={"parent": self.name,"status":"Pending"})
 #               check_point_code1 = [c.check_point_code for c in check_point_details if c.check_point_code] if meta.get_field("check_point_code") else None
 #               for check_point in check_point_code1:
 #                   td_entry = frappe.new_doc("PM Work Remaining List")
 #                   td_entry.pm_activity = self.name
 #                   td_entry.pm_check_point = check_point
 #                   td_entry.status="Pending"
 #                   td_entry.performed_by=self.task_lead_by
 #                   observations = frappe.db.get_value("PM Check Point Table", filters={"parent": self.name,"check_point_code":check_point}, fieldname="remark")
 #                   td_entry.observations=observations
 #                   td_entry.save()
 #               frappe.msgprint("Remaining List Created!")

        def create_remaining_list(self):
            update_modified=False
            meta = frappe.get_meta("PM Check Point Table")
            check_point_details = frappe.get_all("PM Check Point Table", fields=["check_point_code","remark"],filters={"parent": self.name,"status":"Pending"})
            check_point_code1 = [c.check_point_code for c in check_point_details if c.check_point_code] if meta.get_field("check_point_code") else None
            for check_point in check_point_code1:
                existing_record = frappe.db.get_value("PM Work Remaining List", filters={"pm_activity": self.name,"pm_check_point":check_point}, fieldname="name")
                if not existing_record:
                    td_entry = frappe.new_doc("PM Work Remaining List")
                    td_entry.pm_activity = self.name
                    td_entry.pm_check_point = check_point
                    td_entry.status="Pending"
                    td_entry.performed_by=self.task_lead_by
                    observations = frappe.db.get_value("PM Check Point Table", filters={"parent": self.name,"check_point_code":check_point}, fieldname="remark")
                    td_entry.observations=observations
                    td_entry.save()
            frappe.msgprint("Remaining List Created!")

         


@frappe.whitelist()
def fetch_service_log(source_name, target_doc=None):
	target_doc = get_mapped_doc("PM PPE Table", source_name, {
		"PM PPE Table": {
			"doctype": "PM PPE Details",
		}
	}, target_doc)
	return target_doc


@frappe.whitelist(allow_guest=False)
def get_check_point(check_point_group,wtg_model,wtg_technology,pm_type):
    vars = frappe.db.sql("""Select check_point_name as "check_point_name" from `tabPM Check Point` WHERE (`check_point_group` = %s or `wtg_model` =  %s or `wtg_technology` =  %s) and `pm_type` =  %s""",(check_point_group,wtg_model,wtg_technology,pm_type))
    return vars

@frappe.whitelist(allow_guest=False)
def change_pm_activity_status(pm_activity):
    update_modified=False
    existing_record = frappe.db.get_value("PM Activity", filters={"name": pm_activity}, fieldname="workflow_state")
    if existing_record == "Pending for Material Review":
        doc1=frappe.get_doc("PM Activity", pm_activity)
        doc1.workflow_state="Pending for TSO Aproval"
        doc1.save()
        doc1.reload()
        frappe.msgprint("Reviewed By Material Incharge")
    else: 
        frappe.msgprint("Aleardy Reviewed By Material Incharge")




