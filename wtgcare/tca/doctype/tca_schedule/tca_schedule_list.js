
frappe.listview_settings['TCA Schedule'] = {
hide_name_column: true,	
onload: function(listview) {
        frappe.route_options = {"name": ["!=", "Select Schedule"]};
	},
refresh: function(listview) {
        frappe.route_options = {"name": ["!=", "Select Schedule"]};
	}
}
