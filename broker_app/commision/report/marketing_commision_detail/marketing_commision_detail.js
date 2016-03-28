// Copyright (c) 2016, bobby and contributors
// For license information, please see license.txt

frappe.query_reports["Marketing Commision Detail"] = {
	"filters": [
		{
			"fieldname":"from",
			"label": __("From Date"),
			"fieldtype": "Date",
			"width": "80",
			"reqd":1
		},
		{
			"fieldname":"to",
			"label": __("To Date"),
			"fieldtype": "Date",
			"default": get_today(),
			"reqd":1
		},
		{
			"fieldname":"marketing",
			"label": __("Marketing"),
			"fieldtype": "Link",
			"options": "Marketing",
			"reqd":1
		}
	]
}
