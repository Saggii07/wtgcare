// Copyright (c) 2019, powercon and contributors
// For license information, please see license.txt

//frappe.ui.form.on('PM Type Master', {
	// refresh: function(frm) {

	// }
//});



frappe.ui.form.on('PM Type Master', {
	pm_type1: function(frm, cdt, cdn) {   
            var d1 = locals[cdt][cdn];      
                       var name1;
                    if (d1.pm_type1 !="" && d1.pm_periodicity1 !="")  
                    {
                          name1 = d1.pm_type1 +"-"+d1.pm_periodicity1;
                          cur_frm.set_value("name1",name1);
                 }
},
	
	pm_periodicity1: function(frm, cdt, cdn) {   
            var d1 = locals[cdt][cdn];      
                       var name1;
                    if (d1.pm_type1 !="" && d1.pm_periodicity1 !="")  
                    {
                          name1 = d1.pm_type1 +"-"+d1.pm_periodicity1;
                          cur_frm.set_value("name1",name1);
                 }
},
                        
});
