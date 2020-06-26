

frappe.ui.form.on("TCA Section", {
         wtg_section: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
         var section_name1 = d.wtg_model+"-"+d.wtg_section
     //d.section_name = section_name1;

        cur_frm.set_value("section_name",section_name1);
}
});
