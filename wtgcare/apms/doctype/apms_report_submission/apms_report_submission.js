// Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('APMS Report Submission', {
	analysis_type: function(frm, cdt, cdn) {

                           var d1 = locals[cdt][cdn];
                           //alert(d1.analysis_type);
                           var x = new Date();
                           var y = x.getFullYear().toString();
                           var m = (x.getMonth()+1).toString();
                           var d = x.getDate().toString();
                           var date1 = d+"-"+m+"-"+y;
                          
                          var name1;
                         if (d1.analysis_type ==="Power Curve Analysis")  
                         {
                            name1 = "APMS" +"-PCA-"+date1;
                         
                         }
                         else if (d1.analysis_type === "Breakdown Analysis")
                         {
                             name1 = "APMS" +"-BA-"+date1;
                             
                         }
                          else if (d1.analysis_type === "Warning Analysis")
                          {
                             name1 ="APMS" +"-WA-"+date1;
                             
                           }
                              //alert(name1);
                           cur_frm.set_value("name1",name1);

	}
});


var employee1;
frappe.ui.form.on("APMS Report Submission", {
         afters_save: function(frm, cdt, cdn) {
        
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
alert(employee1);
cur_frm.set_value("created_by",employee1);
//console.log(employee1);
}
});

var employee1;
frappe.ui.form.on("APMS Report Submission", {
         onload: function(frm, cdt, cdn) {
  var d1 = locals[cdt][cdn];

cur_frm.set_value("created_by",d1.created_by);
//console.log(employee1);
}
});






















