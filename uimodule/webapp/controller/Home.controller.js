sap.ui.define([
	'./BaseController',
	'sap/ui/model/json/JSONModel',
	'sap/ui/Device',
	'com/sap/dc/model/formatter'
], function (BaseController, JSONModel, Device, formatter) {
	"use strict";
	return BaseController.extend("com.sap.dc.controller.Home", {
		formatter: formatter,

		onInit: function () {
			var oViewModel = new JSONModel({
				isPhone : Device.system.phone
			});
			this.setModel(oViewModel, "view");
			Device.media.attachHandler(function (oDevice) {
				this.getModel("view").setProperty("/isPhone", oDevice.name === "Phone");
			}.bind(this));
    },

    onMasterPressed: function (sKey) {

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
		}
	});
});
