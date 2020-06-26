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
					"label": _("TCA Schedule"),
					"name": "TCA Schedule",
					"icon": "fa fa-sitemap",
					"description": _("TCA Schedule."),
					"onboard": 1,
				},
                            
				{
					"type": "doctype",
					"name": "TCA Activity",
					"description": _("TCA Activity."),
					"onboard": 1,
                                        "dependencies": ["TCA List Table"],
				},
				{
					"type": "doctype",
                                        "label": _("TCA Data Entry"),
					"name": "TCA Data",
					"description": _("TCA Data"),
					"onboard": 1,
                                        "dependencies": ["TCA Activity"],
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
					"name": "TCA Data",
					"doctype": "TCA Data",
					"onboard": 1,
                    "dependencies": ["WTG Check Point"],
				},
				{
					"type": "report",
					"is_query_report": True,
					"name": "TCA DATA-Impact Category",
					"doctype": "TCA Data",
					"onboard": 1,
                     "dependencies": ["WTG Check Point"],
				},
                {
					"type": "report",
					"is_query_report": True,
					"name": "TCA DATA-Issue Category",
					"doctype": "TCA Data",
					"onboard": 1,
                    "dependencies": ["WTG Check Point"],
				},
			]
		},
		{
			"label": _("Settings"),
			"icon": "fa fa-cog",
			"items": [
				{
					"type": "doctype",
					"label": _("TCA Check Point"),
					"name": "TCA Check Point",
					"icon": "fa fa-sitemap",
					"description": _("TCA Check Point."),
					"onboard": 1,
                    "dependencies": ["TCA Section"],
				},
				{
					"type": "doctype",
					"label": _("TCA Section"),
					"name": "TCA Section",
					"icon": "fa fa-sitemap",
					"description": _("TCA Section."),
					"onboard": 1,
                                        "dependencies": ["WTG Model"],
				},
                                {
					"type": "doctype",
					"label": _("TCA Subsection"),
					"name": "TCA Subsection",
					"icon": "fa fa-sitemap",
					"description": _("TCA Subsection."),
					"onboard": 1,
                                        "dependencies": ["WTG Subsection"],
				},
				{
					"type": "doctype",
					"label": _("WTG Check Point"),
					"name": "WTG Check Point",
					"icon": "fa fa-sitemap",
					"description": _("WTG Check Point."),
					"onboard": 1,
				},
                {
					"type": "doctype",
					"label": _("WTG Section"),
					"name": "WTG Section",
					"icon": "fa fa-sitemap",
					"description": _("WTG Section."),
					"onboard": 1,
				},
				{
					"type": "doctype",
					"label": _("WTG Subsection"),
					"name": "WTG Subsection",
					"icon": "fa fa-sitemap",
					"description": _("WTG Subsection."),
					"onboard": 1,
				},
                                
			]
		}
	]
	
