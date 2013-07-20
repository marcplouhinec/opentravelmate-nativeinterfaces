/**
 * Interface for the native implementation of the WebView widget.
 *
 * @author marc.plouhinec@gmail.com (Marc Plouhinec)
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
         * Fire an event to a listener that is outside of the WebView.
         *
         * @param {String} webViewPlaceHolderId
         * @param {String} eventName
         * @param {String} jsonPayload
         */
        'fireExternalEvent': function(webViewPlaceHolderId, eventName, jsonPayload) {
        },

        /**
         * Remove the view with the given ID.
         *
         * @param {String} id
         *     Place holder ID.
         */
        'removeView': function(id) {
        }
    };

    return nativeWebView;
});
