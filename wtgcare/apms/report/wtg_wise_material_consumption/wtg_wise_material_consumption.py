import frappe
from frappe import _

def execute(filters=None):
    if not filters: filters = {}

    #validate_filters(filters)

    #columns = get_columns()
    item_map = get_item_details(filters)
    
    columns = [
        {
            'fieldname': 'wtg_name',
            'label': _('WTG Name'),
            'fieldtype': 'Data',
            'width': 100
        },
        {
            'fieldname': 'item_class',
            'label': _('Item Class'),
            'fieldtype': 'Data',
            'width': 80
        },
        {
            'fieldname': 'item_name',
            'label': _('Item Name'),
            'fieldtype': 'Link',
            'options': 'Item',
            'width': 300
        },
        {
            'fieldname': 'item_code',
            'label': _('Item Code'),
            'fieldtype': 'Data',
            'width': 100
        },
        {
            'fieldname': 'quantity',
            'label': _('Quantity'),
            'fieldtype': 'Int',
            'width': 80
        },
        {
            'fieldname': 'valuation',
            'label': _('Valuation'),
            'fieldtype': 'Currency',
            'width': 100
        }

    ]
    
    conditions = ""
	#if not filters.get("from_date"):
	#	frappe.throw(_("'From Date' is required"))

    if filters.get("from_date"):
        conditions += "and `tabService Report`.date >= %s"  %frappe.db.escape(filters.get("from_date"))

    if filters.get("to_date"):
        conditions += " and `tabService Report`.date <= %s" % frappe.db.escape(filters.get("to_date"))

    if filters.get("customer"):
        conditions += " and `tabService Report`.customer = %s" % frappe.db.escape(filters.get("customer"))

    if filters.get("site"):
        conditions += " and `tabService Report`.site = %s" % frappe.db.escape(filters.get("site"))

    if filters.get("service_nature"):
        conditions += " and `tabService Report`.service_nature = %s" % frappe.db.escape(filters.get("service_nature"))
    
    #frappe.throw(_(conditions))

    #else:
    #		frappe.throw(_("'Data' is required"))
   # frappe.throw(_(conditions))
        
      #  if filters.get("to_date"):
#		conditions += " and `tabService Report`.date <= '%s'" % frappe.db.escape(filters.get("to_date"))
#	else:
##		frappe.throw(_("'To Date' is required"))

#	if filters.get("item_group"):		
#		ig_details = frappe.db.get_value("Item Group", filters.get("item_group"), 
#			["lft", "rgt"], as_dict=1)
#			
#		if ig_details:
#			conditions += """ 
#				and exists (select name from `tabItem Group` ig 
#				where ig.lft >= %s and ig.rgt <= %s and item.item_group = ig.name)
#			""" % (ig_details.lft, ig_details.rgt)
		
#	if filters.get("item_code"):
#		conditions += " and sle.item_code = '%s'" % frappe.db.escape(filters.get("item_code"), percent=False)	
#
    #qry= """Select item_name AS "Item Name:Data:320" ,item AS "Item Code:Data:100", sum(quantity) AS "Frequency:Int:80" from `tabMaterial  Consume`  Join `tabService Report` ON `tabService Report`.name = `tabMaterial  Consume`.parent where 1=1 """+ conditions + """ GROUP BY item_name ORDER BY item_name"""

    qry= """Select `tabService Report`.wtg_name,`tabItem`.item_class,`tabMaterial Consume Table`.item_name ,`tabMaterial Consume Table`.item_code , sum(`tabMaterial Consume Table`.quantity),`tabItem`.valuation_rate*sum(`tabMaterial Consume Table`.quantity) from `tabMaterial Consume Table` Join `tabService Report` ON `tabService Report`.name = `tabMaterial Consume Table`.parent Join `tabItem` ON `tabMaterial Consume Table`.item_code =`tabItem`.item_code where 1=1 """+ conditions + """ GROUP BY `tabService Report`.wtg_name, `tabMaterial Consume Table`.item_name ORDER BY `tabService Report`.wtg_name,`tabMaterial Consume Table`.item_name"""
    #frappe.throw(qry)
    data = frappe.db.sql(qry)
    
    return columns, data

def get_item_details(filters):
    condition = '' 
    value = ()
    if filters.get("item_code"):
       condition = "where item_code=%s"
       value = (filters.get("item_code"),)
       msgprint(value);

