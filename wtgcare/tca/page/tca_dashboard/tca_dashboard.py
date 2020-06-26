# -*- coding: utf-8 -*-
# Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from datetime import date
from datetime import timedelta
import time
import datetime
from frappe.model.document import Document

class wtgdashboard(Document):
	pass

@frappe.whitelist(allow_guest=False)
def get_data(tca_schedule=None,tca_avtivity=None):
    #frappe.msgprint(tca_schedule)
    #frappe.msgprint(tca_avtivity)
    #if tca_avtivity != None:
    #frappe.msgprint("ok.......")
       #frappe.msgprint(tca_avtivity)
    vars = frappe.db.sql("""Select `tabTCA Data`.severity,(count(`tabTCA Data`.severity)/(select count(*) from `tabTCA Data`)*100) , count(`tabTCA Data`.severity) "AVG" from `tabTCA Data` Join `tabTCA Activity` ON `tabTCA Data`.tca_activity = `tabTCA Activity`.name Join `tabTCA Schedule` ON `tabTCA Activity`.tca_schedule = `tabTCA Schedule`.name where `tabTCA Data`.severity !='' and `tabTCA Data`.tca_activity = %s  and `tabTCA Activity`.tca_schedule = %s Group By severity""",(tca_activity,tca_schedule))
    frappe.msgprint("Activity Available....")
    return vars

    #else:
    #    vars = frappe.db.sql("""Select `tabTCA Data`.severity,(count(`tabTCA Data`.severity)/(select count(*) from `tabTCA Data`)*100) , count(`tabTCA Data`.severity) "AVG" from `tabTCA Data` Join `tabTCA Activity` ON `tabTCA Data`.tca_activity = `tabTCA Activity`.name Join `tabTCA Schedule` ON `tabTCA Activity`.tca_schedule = `tabTCA Schedule`.name where `tabTCA Data`.severity !='' and `tabTCA Activity`.tca_schedule = %s  Group By severity""",(tca_schedule))
    #    frappe.msgprint("Activity Not Available....")
    #    return vars
    
@frappe.whitelist(allow_guest=False)
def get_data_section(activity):
    vars = frappe.db.sql("""Select section_name,(count(section_name)/(select count(*) from `tabTCA Data`)*100) , count(section_name) "AVG" from `tabTCA Data` where `tca_activity` = %s Group By section_name""",(activity))
    return vars

@frappe.whitelist(allow_guest=False)
def get_data_state(activity):
    vars = frappe.db.sql("""Select `tabWTG Check Point`.issue_category,(count(`tabWTG Check Point`.issue_category)/(select count(*) from `tabWTG Check Point` JOIN `tabTCA Data` ON `tabTCA Data`.wtg_check_point = `tabWTG Check Point`.name)*100) , count(`tabWTG Check Point`.issue_category) "AVG" from `tabTCA Data` JOIN `tabWTG Check Point` ON `tabTCA Data`.wtg_check_point = `tabWTG Check Point`.name where `tabTCA Data`.`tca_activity` = %s Group By `tabWTG Check Point`.issue_category""",(activity))
    return vars
