// Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt


//frappe.ui.form.on('WTG Status Log', {
//	onload: function(frm) {
	//	var $form = $("form[data-web-form='" + frm.doc.selector + "']");
  //              // alert('input[data-fieldname="site"]');
		// $('input[data-fieldname="site"]').parent().hide();
		// $('input[data-fieldname="feeder_name"]').parent().hide();
		 //$('textarea[data-fieldname="group_wtg_name"]').parent().hide();
		 //$('input[data-fieldname="wtg_name"]').parent().show();
		 //$(".control-label:contains('Site'),.control-label:contains('Feeder Name')" ).css( "display", "none" );
		 //$(".control-label:contains('WTG Name')" ).css( "display", "block" );
                 //$(".control-label:contains('WTG Group Name')" ).css( "display", "none" );
		//alert($('input[name="wtg_type"]:checked').attr("value"));
		 //$("input[name='wtg_type']").change(function() {
		//$('input[wtg_type="wtg_type"]').on('click change', function(e) {
                 // $( "input[type='radio']" ).change(function() {
		//	 var $input = $(this); 
                  //        alert("working"); 
			// var radioValue = $("input[name='wtg_type']:checked").val();
                        
			//	if(radioValue == "group_wtg")
			//	{
			//		 $('input[data-fieldname="site"]').parent().show();
			//		 $('input[data-fieldname="feeder_name"]').parent().show();
			//		 $('input[data-fieldname="wtg_name"]').parent().hide();
			//		 $('textarea[data-fieldname="group_wtg_name"]').parent().show();
			//		 $(".control-label:contains('Site'),.control-label:contains('Feeder Name')" ).css( "display","block" );
			//		 $(".control-label:contains('WTG Name')" ).css( "display", "none" );   
                          //               $(".control-label:contains('WTG Group Name')" ).css( "display", "block" );
				//}
			//	else
			//	{
			//		 $('input[data-fieldname="site"]').parent().hide();
			//		 $('input[data-fieldname="feeder_name"]').parent().hide();
			//		 $('input[data-fieldname="wtg_name"]').parent().show();
			//		 $('textarea[data-fieldname="group_wtg_name"]').parent().hide();
			//		 $(".control-label:contains('Site'),.control-label:contains('Feeder Name')" ).css( "display", "none" );
			//		 $(".control-label:contains('WTG Name')" ).css( "display", "block" );
                          //               $(".control-label:contains('WTG Group Name')" ).css( "display", "none" );
//
//				}
//			});
//}
//});
//alert("working");
frappe.ui.form.on("WTG Status Log", {
        feeder_name: function(frm, cdt, cdn) {
        var d = locals[cdt][cdn];
//alert("working ");
frappe.call({
	method:"frappe.client.get_list",
	args:{
		doctype:"WTG Master",
        filters: [["feeder", "=", d.feeder_name]],
		fields: ["wtg_name"],
         limit_page_length: 200
	},
        async:false,
	callback: function(r1) {    
        var myList1 = new Array(); 
	if (r1.message) {
		$.each(r1.message, function(i,d1) {
                      var val1=d1.wtg_name;
                      myList1.push(val1);
                      cur_frm.set_value("group_wtg_name",myList1.join(','));
		});

		}

	}
});
}
});

frappe.ui.form.on('WTG Status Log', {
       wtg_model: function(frm) {
		frm.set_query('wtg_fault', function() {
			return {
				filters: [
					['WTG Status', 'wtg_model', '=', frm.doc.wtg_model]
				]
			}
		});
}
});


frappe.ui.form.on("WTG Status Log", {
	wtg_fault: function(frm) {
	frappe.call({
		method: "get_reset_counter",
		//args: {
			//"wtg_name": frm.doc.wtg_name,
			//"wtg_fault": frm.doc.wtg_fault
			//},
                        doc:d,
			callback: function(r) {
                            if (r.message == "")
                            {
                                frm.set_value("reset_counter", 1);
                                if ((parseInt(frm.doc.max_reset_count)-1) > 0)
                                {
                                   frm.set_value("reset_count_availability","You can Reset "+ (parseInt(frm.doc.max_reset_count)-1).toString() + " Times");  
                                }
                                else
                                {
                                   frm.set_value("reset_count_availability","You can Reset 0 Times");
                                }    
                            }
                            else if (r.message < frm.doc.max_reset_count)
                            {
                                frm.set_value("reset_counter",parseInt(r.message)+1);
                                frm.set_value("reset_count_availability","You can Reset "+ (parseInt(frm.doc.max_reset_count)-(parseInt(r.message)+1)).toString() + " Times");  
                            
                                 if (parseInt(frm.doc.max_reset_count)-(parseInt(r.message)+1) > 0)
                                 {
                                     frm.set_value("reset_count_availability","You can Reset "+ (parseInt(frm.doc.max_reset_count)-1).toString() + " Times");  
                                 }
                                 else
                                 {
                                    frm.set_value("reset_count_availability","You can Reset 0 Times");
                                 }
                            } 
                            else
                            {
                             frm.set_df_property('action_taken', 'options', ["Handover to Site"]);
                             frm.refresh_field('action_taken');
                             frm.set_value("reset_count_availability","Max Count Reached & Can not be Resetted Remotely");                          
                            }
			}
		});
}
});


frappe.ui.form.on("WTG Status Log", {
	action_taken: function(frm) {
		if(frm.doc.action_taken == "Auto Resetted") 
                {
			frm.set_value("status1","Closed");
			frm.set_value("reset_counter",0);
		} 
                else if(frm.doc.action_taken == "Remotely Resetted") 
                {
			frm.set_value("status1","Closed");
		} 
		else if(frm.doc.action_taken == "Handover to Site") 
		{
			frm.set_value("status1","Open");
			frm.set_value("reset_counter",0);
		}
                else if(frm.doc.action_taken == "Manual Stop - No Fault") 
		{
			frm.set_value("status1","Closed");
                        frm.set_value("reset_counter",0);
		}
                else if(frm.doc.action_taken == "Closed - Feeder Trip") 
		{
			frm.set_value("status1","Closed");
                        frm.set_value("reset_counter",0);
                        //alert("Closed");
		}
		else
		{
			frm.set_value("status1","Open");
		}

}
})

frappe.ui.form.on("WTG Status Log", {
	refresh: function(frm) {
		if(frm.doc.action_taken == "Auto Resetted") 
		{
		 	frm.set_value("reset_counter", 0);
			frm.refresh_field('reset_counter');
		} 
		else if(frm.doc.action_taken == "Handover to Site") 
		{
			frm.set_value("reset_counter", 0);
			frm.refresh_field('reset_counter');
		}
}
})



frappe.ui.form.on("WTG Status Log", {
	start: function(frm) {
		if ((frm.doc.end == null || frm.doc.start == null))
		{
			var diff_day = "0";

		}

		else
		{
			if (frm.doc.end>=frm.doc.start)
		        {
                           alert(frm.doc.start);
			var now  = frm.doc.end;
			var then = frm.doc.start;
			var diff = moment.duration(moment(now).diff(moment(then))); 
                        
			var days = parseInt(diff.asDays()); 
			var hours1 = parseInt(diff.asHours()); 

			var hours = hours1 - days*24;
                       // alert(hours); 
			var minutes = parseInt(diff.asMinutes()); 
			minutes = minutes - (days*24*60 + hours*60);
                        //alert(minutes); 
			var minutes1 = String("0" + minutes).slice(-2);
                       // alert(minutes1); 
			var diff_day = hours1+" : "+minutes1;
                       // alert(diff_day); 
		        }
			else
			{
				var diff_day ="00 : 00";

			}
		}
//alert("diff_day:"+diff_day);
		frm.set_value("duration", diff_day);
		}
		});


frappe.ui.form.on("WTG Status Log", {
	end: function(frm) {
 //alert("end");
		if ((frm.doc.end == null || frm.doc.start ==null))
		{
			var diff_day = "0";

		}
		else
		{
			if (frm.doc.end>=frm.doc.start)
			{
				var now  = frm.doc.end;
				var then = frm.doc.start;
				var diff = moment.duration(moment(now).diff(moment(then)));
				var days = parseInt(diff.asDays()); 
				var hours1 = parseInt(diff.asHours()); 
				var hours = hours1 - days*24;  
				var minutes = parseInt(diff.asMinutes()); 
				minutes = minutes - (days*24*60 + hours*60); 
				var minutes1 = String("0" + minutes).slice(-2);
				var diff_day = hours1+" : "+minutes1;
		 	}
			else
			{
				var diff_day ="00 : 00";

			}
		}
	frm.set_value("duration", diff_day);
	}
});





frappe.ui.form.on("WTG Status Log", {
        before_save: function(frm, cdt, cdn) {
		var d = locals[cdt][cdn];
		if(d.wtg_name==null && d.group_wtg_name !=null && d.group_wtg_name.length >0)
		{
			 frappe.call({
					method: "insert_wtg", 
					doc:d,
					callback: function(r, rt) {
								if(r.message) {
									//alert("okkkkkk........");
								}
						
						}
					});
		}
	}
});


frappe.ui.form.on("WTG Status Log", {
        validate: function(frm, cdt, cdn) {
	   var d = locals[cdt][cdn];
		//alert("On Validate..   WTGNAME:"+d.wtg_name);
		if(d.wtg_name==null)
		{
		frappe.validated=false;
		frappe.set_route("List", "WTG Status Log"); 
		}
		else
		{
		frappe.validated=true;
               // frappe.set_route("List", "WTG Status Log"); 
		}
	}
});


frappe.ui.form.on("WTG Status Log", {
	after_save: function(frm) {
		console.log("after_save")
		frappe.set_route("List", "WTG Status Log");
	}
});

