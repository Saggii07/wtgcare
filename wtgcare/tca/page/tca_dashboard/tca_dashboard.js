//frappe.pages['tca-dashboard'].on_page_load = function(wrapper) {
//	var page = frappe.ui.make_app_page({
//		parent: wrapper,
//		title: 'TCA Dashboard',
//		single_column: true
//	});
//}

$.getScript("https://code.highcharts.com/highcharts.js",function(){
alert("TCA Dashboard");
	let current_datetime = new Date()
	let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() 
	document.getElementById("datetime").innerHTML = formatted_date;
      
        $(document).ready(function() 
               {
                  
	           setTimeout(function(){document.body.style.opacity="100";},500);
		   $("#mainPage").hide();
	       })
                var i;
 
 
               });
 
	     frappe.pages['tca-dashboard'].on_page_load = function(wrapper) {
              
		frappe.ui.make_app_page({
			parent: wrapper,
			title: __('TCA Dashboard'),
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
		this.page.set_title("TCA Dashboard");
		this.setup_filter();
               // this.setup_filter1();
		this.main_section.empty().append(frappe.render_template('tca_dashboard'));
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
					fieldtype: 'Link',
					fieldname: 'tca_schedule',
					options: 'TCA Schedule',
					label: __('TCA Schedule'),
				},
                                 {
                                       fieldtype: 'Link',
					fieldname: 'tca_activity',
					options: 'TCA Activity',
					label: __('Activity'),
                                  },

			
			],
			primary_action_label: __('Go'),
			primary_action: ({tca_schedule,tca_activity }) => {
                   	dialog.hide();
                        
                        this.tca_schedule = tca_schedule;

			this.tca_activity = tca_activity;

              
        
	
frappe.call({
		method: "wtgcare.tca.doctype.tca_data.tca_dashboard.get_data",
		args: {
			"tca_activity": tca_activity,
                        "tca_schedule": tca_schedule
			},
			callback: function(r1) {
    var myList5 = new Array(); 
  var myList7 = new Array(); 


if (r1.message) {
		$.each(r1.message, function(i,d1) {

                     myList5.push(d1[0]); 

                   //  myList6.push(d1[1]); 
                    myList7.push(d1[2]);   
 
                      $("#container8").hide();
                       $("#context").show();


		});
		}
//alert("working");
Highcharts.setOptions({
    colors: ['#FF8C00', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
});
//document.getElementById('container8').style.background = 'none';
Highcharts.chart('container', {
chart:
{
type: 'column',

},
 credits: {
   enabled: false
  },
    title: {
        text: 'Severity Wise Bifurcation Of Technical Defects',
style:{
   fontSize: '14px'
   }
    },
    labels: {
	style: {
		fontSize: '12px',
		}
	},

    subtitle: {
        //text: 'Source: powercon.in'
    },
plotOptions:{
        column: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
}
},
 xAxis: {
        categories:myList5,
        crosshair: true,
 labels: {
            skew3d: true,
            style: {
                fontSize: '10px'
            }
        }
    },
    yAxis: {
        title: {
           categories:myList7,
            text: 'count',
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
        name: 'Severity',
        data:myList7
        //label:myList6
        
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
  var myList5 = new Array(); 
  var myList6 = new Array(); 
    //var myList7 = new Array(); 
frappe.call({
		method: "wtgcare.tca.doctype.tca_data.tca_dashboard.get_data",
		args: {
			"tca_activity": tca_activity,
                         "tca_schedule": tca_schedule
			},
			callback: function(r1) {
//alert("working Pie");
//alert(r1.length);


//setTimeout(function(){ alert("Data not Available"); }, 5000);
if (r1.message) {
		$.each(r1.message, function(i,d1) {
//alert(alert(d1));
//alert(d1);
 myList5.push(d1[0]);
 //alert(myList5);
       var item = {}
     
        item ["name"] = d1[0];
        item ["y"] = d1[2];
  //alert(item);
        myList6.push(item);
    //  alert(myList6);
    $(document).ready(function () {
$("label[for='abc']").text(d1[1]);
    });
//  alert(myList6);
//myList6.push("{ 'name':'"+d1[0]+"' ,'y': '"+d1[1]+"' }"); 
//myList6.push("{"+ d1[0]+":"+d1[1]+"}"); 
//alert(myList6);
                 //   myList6.push(d1[1]); 
              //       myList7.push(d1[2]);   
                      $("#container8").hide();
                       $("#context").show();

//setTimeout(function(){ alert("Data not Available"); }, 5000);
//alert(myList6[0]['name']);
		});
		}

//$(function () {
     Highcharts.setOptions({
     colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263',      '#6AF9C4']
    });
    //return new Highcharts.Chart({
//Highcharts.setOptions({
  //  colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
    //    return {
      //      radialGradient: {
        //        cx: 0.5,
          //      cy: 0.3,
            //    r: 0.7
            //},
            //stops: [
              //  [0, color],
                //[1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            //]
        //};
    //})
//});

return new Highcharts.chart('container1', {
chart:
{
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
//}
},

 credits: {
    enabled: false
  },
    title: {
        text: 'Severity Wise Bifurcation Of Technical Defects'
,
style:{
   fontSize: '14px'
   }
 },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
 xAxis: {
        name:"Severity",
        crosshair: true,
 labels: {
            skew3d: true,
            style: {
                fontSize: '11px'
            }
        }
    },
    yAxis: {
        title: {
           categories:"Severity",
           // text: myList5
        },
style:{
   fontSize: '10px'
   },

        labels: {
            align: 'left',
            reserveSpace: true
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
       name: 'Severity',
       data:myList6,
        label:myList6
        
}]
 
,

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


    var myList8 = new Array(); 
   var myList9 = new Array(); 
    var myList10 = new Array(); 
frappe.call({
		method: "wtgcare.tca.doctype.tca_data.tca_dashboard.get_data_section",
		args: {
			"tca_activity": tca_activity,
                        "tca_schedule": tca_schedule
                         
			},
			callback: function(r1) {

if (r1.message) {
		$.each(r1.message, function(i,d1) {
//alert(alert(d1));
//alert(d1);
                     myList8.push(d1[0]); 

                   //  myList6.push(d1[1]); 
                    myList10.push(d1[2]);   
 
                      $("#container8").hide();
                       $("#context").show();

//setTimeout(function(){ alert("Data not Available"); }, 5000);

		});
		}
//alert(myList7);
Highcharts.setOptions({
    colors: ['#FF8C00', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
});
//document.getElementById('container8').style.background = 'none';
Highcharts.chart('container2', {
chart:
{
type: 'column',
//options3d:{
//enabled:true,
//alpha:10,beta:25,depth:70
//}
},
 credits: {
    enabled: false
  },
    title: {
        text: 'Section-Wise Bifurcation Of Technical Defects',
style:{
   fontSize: '14px'
   }
    },

    subtitle: {
        //text: 'Source: powercon.in'
    },
 plotOptions: {
               column: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
}
    },
 xAxis: {
        categories:myList8,
        crosshair: true,
 labels: {
            skew3d: true,
            style: {
                fontSize: '11px'
            }
        }
    },
    yAxis: {
        title: {
           categories:myList10,
            text: 'count'
        },

        labels: {
            align: 'left',
            reserveSpace: true
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },



    series: [{
        name: 'Section',
        data:myList10
        //label:myList6
        
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
   // var myList8 = new Array(); 
   //var myList9 = new Array(); 
    //var myList10 = new Array(); 
frappe.call({
		method: "wtgcare.tca.doctype.tca_data.tca_dashboard.get_data_section",
		args: {
			"tca_activity": tca_activity,
                        "tca_schedule": tca_schedule
			},
			callback: function(r1) {
//alert(r1);
//alert(r1.length);


//setTimeout(function(){ alert("Data not Available"); }, 5000);
if (r1.message) {
		$.each(r1.message, function(i,d1) {
//alert(alert(d1));
//alert(d1);
 myList8.push(d1[0]);
       var item = {}
        item ["name"] = d1[0];
        item ["y"] = d1[2];
        myList9.push(item);

//myList6.push("{ 'name':'"+d1[0]+"' ,'y': '"+d1[1]+"' }"); 
//myList6.push("{"+ d1[0]+":"+d1[1]+"}"); 
//alert(myList6);
                 //   myList6.push(d1[1]); 
              //       myList7.push(d1[2]);   
                      $("#container8").hide();
                       $("#context").show();

//setTimeout(function(){ alert("Data not Available"); }, 5000);
//alert(myList6[0]['name']);
		});
		}
//alert(myList6);
Highcharts.setOptions({
    colors: ['#FF8C00', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
});

//Highcharts.setOptions({
  //  colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
    //    return {
      //      radialGradient: {
        //        cx: 0.5,
          //      cy: 0.3,
            //    r: 0.7
            //},
           // stops: [
             //   [0, color],
               // [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            //]
        //};
    //})
//});
//document.getElementById('container8').style.background = 'none';
return new Highcharts.chart('container3', {
chart:
{
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
//}
},

 credits: {
    enabled: false
 },
    title: {
        text: 'Section-Wise Bifurcation Of Technical Defects',
style:{
   fontSize: '14px'
   }
    },

   // subtitle: {
        //text: 'Source: powercon.in'
    //},
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
 xAxis: {
        name:"Section",
        crosshair: true,
 labels: {
            skew3d: true,
            style: {
                fontSize: '12px'
            }
        }
    },
    yAxis: {
        title: {
           categories:"Section",
           // text: myList5
        },

        labels: {
            align: 'left',
            reserveSpace: true
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
       name: 'Saction',
       data:myList9,
        label:myList9
        
}]
 
,


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


    var myList11 = new Array(); 
   var myList12 = new Array(); 
    var myList13 = new Array(); 
frappe.call({
		method: "wtgcare.tca.doctype.tca_data.tca_dashboard.get_data_state",
		args: {
			"tca_activity": tca_activity,
                         "tca_schedule": tca_schedule
			},
			callback: function(r1) {
//alert(r1);
//alert(r1.length);


//setTimeout(function(){ alert("Data not Available"); }, 5000);
if (r1.message) {
		$.each(r1.message, function(i,d1) {
//alert(alert(d1));
//alert(d1);
                     myList11.push(d1[0]); 

                   //  myList6.push(d1[1]); 
                    myList13.push(d1[2]);   
 
                      $("#container8").hide();
                       $("#context").show();

//setTimeout(function(){ alert("Data not Available"); }, 5000);

		});
		}
//alert(myList7);
Highcharts.setOptions({
    colors: ['#FF8C00', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
});
//document.getElementById('container8').style.background = 'none';
Highcharts.chart('container4', {
chart:
{
type: 'column',
//options3d:{
//enabled:true,
//alpha:10,beta:25,depth:70
//}
},
 credits: {
    enabled: false
  },
    title: {
        text: 'Findings - Statistics',
style:{
   fontSize: '14px'
   }
    },

    subtitle: {
        //text: 'Source: powercon.in'
    },
plotOptions:{
        column: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
}
},
 xAxis: {
        categories:myList11,
        crosshair: true,
 labels: {
            skew3d: true,
            style: {
                fontSize: '11px'
            }
        }
    },
    yAxis: {
        title: {
           categories:myList13,
            text: 'count'
        },

        labels: {
            align: 'left',
            reserveSpace: true
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },


    series: [{
        name: 'Issue Category',
        data:myList13
        //label:myList6
        
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
   // var myList8 = new Array(); 
   //var myList9 = new Array(); 
    //var myList10 = new Array(); 
frappe.call({
		method: "wtgcare.tca.doctype.tca_data.tca_dashboard.get_data_state",
		args: {
			"tca_activity": tca_activity,
                         "tca_schedule": tca_schedule
			},
			callback: function(r1) {
//alert(r1);
//alert(r1.length);


//setTimeout(function(){ alert("Data not Available"); }, 5000);
if (r1.message) {
		$.each(r1.message, function(i,d1) {
//alert(alert(d1));
//alert(d1);
 myList11.push(d1[0]);
        var item = {}
        item ["name"] = d1[0];
        item ["y"] = d1[2];
        myList12.push(item);

//myList6.push("{ 'name':'"+d1[0]+"' ,'y': '"+d1[1]+"' }"); 
//myList6.push("{"+ d1[0]+":"+d1[1]+"}"); 
//alert(myList6);
                 //   myList6.push(d1[1]); 
              //       myList7.push(d1[2]);   
                      $("#container8").hide();
                       $("#context").show();

//setTimeout(function(){ alert("Data not Available"); }, 5000);
//alert(myList6[0]['name']);
		});
		}
//alert(myList6);
Highcharts.setOptions({
    colors: ['#FF8C00', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
});

//Highcharts.setOptions({
  //  colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
    //    return {
      //      radialGradient: {
        //        cx: 0.5,
          //      cy: 0.3,
            //    r: 0.7
            //},
            //stops: [
              //  [0, color],
                //[1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            //]
        //};
    //})
//});
//document.getElementById('container8').style.background = 'none';
return new Highcharts.chart('container5', {
chart:
{
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
//}
},

 credits: {
    enabled: false
 },
    title: {
        text: 'Findings - Statistics',
style:{
   fontSize: '14px'
   }
    },

   // subtitle: {
        //text: 'Source: powercon.in'
    //},
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
 xAxis: {
        name:"Issue Category",
        crosshair: true,
 labels: {
            skew3d: true,
            style: {
                fontSize: '12px'
            }
        }
    },
    yAxis: {
        title: {
           categories:"Issue Category",
           // text: myList5
        },

        labels: {
            align: 'left',
            reserveSpace: true
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

     series: [{
       name: 'Severity',
       data:myList12,
        label:myList12
        
}]
 
,


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


		}
		    });
	      dialog.show();
                     			
	  }
}
//tabWTG Asset
