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
        },

        /**
         * Watch the device location.
         *
         * @param {String} callbacksId
         *     ID of geolocation success and error callbacks.
         * @param {String} jsonOptions
         *     JSON-serialized PositionOptions.
         */
        'watchPosition': function(callbacksId, jsonOptions) {
        },

        /**
         * Stop watching the device position.
         *
         * @param {String} callbacksId
         *     ID of geolocation success and error callbacks.
         */
        'clearWatch': function(callbacksId) {
        }
    };

    return nativeGeolocation;
});
