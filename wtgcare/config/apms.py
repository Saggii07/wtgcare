from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Transactions"),
			"icon": "fa fa-star",
			"items": [
				{
					"type": "doctype",
					"name": "WTG Status Log",
					"description": _("WTG Status Log."),
					"onboard": 1,
                                        "dependencies": ["WTG Feeder"],
				},
				{
					"type": "doctype",
					"name": "Service Report",
                                        "lables":_("WTG Service Log"),
					"description": _("Service report"),
					"onboard": 1,
                                        "dependencies": ["WTG Status Log"],
				},
                                {
					"type": "doctype",
					"name": "APMS HOTO",
					"description": _("APMS HOTO."),
					"onboard": 1,
				},
                                {
					"type": "doctype",
					"name": "APMS Report Submission",
					"description": _("APMS Report Submission."),
					"onboard": 1,
				},  
				{
					"type": "doctype",
					"name": "APMS Report Observations",
                                        "lables":_("APMS Report Observations"),
					"description": _("APMS Report Observations"),
					"onboard": 1,
                                        "dependencies": ["APMS Report Submission"],
				},
				{
					"type": "doctype",
					"name": "Quick Stock Search",
                                        "lables":_("Quick Stock Search"),
					"onboard": 1,
				},     
                               
			]
		},
		{
			"label": _("Reports"),
			"icon": "fa fa-list",
			"items": [
				{
					"type": "report",
					"is_query_report": True,
					"name": "WTG Status Log",
					"doctype": "WTG Status Log",
					"onboard": 1,
                                        #"dependencies": ["WTG Check Point"],
				},
				{
					"type": "report",
					"is_query_report": True,
					"name": "WTG Material Consumption",
					"doctype": "Service Report",
					"onboard": 1,
                                      #  "dependencies": ["WTG Check Point"],
				},
                                {
					"type": "report",
					"is_query_report": True,
					"name": "WTG Wise Material Consumption",
					"doctype": "Service Report",
					"onboard": 1,
                                      #  "dependencies": ["WTG Check Point"],
				},
                                {
					"type": "report",
					"is_query_report": True,
					"name": "Item Wise Material Consumption",
					"doctype": "Service Report",
					"onboard": 1,
                                      #  "dependencies": ["WTG Check Point"],
				},
			]
		},
                {
			"label": _("Dashboard"),
			"items": [
				{
					"type": "page",
					"name": "apms-dashboard",
                                        "icon": "fa fa-bar-chart",
                                        "label": _("APMS Dashboard"),
				},

		         	]
		},
		{
			"label": _("Settings"),
			"icon": "fa fa-cog",
			"items": [
				{
					"type": "doctype",
					"label": _("WTG Status"),
					"name": "WTG Status",
					"icon": "fa fa-sitemap",
					"description": _("WTG Status."),
					"onboard": 1,
                                    
				},
				{
					"type": "doctype",
					"label": _("WTG Feeder"),
					"name": "WTG Feeder",
					"icon": "fa fa-sitemap",
					"description": _("WTG Feeder."),
					"onboard": 1,
                                       # "dependencies": ["USS"],
				},
                                {
					"type": "doctype",
					"label": _("USS"),
					"name": "USS",
					"icon": "fa fa-sitemap",
					"description": _("USS."),
					"onboard": 1,
				},
                            
			]
		}
	]
	
