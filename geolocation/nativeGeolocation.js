/**
 * Interface for the native implementation of the nativeGeolocation.
 *
 * @author marc.plouhinec@gmail.com (Marc Plouhinec)
 */

define(function() {
    'use strict';

    var nativeGeolocation = {
        /**
         * Get the current device location.
         *
         * @param {String} callbacksId
         *     ID of geolocation success and error callbacks.
         * @param {String} jsonOptions
         *     JSON-serialized PositionOptions.
         */
        'getCurrentPosition': function(callbacksId, jsonOptions) {
        }
    };

    return nativeGeolocation;
});
