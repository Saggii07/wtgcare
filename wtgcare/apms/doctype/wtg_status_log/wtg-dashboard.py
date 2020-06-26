# -*- coding: utf-8 -*-
# Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt



from __future__ import unicode_literals
import frappe
from datetime import date
from datetime import timedelta
import time
import datetime
from frappe.model.document import Document

#class wtg-dashboard(Document):
#	pass

@frappe.whitelist(allow_guest=False)
def get_data(day):
    if day == "today":
        start_date1 = date.today()
        start_date2 = date.today() + timedelta(days=1)
        vars = frappe.db.sql("""Select root_cause,count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <  %s  GROUP BY root_cause""",(start_date1,start_date2))
      #  vars1 = frappe.db.sql("""Select action_taken,count(action_taken) as "action_taken" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <  %s) and action_taken !=''  GROUP BY action_taken""",(start_date1,start_date2))
        return vars


    elif day == "yesterday":
        start_date1 = date.today() + timedelta(days=-1)
        start_date2 = date.today()
        vars = frappe.db.sql("""Select root_cause,count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <  %s  GROUP BY root_cause""",(start_date1,start_date2))
        return vars


    elif day == "last_month":
        now = time.localtime()
        last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        first=last.replace(day=1)    
        start_date1 = first     
        start_date2 = last
        vars = frappe.db.sql("""Select root_cause,count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <=  %s  GROUP BY root_cause""",(start_date1,start_date2))
        return vars

    elif day == "this_week":
        #now = time.localtime()
        today1 = date.today()
        #dt=datetime.strptime(today,'%Y-%m-%d')
        start = today1-timedelta(days=today1.weekday())
        end = start+timedelta(days=6)
        #start = today1+timedelta(-today1.weekday(),weeks=-1)
        #end = today1+timedelta(-today1.weekday()-1)
 
       # last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        #first=last.replace(day=1)    
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select root_cause,count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <=  %s  GROUP BY root_cause""",(start_date1,start_date2))
        return vars

    elif day == "last_week":
        #now = time.localtime()
        today1 = date.today()
        #dt=datetime.strptime(today,'%Y-%m-%d')
        #start = today1-timedelta(days=today1.weekday())
        #end = start+timedelta(days=6)
        start = today1+timedelta(-today1.weekday(),weeks=-1)
        end = today1+timedelta(-today1.weekday()-1)
 
       # last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        #first=last.replace(day=1)    
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select root_cause,count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <=  %s  GROUP BY root_cause""",(start_date1,start_date2))
        return vars
    elif day == "this_month":
        end = date.today()
        start = date.today().replace(day=1)
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select root_cause,count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <=  %s  GROUP BY root_cause""",(start_date1,start_date2))
        return vars



@frappe.whitelist(allow_guest=False)
def get_action_taken(day):
    if day == "today":
        start_date1 = date.today()
        start_date2 = date.today() + timedelta(days=1)
        #vars = frappe.db.sql("""Select root_cause,count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <  %s  GROUP BY root_cause""",(start_date1,start_date2))
        vars = frappe.db.sql("""Select action_taken,count(action_taken) as "action_taken" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <  %s) and action_taken !=''  GROUP BY action_taken""",(start_date1,start_date2))
        return vars


    elif day == "yesterday":
        start_date1 = date.today() + timedelta(days=-1)
        start_date2 = date.today()
        vars = frappe.db.sql("""Select action_taken,count(action_taken) as "action_taken" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <  %s) and action_taken !=''  GROUP BY action_taken""",(start_date1,start_date2))
        return vars


    elif day == "last_month":
        now = time.localtime()
        last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        first=last.replace(day=1)    
        start_date1 = first     
        start_date2 = last
        vars = frappe.db.sql("""Select action_taken,count(action_taken) as "action_taken" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <=  %s) and action_taken !=''  GROUP BY action_taken""",(start_date1,start_date2))
        return vars


    elif day == "last_week":
        #now = time.localtime()
        today1 = date.today()
        #dt=datetime.strptime(today,'%Y-%m-%d')
        #start = today1-timedelta(days=today1.weekday())
        #end = start+timedelta(days=6)
        start = today1+timedelta(-today1.weekday(),weeks=-1)
        end = today1+timedelta(-today1.weekday()-1)
 
       # last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        #first=last.replace(day=1)    
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select action_taken,count(action_taken) as "action_taken" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <=  %s) and action_taken !=''  GROUP BY action_taken""",(start_date1,start_date2))
        return vars

    elif day == "this_week":
        #now = time.localtime()
        today1 = date.today()
        #dt=datetime.strptime(today,'%Y-%m-%d')
        start = today1-timedelta(days=today1.weekday())
        end = start+timedelta(days=6)
        #start = today1+timedelta(-today1.weekday(),weeks=-1)
        #end = today1+timedelta(-today1.weekday()-1)
 
       # last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        #first=last.replace(day=1)    
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select action_taken,count(action_taken) as "action_taken" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <=  %s) and action_taken !=''  GROUP BY action_taken""",(start_date1,start_date2))
        return vars

    elif day == "this_month":
        end = date.today()
        start = date.today().replace(day=1)
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select action_taken,count(action_taken) as "action_taken" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <=  %s) and action_taken !=''  GROUP BY action_taken""",(start_date1,start_date2))
        return vars



@frappe.whitelist(allow_guest=False)
def get_wtg(day):
    if day == "today":
        start_date1 = date.today()
        start_date2 = date.today() + timedelta(days=1)
        #vars = frappe.db.sql("""Select root_cause,count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <  %s  GROUP BY root_cause""",(start_date1,start_date2))
        vars = frappe.db.sql("""Select wtg_name,count(wtg_name) as "wtg_name" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <  %s)  GROUP BY wtg_name""",(start_date1,start_date2))
        return vars


    elif day == "yesterday":
        start_date1 = date.today() + timedelta(days=-1)
        start_date2 = date.today()
        vars = frappe.db.sql("""Select wtg_name,count(wtg_name) as "wtg_name" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <  %s)  GROUP BY wtg_name""",(start_date1,start_date2))
        return vars


    elif day == "last_month":
        now = time.localtime()
        last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        first=last.replace(day=1)    
        start_date1 = first     
        start_date2 = last
        vars = frappe.db.sql("""Select wtg_name,count(wtg_name) as "wtg_name" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <=  %s)  GROUP BY wtg_name""",(start_date1,start_date2))
        return vars


    elif day == "last_week":
        #now = time.localtime()
        today1 = date.today()
        #dt=datetime.strptime(today,'%Y-%m-%d')
        #start = today1-timedelta(days=today1.weekday())
        #end = start+timedelta(days=6)
        start = today1+timedelta(-today1.weekday(),weeks=-1)
        end = today1+timedelta(-today1.weekday()-1)
 
       # last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        #first=last.replace(day=1)    
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select wtg_name,count(wtg_name) as "wtg_name" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <= %s)  GROUP BY wtg_name""",(start_date1,start_date2))
        return vars

    elif day == "this_week":
        #now = time.localtime()
        today1 = date.today()
        #dt=datetime.strptime(today,'%Y-%m-%d')
        start = today1-timedelta(days=today1.weekday())
        end = start+timedelta(days=6)
        #start = today1+timedelta(-today1.weekday(),weeks=-1)
        #end = today1+timedelta(-today1.weekday()-1)
 
       # last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        #first=last.replace(day=1)    
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select wtg_name,count(wtg_name) as "wtg_name" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <=  %s)  GROUP BY wtg_name""",(start_date1,start_date2))
        return vars


    elif day == "this_month":
        end = date.today()
        start = date.today().replace(day=1)
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select wtg_name,count(wtg_name) as "wtg_name" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <=  %s)  GROUP BY wtg_name""",(start_date1,start_date2))
        return vars


@frappe.whitelist(allow_guest=False)
def get_wtg_status(day):
    if day == "today":
        start_date1 = date.today()
        start_date2 = date.today() + timedelta(days=1)
        #vars = frappe.db.sql("""Select wtg_fault,count(wtg_fault) as "wtg_fault" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <  %s  GROUP BY wtg_fault""",(start_date1,start_date2))
        vars = frappe.db.sql("""Select wtg_fault,count(wtg_fault) as "wtg_fault" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <  %s)  GROUP BY wtg_fault""",(start_date1,start_date2))
        return vars


    elif day == "yesterday":
        start_date1 = date.today() + timedelta(days=-1)
        start_date2 = date.today()
        vars = frappe.db.sql("""Select wtg_fault,count(wtg_fault) as "wtg_fault" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <  %s)  GROUP BY wtg_fault""",(start_date1,start_date2))
        return vars


    elif day == "last_month":
        now = time.localtime()
        last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        first=last.replace(day=1)    
        start_date1 = first     
        start_date2 = last
        vars = frappe.db.sql("""Select wtg_fault,count(wtg_fault) as "wtg_name" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <=  %s)  GROUP BY wtg_fault""",(start_date1,start_date2))
        return vars


    elif day == "last_week":
        #now = time.localtime()
        today1 = date.today()
        #dt=datetime.strptime(today,'%Y-%m-%d')
        #start = today1-timedelta(days=today1.weekday())
        #end = start+timedelta(days=6)
        start = today1+timedelta(-today1.weekday(),weeks=-1)
        end = today1+timedelta(-today1.weekday()-1)
 
       # last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        #first=last.replace(day=1)    
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select wtg_fault,count(wtg_fault) as "wtg_fault" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <=  %s)  GROUP BY wtg_fault""",(start_date1,start_date2))
        return vars

    elif day == "this_week":
        #now = time.localtime()
        today1 = date.today()
        #dt=datetime.strptime(today,'%Y-%m-%d')
        start = today1-timedelta(days=today1.weekday())
        end = start+timedelta(days=6)
        #start = today1+timedelta(-today1.weekday(),weeks=-1)
        #end = today1+timedelta(-today1.weekday()-1)
 
       # last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        #first=last.replace(day=1)    
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select wtg_fault,count(wtg_fault) as "wtg_fault" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <=  %s)  GROUP BY wtg_fault""",(start_date1,start_date2))
        return vars



    elif day == "this_month":
        end = date.today()
        start = date.today().replace(day=1)
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select wtg_fault,count(wtg_fault) as "wtg_fault" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <=  %s)  GROUP BY wtg_fault""",(start_date1,start_date2))
        return vars



@frappe.whitelist(allow_guest=False)
def get_open_status(day):
    if day == "today":
        start_date1 = date.today()
        start_date2 = date.today() + timedelta(days=1)
        vars = frappe.db.sql("""Select root_cause,count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <  %s and status1 = 'Open' GROUP BY root_cause""",(start_date1,start_date2))
      #  vars1 = frappe.db.sql("""Select action_taken,count(action_taken) as "action_taken" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <  %s) and action_taken !=''  GROUP BY action_taken""",(start_date1,start_date2))
        return vars


    elif day == "yesterday":
        start_date1 = date.today() + timedelta(days=-1)
        start_date2 = date.today()
        vars = frappe.db.sql("""Select root_cause,count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <  %s and status1 = 'Open' GROUP BY root_cause""",(start_date1,start_date2))
        return vars


    elif day == "last_month":
        now = time.localtime()
        last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        first=last.replace(day=1)    
        start_date1 = first     
        start_date2 = last
        vars = frappe.db.sql("""Select root_cause,count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <=  %s and status1 = 'Open' GROUP BY root_cause""",(start_date1,start_date2))
        return vars

    elif day == "this_week":
        #now = time.localtime()
        today1 = date.today()
        #dt=datetime.strptime(today,'%Y-%m-%d')
        start = today1-timedelta(days=today1.weekday())
        end = start+timedelta(days=6)
        #start = today1+timedelta(-today1.weekday(),weeks=-1)
        #end = today1+timedelta(-today1.weekday()-1)
 
       # last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        #first=last.replace(day=1)    
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select root_cause,count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <=  %s and status1 = 'Open' GROUP BY root_cause""",(start_date1,start_date2))
        return vars

    elif day == "last_week":
        #now = time.localtime()
        today1 = date.today()
        #dt=datetime.strptime(today,'%Y-%m-%d')
        #start = today1-timedelta(days=today1.weekday())
        #end = start+timedelta(days=6)
        start = today1+timedelta(-today1.weekday(),weeks=-1)
        end = today1+timedelta(-today1.weekday()-1)
 
       # last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        #first=last.replace(day=1)    
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select root_cause,count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <=  %s and status1 = 'Open' GROUP BY root_cause""",(start_date1,start_date2))
        return vars
    elif day == "this_month":
        end = date.today()
        start = date.today().replace(day=1)
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select root_cause,count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <=  %s and status1 = 'Open' GROUP BY root_cause""",(start_date1,start_date2))
        return vars




@frappe.whitelist(allow_guest=False)
def get_open_hoto(day):
    if day == "today":
        start_date1 = date.today()
        start_date2 = date.today() + timedelta(days=1)
        vars = frappe.db.sql("""Select workflow_state,count(workflow_state) as "Workflow State Count" from `tabAPMS HOTO` WHERE `creation` >= %s and `creation` <  %s and workflow_state = 'Handover Pending'""",(start_date1,start_date2))
      #  vars1 = frappe.db.sql("""Select action_taken,count(action_taken) as "action_taken" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <  %s) and action_taken !=''  GROUP BY action_taken""",(start_date1,start_date2))
        return vars


    elif day == "yesterday":
        start_date1 = date.today() + timedelta(days=-1)
        start_date2 = date.today()
        vars = frappe.db.sql("""Select workflow_state,count(workflow_state) as "Workflow State Count" from `tabAPMS HOTO` WHERE `creation` >= %s and `creation` <  %s and workflow_state = 'Handover Pending'""",(start_date1,start_date2))
      #  vars1 = frappe.db.sql("""Select action_taken,count(action_taken) as "action_taken" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <  %s) and action_taken !=''  GROUP BY action_taken""",(start_date1,start_date2))
        return vars

    elif day == "last_month":
        now = time.localtime()
        last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        first=last.replace(day=1)    
        start_date1 = first     
        start_date2 = last
        vars = frappe.db.sql("""Select workflow_state,count(workflow_state) as "Workflow State Count" from `tabAPMS HOTO` WHERE `creation` >= %s and `creation` <=  %s and workflow_state = 'Handover Pending'""",(start_date1,start_date2))
      #  vars1 = frappe.db.sql("""Select action_taken,count(action_taken) as "action_taken" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <  %s) and action_taken !=''  GROUP BY action_taken""",(start_date1,start_date2))
        return vars

    elif day == "this_week":
        #now = time.localtime()
        today1 = date.today()
        #dt=datetime.strptime(today,'%Y-%m-%d')
        start = today1-timedelta(days=today1.weekday())
        end = start+timedelta(days=6)
        #start = today1+timedelta(-today1.weekday(),weeks=-1)
        #end = today1+timedelta(-today1.weekday()-1)
 
       # last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        #first=last.replace(day=1)    
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select workflow_state,count(workflow_state) as "Workflow State Count" from `tabAPMS HOTO` WHERE `creation` >= %s and `creation` <=  %s and workflow_state = 'Handover Pending'""",(start_date1,start_date2))
      #  vars1 = frappe.db.sql("""Select action_taken,count(action_taken) as "action_taken" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <  %s) and action_taken !=''  GROUP BY action_taken""",(start_date1,start_date2))
        return vars

    elif day == "last_week":
        #now = time.localtime()
        today1 = date.today()
        #dt=datetime.strptime(today,'%Y-%m-%d')
        #start = today1-timedelta(days=today1.weekday())
        #end = start+timedelta(days=6)
        start = today1+timedelta(-today1.weekday(),weeks=-1)
        end = today1+timedelta(-today1.weekday()-1)
 
       # last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        #first=last.replace(day=1)    
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select workflow_state,count(workflow_state) as "Workflow State Count" from `tabAPMS HOTO` WHERE `creation` >= %s and `creation` <=  %s and workflow_state = 'Handover Pending'""",(start_date1,start_date2))
      #  vars1 = frappe.db.sql("""Select action_taken,count(action_taken) as "action_taken" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <  %s) and action_taken !=''  GROUP BY action_taken""",(start_date1,start_date2))
        return vars

    elif day == "this_month":
        end = date.today()
        start = date.today().replace(day=1)
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select workflow_state,count(workflow_state) as "Workflow State Count" from `tabAPMS HOTO` WHERE `creation` >= %s and `creation` <=  %s and workflow_state = 'Handover Pending'""",(start_date1,start_date2))
      #  vars1 = frappe.db.sql("""Select action_taken,count(action_taken) as "action_taken" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <  %s) and action_taken !=''  GROUP BY action_taken""",(start_date1,start_date2))
        return vars



@frappe.whitelist(allow_guest=False)
def get_total_open_status(day):
    if day == "today":
        start_date1 = date.today()
        start_date2 = date.today() + timedelta(days=1)
        vars = frappe.db.sql("""Select count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <  %s and status1 = 'Open'""",(start_date1,start_date2))
      #  vars1 = frappe.db.sql("""Select action_taken,count(action_taken) as "action_taken" from `tabWTG Status Log` WHERE (`creation` >= %s and `creation` <  %s) and action_taken !=''  GROUP BY action_taken""",(start_date1,start_date2))
        return vars


    elif day == "yesterday":
        start_date1 = date.today() + timedelta(days=-1)
        start_date2 = date.today()
        vars = frappe.db.sql("""Select count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <  %s and status1 = 'Open'""",(start_date1,start_date2))
        return vars


    elif day == "last_month":
        now = time.localtime()
        last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        first=last.replace(day=1)    
        start_date1 = first     
        start_date2 = last
        vars = frappe.db.sql("""Select count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <=  %s and status1 = 'Open'""",(start_date1,start_date2))
        return vars

    elif day == "this_week":
        #now = time.localtime()
        today1 = date.today()
        #dt=datetime.strptime(today,'%Y-%m-%d')
        start = today1-timedelta(days=today1.weekday())
        end = start+timedelta(days=6)
        #start = today1+timedelta(-today1.weekday(),weeks=-1)
        #end = today1+timedelta(-today1.weekday()-1)
 
       # last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        #first=last.replace(day=1)    
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <=  %s and status1 = 'Open'""",(start_date1,start_date2))
        return vars

    elif day == "last_week":
        #now = time.localtime()
        today1 = date.today()
        #dt=datetime.strptime(today,'%Y-%m-%d')
        #start = today1-timedelta(days=today1.weekday())
        #end = start+timedelta(days=6)
        start = today1+timedelta(-today1.weekday(),weeks=-1)
        end = today1+timedelta(-today1.weekday()-1)
 
       # last=datetime.date(now.tm_year,now.tm_mon,1)-datetime.timedelta(1)
        #first=last.replace(day=1)    
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <=  %s and status1 = 'Open'""",(start_date1,start_date2))
        return vars
    elif day == "this_month":
        end = date.today()
        start = date.today().replace(day=1)
        start_date1 = start     
        start_date2 = end
        vars = frappe.db.sql("""Select count(root_cause) as "root_cause_count" from `tabWTG Status Log` WHERE `creation` >= %s and `creation` <=  %s and status1 = 'Open'""",(start_date1,start_date2))
        return vars



