
frappe.listview_settings['TCA Data'] = {
hide_name_column: true,	
onload: function(listview) {
//alert(listview.tca_activity);
frappe.route_options = {"tca_activity": ["=", "Select Activity"]};
},	


tca_activity: function(listview) {
alert("working");
var myList1 = new Array();  
var val1;
frappe.call({
	method:"frappe.client.get_list",
	args:{
		doctype:"TCA Data",
                filters: [["tca_activity", "=", listview.tca_activity]],
	        fields: ["section_name"]

	},
       async:false,
	callback: function(r1) {  
	if (r1.message) {
		$.each(r1.message, function(i,d1) {
                     val1=d1.section_name;
                     myList1.push(val1);
             
		});
		}
	}
});
frappe.route_options = {"section_name": ["=", myList1]};
//frappe.route_options = {"section_name": ["in", myList1],"section_name":["=",myList1]};
}
}
//}




//tca_activity: function(listview) {
//alert("working");
//var d = locals[cdt][cdn];
//frappe.call({
	
  //       method: "wtgcare.tca.doctype.tca_data.tca_data.get_section_name",
	//args:{
	//	
          //      "tca_activity":d.tca_activity,
	//},
       //async:false,
	//callback: function(r1) {  
	//if (r1.message) {
	//	$.each(r1.message, function(i,d1) {
                    
//frappe.route_options = {"section_name": ["=", "  "]};              
//		});
//		}
//	}
//});
//}
//}
//}





