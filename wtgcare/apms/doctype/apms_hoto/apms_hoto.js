// Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('APMS HOTO', {
	refresh: function(frm) {

//alert(frm.doc.workflow_state);



var date1 = frappe.datetime.now_datetime();
//var date2  = frappe.datetime.now_datetime('YYYY-MM-DD hh:mm:ss');
//alert(date1);

//var date2 = frappe.utils.formatdate(frm.doc.get_formatted(date1), "dd/MMM/yyyy");
//alert(date2);
if (frm.doc.workflow_state == "Handover Accepted" || frm.doc.workflow_state == "Handover Rejected")
{

//alert("ok.....");
cur_frm.set_value("takeover_date",date1);
cur_frm.refresh_field('takeover_date');

	
}
}
});

var employee1;

frappe.ui.form.on("APMS HOTO", {
         onload: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];

//alert("ok emp");
var Current_User = user;

frappe.call({
	method:"frappe.client.get",
	args: {
		doctype:"User",
		filters: {'email': Current_User
		},
	},
  async:false, 
	callback: function(r) {
	employee1 =r.message["username"];

	}
})
console.log(employee1);
cur_frm.set_value("handover_from",d.handover_from);

}

//alert("ok.....");

});



frappe.ui.form.on("APMS HOTO", {
         refresh: function(frm, cdt, cdn) {
//alert("ok.....");
//alert(employee1);
//cur_frm.set_value("handover_from",employee1);
if (frm.doc.handover_from == employee1)
{
//alert("you can not accept request");
$('.user-action').hide();
}
else
{
$('.user-action').show();
}

}
});


frappe.ui.form.on("APMS HOTO", {
         handover_type: function(frm, cdt, cdn) {
//alert("ok.....");
//alert(employee1);
cur_frm.set_value("handover_from",employee1);

}
});

frappe.ui.form.on("APMS HOTO", {
         refresh: function(frm, cdt, cdn) {
//alert("ok.....");
//cur_frm.set_value("handover_from",employee1);

if (frm.doc.handover_to == employee1)
{
//alert("you can not accept request");
$('.user-action').show();
}
else
{
$('.user-action').hide();
}
}
});


