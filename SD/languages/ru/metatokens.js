"use strict";
/**
* @author Kadyrov Albert <fluffy1snow@gmail.com>
* @module SmartDateLocale_RU
*/

var metatokens = [
		{
			//some typical none-time formats
			regExp : /(#number_(\d+)%\s{0,3}(?:литр|баллов|балла|срока|срок|сроков|ступеней|ступенек|раза|раз))/gmi,
			replace : function ( h, t, c1, c2, c3 ) {
				this.captured = [ c1 ];
				this.origin = c1;
				return h;
			},
			type : "ESCAPE",
			id: 'm0'
		},
		{
			//some typical none-time formats
			regExp : /(№\s{0,3}#date_\d+%)/gmi,
			replace : function ( h, t, c1, c2, c3 ) {
				this.captured = [ c1 ];
				this.origin = c1;
				return h;
			},
			type : "ESCAPE",
			id: 'm1'
		},
		{
			//wordy date 4 may 2005
			regExp : /(#(?:day)?number_(\d+)%.{0,5}#month_(\d+)%.{0,5}#number_(\d+)%(.{0,5}#yearindex_\d+%)?)/gmi,
			replace : function ( h, t, c1, c2, c3, c4, c5 ) {
				this.captured = [ t[ c2 ].func(), +t[ c3 ].func(), t[ c4 ].func() ];
				this.origin = c1;
				c5 && ( this.priority += 1 );
				( ( ( new Date ).setYear( this.captured[ 2 ] ) ) < ( SD_tools._getDate() ) ) && ( this.priority -= 8 );
				if( SD_tools.setFullDate( this.captured[ 0 ], this.captured[ 1 ], this.captured[ 2 ], true ) === undefined ) return;
				if ( ( this.captured[ 2 ] ) > 2020 ) return;
				if ( ( this.captured[ 0 ].toString().length < 3 ) && ( +this.captured[ 0 ] < 32 ) && ( +this.captured[ 0 ] > 0 ) && ( ( this.captured[ 2 ].toString().length === 4 ) || ( this.captured[ 2 ].toString().length === 2 )))return h;
			},
			func : function() {
				return SD_tools.setFullDate( this.captured[ 0 ], this.captured[ 1 ], this.captured[ 2 ] );
			},
			type : "DATE",
			priority : 10, 
			id: 'm2'
		},
		{
			//wordy date 4 may 2005
			regExp : /(#month_(\d+)%.{0,5}#(?:day)?number_(\d+)%.{0,5}#number_(\d+)%(.{0,5}#yearindex_\d+%)?)/gmi,
			replace : function ( h, t, c1, c2, c3, c4, c5 ) {
				this.captured = [ t[ c3 ].func(), +t[ c2 ].func(), t[ c4 ].func() ];
				this.origin = c1;
				c5 && ( this.priority += 1 );
				if( SD_tools.setFullDate( this.captured[ 0 ], this.captured[ 1 ], this.captured[ 2 ], true ) === undefined ) return;
				( ( ( new Date ).setYear( this.captured[ 2 ] ) ) < ( SD_tools._getDate() ) ) && ( this.priority -= 5 );
				if ( ( this.captured[ 0 ].toString().length < 3 ) && ( +this.captured[ 0 ] < 31 ) && ( +this.captured[ 0 ] > 0 ) && ( ( this.captured[ 2 ].toString().length === 4 ) || ( this.captured[ 2 ].toString().length === 2 )) )return h;
			},
			func : function() {
				return SD_tools.setFullDate( this.captured[ 0 ], this.captured[ 1 ], this.captured[ 2 ] );
			},
			type : "DATE",
			priority : 10, 
			id: 'm3'
		},
		{
			//wordy date 4 may 2005
			regExp : /(#(?:day)?number_(\d+)%.{0,5}#month_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4, c5 ) {
				this.captured = [ t[ c2 ].func(), +t[ c3 ].func() ];
				this.origin = c1;
				if ( SD_tools.setDate( this.captured[ 0 ], this.captured[ 1 ], true ) === undefined ) return;
				if ( ( this.captured[ 0 ].toString().length < 3 ) && ( +this.captured[ 0 ] < 32  && ( +this.captured[ 0 ] > 0 ) ) )return h;
			},
			func : function() {
				return SD_tools.setDate( this.captured[ 0 ], this.captured[ 1 ] );
			},
			type : "DATE",
			priority : 5, 
			id: 'm4'
		},
		{
			regExp : /(#month_(\d+)%.{0,5}#number_(\d+)%(.{0,5}#yearindex_\d+%)?)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				this.captured = [ t[ c2 ].func(), t[ c3 ].func() ];
				this.origin = c1;
				c4 && ( this.priority += 1 );
				if( SD_tools.setFullDate( 1, this.captured[ 0 ], this.captured[ 1 ], true ) === undefined ) return;
				if ( ( ( this.captured[ 1 ].toString().length === 4 ) || ( this.captured[ 1 ].toString().length === 2 )) && ( Math.abs( SD_tools._getDate().getUTCFullYear().toString().slice( -2 ) - this.captured[ 1].toString().slice( -2 ) ) < 6 ) ) return h;
			},
			func : function() {
				return SD_tools.setFullDate( 1, this.captured[ 0 ], this.captured[ 1 ] );
			},
			type : "DATE",
			priority : 8, 
			id: 'm5'
		},
		{
			regExp : /(#month_(\d+)%.{0,5}#number_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				this.captured = [ t[ c2 ].func(), t[ c3 ].func() ];
				this.origin = c1;
				if ( ( ( this.captured[ 1 ].toString().length < 3 ) && ( +this.captured[ 1 ] < 31 ) && ( +this.captured[ 1 ] > 0 )) )return h;
			},
			func : function() {
				return SD_tools.nearestDayMonth( this.captured[ 1 ], this.captured[ 0 ] );
			},
			type : "DATE",
			priority : 8, 
			id: 'm6'
		},
		{
			regExp: /(#next_\d+%.{0,5}#month_(\d+)%)/gmi,
			replace: function (h, t, c1, c2, c3, c4) {
				this.captured = [ t[ c2 ].func() ];
				this.origin = c1;
				return h;
			},
			func: function () {
				return SD_tools.nearestDayMonth( 1, this.captured[ 0 ] );
			},
			type: "DATE",
			priority: 5, 
			id: 'm7'
		},

		{
			regExp : /(#after_\d+%(.{0,5}#number_(\d+)%)?.{0,5}#(?:date|month|year)index_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				if ( c2 ) {
					this.captured = [ t[ c4 ].origin, +t[ c3 ].func() ];
					this.priority += 2;
				} else this.captured = [ t[ c4 ].origin ];
				this.origin = c1;
				return h;
			},
			func : function() {
				if ( this.captured[ 1 ] ) {
					if ( this.captured[ 0 ].match( /дн|ден|сут/i ) ) {
						return SD_tools.today( this.captured[ 1 ] + 1 );
					} else if ( this.captured[ 0 ].match( /нед/i ) ) {
						return SD_tools.today( this.captured[ 1 ] * 7 );
					} else if ( this.captured[ 0 ].match( /мес/i ) ) {
						return SD_tools.currentMonth( + this.captured[ 1 ] );
					} else if ( this.captured[ 0 ].match( /г|лет/i ) ) {
						return SD_tools.currentYear( + this.captured[ 1 ] );
					} else return SD_tools.today();
				} else {
					if ( this.captured[ 0 ].match( /дн|ден|сут/i ) ) {
						return SD_tools.today( + 1 );
					} else if ( this.captured[ 0 ].match( /нед/i ) ) {
						return SD_tools.today( + 7 );
					} else if ( this.captured[ 0 ].match( /мес/i ) ) {
						return SD_tools.currentMonth( + 1 );
					} else if ( this.captured[ 0 ].match( /г|лет/i ) ) {
						return SD_tools.currentYear( + 1 );
					} else return SD_tools.today();
				}
			},
			type : "DATE",
			priority : 3, 
			id: 'm8'
		},
		{
			regExp : /(#next_\d+%.{0,5}#(?:date|month)index_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				this.captured = [ t[ c2 ].origin ];
				this.origin = c1;
				return h;
			},
			func : function() {
				if ( this.captured[ 0 ].match( /дн|ден|сут/i ) ) {
					return SD_tools.today( + 1 );
				} else if ( this.captured[ 0 ].match( /нед/i ) ) {
					return SD_tools.beginOfNextWeek( + 1 );
				} else if ( this.captured[ 0 ].match( /мес/i ) ) {
					return SD_tools.nextMonth( + 1 );
				} else return SD_tools.today();
			},
			type : "DATE",
			priority : 3, 
			id: 'm9'
		},
		{
			regExp : /(#actionremind_\d+%.+?#before_\d+%.{0,5})(#number_(\d+)%.{0,5}#(?:date|month)index_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4, c5 ) {
				this.captured = [ t[ c3 ], t[ c4 ].origin  ];
				this.priority += 1;
				this.origin = c2;
				return c1 + h;
			},
			func : function() {
				if ( this.captured[ 1 ].match( /дн|ден|сут/i ) ) {
					return '-' + this.captured[ 0 ].func()*1440;
				} else if ( this.captured[ 1 ].match( /нед/i ) ) {
					return '-' + this.captured[ 0].func()*10080;
				} else return '-0';
			},
			type : "RTIME",
			priority : 7, 
			id: 'm10'
		},
		{
			regExp : /(#number_(\d+)%.{0,5}#hourindex_(\d+)%.{0,5}#number_(\d+)%.{0,5}#minutindex_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4, c5 ) {
				if ( +t[ c2 ].func() < 24 && +t[ c4 ].func() < 60 ) {
					this.captured = [ +t[ c2 ].func(), +t[ c4 ].func() ];
					this.origin = c1;
					return h;
				}
			},
			func : function() {
				return { h : this.captured[ 0 ] , m : this.captured[ 1 ] };
			},
			type : "TIME",
			priority : 7, 
			id: 'm11'
		},
		{
			regExp : /(#actionremind_\d+%.+?#before_\d+%.{0,5})(#number_(\d+)%(.{0,5}#(?:hour|minut)index_(\d+)%)?)/gmi,
			replace : function ( h, t, c1, c2, c3, c4, c5 ) {
				if ( c4 ) {
					this.captured = [ t[ c3 ], t[ c5 ].origin  ];
					this.priority += 1;
				} else this.captured = [ t[ c3 ] ];
				this.origin = c2;
				return c1 + h;
			},
			func : function() {
				if ( this.captured[ 1 ] ) {
					if ( this.captured[ 1 ].match( /ч/i ) ) { return '-' + this.captured[ 0 ].func() * 60; } else return '-' + this.captured[ 0 ].func();
				} else if ( this.captured[ 0 ].origin.match( /час/i ) ) {
					return '-60';
				} else return '-' + this.captured[ 0 ].func();
			},
			type : "RTIME",
			priority : 7, 
			id: 'm12'
		},
		{
			//wordy date 4 may 2005
			regExp : /(#before_\d+%.{0,5})(#number_(\d+)%.{0,5}#(?:hour|minut)index_(\d+)%)(.{0,25}#actionremind_\d+%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4, c5 ) {
				this.captured = [ t[ c3 ].func(), t[ c4 ].origin  ];
				this.origin = c2;
				return c1 + h + c5;
			},
			func : function() {
				if ( this.captured[ 1 ].match( /ч/i ) ) {
					return '-' + this.captured[ 0 ]*60;
				} else return '-' + this.captured[ 0 ];
			},
			type : "RTIME",
			priority : 7, 
			id: 'm13'
		},
		{
			//wordy date 4 may 2005
			regExp : /(#prep_(\d+)%[\s]{0,5})(#numberhour_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				if ( t[ c2].origin.match( /в|к/i) ) {
					this.captured = [ t[ c4 ].func() ];
					this.origin = c2;
					return c1 + h;
				}
			},
			func : function() {
				return { h : this.captured[ 0 ], m : 0 };
			},
			type : "TIME",
			priority : 7, 
			id: 'm14'
		},
		{
			//wordy date 4 may 2005
			regExp : /(#to_\d+%[\s]{0,5})(#numberhour_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				this.captured = [ t[ c3 ].func() ];
				this.origin = c2;
				return c1 + h;
			},
			func : function() {
				return { h : this.captured[ 0 ], m : 0 };
			},
			type : "TIME",
			priority : 7, 
			id: 'm15'
		},
		{
			//wordy date 4 may 2005
			regExp : /(#time_(\d+)%.{0,5}#daytime_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				this.captured = [ t[ c2 ].func(), t[ c3 ].func() ];
				this.origin = c1;
				this.priority = t[ c2].priority + 1;
				if ( t[ c3 ].origin.match( /ноч/i ) && ( +t[ c2 ].func().h === 12 ) ) this.captured = [ { h : 0, m : 0 } ];
				return h;
			},
			func : function() {
				if ( ( this.captured[ 0 ].h < 12 ) && this.captured[ 1 ] ) {
					return { h : this.captured[ 0 ].h + 12 , m : this.captured[ 0 ].m };
				} else {
					this.captured[ 0 ].duplicity = false;
					return this.captured[ 0 ]
				}
			},
			type : "TIME",
			priority : 0, 
			id: 'm16'
		},
		{
			//wordy date 4 may 2005
			regExp : /(#after_\d+%.{0,5}#number_(\d+)%.{0,5}#(?:hour|minut)index_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				this.captured = [ +t[ c2 ].func(), t[ c3 ].origin ];
				this.origin = c1;
				return h;
			},
			func : function() {
				if ( this.captured[ 1 ].match( /ч/i ) ) {
					return { h : +this.captured[ 0 ], m : 0 };
				} else return { h : 0, m : +this.captured[ 0 ] };
			},
			type : "ATIME",
			priority : 7, 
			id: 'm17'
		},
		{
			//time with daytime
			regExp : /(#number_(\d+)%(.{0,10}?#hourindex_\d+%)?.{0,10}?#daytime_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				this.captured = [ +t[ c2 ].func(), t[ c4 ] ];
				this.origin = c1;
				c3 && ( this.priority += 1 );
				return h;
			},
			func : function() {
				if ( ( this.captured[ 0 ] === 12 ) && this.captured[ 1 ].origin.match( /ноч/i ) ) {
					return { h: 0, m: 0, duplicity: false};
				} else if ( ( this.captured[ 0 ] < 12 ) && this.captured[ 1 ].func() ) {
					return { h : this.captured[ 0 ] + 12 , m : 0, duplicity: false };
				} else return { h : this.captured[ 0 ] , m : 0, duplicity: false };
			},
			type : "TIME",
			priority : 8, 
			id: 'm18'
		},
		{
			//time with daytime
			regExp : /(#daytime_(\d+)%.{0,3})(#prep_\d+%.{0,5})(#number_(\d+)%(.{0,5}#hourindex_\d+%)?)/gmi,
			replace : function ( h, t, c1, c2, c3, c4, c5, c6 ) {
				this.captured = [ t[ c2 ].func(), +t[ c5 ].func()  ];
				this.origin = c1 + c4;
				c6 && ( this.priority += 1 );
				return c3 + h;
			},
			func : function() {
				if ( ( this.captured[ 1 ] < 12 ) && this.captured[ 0 ]) {
					return { h : this.captured[ 1 ] + 12 , m : 0, duplicity: false };
				} else return { h : this.captured[ 1 ] , m : 0, duplicity: false };
			},
			type : "TIME",
			priority : 8, 
			id: 'm19'
		},
		{
			//time with daytime
			regExp : /(#number_(\d+)%.{0,5}#dateindex_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				if ( ( +t[ c2 ].func() < 13 ) && ( t[ c3 ].origin.match( /дн/i ) ) ) {
					this.captured = [ +t[ c2 ].func() ];
					this.origin = c1;
					return h;
				}
			},
			func : function() {
				return { h: ( ( this.captured[ 0 ] + 12 ) > 24 ) ? this.captured[ 0 ] : this.captured[ 0 ] + 12, m: 0 };
			},
			type : "TIME",
			priority : 8, 
			id: 'm20'
		},
		{
			//wordy date 4 may 2005
			regExp : /(#before_\d+%.{0,5})(#number_(\d+)%.{0,10}#(?:hour|minut)index_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				this.captured = [ +t[ c3 ].func(), t[ c4 ].origin  ];
				this.origin = c2;
				return c1 + h;
			},
			func : function() {
				if ( this.captured[ 1 ].match( /ч/i ) ) {
					return '-' + this.captured[ 0 ]*60;
				} else return '-' + this.captured[ 0 ];
			},
			type : "RTIME",
			priority : 7, 
			id: 'm21'
		},
		{
			//wordy date 4 may 2005
			regExp : /(#after_\d+%.{0,5}#number_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				this.captured = [ t[ c2 ] ];
				this.origin = c1;
				return h;
			},
			func : function() {
				if ( this.captured[ 0].origin.match( /ч/i ) ) {
					return { h: +this.captured[ 0 ].func(), m: 0 };
				} else return { h : 0, m : +this.captured[ 0].func() };
			},
			type : "ATIME",
			priority : 3, 
			id: 'm22'
		},
		{
			//wordy date 4 may 2005
			regExp : /(#prep_(\d+)%.{0,5}#dtime_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				if ( t[ c2 ].origin.match( /на/i ) ) {
					this.captured = [ t[ c3].func() ];
					this.priority += 1;
					this.origin = c1;
					return h;
				}
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "DTIME",
			priority : 7, 
			id: 'm23'
		},
		{
			regExp : /(#prep_(\d+)%.{0,5}#number_(\d+)%.{0,5}#(?:hour|minut)index_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				if ( t[ c2 ].origin.match( /на/i ) ) {
					this.captured = [ +t[ c3 ].func(), t[ c4 ].origin  ];
					this.origin = c1;
					return h;
				}
			},
			func : function() {
				if ( this.captured[ 1 ].match( /ч/i ) ) {
					return { h : this.captured[ 0 ], m : 0 };
				} else return { h : 0, m : this.captured[ 0 ] };
			},
			type : "DTIME",
			priority : 7, 
			id: 'm24'
		},
		{
			regExp : /(#prep_(\d+)%.{0,5}#number_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				if ( t[ c2 ].origin.match( /на/i ) && ( t[ c3 ].origin.match( /час/i ) ) ) {
					this.captured = [ t[ c3 ] ];
					this.origin = c1;
					return h;
				}
			},
			func : function() {
				return { h : 1, m : 0 };
			},
			type : "DTIME",
			priority : 7, 
			id: 'm25'
		},
		{
			regExp : /(#after_(\d+)%.{0,5}#number_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				if ( t[ c3 ].origin.match( /час/i ) ) {
					this.captured = [ t[ c3 ] ];
					this.origin = c1;
					return h;
				}
			},
			func : function() {
				return { h : 1, m : 0 };
			},
			type : "ATIME",
			priority : 7, 
			id: 'm26'
		},
		{
			regExp : /(#actionremind_\d+%.{0,5}#before_\d+%.{0,5})(#(?:date|month)index_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				this.captured = [ t[ c3 ] ];
				this.origin = c2;
				return c1 + h;
			},
			func : function() {
				if ( this.captured[ 0 ].origin.match( /дн|ден|сут/i ) ) {
					return '-1440';
				} else if ( this.captured[ 0 ].origin.match( /нед/i ) ) {
					return '-10080';
				} else return '-0';
			},
			type : "RTIME",
			priority : 7, 
			id: 'm27'
		},
		{
			regExp : /(#number_(\d+)%.{0,5}#hourindex_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				if ( +t[ c2 ].func() < 24 ) {
					this.captured = [+t[c2].func(), t[c3].origin];
					this.origin = c1;
					return h;
				}
			},
			func : function() {
				return { h : this.captured[ 0 ] , m : 0 };
			},
			type : "TIME",
			priority : 7, 
			id: 'm28'
		},
		{
			regExp : /(#number_(\d+)%.{0,5}#hourindex_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				this.captured = [+t[c2].func(), t[c3].origin];
				this.origin = c1;
				return h;
			},
			func : function() {
				return { h : this.captured[ 0 ] , m : 0 };
			},
			type : "DTIME",
			priority : 7, 
			id: 'm29'
		},
		{
			//wordy date 4 may 2005
			regExp: /(#date_(\d+)%.{0,5}#(?:year|month)index_(\d+)%)/gmi,
			replace: function (h, t, c1, c2, c3, c4) {
				this.captured = [ t[ c2 ].func() ];
				this.origin = c1;
				this.priority = t[ c2 ].priority + 1;
				return h;
			},
			func: function () {
				return this.captured[ 0 ]
			},
			type: "DATE",
			priority: 0, 
			id: 'm30'
		},
		{
			regExp: /(#next_\d+%.{0,5}#date_(\d+)%)/gmi,
			replace: function (h, t, c1, c2, c3, c4) {
				this.captured = [ t[ c2 ].func() ];
				this.origin = c1;
				this.priority = t[ c2 ].priority + 1;
				return h;
			},
			func: function () {
				return this.captured[ 0 ]
			},
			type: "DATE",
			priority: 0, 
			id: 'm31'
		},
		{
			//wordy date 4 may 2005
			regExp: /(#time_(\d+)%.{0,5}#hourindex_(\d+)%)/gmi,
			replace: function (h, t, c1, c2, c3, c4) {
				this.captured = [ t[ c2 ].func() ];
				this.origin = c1;
				this.priority = t[ c2 ].priority;
				return h;
			},
			func: function () {
				return this.captured[ 0 ]
			},
			type: "TIME",
			priority: 0, 
			id: 'm32'
		},
		{
			//wordy date 4 may 2005
			regExp: /(#before_\d+%.{0,5}#rtime_(\d+)%)/gmi,
			replace: function (h, t, c1, c2, c3, c4) {
				this.captured = [ t[ c2 ].func() ];
				this.origin = c1;
				this.priority = t[ c2 ].priority;
				return h;
			},
			func: function () {
				return this.captured[ 0 ]
			},
			type: "RTIME",
			priority: 0, 
			id: 'm33'
		},
		{
			//wordy date 4 may 2005
			regExp: /(#before_\d+%.{0,5}#time_(\d+)%)/gmi,
			replace: function (h, t, c1, c2, c3, c4) {
				this.captured = [ t[ c2 ].func() ];
				this.origin = c1;
				this.priority = t[ c2 ].priority;
				return h;
			},
			func: function () {
				return '-' + ( this.captured[ 0 ].h * 60 + this.captured[ 0 ].m )
			},
			type: "RTIME",
			priority: 0, 
			id: 'm34'
		},
		{
			//wordy date 4 may 2005
			regExp: /(#dprep_\d+%.{0,5}#time_(\d+)%)/gmi,
			replace: function (h, t, c1, c2, c3, c4) {
				this.captured = [ t[ c2 ].func() ];
				this.origin = c1;
				this.priority = t[ c2 ].priority;
				return h;
			},
			func: function () {
				return this.captured[ 0 ];
			},
			type: "DTIME",
			priority: 0, 
			id: 'm35'
		},
		{
			//wordy date 4 may 2005
			regExp: /(#prep_\d+%.{0,5})?(#time_(\d+)%)/gmi,
			replace: function (h, t, c1, c2, c3, c4) {
				if ( c1 === undefined && t[ c3 ].func().datealternative && SD_tools.setDate( t[ c3 ].func().h, t[ c3 ].func().m, true ) ) {
					this.captured = [ SD_tools.setDate( t[ c3 ].func().h, t[ c3 ].func().m ) ];
					this.origin = c2;
					this.priority = t[ c3 ].priority - 5;
					return h;
				}
			},
			func: function () {
				return this.captured[ 0 ];
			},
			type: "DATE",
			priority: 0, 
			id: 'm36'
		},
		{
			//wordy date 4 may 2005
			regExp : /(#after_\d+%\s{0,3})(#d?time_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				this.captured = [ t[ c3 ].func() ];
				this.origin = c1 + c2;
				return h;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "ATIME",
			priority : 8, 
			id: 'm37'
		},
		{
			//wordy date 4 may 2005
			regExp : /(#numberhour_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				this.captured = [ t[ c2 ].func() ];
				this.origin = c1;
				return h;
			},
			func : function() {
				return { h : this.captured[ 0 ], m : 0 };
			},
			type : "DTIME",
			priority : 7, 
			id: 'm38'
		},
		{
			//wordy date 4 may 2005
			regExp: /(#before_\d+%.{0,5}#dtime_(\d+)%)/gmi,
			replace: function (h, t, c1, c2, c3, c4) {
				this.captured = [ t[ c2 ].func() ];
				this.origin = c1;
				this.priority = t[ c2 ].priority;
				return h;
			},
			func: function () {
				return '-' + ( +this.captured[ 0 ].h * 60 + +this.captured[ 0 ].m );
			},
			type: "RTIME",
			priority: 0, 
			id: 'm39'
		},
		{
			//wordy date 4 may 2005
			regExp: /(#weekday_(\d+)%(?:.|\n)+?#date_(\d+)%)/gmi,
			replace: function (h, t, c1, c2, c3, c4) {
				if ( t[ c2 ].func() === ( new Date( t[ c3 ].func().replace( /-/g, '/') ).getDay() ) ) {
					this.captured = [ t[ c2 ].func(), t[ c3 ].func() ];
					this.origin = c1;
					this.priority = t[ c3 ].priority + 3;
					return h;
				}
			},
			func: function () {
				return this.captured[ 1 ]
			},
			type: "DATE",
			priority: 0, 
			id: 'm40'
		},
		{
			//wordy date 4 may 2005
			regExp: /(#date_(\d+)%.{0,5}#weekday_(\d+)%)/gmi,
			replace: function (h, t, c1, c2, c3, c4) {
				if ( t[ c3 ].func() === ( new Date( t[ c2 ].func().replace( /-/g, '/') ).getDay() ) ) {
					this.captured = [ t[ c2 ].func(), t[ c3 ].func() ];
					this.origin = c1;
					this.priority = t[ c2 ].priority + 3;
					return h;
				}
			},
			func: function () {
				return this.captured[ 0 ]
			},
			type: "DATE",
			priority: 0, 
			id: 'm41'
		},
		{
			//wordy date 4 may 2005
			regExp: /(#next_\d+%.{0,5}#weekday_(\d+)%)/gmi,
			replace: function (h, t, c1, c2 ) {
				this.captured = [ t[ c2 ].func() ];
				this.origin = c1;
				this.priority = t[ c2 ].priority;
				return h;
			},
			func: function () {
				return SD_tools.beginOfNextWeek( this.captured[ 0 ] )
			},
			type: "DATE",
			priority: 0, 
			id: 'm42'
		},
		{
			//wordy date 4 may 2005
			regExp: /(#weekday_(\d+)%)/gmi,
			replace: function (h, t, c1, c2 ) {
				this.captured = [ t[ c2 ].func() ];
				this.origin = c1;
				this.priority = t[ c2 ].priority;
				return h;
			},
			func: function () {
				return SD_tools.beginOfWeek( this.captured[ 0 ] );
			},
			type: "DATE",
			priority: 0, 
			id: 'm43'
		},
		{
			regExp : /(#month_(\d+)%)/gmi,
			replace : function ( h, t, c1, c2, c3, c4 ) {
				this.captured = [ t[ c2 ].func() ];
				this.origin = c1;
				return h;
			},
			func : function() {
				return SD_tools.nearestDayMonth( 1, this.captured[ 0 ] );
			},
			type : "DATE",
			priority : 3, 
			id: 'm44'
		}
	];
