# -*- coding: utf-8 -*-
# Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt



from __future__ import unicode_literals
import frappe
from datetime import date
from datetime import timedelta
from frappe.model.document import Document

class WTGStatusLog(Document):
    def insert_wtg(self):
        if(self.wtg_name is None and self.group_wtg_name is not None and len(self.group_wtg_name)>0):
            for wtg in self.group_wtg_name.split(','):
                td_entry = frappe.new_doc("WTG Status Log")
                td_entry.wtg_name = wtg
                td_entry.status1=self.status1
                td_entry.wtg_fault=self.wtg_fault
                td_entry.main_status=self.main_status
                td_entry.is_remote_resetted=self.is_remote_resetted
                td_entry.sub_status = self.sub_status
                td_entry.reset_counter=self.reset_counter
                td_entry.available_reset_count=self.available_reset_count
                td_entry.start=self.start
                td_entry.end=self.end
                td_entry.duration=self.duration
                td_entry.root_cause=self.root_cause
                td_entry.is_ack=self.is_ack
                td_entry.action_taken=self.action_taken
                td_entry.remark=self.remark 
                td_entry.save()
            frappe.msgprint(frappe._("Multiple Records added!"))

    def get_reset_counter(self):
        wtg_name=self.wtg_name
        wtg_fault=self.wtg_fault
        start_date1 = date.today()
        start_date2 = date.today() + timedelta(days=1)
        vars = frappe.db.sql("""Select max(reset_counter) from `tabWTG Status Log` WHERE  `wtg_name`=%s and `wtg_fault`=%s and `start` >= %s  and `start` <  %s and `is_remote_resettable`=1""",(wtg_name,wtg_fault,start_date1,start_date2))
        return vars




	  

