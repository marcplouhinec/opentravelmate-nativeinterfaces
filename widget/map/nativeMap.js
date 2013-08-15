/**
 * Interface for the native implementation of the Map widget.
 *
 * @author marc.plouhinec@gmail.com (Marc Plouhinec)
 */

define(function() {
    'use strict';

    var nativeMap = {
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
         * Add an overlay to the map.
         *
         * @param {String} id
         *     Map place holder ID.
         * @param {String} jsonTileOverlay
         *     JSON serialized TileOverlay.
         */
        'addTileOverlay': function(id, jsonTileOverlay) {
        },

        /**
         * Move the map center to the given location.
         *
         * @param {String} id
         *     Map place holder ID.
         * @param {String} jsonCenter
         *     JSON serialized LatLng.
         */
        'panTo': function(id, jsonCenter) {
        },

        /**
         * Add a marker on the map.
         *
         * @param {String} id
         *     Map place holder ID.
         * @param {String} jsonMarker
         *     JSON serialized Marker.
         */
        'addMarker': function(id, jsonMarker) {
        },

        /**
         * Remove a marker from the map.
         *
         * @param {String} id
         *     Map place holder ID.
         * @param {String} jsonMarker
         *     JSON serialized Marker.
         */
        'removeMarker': function(id, jsonMarker) {
        }
    };

    return nativeMap;
});
