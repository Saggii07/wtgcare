$.getScript("https://code.highcharts.com/highcharts.js",function(){
alert("APMS Dashboard");
	let current_datetime = new Date()
	let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() 
	document.getElementById("datetime").innerHTML = formatted_date;
      
        $(document).ready(function() 
               {
                  
	           setTimeout(function(){document.body.style.opacity="100";},500);
		   $("#mainPage").hide();
	       })
                var i;
 
 //               function setColor(e, btn, color) {
//		   var target = e.target,
//		   count = +target.dataset.count;
//		   target.value = count === 1 ? "Arm" : 'Disarm';
//		   target.style.backgroundColor = count === 1 ? "#00b300" : '#FF0000';
//		   target.dataset.count = count === 1 ? 0 : 1;
//		}
//
//		$('#button').on('click', function(){
//		var parent_id = $(this).parent().parent().parent();
//		if ($(this).attr('value') == "Arm")
//		{
//		parent_id.css('background-color', '#cbe2b2');
//		}
//		else
//		{
//		parent_id.css('background-color', '#ffc0cb');
//		}
//		})
             //   RenderWidgets();
               });
 
	     frappe.pages['apms-dashboard'].on_page_load = function(wrapper) {
              
		frappe.ui.make_app_page({
			parent: wrapper,
			title: __('APMS Dashboard'),
			single_column: true
		});

		let custom_page = new CustomPage(wrapper);
		$(wrapper).bind('show', ()=> {
			custom_page.show();		
	      });	
}

class CustomPage {
	constructor(wrapper) {
		this.wrapper = $(wrapper);
		this.page = wrapper.page;
		this.main_section = this.wrapper.find('.layout-main-section');
	}

	show() {	
		this.user_id = frappe.session.user;
		this.user = frappe.user_info(this.user_id);
		this.page.set_title("APMS Dashboard");
		this.setup_filter();
		this.main_section.empty().append(frappe.render_template('apms_dashboard'));
	}
	setup_filter(){
		this.$user_search_button = this.page.set_secondary_action('Select', () => {
			this.show_filter_dialog();                                                    	
		});
	}
	show_filter_dialog(){
	
		let dialog = new frappe.ui.Dialog({
			title: __('Select'),
			fields: [
				{
					fieldtype: 'Select',
					fieldname: 'select_value',
					options: 'Today\nYesterday\nThis Week\nLast Week\nThis Month\nLast Month',
					label: __('Report Selector'),
				}
			],
			primary_action_label: __('Go'),
			primary_action: ({ select_value }) => {
                   	dialog.hide();
                        
			this.select_value = select_value;

			$(document).ready(
				function() {
					$('#select_value').text(select_value);
				}
			);

		
					  //  alert(customer);
				//var customer_title = document.getElementById('customer_title');
				//customer_title.innerHTML = customer;
                        //publishCommand(site+"/D101/output/R1/get","Status");
                //  var devicelist = new Array();
				//  var devicemodel;
    //options: 'Today\nYesterday\nThis Week\nLast Week\nThis Month\nLast Month',
			
	//options: 'today\nyesterday\nthis_week\nlast_week\nthis_month\nlast_month',
	var selectValue;
	  if (select_value=='Today')
	       {
			  var selectValue = 'today';
		   }
	  else if (select_value=='Yesterday')
	  {
		var selectValue = yesterday;
	 }
	 else if (select_value=='This Week')
	 {
	   var selectValue = 'this_week';
	}
	else if (select_value=='Last Week')
	{
	  var selectValue = 'last_week';
   }
   else if (select_value=='This Month')
   {
	 var selectValue = 'this_month';
  }
  else if (select_value=='Last Month')
  {
	var selectValue = 'last_month';
 }

 frappe.call({
	method: "wtgcare.apms.doctype.wtg_status_log.wtg-dashboard.get_total_open_status",
	args: {
		"day": selectValue
		},
		callback: function(r1) {
//alert(r1);
//alert(r1.length);


var myList40 = new Array(); 
var myList41 = new Array(); 
var myList16 = new Array(); 
//setTimeout(function(){ alert("Data not Available"); }, 5000);
if (r1.message) {
	$.each(r1.message, function(i,d1) {
//alert("okkkkk11111");
				 myList40.push(d1[0]); 
				 myList41.push(d1[1]);  
				  $("#container8").hide();
				   $("#context").show();
//var ttl_cnt = d1[0]+":"d1[1]
myList16.push((d1[0]+":"+d1[1]));
//setTimeout(function(){ alert("Data not Available"); }, 5000);
//alert(d1[1]);
	});
	}
$("label[for='PSLog']").text(myList40);
}
});



frappe.call({
	method: "wtgcare.apms.doctype.wtg_status_log.wtg-dashboard.get_open_hoto",
	args: {
		"day": selectValue
		},
		callback: function(r1) {
//alert(r1);
//alert(r1.length);


var myList40 = new Array(); 
var myList41 = new Array(); 
var myList16 = new Array(); 
//setTimeout(function(){ alert("Data not Available"); }, 5000);
if (r1.message) {
	$.each(r1.message, function(i,d1) {
//alert("okkkkk11111");
				 myList40.push(d1[0]); 
				 myList41.push(d1[1]);  
				  $("#container8").hide();
				   $("#context").show();
//var ttl_cnt = d1[0]+":"d1[1]
myList16.push((d1[0]+":"+d1[1]));
//setTimeout(function(){ alert("Data not Available"); }, 5000);
//alert(d1[1]);
	});
	}
$("label[for='hoto']").text(myList41);
}
});

frappe.call({
	method: "wtgcare.apms.doctype.wtg_status_log.wtg-dashboard.get_open_status",
	args: {
		"day": selectValue
		},
		callback: function(r1) {
//alert(r1);
//alert(r1.length);


var myList5 = new Array(); 
var myList6 = new Array(); 
 var myList16 = new Array(); 
//setTimeout(function(){ alert("Data not Available"); }, 5000);
if (r1.message) {
	$.each(r1.message, function(i,d1) {
				 myList5.push(d1[0]); 
				 myList6.push(d1[1]);  
				  $("#container8").hide();
				   $("#context").show();
//var ttl_cnt = d1[0]+":"d1[1]
myList16.push((d1[0]+":"+d1[1]));
//setTimeout(function(){ alert("Data not Available"); }, 5000);

	});
	}
$("label[for='OpenStatusCnt']").text(myList16);
}
});



				frappe.call({
					method: "wtgcare.apms.doctype.wtg_status_log.wtg-dashboard.get_data",
					args: {
						"day": selectValue
						},
						callback: function(r1) {
			//alert(r1);
			//alert(r1.length);
			
			
				var myList5 = new Array(); 
				var myList6 = new Array(); 
				 var myList16 = new Array(); 
			//setTimeout(function(){ alert("Data not Available"); }, 5000);
			if (r1.message) {
					$.each(r1.message, function(i,d1) {
								 myList5.push(d1[0]); 
								 myList6.push(d1[1]);  
								  $("#container8").hide();
								   $("#context").show();
			//var ttl_cnt = d1[0]+":"d1[1]
			myList16.push((d1[0]+":"+d1[1]));
			//setTimeout(function(){ alert("Data not Available"); }, 5000);
			
					});
					}
			$("label[for='TotalStatusCnt']").text(myList16);
			
			Highcharts.setOptions({
				colors: ['#0250b0', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
			});
			//Highcharts.setOptions({
			  //  colors: ['#495541', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
			//});
			//document.getElementById('container8').style.background = 'none';
			Highcharts.chart('container', {
			chart:
			{
			type: 'column'
			},
			 credits: {
				enabled: false
			  },
				title: {
					text: 'Root cause Behind Fault',
			style:{
			   fontSize: '15px'
			   }
				},
			
				subtitle: {
					//text: 'Source: powercon.in'
				},
			 xAxis: {
					categories:myList5,
					crosshair: true,
			style:{
			   fontSize: '10px'
			   }
				},
				yAxis: {
					title: {
						text: 'Root Cause Count',
				  
			   style:{
			   fontSize: '10px'
			   }
			}
			 },
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle'
				},
			
				plotOptions: {
					column: {
						dataLabels: {
							enabled: true
						},
						enableMouseTracking: false
			}
			   },
			
				series: [{
					name: 'Root Cause',
					data:myList6
				}],
			
				responsive: {
					rules: [{
						condition: {
							maxWidth: 500
						},
						chartOptions: {
							legend: {
								layout: 'horizontal',
								align: 'left',
								verticalAlign: 'bottom'
							}
						}
					}]
				}
			});
			}
			});
			
			
			
			frappe.call({
					method: "wtgcare.apms.doctype.wtg_status_log.wtg-dashboard.get_action_taken",
					args: {
						"day": selectValue
						},
						callback: function(r1) {
				var myList7 = new Array(); 
				var myList8 = new Array(); 
			//setTimeout(function(){ alert("Data not Available"); }, 5000);
			if (r1.message) {
					$.each(r1.message, function(i,d1) {
								 myList7.push(d1[0]); 
								 myList8.push(d1[1]);  
						  $("#container8").hide();
								  $("#context").show();
			
					});
					}
			//alert(myList7);
			Highcharts.chart('container1', {
			chart:
			{
			type: 'column'
			},
			 credits: {
				enabled: false
			  },
				title: {
					text: 'Action Taken',
					style:{
						  fontSize: '15px'
						  }
				},
			
				subtitle: {
					//text: 'Source: powercon.in'
				},
			 xAxis: {
					categories:myList7,
					crosshair: true,
			style:{
			   fontSize: '10px'
			   }
				},
				yAxis: {
					title: {
						text: 'Action Taken Count',
			style:{
			   fontSize: '10px'
			   }
					}
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle'
				},
			
				plotOptions: {
						   column: {
						dataLabels: {
							enabled: true
						},
						enableMouseTracking: false
			}
				},
			
				series: [{
					name: 'Action Taken',
					data:myList8
				}],
			
				responsive: {
					rules: [{
						condition: {
							maxWidth: 500
						},
						chartOptions: {
							legend: {
								layout: 'horizontal',
								align: 'left',
								verticalAlign: 'bottom'
							}
						}
					}]
				}
			});
			}
			})
			
			
			frappe.call({
					method: "wtgcare.apms.doctype.wtg_status_log.wtg-dashboard.get_wtg",
					args: {
						"day": selectValue
						},
						callback: function(r1) {
				var myList9 = new Array(); 
				var myList10 = new Array(); 
			//setTimeout(function(){ alert("Data not Available"); }, 5000);
			if (r1.message) {
					$.each(r1.message, function(i,d1) {
								 myList9.push(d1[0]); 
								 myList10.push(d1[1]);  
						$("#container8").hide();
								$("#context").show();
			
					});
					}
			//alert(myList9);
			Highcharts.chart('container2', {
			chart:
			{
			type: 'column'
			},
			 credits: {
				enabled: false
			  },
				title: {
					text: 'WTG wise fault count',
			style:{
			   fontSize: '15px'
			   }
				},
			
				subtitle: {
					//text: 'Source: powercon.in'
				},
			 xAxis: {
					categories:myList9,
					crosshair: true,
			style:{
			   fontSize: '10px'
			   }
				},
				yAxis: {
					title: {
						text: 'Fault Count',
				style:{
			   fontSize: '10px'
			   }
			}
			},
			
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle'
				},
			
				plotOptions: {
			
					column: {
						dataLabels: {
							enabled: true
						},
						enableMouseTracking: false
			}
				},
			
				series: [{
					name: 'WTG Name',
					data:myList10
				}],
			
				responsive: {
					rules: [{
						condition: {
							maxWidth: 500
						},
						chartOptions: {
							legend: {
								layout: 'horizontal',
								align: 'left',
								verticalAlign: 'bottom'
							}
						}
					}]
				}
			});
			}
			})
			
			
			
			frappe.call({
					method: "wtgcare.apms.doctype.wtg_status_log.wtg-dashboard.get_wtg_status",
					args: {
						"day": selectValue
						},
						callback: function(r1) {
				var myList11 = new Array(); 
				var myList12 = new Array(); 
			//setTimeout(function(){ alert("Data not Available"); }, 5000);
			if (r1.message) {
					$.each(r1.message, function(i,d1) {
								 myList11.push(d1[0].split('(')[0]); 
								 myList12.push(d1[1]);  
						  $("#container8").hide();
								  $("#context").show();
			
					});
					}
			//alert(myList11);
			Highcharts.chart('container3', {
			chart:
			{
			type: 'column'
			},
			 credits: {
				enabled: false
			  },
			
				title: {
					text: 'Fault Occurance',
			style:{
			   fontSize: '15px'
			   }
				},
			
				subtitle: {
				   // text: 'Source: powercon.in'
				},
			 xAxis: {
					categories:myList11,
					crosshair: true,
			  style:{
			   fontSize: '10px'
			   }
			  },
				yAxis: {
					title: {
						text: 'Fault Occurance Count',
					
				style:{
			   fontSize: '10px'
			   }
			}
			},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle'
				},
			
				plotOptions: {
					column: {
						dataLabels: {
							enabled: true
						},
						enableMouseTracking: false
			}
				},
			
				series: [{
					name: 'WTG Fault',
					data:myList12
				}],
			
				responsive: {
					rules: [{
						condition: {
							maxWidth: 500
						},
						chartOptions: {
							legend: {
								layout: 'horizontal',
								align: 'left',
								verticalAlign: 'bottom'
							}
						}
					}]
				}
			});
				}
			});
			
	//		});
//		frappe.call({
//			method:"frappe.client.get_list",
//			args:{
//				doctype:"Device",
		//	filters: [["site", "=", site]],
//				fields: ["device_code","device_model"]
//			},
//			async:false,
//			callback: function(r1) {  
//			if (r1.message) {
//				$.each(r1.message, function(i,d1) {
//				     var val1=d1.device_code;
//				     devicemodel=d1.device_model;
//				     devicelist.push(val1);
//				});
//				}
//
//			}
//		});

	//	var sensorlist = new Array();
//		var relaylist = new Array();
//		frappe.call({
//			method:"frappe.client.get_list",
//			args:{
//				doctype:"IO Details",
//			filters: [["parent", "=", devicemodel]],
//				fields: ["model_number","type"]
//			},
//			async:false,
//			callback: function(r1) { 
//		   
//			if (r1.message) {
//				$.each(r1.message, function(i,d1) {
//				     var val1=d1.model_number;
//				     var val2=d1.type;
//				    if (val2 == "Input")
//				       {
//				        sensorlist.push(val1);
//				       }
//				   else if (val2 == "Output")
//				        {
//				         relaylist.push(val1);
//				        }
//				  
//				});
//				}
//			}
//		});
                                   
//	  $("#grid-root").empty();
//	  $("#wDA").empty();
//	  $("#wDO").empty();
//	  $("#wTA").empty();
//	  $("#wTD").empty();
//	  $("#wDOUT").empty();
//	  $("#wPie").empty();

	  //DestroyWidget();
           //   $("#grid-root").ready(function() {
                 // var topic1= "Khandke/D101/HB/D";
                  //suscribeCommand(topic1);
                 
             //    publishCommand(site+"/D101/output/R1/get","Status");
           
              //});
              

//	   for (i = 0; i < devicelist.sort().length; i++) 
//		             {
//
//		   var j,k;
//		   for (j = 0; j < sensorlist.sort().length; j++) 
//		            {
//
//		                 CreateWidget({
//		                    bindto: "w"+devicelist[i]+sensorlist[j],
//		                    datastream: site+"/"+devicelist[i]+"/input/"+sensorlist[j],
//		                    type: "Sensor",
//		                     });
//		             }
//		   for (k = 0; k < relaylist.sort().length; k++) 
//		            {
//		                 CreateWidget({
//		                    bindto: "w"+devicelist[i]+relaylist[k],
//		                    datastream: site+"/"+devicelist[i]+"/input/"+relaylist[k],
//		                    type: "Sensor",
//		                     });
//		             }
//
//				CreateWidget({
//				    bindto: "w"+devicelist[i]+"D",
//				    datastream: site+"/"+devicelist[i]+"/input/D",
//				    type: "Sensor",
//				});
//				CreateWidget({
//				    bindto: "w"+devicelist[i]+"HB",
//				    datastream: site+"/"+devicelist[i]+"/HB/D",
//				    type: "heartbeat",
//				});
                                   
//			     }
//				CreateWidget({
//				    bindto: "wDA",
//				    datastream: site+"/DA",
//				    type: "currencycard",
//				});
//				CreateWidget({
//				    bindto: "wDOUT",
//				    datastream: site+"/DOUT",
//				    type: "currencycard",
//				});
//				CreateWidget({
//				    bindto: "wTA",
//				    datastream: site+"/TA",
//				    type: "currencycard",
//				});
//				CreateWidget({
//				    bindto: "wTD",
//				    datastream: site+"/TD",
//				    type: "currencycard",
//				});
//				CreateWidget({
//				    bindto: "wDO",
//				    datastream: site+"/DO",
//				    type: "currencycard",
//				});
//				CreateWidget({
//		                    bindto: "wPie",
//		                    datastream: site+"/device_pie",
//		                    type: "piechart",
//		                    label: "",
//		                    color: ['#2E8B57', '#DC143C', '#707070'],
//		                    height: 120,
//				});
//                 
	                    
//		            RenderWidgets();
                            

//		            var site_title = document.getElementById('site_title');
//		            site_title.innerHTML = site;
//		            
//			    var output = document.getElementById('grid-root');
//			    var i;
//			    var val="";
//
//			    for (i = 0; i < devicelist.sort().length; i++) {
//			      if(!document.getElementById('grid-item'+i))
//				{
                                 
//				    var block = document.createElement("div");
//				    var device_row = document.createElement("div");
//				    var device_icon = document.createElement("span");
//				    var device_name = document.createElement("div");
//				    var sensor_row = document.createElement("div");
//				    var relay_row = document.createElement("div");
//				    var count_row = document.createElement("div");
//				    var align_left = document.createElement("div");
//				    var door_count = document.createElement("div");
//				    var alarm_count = document.createElement("div");
//				    var d_inline1 = document.createElement("div");
//				    var d_inline2 = document.createElement("div");
//				    var button1 = document.createElement("div");
//                                   var hb = document.createElement("div");
                                   // var device_status = document.createElement("div");
//
//				    var arm_btn = document.createElement("input");
//                                    var refresh_btn = document.createElement("button");
//                                   var refresh_icon = document.createElement("span");
//				    block.setAttribute("id","gi-"+devicelist[i]+"D");
//				    block.setAttribute("class","grid-item");
//				    device_row.setAttribute("id","device-row"+i);
//				    device_row.setAttribute("class","row device-row");
//				    block.appendChild(device_row);
//				    device_icon.setAttribute("id","device-icon"+i);
//				    device_icon.setAttribute("class","glyphicon glyphicon-dashboard blue col-sm-2");
//		                    device_name.setAttribute("style","margin-top:3px;font-weight: bold;font-size:16px;");
//		                    device_name.setAttribute("class","col-sm-2");
  //                                  hb.setAttribute("id","w"+devicelist[i]+"HB");
                                    //hb.setAttribute("data-text","status");
                                     
//				    device_name.innerHTML=devicelist[i];
//				    device_row.appendChild(device_icon);
//				    device_row.appendChild(device_name);
//                                  
//				    sensor_row.setAttribute("id","sensor_row");
//				    sensor_row.setAttribute("class","sensor_row row");
//				    sensor_row.setAttribute("style","margin:8px;");
//				    block.appendChild(sensor_row);
		                   
 //                                  var dict = {"S1": 'M',"S2": 'L',"S3": 'D',"S4":'V'};
//		                   var j;
		                 
//		                   for (j = 0; j < sensorlist.sort().length; j++) 
//		                   {
//		                      if(!document.getElementById('sensor_'+j))
//				      {
//		                        var sensor_block = document.createElement("div");
//		                        var sensor_name = dict[sensorlist[j]];
//                                        sensor_block.setAttribute("id","w"+devicelist[i]+sensorlist[j]);
//                                       sensor_block.setAttribute("class","col-sm-2 d-inline p-mar-sensor border sensor-name row");                              
//                                        sensor_block.setAttribute("style","width:22%");        
//                                       sensor_block.innerHTML = sensor_name;
//                                        sensor_row.appendChild(sensor_block); 
//		                      }
//		                    }

//				    relay_row.setAttribute("id","relay_row");
//				    relay_row.setAttribute("class","sensor_row row");
//				    relay_row.setAttribute("style","margin:4px;");
//				    block.appendChild(relay_row);

//		                   var k;
//		                   for (k = 0; k < relaylist.sort().length; k++) 
//		                   {
//		                      if(!document.getElementById('relay_'+k))
//				      {
//		                        var relay_block = document.createElement("input");
		                      
//		                        relay_block.setAttribute("id","w"+devicelist[i]+relaylist[k]);
//		                        relay_block.setAttribute("class","col-sm-2 d-inline p-mar-sensor border sensor-name row");                              
//                                        relay_block.setAttribute("type","button");
//		                        relay_block.setAttribute("style","width:22%"); 
//		                        relay_block.setAttribute("text-align","center");
//		                        relay_block.setAttribute("value",relaylist[k]);     
//		                        relay_block.innerHTML = relaylist[k];
//		                        relay_row.appendChild(relay_block);
//				      }
//		                   }
//                                   count_row.setAttribute("class","row"); 
//				   count_row.setAttribute("style","margin:4px;"); 
//				   align_left.setAttribute("align","left");			    
//				   align_left.setAttribute("style","font-size:small;margin:2px;");
//				   door_count.setAttribute("id","doorcnt-"+i); 
//				   alarm_count.setAttribute("id","alarmcnt-"+i);
//				   door_count.setAttribute("class","d-inline col-sm-2");   
//				   door_count.innerHTML = "<table><tr><td>10&nbsp;&nbsp;&nbsp;&nbsp;</td><td>15</td></tr><tr><td>M&nbsp;&nbsp;&nbsp;&nbsp;</td><td>A</td></tr></table>";
//				   button1.setAttribute("class","col-xl-4 sensor-btn sb-1");
//				   arm_btn.setAttribute("type","button");
//				   arm_btn.setAttribute("id","sb-"+devicelist[i]+"D");      
//				   arm_btn.setAttribute("value","Arm");
//				   arm_btn.setAttribute("style","color:white;border-radius: 4px;height: 30px;font-size: 10px;margin-top:10px;margin-left:25px;");
//				   arm_btn.setAttribute("onclick","setColor(event, 'button', '#101010')");
//				   arm_btn.setAttribute("data-count","1");
//				   arm_btn.setAttribute("width","20px");
                                   

                                   //refresh_btn.setAttribute("type","button");
//                                   refresh_btn.setAttribute("style","border-radius: 15px;margin-left:35%;");
//				   refresh_btn.setAttribute("id","rb-"+devicelist[i]+"HBD");  
//
//				   refresh_icon.setAttribute("class","glyphicon glyphicon-refresh");
                                  // refresh_icon.innerHTML="&#xe031;";
				  // refresh_btn.setAttribute("style","color:black;border-radius: 4px;height: 15px;font-size: 7px;margin-top:10px;margin-left:20px;");
				   //refresh_btn.setAttribute("onclick","setColor(event, 'button', '#101010')");
//				   refresh_btn.setAttribute("data-count","1");
//				   refresh_btn.setAttribute("width","20px");     
  //                                 refresh_btn.appendChild(refresh_icon);
    //                               //device_row.appendChild(hb);rb-D101D
	//			   align_left.appendChild(door_count);
	//			   align_left.appendChild(alarm_count);
	//			   align_left.appendChild(d_inline1);
	//			   align_left.appendChild(d_inline2);
	//			   count_row.appendChild(align_left)
	//			   count_row.appendChild(align_left);
	//			   align_left.appendChild(button1);
	//			   count_row.appendChild(arm_btn);
      //                             device_row.appendChild(refresh_btn);
		//		   block.appendChild(count_row);
		//		   output.appendChild(block);
          //                        
            //                       $("#sb-"+devicelist[i]+"D").click(function()
              //                       {
                //                        var $input = $(this);
                  //                      var topic1 = site+"/"+$input[0]["id"].substring(3,7)+"/output/D/set";
                    //                    if ($input[0]["value"]=="Dis-arm")
                      //                   {
                        //                    var message1 = "32";
                            //             }
                          //              else
                              //           {
                                //            var message1 = "00";
                                  //       } 
                                    //     if (confirm('Are you want '+$input[0]["value"]+' '+$input[0]["id"].substring(3,7)+' ?')) 
                                      //      {
                                       //         publishCommand(topic1,message1);
                                        //    } 
                                     //});
                                   
                                //     $("#rb-"+devicelist[i]+"HBD").click(function()
                                //     {
                                 //       var $input = $(this);
                                //        var topic1 = site+"/"+$input[0]["id"].substring(3,7)+"/output/R1/get";
                                //        alert(topic1);
                                       // if ($input[0]["value"]=="Dis-arm")
                                      //   {
                                       //     var message1 = "32";
                                      //   }
                                      //  else
                                      //   {
                                       //     var message1 = "00";
                                        // } 
                                        // if (confirm('Are you want '+$input[0]["value"]+' '+$input[0]["id"].substring(3,7)+' ?')) 
                                  //    //     {
                                   //             publishCommand(topic1,"Status");
                                        //    } 
                                   //  });

                                  // for (k = 0; k < relaylist.sort().length; k++) 
		                    // {
                              //          $("#w"+devicelist[i]+relaylist[k]).click(function()
                              //            {
                                //             var $input = $(this);
                                //             var topic1 = site+"/"+$input[0]["id"].substring(1,5)+"/output/"+$input[0]["id"].substring(5,7) +"/set";
                                             //alert(topic1);
                                                                       
                                //             if ($input[0]["name"]=="on")
                                //              {
                                //                  var message1 = "010"+$input[0]["id"].substring(6,7); 
                                //              }
                                //             else
                                //              {
                                //                  var message1 = "110"+$input[0]["id"].substring(6,7);  
                                //              }
                                //             if (confirm('Are you want '+$input[0]["name"]+$input[0]["value"]+' of '+$input[0]["id"].substring(1,5)+' ?')) 
                                //                 {
                                //                   publishCommand(topic1,message1);
                                //                 } 
				        //  });
		                //     }   
			       // }
			    //}
		
			}
		    });
	      dialog.show();
                         
	  }
}

