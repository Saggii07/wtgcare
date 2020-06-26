// Copyright (c) 2019, powercon and contributors
// For license information, please see license.txt

frappe.ui.form.on('PM Work Remaining List', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('PM Work Remaining List', {
	onload: function(frm) {
if (frappe.user.has_role("FAPO") == true || frappe.user.has_role("Area Incharge") == true)
{
//alert("ok....");
//frm.print_doc();
}
else
{
//alert("None...");
}
}
});



frappe.ui.form.on('PM Work Remaining List', {
    refresh: function(frm) {
if (frappe.user.has_role("FAPO") == true || frappe.user.has_role("Area Incharge") == true || frappe.user.has_role("PM Lead") == true)
{
      cur_frm.add_custom_button(__('Checking Report'), function(){
                                 frappe.set_route("Form", "PM Activity", frm.doc.pm_activity)
		 }).addClass("btn-primary");
}
}
});
