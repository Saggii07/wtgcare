# -*- coding: utf-8 -*-
# Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class TCAData(Document):
	pass

@frappe.whitelist(allow_guest=False)
def get_wtg_list(tca_activity):
    vars = frappe.db.sql("""Select wtg_code from `tabTCA List Table` WHERE  `parent`=%s""",(tca_activity))
    return vars


def get_wtg_check_point(check_point):
    vars = frappe.db.sql("""Select check_point_name1 from `tabWTG Check Point Table` WHERE  `parent`=%s""",(check_point))
    #vars = frappe.db.sql("""Select check_point_name1 from `tabWTG Check Point Table`""")
    return vars



def get_wtg_model_list(wtg_code):
    vars = frappe.db.sql("""Select wtg_model from `tabTCA Master` WHERE  `wtg_code`=%s""",(wtg_code))
    return vars



def get_tca_section(wtg_model):
    vars = frappe.db.sql("""Select parent from `tabWTG Section Table' table` WHERE  `wtg_model`=%s""",(wtg_model))
    return vars



def get_tca_check_point_list(tca_section):
    vars = frappe.db.sql("""Select name from `tabTCA Check Point` WHERE  `tca_section`=%s""",(tca_section))
    return vars



def get_all_data(name):
    vars = frappe.db.sql("""Select * from `tabTCA Data`  WHERE  `name`=%s""",(name))
    return vars


