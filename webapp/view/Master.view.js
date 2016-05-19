sap.ui.jsview("maintenance.view.Master", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf dailyReport.view.Farm
	 */
	getControllerName: function() {
		return "maintenance.controller.Master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf dailyReport.view.Farm
	 */
	createContent: function(oController) {

		
		var oItemTemplate1 = new sap.m.ObjectListItem({
			id: "sList1",
			title: "Semana 1",
			number: "0.045",
			numberUnit: "Kg",
			type: "Active",
			numberState: "Success"
		});
		var oItemTemplate2 = new sap.m.ObjectListItem({
			id: "sList2",
			title: "Semana 2",
			number: "0.300",
			numberUnit: "Kg",
			type: "Active",
			numberState: "Success"
		});
		var oItemTemplate3 = new sap.m.ObjectListItem({
			id: "sList3",
			title: "Semana 3",
			number: "0.700",
			numberUnit: "Kg",
			type: "Active",
			numberState: "Success"
		});
		var oItemTemplate4 = new sap.m.ObjectListItem({
			id: "sList4",
			title: "Semana 4",
			number: "0.957",
			numberUnit: "Kg",
			type: "Active",
			numberState: "Success"
		});
		var oItemTemplate5 = new sap.m.ObjectListItem({
			id: "sList5",
			title: "Semana 5",
			number: "1.565",
			numberUnit: "Kg",
			type: "Active",
			numberState: "Success"
		});

		var oItemTemplate6 = new sap.m.ObjectListItem({
			id: "sList6",
			title: "Semana 6",
			number: "1.800",
			numberUnit: "Kg",
			type: "Active",
			numberState: "Success"
		});

		var oList = new sap.m.List({
			id:"listId",
			select: function(){
				oController.itemSelected();
			}
		});

		oList.addItem(oItemTemplate1);
		oList.addItem(oItemTemplate2);
		oList.addItem(oItemTemplate3);
		oList.addItem(oItemTemplate4);
		oList.addItem(oItemTemplate5);
		oList.addItem(oItemTemplate6);
	
		return new sap.m.Page({
			title: "Semanas",
			content: [
				oList
			]
		});
	}

});