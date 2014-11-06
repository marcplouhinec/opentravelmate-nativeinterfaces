/**
 * Interface for the native implementation of the WebView widget.
 *
 * @author Marc Plouhinec
 */

define(function() {
    'use strict';

    var nativeWebView = {
        /**
         * Build the native view object for the current widget.
         * 
         * @param {String} jsonLayoutParams JSON-serialized LayoutParams
         */
        'buildView': function(jsonLayoutParams) {
        },

        /**
         * Update the native view object for the current widget.
         *
         * @param {String} jsonLayoutParams JSON-serialized LayoutParams
         */
        'updateView': function(jsonLayoutParams) {
        },

        /**
         * Remove the native view object for the current widget.
         * 
         * @param {String} id Place holder ID
         */
        'removeView': function(id) {
        },

        /**
         * Fire an event to a listener that is outside of the WebView.
         *
         * @param {String} webViewPlaceHolderId
         * @param {String} eventName
         * @param {String} jsonPayload
         */
        'fireExternalEvent': function(webViewPlaceHolderId, eventName, jsonPayload) {
        },
        
        /**
         * Fire an event to a listener that is inside the WebView.
         *
         * @param {String} webViewPlaceHolderId
         * @param {String} eventName
         * @param {String} jsonPayload
         */
        'fireInternalEvent': function(webViewPlaceHolderId, eventName, jsonPayload) {
        }
    };

    return nativeWebView;
});
