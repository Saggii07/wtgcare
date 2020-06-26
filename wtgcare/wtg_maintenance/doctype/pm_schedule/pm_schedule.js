// Copyright (c) 2019, powercon and contributors
// For license information, please see license.txt

frappe.ui.form.on("PM Schedule", {
         pm_type: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
         var pm_type_val;
         if (d.fiscal_year!="" && d.site_name != "")
          {
         if (d.pm_type == "Electrical")
          {
              pm_type_val = "YE"; 
          }
         else if (d.pm_type == "Mechanical")
          {
              pm_type_val = "YM"; 
          }
         else if (d.pm_type == "Visual")
          {
             pm_type_val = "QV"; 
          }
         else if (d.pm_type == "Grease")
          { 
             pm_type_val = "HG"; 
          }
         else if (d.pm_type == "Electro-mechanical Maintenance" && d.pm_periodicity == "Yearly")
          { 
             pm_type_val = "YEM"; 
          }
         else if (d.pm_type == "Electro-mechanical Maintenance" && d.pm_periodicity == "Half Yearly")
          { 
             pm_type_val = "HEM"; 
          }
         else if (d.pm_type == "USS Maintenance" && d.pm_periodicity == "Yearly")
          { 
             pm_type_val = "YU"; 
          }
         else if (d.pm_type == "USS Maintenance" && d.pm_periodicity == "Half Yearly")
          { 
             pm_type_val = "HU"; 
          }
         else if (d.pm_type == "Rotor Blade Resistance Measurement" && d.pm_periodicity == "Yearly")
          { 
             pm_type_val = "YRB"; 
          }
        }
        var pm_schedule_name = pm_type_val+"-"+d.fiscal_year+"-"+d.site_name;
        cur_frm.set_value("pm_schedule_name",pm_schedule_name);
}
});


frappe.ui.form.on("PM Schedule", {
         pm_periodicity: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
         var pm_type_val;
         if (d.fiscal_year!="" && d.site_name != "")
          {
         if (d.pm_type == "Electrical")
          {
              pm_type_val = "YE"; 
          }
         else if (d.pm_type == "Mechanical")
          {
              pm_type_val = "YM"; 
          }
         else if (d.pm_type == "Visual")
          {
             pm_type_val = "QV"; 
          }
         else if (d.pm_type == "Grease")
          { 
             pm_type_val = "HG"; 
          }
         else if (d.pm_type == "Electro-mechanical Maintenance" && d.pm_periodicity == "Yearly")
          { 
             pm_type_val = "YEM"; 
          }
         else if (d.pm_type == "Electro-mechanical Maintenance" && d.pm_periodicity == "Half Yearly")
          { 
             pm_type_val = "HEM"; 
          }
         else if (d.pm_type == "USS Maintenance" && d.pm_periodicity == "Yearly")
          { 
             pm_type_val = "YU"; 
          }
         else if (d.pm_type == "USS Maintenance" && d.pm_periodicity == "Half Yearly")
          { 
             pm_type_val = "HU"; 
          }
         else if (d.pm_type == "Rotor Blade Resistance Measurement" && d.pm_periodicity == "Yearly")
          { 
             pm_type_val = "YRB"; 
          }
        }
        var pm_schedule_name = pm_type_val+"-"+d.fiscal_year+"-"+d.site_name;
        cur_frm.set_value("pm_schedule_name",pm_schedule_name);
}
});


frappe.ui.form.on("PM Schedule", {
         fiscal_year: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
         var pm_type_val;
         if (d.fiscal_year!="" && d.site_name != "")
          {
         if (d.pm_type == "Electrical")
          {
              pm_type_val = "YE"; 
          }
         else if (d.pm_type == "Mechanical")
          {
              pm_type_val = "YM"; 
          }
         else if (d.pm_type == "Visual")
          {
             pm_type_val = "QV"; 
          }
         else if (d.pm_type == "Grease")
          { 
             pm_type_val = "HG"; 
          }
         else if (d.pm_type == "Electro-mechanical Maintenance" && d.pm_periodicity == "Yearly")
          { 
             pm_type_val = "YEM"; 
          }
         else if (d.pm_type == "Electro-mechanical Maintenance" && d.pm_periodicity == "Half Yearly")
          { 
             pm_type_val = "HEM"; 
          }
         else if (d.pm_type == "USS Maintenance" && d.pm_periodicity == "Yearly")
          { 
             pm_type_val = "YU"; 
          }
         else if (d.pm_type == "USS Maintenance" && d.pm_periodicity == "Half Yearly")
          { 
             pm_type_val = "HU"; 
          }
         else if (d.pm_type == "Rotor Blade Resistance Measurement" && d.pm_periodicity == "Yearly")
          { 
             pm_type_val = "YRB"; 
          }
        }
        var pm_schedule_name = pm_type_val+"-"+d.fiscal_year+"-"+d.site_name;
        cur_frm.set_value("pm_schedule_name",pm_schedule_name);
}
});


frappe.ui.form.on("PM Schedule", {
         site_name: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
         var pm_type_val;
         if (d.fiscal_year!="" && d.site_name != "")
          {
         if (d.pm_type == "Electrical")
          {
              pm_type_val = "YE"; 
          }
         else if (d.pm_type == "Mechanical")
          {
              pm_type_val = "YM"; 
          }
         else if (d.pm_type == "Visual")
          {
             pm_type_val = "QV"; 
          }
         else if (d.pm_type == "Grease")
          { 
             pm_type_val = "HG"; 
          }
         else if (d.pm_type == "Electro-mechanical Maintenance" && d.pm_periodicity == "Yearly")
          { 
             pm_type_val = "YEM"; 
          }
         else if (d.pm_type == "Electro-mechanical Maintenance" && d.pm_periodicity == "Half Yearly")
          { 
             pm_type_val = "HEM"; 
          }
         else if (d.pm_type == "USS Maintenance" && d.pm_periodicity == "Yearly")
          { 
             pm_type_val = "YU"; 
          }
         else if (d.pm_type == "USS Maintenance" && d.pm_periodicity == "Half Yearly")
          { 
             pm_type_val = "HU"; 
          }
         else if (d.pm_type == "Rotor Blade Resistance Measurement" && d.pm_periodicity == "Yearly")
          { 
             pm_type_val = "YRB"; 
          }
        }

        var pm_schedule_name = pm_type_val+"-"+d.fiscal_year+"-"+d.site_name;
        cur_frm.set_value("pm_schedule_name",pm_schedule_name);
}
});



frappe.ui.form.on("PM Schedule", {
         site: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
        cur_frm.clear_table("wtg_wise_schedule"); 
frappe.call({
	method:"frappe.client.get_list",
	args:{
		doctype:"WTG Master",
		fields: ["wtg_name"],
                filters: [["site", "=", d.site]],
                limit_page_length:100,
	},
        async:false,
	callback: function(r1) {  
	if (r1.message) {
		$.each(r1.message, function(i,d1) {
                     var val1=d1.wtg_name;
          if (frm.is_new()) {
			frm.add_child('wtg_wise_schedule').wtg_name = val1;
			frm.refresh_field('wtg_wise_schedule');
		}

		});
		}
	}
});
}
});



frappe.ui.form.on("PM Schedule", {
         onload: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
        cur_frm.set_value("site",d.site);
frappe.call({
	method:"frappe.client.get_list",
	args:{
		doctype:"WTG Master",
		fields: ["wtg_name"],
                filters: [["site", "=", d.site]],
                limit_page_length:100,
	},
        async:false,
	callback: function(r1) {  
	if (r1.message) {
		$.each(r1.message, function(i,d1) {
                     var val1=d1.wtg_name;
          if (frm.is_new()) {
			frm.add_child('wtg_wise_schedule').wtg_name = val1;
			frm.refresh_field('wtg_wise_schedule');
		}

		});
		}
	}
});
}
});


frappe.ui.form.on('PM Schedule', {
    refresh: function(frm) {
      frm.add_custom_button(__('PM Activities'), function(){   
 frappe.confirm(
       'Are you Want to Generate PM Activities ?',
    function(){
        
       frappe.call({
	       method: "insert_wtg", 
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



frappe.ui.form.on('PM Schedule', {
    refresh: function(frm) {
      frm.add_custom_button(__('Service Order'), function(){  
 frappe.confirm(
       'Are you Want to Create Service Order ?',
    function(){
        
       frappe.call({
	       method: "create_service_order", 
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



frappe.ui.form.on('PM Schedule', {
    refresh: function(frm) {
      frm.add_custom_button(__('Measurement Log'), function(){
 frappe.confirm(
       'Are you Want to Create Measurement Log ?',
    function(){
        
       frappe.call({
	       method: "create_measurement_log", 
	       doc:frm.doc,
	       callback: function(r, rt) {
	       if(r.message) {
                                 if (r.message != "")
                                 {     
                                 }
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





