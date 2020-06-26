
frappe.listview_settings['Service Report'] = {
	hide_name_column: true,
"filters": [
		{
			"fieldname":"site",
			"label": __("Site"),
			"fieldtype": "Link",
			"width": "80",
			"reqd": 1,
                        "option":"Site"
		},
],


onload: function(listview) {
//var pm_activity;
 
var branch;
var user;
frappe.call({
	method:"frappe.client.get_list",
	args:{
		doctype:"User",
                filters: [["name", "=", frappe.user]],
	        fields: ["username"]
	},
       async:false,
	callback: function(r1) {  
	if (r1.message) {
		$.each(r1.message, function(i,d1) {
                      user=d1.username;
		});
		}
	}
});
frappe.call({
	method:"frappe.client.get_list",
	args:{
		doctype:"Employee",
                filters: [["name", "=",user]],
	        fields: ["branch"]
	},
       async:false,
	callback: function(r1) {  
	if (r1.message) {
		$.each(r1.message, function(i,d1) {
                      branch=d1.branch;
		});
		}
	}
});

if (branch == "MP_Tata")
{
frappe.route_options = {"site_name": ["in", ["Lahori-TATA","Lahori-LG"]]};
}
else if (branch == "Khandke_Tata")
{
frappe.route_options = {"site_name": ["in", ["Agadgaon","Ranjani",]]};
}

}
	
}

