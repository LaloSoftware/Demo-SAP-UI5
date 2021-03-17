sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, Filter, FilterOperator) {
		"use strict";

		return Controller.extend("ns.HTML5Module.controller.main", {
			onInit: function () {

            },

            onFilteredProducts: function (oEvent) {
                var productFilter = [];
                var sQuery = oEvent.getParameter("query");
                if(sQuery){
                    productFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
                }

                var oList = this.byId("productList");
                var oBinding = oList.getBinding('items');
                oBinding.filter(productFilter);
            }
		});
	});
