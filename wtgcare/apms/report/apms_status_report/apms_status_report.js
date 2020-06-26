// Copyright (c) 2016, powercon and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["APMS Status Report"] = {
	"filters": [
		
		{
			"fieldname": "start_date",
			"label": __("Start Date"),
			"fieldtype": "Date",
			"width": "160",
                        "reqd":1 
		},
                {
			"fieldname": "end_date",
			"label": __("End Date"),
			"fieldtype": "Date",
			"width": "160",
                        "reqd":1 
		},
	]
};




