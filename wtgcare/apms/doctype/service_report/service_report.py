# -*- coding: utf-8 -*-
# Copyright (c) 2019, powercon and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from erpnext.stock.stock_ledger import get_previous_sle, NegativeStockError, get_valuation_rate
from frappe.utils import cstr, cint, flt, comma_or, getdate, nowdate, formatdate, format_time
from datetime import date,datetime

today = date.today()
now = datetime.now()
class ServiceReport(Document):
	#pass
	def set_actual_qty(self):
		allow_negative_stock = cint(frappe.db.get_value("Stock Settings", None, "allow_negative_stock"))

		for d in self.get('material__consumtion'):
			previous_sle = get_previous_sle({
				"item_code": d.item_code,
				"warehouse": d.from_warehouse,
				"posting_date": today,
				"posting_time": now.strftime("%H:%M:%S")
			})
      
			# get actual stock at source warehouse
			actual_qty = previous_sle.get("qty_after_transaction") or 0
			serial_no = previous_sle.get("serial_no") or 0
			
			#frappe.msgprint(previous_sle.get("qty_after_transaction"))
			# validate qty during submit
			#frappe.msgprint(d.serial_number);
			#frappe.msgprint(serial_no);
			if d.from_warehouse and not allow_negative_stock and actual_qty < d.quantity :
				frappe.throw(("Row {0}: Quantity not available for {4} in warehouse {1} at posting time of the entry ({2} {3})").format(d.idx,
					frappe.bold(d.from_warehouse), formatdate(today),
					format_time(now), frappe.bold(d.item_code))
					+ '<br><br>' + ("Available quantity is {0}, you need {1}").format(frappe.bold(actual_qty),
						frappe.bold(d.quantity)),
					NegativeStockError, title=('Insufficient Stock'))


	def before_save(self):
		#frappe.msgprint("ok....")
		self.set_actual_qty()
