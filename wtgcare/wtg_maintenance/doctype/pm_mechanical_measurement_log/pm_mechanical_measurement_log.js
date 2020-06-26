// Copyright (c) 2019, powercon and contributors
// For license information, please see license.txt

//frappe.ui.form.on('PM Mechanical Measurement Log', {
	// refresh: function(frm) {

	// }
//});

frappe.ui.form.on('PM Mechanical Measurement Log', {
	onload: function(frm) {
		frm.set_query('pm_activity', function() {
			return {
				filters: [
					['pm_type', '=', 'Mechanical']
				]
			}
		});
}

});



frappe.ui.form.on('PM Mechanical Measurement Log', {
    refresh: function(frm) {
    cur_frm.add_custom_button(__('Checking Report'), function(){
            frappe.set_route("Form", "PM Activity", frm.doc.pm_activity)
    },).addClass("btn-primary");
  }
});



frappe.ui.form.on("PM Mechanical Measurement Log", "after_save", function(frm) {
var docname = frm.doc.pm_activity;
//alert(frm.doc.creation);
frappe.call({ "method": "frappe.client.set_value", "args": { "doctype": "PM Activity", "name": docname, "fieldname": "is_measurement_log_filled", "value": 1} }); 
frappe.call({ "method": "frappe.client.set_value", "args": { "doctype": "PM Activity", "name": docname, "fieldname": "status", "value": "Ongoing"} })
//frappe.call({ "method": "frappe.client.set_value", "args": { "doctype": "PM Activity", "name": docname, "fieldname": "start_date", "value": frm.doc.creation } }); 
});



frappe.ui.form.on('PM Mechanical Measurement Log', {
	onload: function(frm) {
if (frappe.user.has_role("FAPO") == true || frappe.user.has_role("Area Incharge") == true)
{
//alert("ok....");
frm.print_doc();
}
else
{
//alert("None...");
}
}
});
