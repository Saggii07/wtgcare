frappe.query_reports["Item Wise Material Consumption"] = {
	"filters": [
		
		{
			"fieldname": "customer",
			"label": __("Customer"),
			"fieldtype": "Link",
			"width": "80",
			"options": "Customer"
		},
                {
			"fieldname": "site",
			"label": __("Wind Farm"),
			"fieldtype": "Link",
			"width": "80",
			"options": "Site"
		},
		{
			"fieldname": "service_nature",
			"label": __("Service Type"),
			"fieldtype": "Select",
			"width": "80",
			"options": "PM\nRBM\nEBM\nCRUST\nBOP\nTCA/R\nFM"
		},
		
		
                {
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			"width": "80",
			"reqd": 1,
			"default": frappe.sys_defaults.year_start_date,
		},
		{
			"fieldname":"to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			"width": "80",
			"reqd": 1,
			"default": frappe.datetime.get_today()
		},
	]
}

//$( document ).ready(function() {
//$('input[data-fieldtype="Link"]').select(function() {
//$('input[data-fieldtype="Link"] ul li:first').before('<li aria-selected="true"><a><p><strong>All</strong></p></a></li>');
//});
//});

