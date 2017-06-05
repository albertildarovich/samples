"use strict";
/**
* @author Kadyrov Albert <fluffy1snow@gmail.com>
* @module SD_utils
*/


var SD_tools = {
	queries : [],
	workTime : null,
	localDate : null,
	_getDate : function() {
		if ( this.localDate ) {
			return new Date( this.localDate );
		} else return new Date()
	},
	dateToISOString : function ( date, dateOnly ) {
		var
			tzo = -date.getTimezoneOffset(),
			pad = function ( d ) {
				return d < 10 ? '0' + d : d
			};
		return (
			dateOnly
				? [date.getFullYear(), '-', pad( date.getMonth() + 1 ), '-', pad( date.getDate() )]
				: [date.getFullYear(), '-', pad( date.getMonth() + 1 ), '-', pad( date.getDate() ), 'T' + date.getHours( true ), ':', date.getMinutes( true ), ':', pad( date.getSeconds() ), ( tzo >= 0 ? '+' : '-' ), pad( Math.abs( tzo / 60 ) >> 0 ), ':', pad( Math.abs( tzo ) % 60 )]
		).join( '' );
	},
	addDays : function ( date, numOfDays ) {
		date.setDate( date.getDate() + ( numOfDays === undefined ? 0 : numOfDays ) );
		return date;
	},
	dayOfWeek : function ( date, numOfDays ) {
			date.setDate( date.getDate() - date.getDay() + numOfDays );
			return date;
	},
	dayOfNextWeek : function ( date, numOfDays ) {
		var current = this._getDate();
		date.setDate( date.getDate() - date.getDay() + numOfDays );
		if ( current.getTime() >= date.getTime() ){
			date.setDate( date.getDate() - date.getDay() + 7 + numOfDays );
		}
		return date;
	},
	addMonths : function ( date, numOfMonths ) {
		date.setMonth( date.getMonth() + numOfMonths );
		return date;
	},
	addYears : function ( date, numOfYears ) {
		date.setFullYear( date.getFullYear() + numOfYears );
		return date;
	},
	defineYear : function ( dd, mm ) {
		var current = this._getDate();
		var newDate = this._getDate();
		newDate.setMonth( mm - 1 );
		newDate.setDate( dd );
		if (current.getTime() >= newDate.getTime()){
			newDate = new Date( newDate.getFullYear() + 1, mm - 1, dd  );
		}
		return newDate;
	},
	now : function ( offset, options, duplicity ) {
		var time = new Date( this._getDate().setMinutes( this._getDate().getMinutes() + +( offset == undefined ? 0 : offset ) ) ), hh, mm, offs = Math.round( ( time - this._getDate() )/86400000 );
		hh =  time.getHours();
		mm =  time.getMinutes();
		if ( options === 'h' ) {
			return hh;
		} else if ( options === 'm' ) {
			return mm;
		} else if ( options === 'ISO' ) {
			return ( ( ( +hh > 9 ) || ( +hh === 0 ) ) ? hh : '0' + hh ) + ':' + ( +mm > 9 ? mm : '0' + +mm );
		} else return { h : hh, m : mm, offset : offs, duplicity: duplicity };
	},
	today : function ( offset ) {
		var a = this.addDays( this._getDate(), +( offset == undefined ? 0 : offset )), b = this.dateToISOString( a, true );
		return b;
	},
	beginOfWeek : function ( offset ) {
		return this.dateToISOString( this.dayOfNextWeek( this._getDate(), offset ), true );
	},
	beginOfNextWeek : function ( offset ) {
		return this.dateToISOString( this.dayOfNextWeek( this._getDate(), offset ), true );
	},
	currentMonth : function ( offset ) {
		return this.dateToISOString( this.addMonths( this._getDate(), offset ), true );
	},
	currentYear : function ( offset ) {
		return this.dateToISOString( this.addYears( this._getDate(), offset ), true );
	},
	monthOfNextYear : function ( mm ) {
		var current = this._getDate();
		var d = this._getDate();
		d.setMonth( mm - 1 );
		d.setDate( 1 );
		if ( current.getTime() >= d.getTime() ){
			d.setFullYear( d.getFullYear() + 1 );
		}
		return this.dateToISOString( d, true );
	},
	setDate : function ( dd, mm, validate ) {
		if ( validate ) {
			if ( this._validateDate( dd, mm, ( this.defineYear( dd, mm )).getFullYear() ) ) return this.dateToISOString(this.defineYear(dd, mm), true );
		} else return this.dateToISOString(this.defineYear( dd, mm ), true);
	},
	setFullDate : function ( dd, mm, yy, validate ) {
		var newDate = this._getDate(), res;
		if ( yy.toString().length > 2 ) {
		} else if ( +yy > 25 ) {
			yy = + ( '19' + yy );
		} else yy = +( '20' + yy );
		newDate.setFullYear( yy );
		newDate.setMonth( mm - 1 );
		newDate.setDate( dd );
		if ( validate ) {
			if ( this._validateDate( dd, mm, yy ) ) return this.dateToISOString( newDate, true );
		} else return this.dateToISOString( newDate, true );
	},
	nextMonth : function ( offset ) {
		return this.dateToISOString( this.addMonths( new Date( this._getDate().setDate( 1 ) ), offset ), true );
	},
	nearestDayMonth : function ( dd, mm ) {
		var current = this._getDate();
		var newDate = this._getDate();
		newDate.setMonth( mm - 1 );
		newDate.setDate( dd );
		if ( current.getTime() >= newDate.getTime() ) {
			newDate.setFullYear( newDate.getFullYear() + 1 );
		}
		return this.dateToISOString( newDate, true );
	},
	getNumberRegExp : /(?:_)(\d+)%/,
	_getNumber : function ( a ) {
		//console.log( a );
		return +this.getNumberRegExp.exec( a )[ 1 ];
	},
	_publicateQuery : function ( query ) {
		query._id = this.queries.length;
		this.queries[ query._id ] = query;
	},
	_validateDate : function( dd, mm, yy ) {
		var date = new Date( +yy, +mm - 1 , +dd );
		if ( date.getFullYear() === +yy && date.getMonth() == +mm - 1 && date.getDate() == +dd ) return true;
	},
	_durationCounter : function( durationBegin, durationEnd, summode ) {
		var d1 = ( typeof( durationBegin ) === "object" ) ? durationBegin.h * 60 + durationBegin.m : durationBegin ? durationBegin * 60 : this.now( 0, 'h') * 60 + this.now( 0, 'm'),
			d2 = ( typeof( durationEnd ) === "object" ) ? durationEnd.h * 60 + durationEnd.m : durationEnd * 60;
		if ( durationBegin && durationBegin.duplicity !== false && d1 < d2 ) {
			if ( typeof( durationBegin ) === "object" ) {
				if ( ( d2 - ( ( durationBegin.h + 12 ) * 60 + durationBegin.m ) ) > 0 ) d1 = ( durationBegin.h + 12 ) * 60 + durationBegin.m;
			} else if ( ( d2 - ( +durationBegin + 12 ) * 60 ) > 0 ) d1 = ( durationBegin + 12 ) * 60;
		}
		if ( durationEnd && durationEnd.duplicity !== false && d1 > d2 ) {
			if ( typeof( durationEnd ) === "object" ) {
				if ( d1 < ( ( durationEnd.h + 12 ) * 60 + durationEnd.m ) ) d2 = ( durationEnd.h + 12 ) * 60 + durationEnd.m;
			} else if ( d1 < ( durationEnd + 12 ) * 60  ) d2 = ( durationEnd + 12 ) * 60;
		}
		if( summode ) {
			if ( durationBegin === "allday" ) { return durationBegin; } else return d1.toString();
		}
		if ( d1 < d2 ) { return ( d2 - d1 ).toString(); } else if ( d1 > d2 ) return ( 1440 - d1 + d2  ).toString();
	}
};
