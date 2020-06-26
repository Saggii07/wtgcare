# -*- coding: utf-8 -*-
# Copyright (c) 2020, powercon and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from datetime import date,datetime
from datetime import timedelta

x = datetime.now()
#frappe.msgprint(x.month)


class TCASchedule(Document):
    def insert_tca_activities(self):
        meta = frappe.get_meta("TCA List Table")
        wtg_details = frappe.get_all("TCA List Table", fields=["wtg_model","wtg_name","schedule_date"],
            filters={"parent": self.name})

        wtg_model = [c.wtg_model for c in wtg_details if c.wtg_model] if meta.get_field("wtg_model") else None
        wtg_name = [c.wtg_name for c in wtg_details if c.wtg_name] if meta.get_field("wtg_name") else None
        schedule_date1 = [c.schedule_date for c in wtg_details if c.schedule_date] if meta.get_field("schedule_date") else None
        schedule_date = frappe.as_json(schedule_date1).replace("[", "").replace("]", "").split(',')
       
        for wtg in  wtg_name:
            index_sd = wtg_name.index(wtg)
            schedule_date_val = schedule_date1[index_sd]
            wtg_model_val = wtg_model[index_sd]
            existing_record = frappe.db.get_value("TCA Activity", filters={"tca_schedule": self.name ,"wtg_name":wtg}, fieldname="name")
            if not existing_record:
                td_entry = frappe.new_doc("TCA Activity")
                td_entry.tca_schedule = self.name
                td_entry.wtg_name = wtg
                td_entry.wtg_model = wtg_model_val
                td_entry.schedule_date = schedule_date_val
                td_entry.save()
            else:
                frappe.msgprint(frappe._("TCA Atcivities Aleardy Created"))
                return existing_record
        frappe.msgprint(frappe._("Multiple Records added!"))
