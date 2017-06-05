"use strict";

var self = this;
this.parseText = function ( text, options ) {
	options || ( options = {} );
	if ( self.modelQuery ) options.model = function ( query, callback ) {
		callback( self.modelQuery( query ) );
	};
	smartDateParse( text, options, function ( err, res ) {
		// Fix mistake with event_alarms format
		if ( res.length && res[ 0 ] && res[ 0 ].event_alarms && ( typeof res[ 0 ].event_alarms === 'string' || typeof res[ 0 ].event_alarms === 'number' ) ) {
			res[ 0 ].event_alarms = [ { delta : 60 * Math.abs( +res[ 0 ].event_alarms ), meta : "" } ];
		}
		self.sendResult( ( err || '' ) + '', JSON.stringify( err ? '' : res || {} ) );
	} );
};
