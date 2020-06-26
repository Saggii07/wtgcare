from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		
		{
			"label": _("Settings"),
			"icon": "fa fa-cog",
			"items": [
				{
					"type": "doctype",
					"label": _("WTG Master"),
					"name": "WTG Master",
					"icon": "fa fa-sitemap",
					"description": _("WTG Master."),
					"onboard": 1,
                                        "dependencies": ["WTG Model"],
				},
				{
					"type": "doctype",
					"label": _("WTG Model"),
					"name": "WTG Model",
					"icon": "fa fa-sitemap",
					"description": _("WTG Model."),
					"onboard": 1,
                                        "dependencies": ["WTG Manufacturer"],
				},
                                {
					"type": "doctype",
					"label": _("WTG Manufacturer"),
					"name": "WTG Manufacturer",
					"icon": "fa fa-sitemap",
					"description": _("WTG Manufacturer."),
					"onboard": 1,
				},
				{
					"type": "doctype",
					"label": _("Cluster"),
					"name": "Cluster",
					"icon": "fa fa-sitemap",
					"description": _("Cluster."),
					"onboard": 1,
                                        "dependencies": ["Site"],
				},
                                {
                                        "type": "doctype",
					"label": _("Site"),
					"name": "Site",
					"icon": "fa fa-sitemap",
					"description": _("Site."),
					"onboard": 1,
					
				},
				{
                                        "type": "doctype",
					"label": _("Area"),
					"name": "Area",
					"icon": "fa fa-sitemap",
					"description": _("Area."),
					"onboard": 1,
                                        "dependencies": ["State"],       
					
				},
                                { 
				        "type": "doctype",
					"label": _("State"),
					"name": "State",
					"icon": "fa fa-sitemap",
					"description": _("State."),
					"onboard": 1,	
				},
			]
		}
	]
	
