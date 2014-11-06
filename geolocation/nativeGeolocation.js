/**
 * Interface for the native implementation of the nativeGeolocation.
 *
 * @author Marc Plouhinec
 */

define(function() {
    'use strict';

    var nativeGeolocation = {
        /**
         * Get the current device location.
         *
         * @param {string} callbacksId
         *     ID of geolocation success and error callbacks.
         * @param {string} jsonOptions
         *     JSON-serialized PositionOptions.
         */
        'getCurrentPosition': function(callbacksId, jsonOptions) {
        },

        /**
         * Watch the device location.
         *
         * @param {string} callbacksId
         *     ID of geolocation success and error callbacks.
         * @param {string} jsonOptions
         *     JSON-serialized PositionOptions.
         */
        'watchPosition': function(callbacksId, jsonOptions) {
        },

        /**
         * Stop watching the device position.
         *
         * @param {string} callbacksId
         *     ID of geolocation success and error callbacks.
         */
        'clearWatch': function(callbacksId) {
        }
    };

    return nativeGeolocation;
});
