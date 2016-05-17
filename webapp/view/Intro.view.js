sap.ui.jsview("maintenance.view.Intro", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf dailyReport.view.Farm
	 */
	getControllerName: function() {
		return "maintenance.controller.Intro";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf dailyReport.view.Farm
	 */
	createContent: function(oController) {
		
		var oObjectHeader = new sap.m.ObjectHeader({

			title : "LOTE Nº 416165",
			intro: "Description",
			icon: "sap-icon://product",
			fullScreenOptimized: false,
			condensed: false,
			responsive: true,
			backgroundDesign: "Solid",
			statuses: [
				/*new sap.m.ProgressIndicator({
					percentValue: 80,
					displayValue: "Salud 80%",
					state: "Success",
					width: "55%"
				}),*/
				new sap.m.ObjectStatus({
					title: "Peso del Lote",
					text: "1.800.000 Kgs"
				}),
				new sap.m.ObjectStatus({
					title: "Cantidad de pollos",
					text: "40000"
				})
			]
		});

		var oTable = new sap.m.Table();

		var col1 = new sap.m.Column("col1", { 
			width: "15%", 
			header: new sap.m.Label({ text: "Dia", textAlign: "Center", design: "Bold" }), 
			hAlign: "Center" 
		});
		var col2 = new sap.m.Column("col2", { 
			header: new sap.m.Label({ text: "Mortalidad", textAlign: "Center", design: "Bold" }), 
			hAlign: "Center" 
		});
		var col3 = new sap.m.Column("col3", { 
			header: new sap.m.Label({ text: "Descarte", textAlign: "Center", design: "Bold" }), 
			hAlign: "Center" 
		});
		var col4 = new sap.m.Column("col4", { 
			header: new sap.m.Label({ text: "Cant. Alimentación", textAlign: "Center", design: "Bold" }), 
			hAlign: "Center" 
		});
		
		oTable
		.addColumn(col1)
		.addColumn(col2)
		.addColumn(col3)
		.addColumn(col4);

		var oItem1 = new sap.m.ColumnListItem({
			cells: [
				new sap.m.Text({
					text: "1"
				}),
				new sap.m.Text({
					text: "10"
				}),
				new sap.m.Text({
					text: "3"
				}),
				new sap.m.Text({
					text: "400 Kg"
				})
			]
		});

		var oItem2 = new sap.m.ColumnListItem({
			cells: [
				new sap.m.Text({
					text: "2"
				}),
				new sap.m.Text({
					text: "10"
				}),
				new sap.m.Text({
					text: "3"
				}),
				new sap.m.Text({
					text: "400 Kg"
				})
			]
		});

		var oItem3 = new sap.m.ColumnListItem({
			cells: [
				new sap.m.Text({
					text: "3"
				}),
				new sap.m.Text({
					text: "10"
				}),
				new sap.m.Text({
					text: "3"
				}),
				new sap.m.Text({
					text: "400 Kg"
				})
			]
		});

		var oItem4 = new sap.m.ColumnListItem({
			cells: [
				new sap.m.Text({
					text: "4"
				}),
				new sap.m.Text({
					text: "10"
				}),
				new sap.m.Text({
					text: "3"
				}),
				new sap.m.Text({
					text: "400 Kg"
				})
			]
		});

		var oItem5 = new sap.m.ColumnListItem({
			cells: [
				new sap.m.Text({
					text: "5"
				}),
				new sap.m.Text({
					text: "10"
				}),
				new sap.m.Text({
					text: "3"
				}),
				new sap.m.Text({
					text: "400 Kg"
				})
			]
		});

		var oItem6 = new sap.m.ColumnListItem({
			cells: [
				new sap.m.Text({
					text: "6"
				}),
				new sap.m.Text({
					text: "10"
				}),
				new sap.m.Text({
					text: "3"
				}),
				new sap.m.Text({
					text: "400 Kg"
				})
			]
		});

		var oItem7 = new sap.m.ColumnListItem({
			cells: [
				new sap.m.Text({
					text: "7"
				}),
				new sap.m.Text({
					text: "10"
				}),
				new sap.m.Text({
					text: "3"
				}),
				new sap.m.Text({
					text: "400 Kg"
				})
			]
		});

		oTable.addItem(oItem1);
		oTable.addItem(oItem2);
		oTable.addItem(oItem3);
		oTable.addItem(oItem4);
		oTable.addItem(oItem5);
		oTable.addItem(oItem6);
		oTable.addItem(oItem7);

		var oGridLayout = new sap.ui.layout.Grid({
			hSpacing: 0,
			defaultSpan: "XL10 L10 M10 S12",
			defaultIndent: "XL1 L1 M1 S0",
			content: [
				oTable
			]
		});

		var oBar = new sap.m.Bar({
			contentLeft : [],
			contentMiddle : [],
			contentRight : [
				new sap.m.Button({
					text : "Agregar",
					type : "Default",
					icon : "sap-icon://add"
				})
			]
		});

		var oFlexBox = new sap.m.FlexBox({
			alignItems:"Start",
			justifyContent:"Center",
			items: [
				new sap.m.RatingIndicator({
					iconSize: "1em",
					enabled : true,
					maxValue : 5,
					value : 2.5,
					visualMode: "Full"
				})
			]
		});

		var oPanel = new sap.m.Panel({
			content: [
				oFlexBox
			]
		});

 		return new sap.m.Page({
			title: "Galpón 1 - Control de Producción",
			content: [
				oObjectHeader,
				oPanel,
				oGridLayout
			],
			footer: oBar
		});
	}

});