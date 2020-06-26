// Copyright (c) 2020, powercon and contributors
// For license information, please see license.txt


frappe.ui.form.on("TCA Activity", "onload", function(frm){
  cur_frm.set_query("tca_schedule", function(){
    return {
          "filters": [
             ["TCA Schedule", "name", "!=", "Select Schedule"]

         ]
      }
  });
});



frappe.ui.form.on('TCA Activity', {
    refresh: function(frm) {
      frm.add_custom_button(__('Genrate TCA Data'), function(){   
 frappe.confirm(
       'Are you Want to Generate TCA Data ?',
    function(){
        
       frappe.call({
	       method: "insert_tca_data", 
	       doc:frm.doc,
	       callback: function(r, rt) {
	       if(r.message) {
			     }
			    location.reload(true);		
			}
 
		 });
    },
    function(){
       window.close();
    }
)
    },).addClass("btn-primary");
  }
});