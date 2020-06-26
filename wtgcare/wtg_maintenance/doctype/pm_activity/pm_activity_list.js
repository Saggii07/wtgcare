
//frappe.listview_settings['PM Activity'] = {
//	hide_name_column: true,	
//	}


var pm_activity;

frappe.listview_settings['PM Activity'] = {
hide_name_column: true,	
onload: function(listview) {
var pm_activity;
 

if (frappe.user.has_role("PM Lead") === true)
{
frappe.route_options = {"fiscal_year": ["=", "2021"],"workflow_state": ["=", "Pending for Submission"]};
}
else if (frappe.user.has_role("Site Material Incharge") === true)
{
frappe.route_options = {"fiscal_year": ["=", "2021"],"workflow_state": ["=", "Pending for Material Review"]};  
}
else if (frappe.user.has_role("Area Incharge") === true)
{
frappe.route_options = {"fiscal_year": ["=", "2021"],"workflow_state": ["=", "Pending for TSO Aproval"]};
}
else if (frappe.user.has_role("FAPO") === true)
{
frappe.route_options = {"fiscal_year": ["=", "2021"],"workflow_state": ["=", "Pending for FAPO Aproval"]};
}

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
frappe.route_options = {"wtg_model": ["=", "RD100"]};
}
else if (branch == "Khandke_Tata")
{
frappe.route_options = {"wtg_model": ["=", "E53"]};
}

}
}
