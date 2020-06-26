# -*- coding: utf-8 -*-
# Copyright (c) 2020, powercon and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from datetime import date,datetime
from datetime import timedelta

@frappe.whitelist(allow_guest=True)
class TCAActivity(Document):
    def insert_tca_data(self):
        meta = frappe.get_meta("TCA Check Point")
        wtg_details = frappe.db.sql("""Select name ,tca_section,tca_subsection ,wtg_check_point from `tabTCA Check Point` WHERE  `wtg_model`=%s ORDER BY tca_section,tca_subsection,wtg_check_point""",(self.wtg_model), as_dict=1)

        for tca_section_val in  wtg_details:
            index_sd = wtg_details.index(tca_section_val)
            tca_checkpoint_val = wtg_details[index_sd]['name'] 
            tca_section_val = wtg_details[index_sd]['tca_section']
            tca_subsection_val = wtg_details[index_sd]['tca_subsection']
            wtg_check_point_val = wtg_details[index_sd]['wtg_check_point']
            existing_record = frappe.db.get_value("TCA Data", filters={"tca_activity": self.name ,"check_point":tca_checkpoint_val,"wtg_name":self.wtg_name,"section_name":tca_section_val}, fieldname="name")
            
            if not existing_record:
                td_entry = frappe.new_doc("TCA Data")
                td_entry.tca_activity = self.name
                td_entry.wtg_name = self.wtg_name
                td_entry.section_name = tca_section_val
                td_entry.subsection_name = tca_subsection_val
                td_entry.check_point = tca_checkpoint_val
                td_entry.wtg_check_point = wtg_check_point_val                              
                td_entry.save()
            else:
                frappe.msgprint(frappe._("TCA Data Aleardy Created"))
                return existing_record
        frappe.msgprint(frappe._("Multiple Records added!"))
