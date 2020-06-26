frappe.listview_settings["WTG Status Log"] = {
	hide_name_column: true,
	onload: function(listview) {
//alert(frappe.user);
var branch;
//var myList1 = new Array();  
//var myList2 = new Array(); 
//if (frappe.user.has_role("Site Material Incharge") == true)
//{
//var val1;
//var val2;
//alert(frappe.user);
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

