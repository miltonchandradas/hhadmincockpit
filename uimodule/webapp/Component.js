sap.ui.define([
  "sap/ui/core/UIComponent",
	"./model/models",
	"sap/ui/core/routing/History"
], function (UIComponent, models, History) {
  "use strict";

  return UIComponent.extend("com.sap.dc.Component", {

    metadata: {
      manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: function () {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      // enable routing
      this.getRouter().initialize();

      // set the device model
      this.setModel(models.createDeviceModel(), "device");
    },

    myNavBack: function () {
      var oHistory = History.getInstance();
      var oPrevHash = oHistory.getPreviousHash();
      if (oPrevHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getRouter().navTo("masterSettings", {}, true);
      }
    },

    getContentDensityClass: function () {
      if (!this._sContentDensityClass) {
        if (!sap.ui.Device.support.touch) {
          this._sContentDensityClass = "sapUiSizeCompact";
        } else {
          this._sContentDensityClass = "sapUiSizeCozy";
        }
				/*if (sap.ui.Device.system.desktop) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}*/
      }
      return this._sContentDensityClass;
    }

  });
});
