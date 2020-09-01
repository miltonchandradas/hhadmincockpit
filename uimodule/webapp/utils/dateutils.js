/* global moment:true */

sap.ui.define([
	"sap/base/Log",
	"com/sap/dc/libs/moment"
], function (Log, momentjs) {
	"use strict";

	return {



		getShortFormat: function (sDate) {
			return moment(sDate).startOf("day").format("MMM DD, yyyy");
		},

		isPast: function (sDate) {
      if (moment().startOf("day").diff(moment(sDate).startOf("day")) > 0) {
        return true;
      }

      return false;
    }

	};

});
