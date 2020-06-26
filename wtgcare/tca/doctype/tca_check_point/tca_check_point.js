// Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt



frappe.ui.form.on("TCA Check Point", "tca_section", function(frm){
    cur_frm.set_query("tca_subsection", function(){
      return {
            "filters": [
               ["TCA Subsection", "tca_section", "=", frm.doc.tca_section]
  
           ]
        }
    });
  });



//frappe.ui.form.on("TCA Check Point",{
//	validate: function(frm){
//		alert(frm.doc.tca_section);
//                alert(frm.doc.tca_subsection);
//                alert(frm.doc.wtg_check_point);
//	}
//  });



frappe.ui.form.on("TCA Check Point", {
         validate: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];  
frappe.call({
	method:"frappe.client.get_list",
	args:{
		doctype:"TCA Check Point",
    filters: [["tca_section", "=", d.tca_section],["tca_subsection", "=", d.tca_subsection],["wtg_check_point", "=", d.wtg_check_point]],
		fields: ["name"]
	},
        async:false,
	callback: function(r1) {  
	if (r1.message) {
                 // alert(r1.message.length);
                 if(r1.message.length<=0)
                   {
                          // alert("not save");
                           validated = true;
                           
                   }
                 else
                  {
                           validated = false;
                           frappe.msgprint("Check Point Already Created!");
                  }
		}
	}
});
}
});







