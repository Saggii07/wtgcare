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
def get_data(tca_activity=None,tca_schedule=None):
    if tca_activity is None:
        vars = frappe.db.sql("""Select severity,(count(severity)/(select count(*) from `tabTCA Data`)*100) , count(severity) "AVG" from `tabTCA Data` JOIN `tabTCA Activity` ON `tabTCA Data`.tca_activity=`tabTCA Activity`.name JOIN `tabTCA Schedule` ON `tabTCA Activity`.tca_schedule = `tabTCA Schedule`.name where severity !='' and `tabTCA Activity`.tca_schedule = %s Group By severity """,(tca_schedule))
       
        return vars
    else:
        vars = frappe.db.sql("""Select severity,(count(severity)/(select count(*) from `tabTCA Data`)*100) , count(severity) "AVG" from `tabTCA Data` JOIN `tabTCA Activity` ON `tabTCA Data`.tca_activity=`tabTCA Activity`.name JOIN `tabTCA Schedule` ON `tabTCA Activity`.tca_schedule = `tabTCA Schedule`.name where severity !='' and `tabTCA Data`.tca_activity= %s and `tabTCA Activity`.tca_schedule = %s  Group By severity  """,(tca_activity,tca_schedule))
        return vars


@frappe.whitelist(allow_guest=False)
def get_data_section(tca_activity=None,tca_schedule=None):
    if tca_activity is None:
        vars = frappe.db.sql("""Select section_name,(count(section_name)/(select count(*) from `tabTCA Data`)*100) , count(section_name) "AVG" from `tabTCA Data` JOIN `tabTCA Activity` ON `tabTCA Data`.tca_activity=`tabTCA Activity`.name JOIN `tabTCA Schedule` ON `tabTCA Activity`.tca_schedule = `tabTCA Schedule`.name where `tabTCA Activity`.tca_schedule = %s Group By section_name""",(tca_schedule))
        return vars
    else:
        vars = frappe.db.sql("""Select section_name,(count(section_name)/(select count(*) from `tabTCA Data`)*100) , count(section_name) "AVG" from `tabTCA Data` JOIN `tabTCA Activity` ON `tabTCA Data`.tca_activity=`tabTCA Activity`.name JOIN `tabTCA Schedule` ON `tabTCA Activity`.tca_schedule = `tabTCA Schedule`.name where `tabTCA Data`.tca_activity = %s and `tabTCA Activity`.tca_schedule = %s Group By section_name""",(tca_activity,tca_schedule))
        return vars
       

@frappe.whitelist(allow_guest=False)
def get_data_state(tca_activity=None,tca_schedule=None):
    if tca_activity is None:
        vars = frappe.db.sql("""Select `tabWTG Check Point`.issue_category,(count(`tabWTG Check Point`.issue_category)/(select count(*) from  `tabTCA Data` JOIN `tabWTG Check Point` ON `tabTCA Data`.wtg_check_point = `tabWTG Check Point`.name)*100) , count(`tabWTG Check Point`.issue_category) "AVG" from `tabTCA Data` JOIN `tabWTG Check Point` ON `tabTCA Data`.wtg_check_point = `tabWTG Check Point`.name JOIN `tabTCA Activity` ON `tabTCA Data`.tca_activity=`tabTCA Activity`.name JOIN `tabTCA Schedule` ON `tabTCA Activity`.tca_schedule = `tabTCA Schedule`.name where `tabTCA Activity`.tca_schedule = %s Group By `tabWTG Check Point`.issue_category""",(tca_schedule))
        return vars
    else:
        vars = frappe.db.sql("""Select `tabWTG Check Point`.issue_category,(count(`tabWTG Check Point`.issue_category)/(select count(*) from `tabTCA Data` JOIN `tabWTG Check Point`  ON `tabTCA Data`.wtg_check_point = `tabWTG Check Point`.name)*100) , count(`tabWTG Check Point`.issue_category) "AVG" from `tabTCA Data` JOIN `tabWTG Check Point` ON `tabTCA Data`.wtg_check_point = `tabWTG Check Point`.name JOIN `tabTCA Activity` ON `tabTCA Data`.tca_activity =`tabTCA Activity`.name JOIN `tabTCA Schedule` ON `tabTCA Activity`.tca_schedule = `tabTCA Schedule`.name where `tabTCA Data`.tca_activity = %s and `tabTCA Activity`.tca_schedule = %s  Group By `tabWTG Check Point`.issue_category""",(tca_activity,tca_schedule))
        return vars


