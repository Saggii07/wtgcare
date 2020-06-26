
frappe.ui.form.on("TCA Schedule", {
         customer_name: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var CDate = new Date(d.start_date);
var month = CDate.getMonth();
var year = CDate.getFullYear();
var activity1 = months[month]+"-"+year+"-"+d.site_name+"-"+d.customer_name;
cur_frm.set_value("tca_schedule_name",activity1);
refresh_field("tca_schedule_name");
}
});


frappe.ui.form.on("TCA Schedule", {
	start_date: function(frm, cdt, cdn) {
	var d = locals[cdt][cdn];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var CDate = new Date(d.start_date);
var month = CDate.getMonth();
var year = CDate.getFullYear();
var activity1 = months[month]+"-"+year+"-"+d.site_name+"-"+d.customer_name;
cur_frm.set_value("tca_schedule_name",activity1);
refresh_field("tca_schedule_name");
}
});

frappe.ui.form.on("TCA Schedule", {
	site_name: function(frm, cdt, cdn) {
	var d = locals[cdt][cdn];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var CDate = new Date(d.start_date);
var month = CDate.getMonth();
var year = CDate.getFullYear();
var activity1 = months[month]+"-"+year+"-"+d.site_name+"-"+d.customer_name;
cur_frm.set_value("tca_schedule_name",activity1);
refresh_field("tca_schedule_name");
}
});


frappe.ui.form.on('TCA Schedule', {
    refresh: function(frm) {
      frm.add_custom_button(__('TCA Activities'), function(){   
 frappe.confirm(
       'Are you Want to Generate TCA Activities ?',
    function(){
        
       frappe.call({
	       method: "insert_tca_activities", 
	       doc:frm.doc,
	       callback: function(r, rt) {
	       if(r.message) {
			     }
			  //  location.reload(true);		
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


frappe.ui.form.on("TCA Schedule", "onload", function(frm){
    cur_frm.set_query("customer_name", function(){
      return {
            "filters": [
               ["Customer", "customer_category", "=", "TCA Customer"]
  
           ]
        }
    });
  });
