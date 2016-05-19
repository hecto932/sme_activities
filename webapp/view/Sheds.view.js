sap.ui.jsview("maintenance.view.Sheds", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf maintenance.view.Sheds
	 */
	getControllerName: function() {
		return "maintenance.controller.Sheds";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf maintenance.view.Sheds
	 */
	createContent: function(oController) {
		
		var templateTile = new sap.m.StandardTile({
			title: "{title}",
			info: "{info}",
			number: "{number}",
			numberUnit: "{numberUnit}",
			icon: "{icon}",
			press:  function(oEvent){
    			oController.handlePress(oEvent);
			}
		});
		
		var TileContainer = new sap.m.TileContainer("ShedsCollection", {});
		
		TileContainer.bindAggregation("tiles", "/ShedsCollection", templateTile);
		
 		return new sap.m.Page("sheds", {
			title: "{i18n>sheds_title}",
			enableScrolling: false,
			content: [
				TileContainer
			]
		});
	}

});