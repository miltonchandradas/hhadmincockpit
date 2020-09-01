sap.ui.define([
	"com/sap/dc/controller/BaseController",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"com/sap/dc/model/formatter"
], function (BaseController, MessageToast, JSONModel, formatter) {
	"use strict";
	return BaseController.extend("com.sap.dc.controller.settings.MasterSettings", {
		formatter: formatter,

		onInit: function () {
			var oViewModel = new JSONModel({
					currentUser: "Administrator",
					lastLogin: new Date(Date.now() - 86400000)
				});

			this.setModel(oViewModel, "view");
		},

		onMasterPressed: function (oEvent) {
			var oContext = oEvent.getParameter("listItem").getBindingContext("side");
			var sPath = oContext.getPath() + "/selected";
			oContext.getModel().setProperty(sPath, true);
			var sKey = oContext.getProperty("key");
			switch (sKey) {
				case "systemSettings": {
					this.getRouter().navTo(sKey);
					break;
        }
        case "activitySettings": {
					this.getRouter().navTo(sKey);
					break;
        }
        case "opportunitySettings": {
					this.getRouter().navTo(sKey);
					break;
        }
        case "serviceSettings": {
					this.getRouter().navTo(sKey);
					break;
        }
        case "campaignSettings": {
					this.getRouter().navTo(sKey);
					break;
				}
				default: {

          let sMasterElementText = this.getBundleText(oContext.getProperty("titleI18nKey"));
          MessageToast.show(this.getBundleText("clickHandlerMessage", [sMasterElementText]));

					/* this.getBundleText(oContext.getProperty("titleI18nKey")).then(function(sMasterElementText){
						this.getBundleText("clickHandlerMessage", [sMasterElementText]).then(function(sMessageText){
							MessageToast.show(sMessageText);
						});
					}.bind(this)); */
					break;
				}
			}
		},

		onSavePressed: function (oEvent) {
			this.onGeneralButtonPress(oEvent);
		},

		onCancelPressed: function (oEvent) {
			this.onGeneralButtonPress(oEvent);
		},

		onGeneralButtonPress: function(oEvent){
      var sButtonText = oEvent.getSource().getText();
      MessageToast.show(this.getBundleText("clickHandlerMessage", [sButtonText]));

			/* this.getBundleText("clickHandlerMessage", [sButtonText]).then(function(sMessageText){
				MessageToast.show(sMessageText);
			}); */
		},

		onNavButtonPress: function  () {
			this.getOwnerComponent().myNavBack();
    },

    onEditUser: function (oEvent) {
      let src = oEvent.getSource();
      let bindingContext = src.getBindingContext();

      let firstName = bindingContext.getProperty("firstName");
      let lastName = bindingContext.getProperty("lastName");

      MessageToast.show(`Editing ${firstName} ${lastName}`);
    },

    onDeleteUser: function (oEvent) {
      let src = oEvent.getSource();
      let bindingContext = src.getBindingContext();

      let firstName = bindingContext.getProperty("firstName");
      let lastName = bindingContext.getProperty("lastName");

      MessageToast.show(`Deleting ${firstName} ${lastName}`);
    },

    onEditTable: function (oEvent, entity) {
      let src = oEvent.getSource();
      let bindingContext = src.getBindingContext();

      let id = bindingContext.getProperty("id");

      MessageToast.show(`Editing ${entity} with id: ${id}`);
    },

    onDeleteTable: function (oEvent, entity) {
      let src = oEvent.getSource();
      let bindingContext = src.getBindingContext();

      let id = bindingContext.getProperty("id");

      MessageToast.show(`Deleting ${entity} with id: ${id}`);
    },


		/**
		 * Returns a promises which resolves with the resource bundle value of the given key <code>sI18nKey</code>
		 *
		 * @public
		 * @param {string} sI18nKey The key
		 * @param {string[]} [aPlaceholderValues] The values which will repalce the placeholders in the i18n value
		 * @returns {Promise<string>} The promise
		 */
		getBundleText: function(sI18nKey, aPlaceholderValues){

      return this.getOwnerComponent().getModel("i18n").getResourceBundle().getText(sI18nKey, aPlaceholderValues);
			// return this.getBundleTextByModel(sI18nKey, this.getModel("i18n"), aPlaceholderValues);
		}
	});
});
