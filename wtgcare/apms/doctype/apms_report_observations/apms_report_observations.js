
frappe.ui.form.on("APMS Report Observations", {
         site: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
//alert(d.site);
        // cur_frm.clear_table("pm_check_points"); 
frappe.call({
	method:"frappe.client.get_list",
	args:{
		doctype:"Site",
                filters: [["site_name", "=", d.site]],
		fields: ["lead_name"],
	},
        async:false,
	callback: function(r1) {  
	if (r1.message) {
		$.each(r1.message, function(i,d1) {
                     var val1=d1.lead_name;
                    // alert(val1);
                   cur_frm.set_value("assigned_to",val1);

		});

		}
	}
});

//frappe.call({
//	method:"frappe.client.get_list",
//	args:{
//		doctype:"WTG Master",
//                filters: [["site_name", "=", d.site]],
//		fields: ["wtg_code"],
//	},
//        async:false,
//	callback: function(r1) {  
//        var myList1 = new Array(); 
//	if (r1.message) {
//		$.each(r1.message, function(i,d2) {
//                     var val2=d2.wtg_code;
//                     myList1.push(val2); 
//                    //alert(myList1);
// var df1 = frappe.meta.get_docfield("APMS Report Observations","wtg", cur_frm.doc.name)
//            df1.options = myList1;
//            refresh_field("wtg");

//		});

//		}
//	}
//});
}
});


frappe.ui.form.on('APMS Report Observations', {
       site: function(frm) {
		frm.set_query('wtg', function() {
			return {
				filters: [
					['WTG Master', 'site_name', '=', frm.doc.site]
				]
			}
		});
}
});


frappe.ui.form.on('APMS Report Observations', {
       wtg: function(frm) {
		frm.set_query('service_log_no', function() {
			return {
				filters: [
					['Service Report', 'wtg_name', '=', frm.doc.wtg]
				]
			}
		});
}
});


//frappe.ui.form.on("APMS Report Observations", {
//         wtg: function(frm, cdt, cdn) {
//         var d = locals[cdt][cdn];
       //  var myList = new Array(); 
//alert(d.wtg);
        // cur_frm.clear_table("pm_check_points"); 
//frappe.call({
//	method:"frappe.client.get_list",
//	args:{
//		doctype:"Service Report",
//                filters: [["wtg_name", "=", d. wtg]],
//		fields: ["name"],
//	},
//       async:false,
//	callback: function(r1) {  
//        var myList1 = new Array(); 
//	if (r1.message) {
//		$.each(r1.message, function(i,d1) {
//                     var val1=d1.name;
//                     myList1.push(val1);
                    // alert(val1);
//                  var df1 = frappe.meta.get_docfield("APMS Report Observations","service_log_no", cur_frm.doc.name)
//            df1.options = myList1;
//            refresh_field("service_log_no");

//		});

//		}
//	}
//});
//}
//});

frappe.ui.form.on("APMS Report Observations", {
         action_taken: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
         //alert(d.status);
         cur_frm.set_value("status","Action Taken");
}
});






frappe.ui.form.on("APMS Report Observations", {
         after_save: function(frm, cdt, cdn) {

         var d = locals[cdt][cdn];


         var myList1 = new Array();
         var myList2 = new Array();
         var docfield = "status";
         var docname = d.apms_report;
         var statusValue ="Open";


frappe.call({
	method:"frappe.client.get_list",
	args:{
		doctype:"APMS Report Observations",
                filters: [["apms_report", "=", d.apms_report]],
		fields: ["status"],
	},
        async:false,
	callback: function(r1) {  
	if (r1.message) {
		$.each(r1.message, function(i,d1) {
                     var val1=d1.status;
                     myList1.push(val1);
                     if (val1 == "Closed")
                         {
                        myList2.push(val1);     
                         }      
		});

		}
	}
});
//alert(myList1.length);
//alert(myList2.length);

if(myList1.length == myList2.length)
{
        statusValue="Closed";
       // alert("Status Change Sucessfully");
}
else
{
	statusValue="Open";
      // alert("No Change");
}
frappe.call({ "method": "frappe.client.set_value", "args": { "doctype": "APMS Report Submission", "name": docname, "fieldname": "status", "value": statusValue } }); 



}
});








