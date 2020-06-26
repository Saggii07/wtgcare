frappe.query_reports["TCA WTG Report"] = {
	"filters": [
		
		{
			"fieldname": "tca_schedule",
			"label": __("TCA Schedule"),
			"fieldtype": "Link",
			"width": "160",
			"options": "TCA Schedule",
                        "reqd":1 ,
                        "default":"Select Schedule",
		},
                {
			"fieldname": "tca_activity",
			"label": __("TCA Activity"),
			"fieldtype": "Link",
			"width": "80",
			"options": "TCA Activity",
                        "reqd":1 
		},
	]
}

//$( document ).ready(function() {
//$('input[data-fieldtype="Link"]').select(function() {
//$('input[data-fieldtype="Link"] ul li:first').before('<li aria-selected="true"><a><p><strong>All</strong></p></a></li>');
//});
//});

