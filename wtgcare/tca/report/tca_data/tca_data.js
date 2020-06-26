frappe.query_reports["TCA Data"] = {
	"filters": [
		{
			"fieldname": "tca_activity",
			"label": __("TCA Activity"),
			"fieldtype": "Link",
			"width": "160",
			"options": "TCA Activity",
                        "reqd":1 ,
                        "default":"Select Activity",
		}
	]
}

//$( document ).ready(function() {
//$('input[data-fieldtype="Link"]').select(function() {
//$('input[data-fieldtype="Link"] ul li:first').before('<li aria-selected="true"><a><p><strong>All</strong></p></a></li>');
//});
//});

