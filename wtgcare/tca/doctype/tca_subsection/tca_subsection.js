// Copyright (c) 2019, powercon and contributors
// For license information, please see license.txt

//frappe.ui.form.on('TCA Subsection', {
	// refresh: function(frm) {

	// }
//});




frappe.ui.form.on("TCA Subsection", {
         wtg_subsection: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
      var subsection_name1 = d.tca_section+"-"+d.wtg_subsection
     //d.section_name = section_name1;
cur_frm.set_value("subsection_name",subsection_name1);
}
});
