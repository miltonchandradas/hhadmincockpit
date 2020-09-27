sap.ui.define([
  "sap/base/strings/formatMessage",
  "com/sap/dc/utils/dateutils"
], function (formatMessage, dateutils) {
	"use strict";

	return {
		formatMessage: formatMessage,

		/**
		 * Determines the path of the image depending if its a phone or not the smaller or larger image version is loaded
		 *
		 * @public
		 * @param {boolean} bIsPhone the value to be checked
		 * @param {string} sImagePath The path of the image
		 * @returns {string} path to image
		 */
		srcImageValue : function (bIsPhone, sImagePath) {
      // images/walking.jpg"
			if (bIsPhone) {
				sImagePath += "/images/walking_small.jpg";
			}
			return sImagePath + "/images/walking.jpg";
    },

    getStreet: function(sAddress) {
      return sAddress.split(",")[0];
    },

    getCityStateZip: function(sAddress) {
      return sAddress.slice(sAddress.indexOf(",") + 2);
    },

    getActivityDescription: function (serviceDesc, opportunityDesc) {
      if (serviceDesc) {
        return `${serviceDesc.substring(0, 25)}...`;
      }

      if (opportunityDesc) {
        return `${opportunityDesc.substring(0, 25)}...`;
      }

      return "Description not available...";
    },

    getTruncatedText: function (sText) {
      if (sText) {
        return `${sText.substring(0, 25)}...`;
      }

      return "Description not available...";
    },

    getShortFormatDate: function (sDate) {
      return dateutils.getShortFormat(sDate);
    },

    getState: function (state, sDate) {
      let isPast = dateutils.isPast(sDate);

      if (isPast)
        return "Completed";

      return "Pending";
    },

    getHighlight: function (sDate) {
      let isPast = dateutils.isPast(sDate);

      if (!isPast)
        return "Success";

      return "None";
    }
	};
});
