sap.ui.jsview("maintenance.view.App", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf maintenance.view.App
	 */
	getControllerName: function() {
		return "maintenance.controller.Masterapp";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf maintenance.view.Masterapp
	 */
	createContent: function(oController) {
		
		var oSplitApp = new sap.m.SplitApp("appId", {});

		var oMasterPage = new sap.m.Page("master1",{
			title: "Master"
		});

		var oDetailPage = new sap.m.Page("detail1",{
			title: "Detail"
		});

		oSplitApp.addMasterPage(oMasterPage);
		oSplitApp.addDetailPage(oDetailPage);

		return oSplitApp;
	}

});