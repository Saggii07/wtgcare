
//frappe.ui.form.on("PM Activity", {
//         pm_type: function(frm, cdt, cdn) {
//         var d = locals[cdt][cdn];
//         cur_frm.clear_table("pm_check_points"); 
//frappe.call({
//	method:"frappe.client.get_list",
//	args:{
//		doctype:"PM Check Point",
//                filters: [["pm_type", "=", d.pm_type]],
             //   filters: [["pm_type", "=", d.pm_type],["check_point_group", "in", ['Common','Technology','WTG Model']],["wtg_technology", "in", ['Enercon','Inox']],["wtg_model", "in", ['E40','E48']]],   
//		fields: ["check_point_name"],
//                limit_page_length:100,  
//,["wtg_model", "=", d.wtg_model],["wtg_technology", "=", d.wtg_technology]
//	},
//        async:false,
//	callback: function(r1) {  
//	if (r1.message) {
//		$.each(r1.message, function(i,d1) {
//                     var val1=d1.check_point_name;

//if (frm.is_new()) {
//			frm.add_child('pm_check_points').check_point_code = val1;
//			frm.refresh_field('pm_check_points');
//		}
//
//		});
//		}
//	}
//});
//}
//});




//frappe.ui.form.on('PM Activity', {
//    refresh: function(frm) {
    // if (frm.doc.pm_type == "Pending")
     // {
//      cur_frm.add_custom_button(__('Create/Open Service Order'), function(){
//      // frappe.msgprint(frm.doc.name);
//      frappe.confirm(
//       'Do you Want to Create/Open Service Order ?',
//    function(){
        
//        frappe.call({
//	       method: "create_service_order", 
//	       doc:frm.doc,
//	       callback: function(r, rt) {
//	       if(r.message) {
			//alert("okkkkkk........JS");
                      //frm.set_value("reset_counter",0);
                     /// frm.refresh_field('pm_activity');
                                //  if (frm.doc.service_log != "")
                               //{
                                 //alert(r.message);
//                                 if (r.message != "")
//                                 {
//                                    //cur_frm.set_value("docstatus",pm_schedule_name);
//                                 frappe.set_route("Form", "Service Report", r.message)
//           
//                                 }
//                                  //   }
//			     }//
//						
//			}
//		 });
//    },
//    function(){
//        //show_alert('Thanks for continue here!')
//       window.close();
//    }
//)
//    },);
// }
//  }
//});


frappe.ui.form.on('PM Activity', {
    refresh: function(frm) {
if (frappe.user.has_role("FAPO") == true || frappe.user.has_role("Area Incharge") == true || frappe.user.has_role("PM Lead") == true)
{
      cur_frm.add_custom_button(__('Checking Report'), function(){

     frm.print_doc();


    },).addClass("btn-primary");
}
}
});



frappe.ui.form.on('PM Activity', {
    refresh: function(frm) {

if (frappe.user.has_role("FAPO") == true || frappe.user.has_role("Area Incharge") == true || frappe.user.has_role("PM Lead") == true)
{
    cur_frm.add_custom_button(__('PM Remaining List'), function(){
   if (frm.doc.workflow_state  == "Pending for Material Review" || frm.doc.workflow_state  == "Pending for TSO Aproval")
      {
       frappe.call({
	       method: "create_remaining_list", 
	       doc:frm.doc,
	       callback: function(r, rt) {
	       if(r.message) {
                                 //if (r.message != "")
                                 //{
                                 //frappe.set_route("Form", "Service Report", r.message)
                                  //alert("ok......");
                                
                                //}
			     }	
location.reload(true);
	
		}

	 });

}
 frappe.set_route("List", "PM Work Remaining List",{"pm_activity": frm.doc.name});
 frm.refresh();	
    },).addClass("btn-primary");
// }
}
  }
});




frappe.ui.form.on('PM Activity', {
    refresh: function(frm) {
    // if (frm.doc.pm_type == "Pending")
     // {


    cur_frm.add_custom_button(__('Service Order'), function(){
      // frappe.msgprint(frm.doc.name);
   //   frappe.confirm(
    //   'Do you Want to Create/Open Service Order ?',
  //  function(){
        
        frappe.call({
	       method: "create_service_order", 
	       doc:frm.doc,
	       callback: function(r, rt) {
	       if(r.message) {
                                 if (r.message != "")
                                 {
                                 frappe.set_route("Form", "Service Report", r.message)
           
                                 }
			     }	
           //    frm.refresh();		
           location.reload(true);
			}
		 });


//    },
//    function(){
        //show_alert('Thanks for continue here!')
//       window.close();
//    }
//)
    },).addClass("btn-primary");
// }
  }
});







//frappe.ui.form.on('PM Activity', {
//    refresh: function(frm) {
//   if (frm.doc.pm_type == "Electrical" || frm.doc.pm_type == "Mechanical")
//       {
//      cur_frm.add_custom_button(__('Create/Open Measurement Log'), function(){
       //frappe.msgprint(frm.doc.name);
//       frappe.confirm(
//        'Do you Want to Create/Open Measurement Log ?',
//    function(){
//            frappe.call({
//	       method: "create_measurement_log", 
//	       doc:frm.doc,
//	       callback: function(r, rt) {
//	       if(r.message) {
//                   // frm.refresh_field('pm_activity');
//                        if (r.message != "")
//                                 {
///                                    if (frm.doc.pm_type == "Electrical")
//                                     {
//                                 frappe.set_route("Form", "PM Electrical Measurement Log", r.message)
//                                     }
//                                    else if (frm.doc.pm_type == "Mechanical")
//                                     {
//                                 frappe.set_route("Form", "PM Mechanical Measurement Log", r.message)
//                                     }
                                       
                            //     }
//			     }
//						
//			}
//		 });   
//    },
//    function(){
        //show_alert('Thanks for continue here!')
//       window.close();
//    }
//)
//    },);
//}
//  }
//});









frappe.ui.form.on('PM Activity', {
    refresh: function(frm) {
if (frappe.user.has_role("FAPO") == true || frappe.user.has_role("Area Incharge") == true || frappe.user.has_role("PM Lead") == true)
{
   if (frm.doc.pm_type == "Electrical" || frm.doc.pm_type == "Mechanical")
       {
      cur_frm.add_custom_button(__('Measurement Log'), function(){
       //frappe.confirm(
       // 'Do you Want to Create/Open Measurement Log ?',
    //function(){

            frappe.call({
	       method: "create_measurement_log", 
	       doc:frm.doc,
	       callback: function(r, rt) {
	       if(r.message) {
                     // frm.refresh_field('pm_activity');
                        if (r.message != "")
                                 {
                                    if (frm.doc.pm_type == "Electrical")
                                     {
                                 frappe.set_route("Form", "PM Electrical Measurement Log", r.message)
                                     }
                                    else if (frm.doc.pm_type == "Mechanical")
                                     {
                                 frappe.set_route("Form", "PM Mechanical Measurement Log", r.message)
                                     }
                                       
                                 }
			     }
//frm.refresh();
location.reload(true);
						
			}
		 });   
    //},
   // function(){
        //show_alert('Thanks for continue here!')
   //    window.close();
   // }
//)
    },).addClass("btn-primary");
}
}
  }
});







//cur_frm.cscript.measurement_log = function(doc) {
//alert("test");
// frappe.call({
//	       method: "create_measurement_log", 
//	       doc:doc,
//	       callback: function(r, rt) {
//	       if(r.message) {
			//alert("okkkkkk........JS");
//			     }
						
//			}
//		 });
//}

frappe.ui.form.on("PM Activity", "measurement_log", function(frm) {
if (frm.doc.pm_type == "Electrical" && frm.doc.is_measurement_log_filled==0 )
{
frappe.new_doc("PM Electrical Measurement Log", {"pm_activity": frm.doc.name});

}
else if (frm.doc.pm_type == "Mechanical"  && frm.doc.is_measurement_log_filled==0 )
{
frappe.new_doc("PM Mechanical Measurement Log", {"pm_activity": frm.doc.name});
}
else
{
 alert("Measurement Log Not Available");
}
});

    //cur_frm.add_custom_button("Link", function(){
    //			var myWin = window.open('https://google.com'); 
    //	});

//frappe.ui.form.on('PM Activity', {
//    refresh: function(frm) {
//      frm.add_custom_button(__('Generate Service Order'), function(){
//        frappe.msgprint(frm.doc.name);
//    }, __("Generate Service Order"));
// }
//});

frappe.ui.form.on("PM Activity", {
         pm_type: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
         cur_frm.clear_table("pm_check_points"); 
         //alert(d.check_point_group);
frappe.call({
		method: "wtgcare.wtg_maintenance.doctype.pm_activity.pm_activity.get_check_point",
		args: {
			"check_point_group": 'Common',
                        "wtg_model": d.wtg_model,
                        "wtg_technology": d.wtg_technology,
                        "pm_type":d.pm_type,
			},
			callback: function(r1) {
if (r1.message) {
		$.each(r1.message, function(i,d1) {
                    //alert(d1);
                     //var val1=d1.check_point_name;
                     //alert(val1);
                 if (frm.is_new()) {
			frm.add_child('pm_check_points').check_point_code = d1.toString();
			frm.refresh_field('pm_check_points');
		} 
		});
		}
}
});
}
});





frappe.ui.form.on("PM Activity", {
         pm_type: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
        cur_frm.clear_table("ppe_used"); 
frappe.call({
	method:"frappe.client.get_list",
	args:{
		doctype:"PM PPE Details",
		fields: ["ppe_name"],
                limit_page_length:100,
	},
        async:false,
	callback: function(r1) {  
	if (r1.message) {
		$.each(r1.message, function(i,d1) {
                     var val1=d1.ppe_name;
if (frm.is_new()) {
			frm.add_child('ppe_used').name1 = val1;
			frm.refresh_field('ppe_used');
		}

		});
		}
	}
});
}
});



//frappe.ui.form.on("PM Activity", {
//         service_log: function(frm, cdt, cdn) {
//frappe.call({
//	method:"frappe.client.get_list",
//	args:{
//		doctype:"PM Type Master",
//		fields: ["pm_type1"]
//	},
//        async:false,
//	callback: function(r) {
//        var myList1 = new Array();   
//	if (r.message) {
//		$.each(r.message, function(i,d) {
                      
//                      var val1=d.pm_type1;
                                       
//                      myList1.push(val1);
//                      var List1 = [...new Set(myList1)]
//                      //alert(List1);
//                   var df1 = frappe.meta.get_docfield("PM Activity","pm_type", cur_frm.doc.name)
//            df1.options = List1;
//            refresh_field("pm_type");
//		});
//		}
//	}
//});
//}
//});

//frappe.ui.form.on("PM Activity", {
//         pm_type: function(frm, cdt, cdn) {
//         var d = locals[cdt][cdn];
///               var myList1 = new Array();    
//frappe.call({
//	method:"frappe.client.get_list",
//	args:{
//		doctype:"PM Type Master",
//    filters: [["pm_type1", "=", d.pm_type]],
//		fields: ["pm_periodicity1"]
//	},
//        async:false,
//	callback: function(r1) {  
//	if (r1.message) {
//		$.each(r1.message, function(i,d1) {
//                      var val1=d1.pm_periodicity1;
//                      myList1.push(val1);                     
// var List2 = [...new Set(myList1)]

// var df1 = frappe.meta.get_docfield("PM Activity","pm_periodicity", cur_frm.doc.name)
//            df1.options = List2;
//            refresh_field("pm_periodicity");
//		});
//		}
//	}
//});
//}
//});



frappe.ui.form.on("PM Activity", {
         onload: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
frappe.call({
	method:"frappe.client.get_list",
	args:{
		doctype:"PM Activity",
    filters: [["name", "=", d.name]],
		fields: ["pm_periodicity"]
	},
        async:false,
	callback: function(r1) {  
	if (r1.message) {
		$.each(r1.message, function(i,d1) {
                      var val1=d1.pm_periodicity;
                      d.pm_periodicity = val1;
                      cur_frm.set_df_property("pm_periodicity", "options",val1);
		});
		}
	}
});
}
});



frappe.ui.form.on("PM Activity", "onload",function(frm,cdt, cdn)

{
    $(".grid-add-row").hide();
    $(".grid-remove-rows").hide();

});

frappe.ui.form.on("PM Activity", "ppe_used",function(frm,cdt, cdn)

{
    $(".grid-add-row").hide();
    $(".grid-remove-rows").hide();

});
frappe.ui.form.on("PM Activity", "onload", function(frm){
    cur_frm.set_query("service_log", function(){
      return {
            "filters": [
               ["Service Report", "service_nature", "=", "PM"]

           ]
        }
    });
});


var x = new Date();
var y = x.getFullYear().toString();
var m = (x.getMonth() + 1).toString();
var d = x.getDate().toString();
(d.length == 1) && (d = '0' + d);
(m.length == 1) && (m = '0' + m);
var mmyyyy = m + y;
var yyyy = y;


frappe.ui.form.on("PM Activity", {
         pm_periodicity: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
         var pm_type_val;

//if (d.pm_type =="Visual")
//{
//   pm_activity_name = d.wtg_name +","+ d.pm_type+","+mmyyyy;
//}
//else if ( d.pm_type=="Grease")
//{
 // pm_activity_name = d.wtg_name +","+ d.pm_type+","+mmyyyy;
//}
//else
//{
//   pm_activity_name = d.wtg_name +","+ d.pm_periodicity+","+yyyy;

//}


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
var  pm_activity_name = d.wtg_name +","+ pm_type_val+","+d.fiscal_year;
cur_frm.set_value("pm_activity_name",pm_activity_name);
}
});



frappe.ui.form.on("PM Activity", {
         fiscal_year: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
         var pm_type_val;

//if (d.pm_type =="Visual")
//{
//   pm_activity_name = d.wtg_name +","+ d.pm_type+","+mmyyyy;
//}
//else if ( d.pm_type=="Grease")
//{
 // pm_activity_name = d.wtg_name +","+ d.pm_type+","+mmyyyy;
//}
//else
//{
//   pm_activity_name = d.wtg_name +","+ d.pm_periodicity+","+yyyy;

//}


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
var  pm_activity_name = d.wtg_name +","+ pm_type_val+","+d.fiscal_year;
cur_frm.set_value("pm_activity_name",pm_activity_name);
}
});



        

frappe.ui.form.on("PM Activity", {
         wtg_name: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
         var pm_type_val;

//if (d.pm_type =="Visual")
//{
//   pm_activity_name = d.wtg_name +","+ d.pm_type+","+mmyyyy;
//}
//else if ( d.pm_type=="Grease")
//{
 // pm_activity_name = d.wtg_name +","+ d.pm_type+","+mmyyyy;
//}
//else
//{
//   pm_activity_name = d.wtg_name +","+ d.pm_periodicity+","+yyyy;

//}


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
var  pm_activity_name = d.wtg_name +","+ pm_type_val+","+d.fiscal_year;
cur_frm.set_value("pm_activity_name",pm_activity_name);
}
});


frappe.ui.form.on("PM Activity", {
         pm_type: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
         var pm_type_val;

//if (d.pm_type =="Visual")
//{
//   pm_activity_name = d.wtg_name +","+ d.pm_type+","+mmyyyy;
//}
//else if ( d.pm_type=="Grease")
//{
 // pm_activity_name = d.wtg_name +","+ d.pm_type+","+mmyyyy;
//}
//else
//{
//   pm_activity_name = d.wtg_name +","+ d.pm_periodicity+","+yyyy;

//}


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
var  pm_activity_name = d.wtg_name +","+ pm_type_val+","+d.fiscal_year;
cur_frm.set_value("pm_activity_name",pm_activity_name);
}
});

cur_frm.toggle_enable("status", false);
frappe.ui.form.on("PM Activity", {
         is_measurement_log_filled: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
         //alert(d.pm_type);
cur_frm.toggle_enable("status", false);
if ((d.pm_type=="Electrical" || d.pm_type=="Mechanical")&& d.is_measurement_log_filled !=1)
{
cur_frm.toggle_enable("status", false);
}
else
{
cur_frm.toggle_enable("status", true);
}
}
})


frappe.ui.form.on("PM Activity", {
         onload: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
        // frm.print_doc("PM Activity");
//frappe.call({
//	method:"frappe.client.get_list",
//	args:{
//		doctype:"PM Activity",
//    filters: [["name", "=", d.name]],
//		fields: ["pm_periodicity"]
//	},
//        async:false,
//	callback: function(r1) {  
//	if (r1.message) {
//		$.each(r1.message, function(i,d1) {
//                      var val1=d1.pm_periodicity;
//                      d.pm_periodicity = val1;
//                      //cur_frm.set_df_property("pm_periodicity", "options",val1);
//		});
//		}
//	}
//});


//Grease
cur_frm.toggle_enable("status", false);

if ((d.pm_type=="Electrical" || d.pm_type=="Mechanical")&& d.is_measurement_log_filled !=1)
{
cur_frm.toggle_enable("status", false);
}
else
{
cur_frm.toggle_enable("status", true);
}
}
})


frappe.ui.form.on("PM Activity", {
         pm_type: function(frm, cdt, cdn) {
         var d = locals[cdt][cdn];
         //alert(d.pm_type);
cur_frm.toggle_enable("status", "false");
if ((d.pm_type=="Electrical" || d.pm_type=="Mechanical")&& d.is_measurement_log_filled !=1)
{
cur_frm.toggle_enable("status", false);
}
else
{
cur_frm.toggle_enable("status", true);
}
}
})


frappe.ui.form.on("PM Check Point Table", "status", function(frm) {
       //  alert("ok......");
         var docname = frm.doc.name;
         var statusValue = "Ongoing";
          //alert(docname);
         //alert(docname);
        //alert(statusValue);
//frappe.call({ "method": "frappe.client.set_value", "args": { "doctype": "PM Activity", "name": docname, "fieldname": "status", "value": statusValue}}); 
//frm.refresh_field('pm_check_points');
//frm.refresh("pm_check_points");
//refresh_field("pm_check_point_table");
         //alert(d.pm_type);
//cur_frm.toggle_enable("status", "false");
//if ((d.pm_type=="Electrical" || d.pm_type=="Mechanical")&& d.is_measurement_log_filled !=1)
//{
//cur_frm.toggle_enable("status", false);
//}
//else
//{
//cur_frm.toggle_enable("status", true);
//}
});





frappe.ui.form.on('PM Activity', {
   onload: function(frm) {
   if (frm.doc.workflow_state  == "Pending for Material Review")
      {
       frappe.call({
	       method: "create_remaining_list", 
	       doc:frm.doc,
	       callback: function(r, rt) {
	       if(r.message) {
			//alert("okkkkkk........JS");
                          
                       //  frm.refresh_field('reset_counter');
                   
			     }	
frm.refresh();		
			}
                    
		 });
     }
  }
});


//frappe.ui.form.on('PM Activity', {
//   before_save: function(frm) {
//   location.reload(true);
//  }
//});

frappe.ui.form.on('PM Activity', {
   after_save: function(frm) {
   location.reload(true);
  }
});












	











