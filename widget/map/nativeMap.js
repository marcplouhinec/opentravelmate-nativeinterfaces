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
         * Get the map bounds (South-West and North-East points).
         *
         * @param {String} id
         *     Map place holder ID.
         * @return {String} jsonBounds
         *     JSON serialized {sw: LatLng, ne: LatLng}.
         */
        'getBounds': function(id) {
        },

        /**
         * Add markers on the map.
         *
         * @param {String} id
         *     Map place holder ID.
         * @param {String} jsonMarkers
         *     JSON serialized array of markers.
         */
        'addMarkers': function(id, jsonMarkers) {
        },

        /**
         * Remove markers from the map.
         *
         * @param {String} id
         *     Map place holder ID.
         * @param {String} jsonMarkers
         *     JSON serialized array of markers.
         */
        'removeMarkers': function(id, jsonMarkers) {
        },

        /**
         * Add a button on the map top-right corner.
         *
         * @param {String} id
         *     Map place holder ID.
         * @param {String} jsonMapButton
         *     JSON serialized MapButton.
         */
        'addMapButton': function(id, jsonMapButton) {
        },

        /**
         * Update a button on the map.
         *
         * @param {String} id
         *     Map place holder ID.
         * @param {String} jsonMapButton
         *     JSON serialized MapButton.
         */
        'updateMapButton': function(id, jsonMapButton) {
        },

        /**
         * Start observing tiles and forward the TILES_DISPLAYED and TILES_RELEASED events to the
         * map defined by the given place-holder ID.
         * Note: this function does nothing if the tiles are already observed.
         *
         * @param {String} id
         *     Map place holder ID.
         */
        'observeTiles': function(id) {
        },

        /**
         * Get all the visible tile coordinates.
         * Note: the function observeTiles() must be called before executing this one.
         *
         * @param {String} id
         *     Map place holder ID.
         * @return {String} JSON-serialized Array.<{zoom: Number, x: Number, y: Number}>
         */
        'getDisplayedTileCoordinates': function(id) {
        },
        
        /**
         * Start observing markers and forward the CLICK, MOUSE_ENTER and MOUSE_LEAVE events to the
         * map defined by the given place-holder ID.
         * Note: this function does nothing if the markers are already observed.
         *
         * @param {String} id
         *     Map place holder ID.
         */
        'observeMarkers': function (id) {
        },

        /**
         * Show the given text in an Info Window on top of the given marker.
         *
         * @param {String} id
         *     Map place holder ID.
         * @param {String} jsonMarker
         *     JSON-serialized marker where to set the Info Window anchor.
         * @param content
         *     Text displayed in the Info Window.
         * @param {String} jsonAnchor
         *     JSON-serialized position of the the InfoWindow-base compared to the marker position.
         *     Examples:
         *       - (0,0) is the marker position.
         *       - (0,1) is on the under of the marker position.
         *       - (-1,0) is on the left of the marker position.
         */
        'showInfoWindow': function(id, jsonMarker, content, jsonAnchor) {
        },

        /**
         * Close the Info Window if any.
         *
         * @param {String} id
         *     Map place holder ID.
         */
        'closeInfoWindow': function(id) {
        },

        /**
         * Set the map type.
         *
         * @param {String} id
         *     Map place holder ID.
         * @param {String} mapType
         *     'ROADMAP' or 'SATELLITE'.
         */
        'setMapType': function(id, mapType) {
        },
        
        /**
         * Add the given polyline on the map.
         *
         * @param {String} id
         *     Map place holder ID.
         * @param {String} jsonPolyline
         *     Polyline to add.
         */
        'addPolyline': function(id, jsonPolyline) {
        }
    };

    return nativeMap;
});
