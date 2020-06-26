//-----Swapnil----Stock--Start---

frappe.ui.form.on("Service Report", {
        wtg_name: function(frm, cdt, cdn) {
        var d = locals[cdt][cdn];
frappe.call({
	method:"frappe.client.get_list",
	args:{
		doctype:"Site",
        filters: [["site_name", "=", d.site_name]],
		fields: ["default_warehouse","faulty_warehouse"],
	},
        async:false,
	callback: function(r1) {    
	if (r1.message) {
		$.each(r1.message, function(i,d1) {
                      var val1=d1.default_warehouse;
                      var val2=d1.faulty_warehouse;
                    //alert(val1);
                    //alert(val2);
                      frappe.meta.get_docfield("Material Consume Table", "from_warehouse").default = val1;
                      frappe.meta.get_docfield("Reversal of Spare Table", "to_warehouse").default = val2;
		});
		}

	}
});
},
 onload: function(frm, cdt, cdn) {
        var d = locals[cdt][cdn];
frappe.call({
	method:"frappe.client.get_list",
	args:{
		doctype:"Site",
        filters: [["site_name", "=", d.site_name]],
		fields: ["default_warehouse","faulty_warehouse"],
	},
        async:false,
	callback: function(r1) {    
	if (r1.message) {
		$.each(r1.message, function(i,d1) {
                      var val1=d1.default_warehouse;
                      var val2=d1.faulty_warehouse;
                      frappe.meta.get_docfield("Material Consume Table", "from_warehouse").default = val1;
                      frappe.meta.get_docfield("Reversal of Spare Table", "to_warehouse").default = val2;
		});
		}

	}
});
}
});




//-----Swapnil----Stock---End--



frappe.ui.form.on('Material Consume Table', {
	from_warehouse: function(frm) {

//alert("ok....");
frappe.call({
	method:"frappe.client.get_list",
	args:{
		doctype:"Stock Ledger Entry",
        filters: [["warehouse", "=", frm.doc.from_warehouse]],
		fields: ["item_code"],
	},
        async:false,
	callback: function(r1) {    
	if (r1.message) {
		$.each(r1.message, function(i,d1) {
                      var val1=d1.item_code;
                        alert(val1);
		});
		}

	}
});


}
});




frappe.ui.form.on('Service Report', {
	onload: function(frm) {
		frm.set_query('fault_status', function() {
			return {
				filters: [
					['WTG Status Log', 'wtg_name', '=', frm.doc.wtg_name],
                                        ['WTG Status Log', 'status1', '=', 'Open']
				]
			}
		});
}
});
frappe.ui.form.on('Service Report', {
	wtg_name: function(frm) {
		frm.set_query('fault_status', function() {
			return {
				filters: [
					['WTG Status Log', 'wtg_name', '=', frm.doc.wtg_name],
                                        ['WTG Status Log', 'status1', '=', 'Open']
				]
			}
		});
}

});

frappe.ui.form.on('Service Report', {
	service_nature: function(frm) {
		frm.set_query('pm_activity', function() {
			return {
				filters: [
					['PM Activity', 'wtg_name', '=', frm.doc.wtg_name],    
                                        ['PM Activity', 'status', '=', 'Pending'],
				]
			}
		});
}

});

frappe.ui.form.on('Service Report', {
	wtg_name: function(frm) {
		frm.set_query('pm_activity', function() {
			return {
				filters: [
					['PM Activity', 'wtg_name', '=', frm.doc.wtg_name],
                                        ['PM Activity', 'status', '=', 'Pending'],
				]
			}
		});
}

});

frappe.ui.form.on("Service Report", "after_save", function(frm) {
if(frm.doc.service_nature != "PM")
{
var docfield = "status1";
var docname = frm.doc.fault_status;
var statusValue ="Open-Service Log Generated";
var date1;
if(frm.doc.service_status =="Totally Completed"){
        statusValue="Closed";
        date1 = frm.doc.turbine_operational_status[0]["wtg_start"];
}
else if(frm.doc.service_status =="Completed with Obs. To be  during PM")
{
	statusValue="Partialy Closed";

        date1 = frm.doc.turbine_operational_status[0]["wtg_start"];


}
frappe.call({ "method": "frappe.client.set_value", "args": { "doctype": "WTG Status Log", "name": docname, "fieldname": "status1", "value": statusValue } }); 
frappe.call({ "method": "frappe.client.set_value", "args": { "doctype": "WTG Status Log", "name": docname, "fieldname": "end", "value": date1 } }); 
}
else
{
//var docfield = "status";
var docname = frm.doc.pm_activity;
//alert(docname);
var statusValue ="Service Order Assigned";
//var date1;

//if(frm.doc.service_status =="Totally Completed"){
//        statusValue="Completed";
//        date1 = frm.doc.turbine_operational_status[0]["wtg_stop"];
//}
//else if(frm.doc.service_status =="Completed with Obs. To be  during PM")
//{
//	statusValue="Partially Completed";
//        date1 = frm.doc.turbine_operational_status[0]["wtg_stop"];
//}
//alert(date1);
frappe.call({ "method": "frappe.client.set_value", "args": { "doctype": "PM Activity", "name": docname, "fieldname": "status", "value": statusValue } }); 
}
});



frappe.ui.form.on("Service Report", "after_save", function(frm) {
var docname = frm.doc.pm_activity;
//alert("ok.......");
//alert(frm.doc.creation);
//alert("ok.....")
if (frm.doc.service_nature == "PM")
{
frappe.call({ "method": "frappe.client.set_value", "args": { "doctype": "PM Activity", "name": docname, "fieldname": "service_log", "value": frm.doc.name } }); 
frappe.call({ "method": "frappe.client.set_value", "args": { "doctype": "PM Activity", "name": docname, "fieldname": "start_date", "value": frm.doc.creation } }); 
}
});




frappe.ui.form.on('Service Report', {
    refresh: function(frm) {
if (frappe.user.has_role("FAPO") == true || frappe.user.has_role("Area Incharge") == true || frappe.user.has_role("PM Lead") == true)
{
      cur_frm.add_custom_button(__('Checking Report'), function(){
                                 frappe.set_route("Form", "PM Activity", frm.doc.pm_activity)
		 }).addClass("btn-primary");
}
  }
});






frappe.ui.form.on("Service Report", {
         refresh: function(frm, cdt, cdn) {
if (frappe.user.has_role("FAPO") == true || frappe.user.has_role("Area Incharge") == true)
{
         var d = locals[cdt][cdn]; 
frappe.call({
	method:"frappe.client.get_list",
	args:{
		doctype:"PM Activity",
    filters: [["name", "=", d.pm_activity]],
		fields: ["measurement_log","pm_type"]
	},
        async:false,
	callback: function(r1) {  
	if (r1.message) {
		$.each(r1.message, function(i,d1) {
                      var val1=d1.measurement_log;
                      var val2=d1.pm_type;
                           cur_frm.add_custom_button(__('Measurement Log'), function(){
                               if (val2 == "Electrical")
                                   {
                                 frappe.set_route("Form", "PM Electrical Measurement Log", val1);
                                   }
                                else if (val2=="Mechanical")
                                   {
                                 frappe.set_route("Form", "PM Mechanical Measurement Log", val1);
                                   }
                                else
                                   {
                                 alert("Measurement Log Not Applicable");
                                   }
                            
		 }).addClass("btn-primary");                   

		});
		}
	}
});
}
}
});


//cur_frm.page.add_action_item(__("Review"), function() {
//	frappe.msgprint("Reviewed");
//	cur_frm.trigger('Review');
//});


//$("[data-label='Review']").click(function(){
//     alert("you have clicked it");
//});

frappe.ui.form.on('Service Report', {
    refresh: function(frm) {
if (frappe.user.has_role("Site Material Incharge") == true)
{
    var docname = frm.doc.pm_activity;
    // cur_frm.add_custom_button(__('Review'), function(){
    cur_frm.page.add_action_item(__("Review"), function() {
                               // frappe.set_route("Form", "PM Activity", frm.doc.pm_activity)
//frappe.call({ "method": "frappe.client.set_value", "args": { "doctype": "PM Activity", "name": docname, "fieldname": "workflow_state", "value": "Pending for TSO Aproval" } }); 
//cur_frm.trigger('Review');
//frm.remove_custom_button('Review');
//frappe.validated = false;
//frm.remove_custom_button("Review", 'Action');
        frappe.call({
		method: "wtgcare.wtg_maintenance.doctype.pm_activity.pm_activity.change_pm_activity_status",
		args: {
			"pm_activity": frm.doc.pm_activity,
			},
			callback: function(r1) {
	       if(r.message) {
                                 if (r.message != "")
                                 {
                                // frappe.set_route("Form", "Service Report", r.message)
           
                                 }
			     }			
			}
		 });

		 });
//frm.save_disabled=false;
//frm.page.set_primary_action();
//frm.refresh();

}
  }
});







frappe.ui.form.on('Service Report', {
	onload: function(frm) {
if (frappe.user.has_role("FAPO") == true || frappe.user.has_role("Area Incharge") == true)
{
//alert("ok....");
frm.print_doc();
}
else
{
//alert("None...");
}
}
});


