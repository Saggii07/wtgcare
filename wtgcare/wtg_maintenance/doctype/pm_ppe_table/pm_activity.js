// Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

//frappe.ui.form.on('PM Activity', {
//	refresh: function(frm) {

//	}
//});

frappe.ui.form.on('PM Activity', 'ppe_used', function(frm) {
frappe.model.with_doc("'PM Activity'", frm.doc.ppe_used, function() {
var tableppeList= frappe.model.get_doc("PM PPE Details", frm.doc.pm_ppe_details)
$.each(tableppeList.pm_ppe_details, function(index, row){
d = frm.add_child("pm_ppe_details");
d.ppe_name = row.ppe_name;
frm.refresh_field("pm_ppe_details");
});
})
});


