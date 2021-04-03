sap.ui.define([
	"sap/ui/core/mvc/Controller"

], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.Nessie.controller.Nessie", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.sap.Nessie.view.Nessie
		 */
		onInit: function () {
			this.oRouter = this.getOwnerComponent().getRouter(this);
			//this.oRouter = this.getOwnerComponent().getRouter(this); // it will gives the router object

		},
		
		
		onClick: function(oEvent){
	
			//this.oRouter.navTO("RouteView2");
	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
 // oRouter.navTo("spiderman");
  	this.oRouter.navTo("spiderman");
			
		},
		onClick2: function(){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
              oRouter.navTo("spiderman");
			
		}
		
		

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.sap.Nessie.view.Nessie
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.sap.Nessie.view.Nessie
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.sap.Nessie.view.Nessie
		 */
		//	onExit: function() {
		//
		//	}

	});

});