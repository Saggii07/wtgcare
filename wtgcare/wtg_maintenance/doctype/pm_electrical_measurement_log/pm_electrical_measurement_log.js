// Copyright (c) 2019, powercon and contributors
// For license information, please see license.txt

//frappe.ui.form.on('PM Electrical Measurement Log', {
	// refresh: function(frm) {

	// }
//});





frappe.ui.form.on('PM Electrical Measurement Log', {
    refresh: function(frm) {
    cur_frm.add_custom_button(__('Checking Report'), function(){
            frappe.set_route("Form", "PM Activity", frm.doc.pm_activity)
    },).addClass("btn-primary");
  }
});


frappe.ui.form.on('PM Electrical Measurement Log', {
	onload: function(frm) {
		//frm.print_doc("PM Electrical Measurement Log");
		frm.set_query('pm_activity', function() {
			return {
				filters: [
					['pm_type', '=', 'Electrical'],
                                        ['PM Activity', 'status', '=', 'Service Log Assigned'],
				]
			}
		});
}

});


frappe.ui.form.on("PM Electrical Measurement Log", "after_save", function(frm) {
var docname = frm.doc.pm_activity;
//alert(frm.doc.creation);
frappe.call({ "method": "frappe.client.set_value", "args": { "doctype": "PM Activity", "name": docname, "fieldname": "is_measurement_log_filled", "value": 1} }); 
frappe.call({ "method": "frappe.client.set_value", "args": { "doctype": "PM Activity", "name": docname, "fieldname": "status", "value": "Ongoing"} });
//frappe.call({ "method": "frappe.client.set_value", "args": { "doctype": "PM Activity", "name": docname, "fieldname": "start_date", "value": frm.doc.creation } }); 
//frappe.call({ "method": "frappe.client.set_value", "args": { "doctype": "PM Schedule Table", "pm_activity": docname, "fieldname": "measurement_log", "value": frm.doc.name} });
});



frappe.ui.form.on('PM Electrical Measurement Log', {
	onload: function(frm) {
//alert(frappe.session.user);
//alert(frappe.user.has_role("FAPO"));
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

