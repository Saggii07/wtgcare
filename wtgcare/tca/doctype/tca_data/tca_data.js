// Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt


frappe.ui.form.on("TCA Data", {
    onload: function(frm, cdt, cdn) {
        frm.set_value("ischecked", 1);
}
});


frappe.ui.form.on("TCA Data", "onload", function(frm){
    cur_frm.set_query("tca_activity", function(){
      return {
            "filters": [
               ["TCA Activity", "name", "!=", "Select Activity"]
  
           ]
        }
    });
  });



frappe.ui.form.on("TCA Data", "tca_activity", function(frm){
    cur_frm.set_query("section_name", function(){
      return {
            "filters": [
               ["TCA Section", "wtg_model", "=", frm.doc.wtg_model1]
  
           ]
        }
    });
  });


frappe.ui.form.on("TCA Data", "section_name", function(frm){
    cur_frm.set_query("subsection_name", function(){
      return {
            "filters": [
               ["TCA Subsection", "tca_section", "=", frm.doc.section_name]
  
           ]
        }
    });
  });


frappe.ui.form.on("TCA Data", "section_name", function(frm){
    cur_frm.set_query("check_point", function(){
      return {
            "filters": [
               ["TCA Check Point", "tca_section", "=", frm.doc.section_name]
  
           ]
        }
    });
  });


//frappe.ui.form.on("TCA Data", "section_name", function(frm){
//    cur_frm.set_query("check_point", function(){
//      return {
//            "filters": [
//               ["TCA Check Point", "tca_subsection", "=", frm.doc.subsection_name]
//  
//           ]
//        }
//    });
//  });



 
