
frappe.listview_settings['TCA Activity'] = {
hide_name_column: true,	
onload: function(listview) {
frappe.route_options = {"tca_schedule": ["=", "Select Schedule"],"name": ["!=", "Select Activity"]};
	},
refresh: function(listview) {
	frappe.route_options = {"tca_schedule": ["=", "Select Schedule"],"name": ["!=", "Select Activity"]};
	}
}
