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
					"name": "PM Schedule",
					"description": _("PM Schedule."),
					"onboard": 1,
                                       # "dependencies": ["PM Check Point"],
				},
				{
					"type": "doctype",
					"name": "PM Activity",
					"description": _("PM Activity."),
					"onboard": 1,
                                       # "dependencies": ["PM Check Point"],
				},
				#{
				#	"type": "doctype",
				#	"name": "Service Report",
				#	"description": _("Service Report."),
				#	"onboard": 1,
                                #        "label": _("PM Service Order"),
                                       # "dependencies": ["PM Check Point"],
				#},
				{
					"type": "doctype",
					"name": "Service Report",
					"description": _("PM Service Order."),
					"onboard": 1,
                                        "label": _("PM Service Order"),
                                       # "dependencies": ["PM Check Point"],
				},
				#{
				#	"type": "doctype",
				#	"name": "PM Work Remaining List",
				#	"description": _("PM Work Remaining List."),
				#	"onboard": 1,
                                #        "label": _("PM Work Remaining List"),
                                #       # "dependencies": ["PM Check Point"],
				#},
				{
					"type": "doctype",
					"name": "Quick Stock Search",
                                        "lables":_("Quick Stock Search"),
					"onboard": 1,
				},  
				#{
				#	"type": "doctype",
				#	"name": "PM Electrical Measurement Log",
				#	"description": _("PM Electrical Measurement Log."),
				#	"onboard": 1,
                                #        "dependencies": ["PM Activity"],
				#},
				#{
				#	"type": "doctype",
				#	"name": "PM Mechanical Measurement Log",
				#	"description": _("PM Mechanical Measurement Log."),
				#	"onboard": 1,
                                #        "dependencies": ["PM Activity"],
				#},
				#{
				#	"type": "doctype",
				#	"name": "PM Work Remaining List",
				#	"description": _("PM Work Remaining List"),
				#	"onboard": 1,
                                #        "dependencies": ["PM Activity"],
				#},
			]
		},
		#{
		#	"label": _("Reports"),
		#	"icon": "fa fa-list",
		#	"items": [
		#		{
				#	"type": "report",
				#	"is_query_report": True,
				#	"name": "TCA Data",
				#	"doctype": "TCA Data",
				#	"onboard": 1,
                                #        "dependencies": ["WTG Check Point"],
		#		},
		#		{
				#	"type": "report",
				#	"is_query_report": True,
				#	"name": "TCA Data-Impact Category",
				#	"doctype": "TCA Data",
				#	"onboard": 1,
                                #        "dependencies": ["WTG Check Point"],
		#		},
                #               {
				#	"type": "report",
				#	"is_query_report": True,
				#	"name": "TCA Data-Issue Category",
				#	"doctype": "TCA Data",
				#	"onboard": 1,
                                #        "dependencies": ["WTG Check Point"],
		#		},
		#	]
		#},
		{
			"label": _("Settings"),
			"icon": "fa fa-cog",
			"items": [
				{
					"type": "doctype",
					"label": _("PM Check Point"),
					"name": "PM Check Point",
					"icon": "fa fa-sitemap",
					"description": _("PM Check Point."),
					"onboard": 1,
				},
				{
					"type": "doctype",
					"label": _("PM PPE Details"),
					"name": "PM PPE Details",
					"icon": "fa fa-sitemap",
					"description": _("PM PPE Details."),
					"onboard": 1,
				},
                                {
					"type": "doctype",
					"label": _("PM Type Master"),
					"name": "PM Type Master",
					"icon": "fa fa-sitemap",
					"description": _("PM Type Master."),
					"onboard": 1,
				},
				{
					"type": "doctype",
					"name": "PM Material",
					"description": _("PM Material Details Per WTG."),
					"onboard": 1,
                                        "label": _("PM Material Details Per WTG"),
                                       # "dependencies": ["PM Check Point"],
				},
				
                            
			]
		}
	]
	
