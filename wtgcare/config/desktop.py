# coding=utf-8

from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		# Modules
		{
			"module_name": "WTG Core",
			"category": "Modules",
			"label": _("WTG Core"),
			"color": "#3498db",
			"icon": "octicon octicon-repo",
			"type": "module",
			"disable_after_onboard": 1,
			"description": "It Contains all dependent Doctypes.",
			"onboard_present": 1
		},
		{

			"module_name": "APMS",
			"category": "Modules",
			"label": _("APMS"),
			"color": "#3498db",
			"icon": "octicon octicon-repo",
			"type": "module",
			"description": "Asset Performance Management System."
			
		},
		{
			"module_name": "TCA",
			"category": "Modules",
			"label": _("TCA"),
			"color": "#1abc9c",
			"icon": "fa fa-check-square-o",
			"type": "module",
			"description": "Technical Condition Audit. Data collection & reporting"		
		},
		{
			"module_name": "DGR",
			"category": "Modules",
			"label": _("DGR"),
			"color": "#3498db",
			"icon": "octicon octicon-repo",
			"type": "module",
			"description": "Daily Generation Report module."
		},
		{
			"module_name": "WTG Maintenance",
			"category": "Modules",
			"label": _("WTG Maintenance"),
			"color": "#3498db",
			"icon": "octicon octicon-repo",
			"type": "module",
			"description": "WTG Maintenance."
		},
           
	]

