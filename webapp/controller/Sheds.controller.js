sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller) {
	"use strict";

	return Controller.extend("maintenance.controller.Sheds", {
		onInit: function() {
			var sPath = jQuery.sap.getModulePath("maintenance.model", "/data.json");
			var oModel = new sap.ui.model.json.JSONModel(sPath);
			this.getView().setModel(oModel);
		},
		handlePress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var path = oItem.getBindingContext().getPath();
			var encodePath = encodeURIComponent(oItem.getBindingContext().getPath());
			var splitPath = oItem.getBindingContext().getPath().split("/");
			console.log(splitPath);
			oRouter.navTo("master", {
				objectId: splitPath[2]
			});
		}
	});

});