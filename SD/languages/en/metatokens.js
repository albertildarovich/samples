var metatokens = [
	{
		//time with daytime
		regExp : /(#number_(\d+)%\s#number_(\d+)%.{0,10}?#daytime_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			if( ( +t[ c2 ].func() > 23 ) || ( +t[ c3 ].func() > 59 ) ) return;
			this.captured = [ +t[ c2 ].func(), +t[ c3 ].func() , t[ c4 ].func() ];
			this.origin = c1;
			return h;
		},
		func : function() {
			if ( ( this.captured[ 0 ] < 12 ) && this.captured[ 2 ] ) {
				return { h : this.captured[ 0 ] + 12 , m : this.captured[ 1 ], duplicity: false };
			} else return { h : this.captured[ 0 ] , m : this.captured[ 1 ], duplicity: false };
		},
		type : "TIME",
		priority : 8, 
		id: 'm0'
	},
	{
		//time with daytime
		regExp : /(#number_(\d+)%\s#number_(\d+)%(.{0,10}?(?:o(?:'|\s|`)clock)))/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			if( ( +t[ c2 ].func() > 23 ) || ( +t[ c3 ].func() > 59 ) ) return;
			this.captured = [ +t[ c2 ].func(), +t[ c3 ].func() ];
			this.origin = c1;
			return h;
		},
		func : function() {
			return { h : this.captured[ 0 ] , m : this.captured[ 1 ] };
		},
		type : "TIME",
		priority : 4, 
		id: 'm1'
	},
	{
		regExp : /(#number_(\d+)%.{0,10}?#minutindex_\d+%.{0,10}?past.{0,10}?#number_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			if ( +t[ c2 ].func() < 31 && +t[ c3 ].func() < 13 ) {
				this.captured = [ +t[ c2 ].func(), +t[ c3 ].func() ];
				this.origin = c1;
				return h;
			}
		},
		func : function() {
			return { h : this.captured[ 1 ] , m : this.captured[ 0 ] };
		},
		type : "TIME",
		priority : 10, 
		id: 'm2'
	},
	{
		regExp : /(#number_(\d+)%.{0,10}?#minutindex_\d+%.{0,10}?#to_\d+%.{0,10}?#number_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			if ( +t[ c2 ].func() < 31 && +t[ c3 ].func() < 13 ) {
				this.captured = [ +t[ c2 ].func(), +t[ c3 ].func() ];
				this.origin = c1;
				return h;
			}
		},
		func : function() {
			return { h : this.captured[ 1 ] - 1 , m : 60 - this.captured[ 0 ] };
		},
		type : "TIME",
		priority : 10, 
		id: 'm3'
	},
	{
		regExp : /((?:a.{0,10}?)?quarter.{0,10}?past.{0,10}?#number_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			if ( +t[ c2 ].func() < 13 ) {
				this.captured = [ +t[ c2 ].func() ];
				this.origin = c1;
				return h;
			}
		},
		func : function() {
			return { h : this.captured[ 0 ] , m : 15 };
		},
		type : "TIME",
		priority : 10, 
		id: 'm4'
	},
	{
		regExp : /((?:\bat\b.{0,10}?)?half.{0,10}?past.{0,10}?#number_(\d+)%(.{0,10}?(?:o(?:'|\s|`)clock))?)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			if ( +t[ c2 ].func() < 13 ) {
				this.captured = [ +t[ c2 ].func() ];
				this.origin = c1;
				return h;
			}
		},
		func : function() {
			return { h : this.captured[ 0 ] , m : 30 };
		},
		type : "TIME",
		priority : 10, 
		id: 'm5'
	},
	{
		regExp : /((?:a.{0,3}?)?quarter.{0,10}?#to_\d+%.{0,10}?#number_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			if ( +t[ c2 ].func() < 13 ) {
				this.captured = [ +t[ c2 ].func() ];
				this.origin = c1;
				return h;
			}
		},
		func : function() {
			return { h : this.captured[ 0 ] - 1, m : 45 };
		},
		type : "TIME",
		priority : 10, 
		id: 'm6'
	},
	{
		//digital time
		regExp : /(#number_\d+%|#time_\d+)%(\s?(?:midnight|midday|noontime|noonday|noontide|noon))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, t, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func : function() {
			if ( this.captured[ 0 ].match( /noon/ ) ) { return true; } else return false;
		},
		type : "DAYTIME",
		id: 'm7'
	},
	{
		//time with daytime
		regExp : /([-])(([1-9]|1[0-2]).{0,10}?#daytime_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			this.captured = [ +c3, t[ c4 ].func() ];
			this.origin = c2;
			return c1 + h;
		},
		func : function() {
			if ( ( this.captured[ 0 ] < 12 ) && this.captured[ 1 ]) {
				return { h : this.captured[ 0 ] + 12 , m : 0 };
			} else return { h : this.captured[ 0 ] , m : 0, duplicity: false };
		},
		type : "TIME",
		priority : 1,
		id: 'm8a'
	},
	{
		//time with daytime
		regExp : /(#number_(\d+)%(.{0,10}?#hourindex_\d+%)?(?:\s|(?:\s*#e_\d+%\s*)*)?#daytime_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			this.captured = [ +t[ c2 ].func(), t[ c4 ].func()  ];
			this.origin = c1;
			c3 && ( this.priority += 1 );
			return h;
		},
		func : function() {
			if ( ( this.captured[ 0 ] < 12 ) && this.captured[ 1 ]) {
				return { h : this.captured[ 0 ] + 12 , m : 0 };
			} else return { h : this.captured[ 0 ] , m : 0, duplicity: false };
		},
		type : "TIME",
		priority : 8,
		id: 'm8'
	},
	{
		regExp : /(#number_(\d+)%.{0,10}?(?:o(?:'|\s|`|’)clock))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, t, c1, c2, c3, c4, c5 ) {
			if ( +t[ c2 ].func() < 24 ) {
				this.captured = [ +t[ c2 ].func() ];
				this.origin = c1;
				return h + c3;
			}
		},
		func : function() {
			return { h : this.captured[ 0 ], m : 0 }
		},
		type : "TIME",
		priority : 10,
		id: 'm11'
	},
	{
		regExp : /(#time_(\d+)%.{0,10}?(?:o(?:'|\s|`|’)clock))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, t, c1, c2, c3, c4, c5 ) {
			this.captured = [ t[ c2 ].func() ];
			this.origin = c1;
			return h + c3;
		},
		func : function() {
			return this.captured[ 0 ];
		},
		type : "TIME",
		priority : 10,
		id: 'm11a'
	},
	{
		regExp : /(#from_\d+%.{0,10}?)(#number_(\d+)%(.{0,10}?#to_\d+%))/gmi,
		replace : function ( h, t, c1, c2, c3, c4, c5 ) {
			if ( +t[ c3 ].func() < 24 ) {
				this.captured = [ +t[ c3 ].func() ];
				this.origin = c2;
				return c1 + h + c4;
			}
		},
		func : function() {
			return { h : this.captured[ 0 ], m : 0 }
		},
		type : "TIME",
		priority : 10,
		id: 'm11'
	},
	{
		//wordy date 4 may 2005
		regExp : /(#time_(\d+)%[^I]{0,10}?#daytime_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			this.captured = [ t[ c2 ].func(), t[ c3 ].func() ];
			this.origin = c1;
			this.priority = t[ c2].priority + 1;
			return h;
		},
		func : function() {
			if ( ( this.captured[ 0 ].h === 12 ) && this.captured[ 1 ] === false ) {
				return {h: 0, m: this.captured[ 0 ].m, duplicity: false};
			} else if ( ( this.captured[ 0 ].h < 12 ) && this.captured[ 1 ] ) {
				return { h : this.captured[ 0 ].h + 12 , m : this.captured[ 0 ].m, duplicity: false };
			} else {
				this.captured[ 0 ].duplicity = false;
				return this.captured[ 0 ]
			}
		},
		type : "TIME",
		priority : 0,
		id: 'm9'
	},
	{
		//digital time
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(midnight|midday|noontime|noonday|noontide|noon)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, t, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func : function() {
			switch ( this.captured[ 0 ] ) {
				case 'midnight':
					return { h : 0, m : 0 };
				case 'midday':
				case 'noontime':
				case 'noonday':
				case 'noontide':
				case 'noon':
					return { h : 12 , m : 0 };
				default : return { h : 12, m : 0 }
			}
		},
		type : "TIME",
		priority: 8, 
		id: 'm10'
	},
	{
		//wordy date 4 may 2005
		regExp : /(#(?:day)?number_(\d+)%.{0,10}?#month_(\d+)%.{0,5}?#number_(\d+)%(.{0,10}?#yearindex_\d+%)?)/gmi,
		replace : function ( h, t, c1, c2, c3, c4, c5 ) {
			if ( SD_tools.setFullDate( +t[ c2 ].func(), +t[ c3 ].func(), +t[ c4 ].func(), true ) === undefined ) return;
			this.captured = [ t[ c2 ].func(), +t[ c3 ].func(), t[ c4 ].func() ];
			this.origin = c1;
			c5 && ( this.priority += 1 );
			( ( ( new Date ).setYear( this.captured[ 2 ] ) ) < ( SD_tools._getDate() ) ) && ( this.priority -= 5 );
			if ( ( this.captured[ 0].toString().length < 3 ) && ( this.captured[ 0 ] < 32 ) && ( ( this.captured[ 2 ].length === 4 ) || ( this.captured[ 2 ].length === 2 )) ) return h;
		},
		func : function() {
			return SD_tools.setFullDate( this.captured[ 0 ], this.captured[ 1 ], this.captured[ 2 ] );
		},
		type : "DATE",
		priority : 10, 
		id: 'm12'
	},
	{
		//wordy date 4 may 2005
		regExp : /(#month_(\d+)%.{0,10}?#(?:day)?number_(\d+)%.{0,5}?#number_(\d+)%(.{0,10}?#yearindex_\d+%)?)/gmi,
		replace : function ( h, t, c1, c2, c3, c4, c5 ) {
			if ( SD_tools.setFullDate( +t[ c3 ].func(), +t[ c2 ].func(), +t[ c4 ].func(), true ) === undefined ) return;
			this.captured = [ t[ c3 ].func(), +t[ c2 ].func(), t[ c4 ].func() ];
			this.origin = c1;
			c5 && ( this.priority += 1 );
			( ( ( new Date ).setYear( this.captured[ 2 ] ) ) < ( SD_tools._getDate() ) ) && ( this.priority -= 5 );
			if ( ( this.captured[ 0 ].toString().length < 3 ) && ( this.captured[ 0 ] < 31 ) && ( ( this.captured[ 2 ].length === 4 ) || ( this.captured[ 2 ].length === 2 )) )return h;
		},
		func : function() {
			return SD_tools.setFullDate( this.captured[ 0 ], this.captured[ 1 ], this.captured[ 2 ] );
		},
		type : "DATE",
		priority : 10, 
		id: 'm13'
	},
	{
		//wordy date 4 may 2005
		regExp : /((?:\bthe\s{0,10}?)?#(?:day)?number_(\d+)%.{0,30}?#month_(\d+)%(.{0,10}?#yearindex_\d+%)?)/gmi,
		replace : function ( h, t, c1, c2, c3, c4, c5 ) {
			if ( SD_tools.setDate( +t[ c2 ].func(), +t[ c3 ].func(), true ) === undefined ) return;
			this.captured = [ t[ c2 ].func(), +t[ c3 ].func() ];
			this.origin = c1;
			c4 && ( this.priority += 1 );
			if ( ( this.captured[ 0 ].toString().length < 3 ) && ( this.captured[ 0 ] < 32 ) ) return h;
		},
		func : function() {
			return SD_tools.setDate( this.captured[ 0 ], this.captured[ 1 ] );
		},
		type : "DATE",
		priority : 8, 
		id: 'm14'
	},
	{
		//wordy date 4 may 2005
		regExp : /(#month_(\d+)%.{0,10}?#(?:day)?number_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4, c5 ) {
			if ( SD_tools.setDate( +t[ c3 ].func(), +t[ c2 ].func(), true ) === undefined ) return;
			this.captured = [ +t[ c2 ].func(), t[ c3 ].func() ];
			this.origin = c1;
			if ( ( this.captured[ 1 ].toString().length < 3 ) && ( this.captured[ 1 ] < 32 ) ) return h;
		},
		func : function() {
			return SD_tools.setDate( this.captured[ 1 ], this.captured[ 0 ] );
		},
		type : "DATE",
		priority : 8, 
		id: 'm15'
	},
	{
		regExp : /(#month_(\d+)%.{0,10}?#number_(\d+)%(.{0,10}?#yearindex_\d+%)?)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			if ( SD_tools.setFullDate( 1, +t[ c2 ].func(), +t[ c3 ].func(), true ) === undefined ) return;
			this.captured = [ t[ c2 ].func(), t[ c3 ].func() ];
			this.origin = c1;
			c4 && ( this.priority += 1 );
			if ( ( ( this.captured[ 1 ].toString().length === 4 ) || ( this.captured[ 1 ].toString().length === 2 )) && ( Math.abs( SD_tools._getDate().getUTCFullYear().toString().slice( -2 ) - this.captured[ 1].toString().slice( -2 ) ) < 6 ) )return h;
		},
		func : function() {
			return SD_tools.setFullDate( 1, this.captured[ 0 ], this.captured[ 1 ] );
		},
		type : "DATE",
		priority : 8, 
		id: 'm16'
	},
	{
		regExp : /(#month_(\d+)%.{0,10}?#number_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			this.captured = [ t[ c2 ].func(), t[ c3 ].func() ];
			this.origin = c1;
			if ( ( ( this.captured[ 1 ].length < 3 ) && ( +this.captured[ 1 ] < 31 )) )return h;
		},
		func : function() {
			return SD_tools.nearestDayMonth( this.captured[ 1 ], this.captured[ 0 ] );
		},
		type : "DATE",
		priority : 8, 
		id: 'm17'
	},
	{
		regExp: /(#next_\d+%.{0,10}?#month_(\d+)%)/gmi,
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
		id: 'm18'
	},
	{
		regExp : /(#after_\d+%(.{0,10}?#number_(\d+)%)?.{0,10}?#(?:date|month|year)index_(\d+)%)/gmi,
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
				if ( this.captured[ 0 ].match( /da/i ) ) {
					return SD_tools.today( this.captured[ 1 ] + 1 );
				} else if ( this.captured[ 0 ].match( /wee/i ) ) {
					return SD_tools.today( this.captured[ 1 ] * 7 );
				} else if ( this.captured[ 0 ].match( /mon/i ) ) {
					return SD_tools.currentMonth( + this.captured[ 1 ] );
				} else if ( this.captured[ 0 ].match( /yea/i ) ) {
					return SD_tools.currentYear( + this.captured[ 1 ] );
				} else return SD_tools.today();
			} else {
				if ( this.captured[ 0 ].match( /da/i ) ) {
					return SD_tools.today( + 1 );
				} else if ( this.captured[ 0 ].match( /wee/i ) ) {
					return SD_tools.today( + 7 );
				} else if ( this.captured[ 0 ].match( /mon/i ) ) {
					return SD_tools.currentMonth( + 1 );
				} else if ( this.captured[ 0 ].match( /ye/i ) ) {
					return SD_tools.currentYear( + 1 );
				} else return SD_tools.today();
			}
		},
		type : "DATE",
		priority : 3, 
		id: 'm19'
	},
	{
		regExp : /((#number_(\d+)%)?.{0,10}?#(?:date|month|year)index_(\d+)%.{0,10}?#after_\d+%)/gmi,
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
				if ( this.captured[ 0 ].match( /da/i ) ) {
					return SD_tools.today( this.captured[ 1 ] );
				} else if ( this.captured[ 0 ].match( /wee/i ) ) {
					return SD_tools.today( this.captured[ 1 ] * 7 );
				} else if ( this.captured[ 0 ].match( /mon/i ) ) {
					return SD_tools.currentMonth( + this.captured[ 1 ] );
				} else if ( this.captured[ 0 ].match( /yea/i ) ) {
					return SD_tools.currentYear( + this.captured[ 1 ] );
				} else return SD_tools.today();
			} else {
				if ( this.captured[ 0 ].match( /da/i ) ) {
					return SD_tools.today( + 1 );
				} else if ( this.captured[ 0 ].match( /wee/i ) ) {
					return SD_tools.today( + 7 );
				} else if ( this.captured[ 0 ].match( /mon/i ) ) {
					return SD_tools.currentMonth( + 1 );
				} else if ( this.captured[ 0 ].match( /ye/i ) ) {
					return SD_tools.currentYear( + 1 );
				} else return SD_tools.today();
			}
		},
		type : "DATE",
		priority : 3, 
		id: 'm20'
	},
	{
		regExp : /(#next_\d+%.{0,10}?#(?:date|month)index_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			this.captured = [ t[ c2 ].origin ];
			this.origin = c1;
			return h;
		},
		func : function() {
			if ( this.captured[ 0 ].match( /da/i ) ) {
				return SD_tools.today( + 1 );
			} else if ( this.captured[ 0 ].match( /wee/i ) ) {
				return SD_tools.beginOfNextWeek( + 1 );
			} else if ( this.captured[ 0 ].match( /mon/i ) ) {
				return SD_tools.currentMonth( + 1 );
			} else return SD_tools.today();
		},
		type : "DATE",
		priority : 3, 
		id: 'm21'
	},
	{
		regExp : /(#actionremind_\d+%.+?#before_\d+%.{0,10}?)(#number_(\d+)%.{0,10}?#(?:date|month)index_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4, c5 ) {
			this.captured = [ t[ c3 ], t[ c4 ].origin  ];
			this.priority += 1;
			this.origin = c2;
			return c1 + h;
		},
		func : function() {
			if ( this.captured[ 1 ].match( /дн|ден/i ) ) {
				return '-' + this.captured[ 0 ].func()*1440;;
			} else if ( this.captured[ 1 ].match( /нед/i ) ) {
				return '-' + this.captured[ 0].func()*10080;;
			} else return '-0';
		},
		type : "RTIME",
		priority : 7, 
		id: 'm22'
	},
	{
		regExp : /(#actionremind_\d+%.+?#before_\d+%.{0,10}?)(#number_(\d+)%(.{0,10}?#(?:hour|minut)index_(\d+)%)?)/gmi,
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
				if ( this.captured[ 1 ].match( /ч/i ) ) { return '-' + this.captured[ 0].func()*60; } else return '-' + this.captured[ 0].func();
			} else if ( this.captured[ 0 ].origin.match( /час/i ) ) {
				return '-60';
			} else return '-' + this.captured[ 0].func();
		},				type : "RTIME",
		priority : 7, 
		id: 'm23'
	},
	{
		regExp : /(#actionremind_\d+%.+?)(#number_(\d+)%(.{0,10}?#(?:hour|minut|date)index_(\d+)%)?.{0,10}?#before_\d+%)/gmi,
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
				if ( this.captured[ 1 ].match( /\bh/i ) ) {
					return '-' + this.captured[ 0 ].func() * 60;
				} else if ( this.captured[ 1 ].match( /da/i ) ) {
					return '-' + this.captured[ 0 ].func() * 1440;
				} else if ( this.captured[ 1 ].match( /we/i ) ) {
					return '-' + this.captured[ 0 ].func() * 10080;
				} else return '-' + this.captured[ 0 ].func();
			} else if ( this.captured[ 0 ].origin.match( /час/i ) ) {
				return '-60';
			} else return '-' + this.captured[ 0].func();
		},				type : "RTIME",
		priority : 7, 
		id: 'm24'
	},
	{
		//wordy date 4 may 2005
		regExp : /(#before_\d+%.{0,10}?)(#number_(\d+)%(?:.{0,10}?)#(?:hour|minut)index_(\d+)%)(.{0,25}#actionremind_\d+%)/gmi,
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
		id: 'm25'
	},
	{
		//wordy date 4 may 2005
		regExp : /(#before_\d+%.{0,10}?)(#number_(\d+)%.{0,10}?#(?:hour|minut)index_(\d+)%)/gmi,
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
		id: 'm26'
	},
	{
		//wordy date 4 may 2005
		regExp : /(#after_\d+%.{0,10}?)(#number_(\d+)%.{0,10}?#minutindex_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			this.captured = [ +t[ c3 ].func(), t[ c4 ].origin  ];
			this.origin = c2;
			return c1 + h;
		},
		func : function() {
			return { h : 0, m : +this.captured[ 0 ] };
		},
		type : "DTIME",
		priority : 7, 
		id: 'm27'
	},
	{
		//wordy date 4 may 2005
		regExp : /(#prep_(\d+)%.{0,10}?#d?time_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			if ( t[ c2 ].origin.match( /for/i ) ) {
				this.captured = [ t[ c3 ].func() ];
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
		id: 'm28'
	},
	{
		//wordy date 4 may 2005
		regExp : /(#after_\d+%\s{0,10}?)(#d?time_(\d+)%)/gmi,
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
		id: 'm29'
	},
	{
		regExp : /(#prep_(\d+)%.{0,10}?#number_(\d+)%.{0,10}?#(?:hour|minut)index_(\d+)%)/gmi,
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
		id: 'm30'
	},
	{
		regExp : /(#prep_(\d+)%.{0,10}?#number_(\d+)%)/gmi,
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
		id: 'm31'
	},
	{
		regExp : /(#actionremind_\d+%.{0,10}?#before_\d+%.{0,10}?)(#(?:date|month)index_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			this.captured = [ t[ c3 ] ];
			this.origin = c2;
			return c1 + h;
		},
		func : function() {
			if ( this.captured[ 0 ].origin.match( /day/i ) ) {
				return '-1440';
			} else if ( this.captured[ 0 ].origin.match( /wee/i ) ) {
				return '-10080';
			} else return '-0';
		},
		type : "RTIME",
		priority : 7, 
		id: 'm32'
	},
	{
		regExp : /(#actionremind_\d+%.{0,10}?)(#(?:date|month)index_(\d+)%.{0,10}?#before_\d+%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			this.captured = [ t[ c3 ] ];
			this.origin = c2;
			return c1 + h;
		},
		func : function() {
			if ( this.captured[ 0 ].origin.match( /day/i ) ) {
				return '-1440';
			} else if ( this.captured[ 0 ].origin.match( /wee/i ) ) {
				return '-10080';
			} else return '-0';
		},
		type : "RTIME",
		priority : 7,
		id: 'm32a'
	},
	{
		regExp : /(#number_(\d+)%.{0,10}?#hourindex_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			if ( +t[ c2 ].func() < 24 ) {
				this.captured = [ +t[ c2 ].func(), t[ c3 ].origin ];
				this.origin = c1;
				return h;
			}
		},
		func : function() {
			return { h : this.captured[ 0 ] , m : 0 };
		},
		type : "TIME",
		priority : 7, 
		id: 'm33'
	},
	{
		regExp : /(#number_(\d+)%.{0,10}?#hourindex_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			this.captured = [ +t[ c2 ].func(), t[ c3 ].origin ];
			this.origin = c1;
			return h;
		},
		func : function() {
			return { h : this.captured[ 0 ] , m : 0 };
		},
		type : "DTIME",
		priority : 7, 
		id: 'm34'
	},
	{
		//wordy date 4 may 2005
		regExp: /(#date_(\d+)%.{0,10}?#(?:year|month)index_(\d+)%)/gmi,
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
		id: 'm35'
	},
	{
		//wordy date 4 may 2005
		regExp: /(#time_(\d+)%.{0,10}?#hourindex_(\d+)%)/gmi,
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
		id: 'm36'
	},
	{
		//wordy date 4 may 2005
		regExp: /(#before_\d+%.{0,10}?#rtime_(\d+)%)/gmi,
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
		id: 'm37'
	},
	{
		//wordy date 4 may 2005
		regExp : /(#after_\d+%.{0,10}?)(#time_(\d+)%)/gmi,
		replace : function ( h, t, c1, c2, c3, c4 ) {
			this.captured = [ t[ c3 ].func() ];
			this.origin = c2;
			return c1 + h;
		},
		func : function() {
			return this.captured[ 0 ];
		},
		type : "DTIME",
		priority : 7, 
		id: 'm38'
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
			return this.captured[ 0 ];
		},
		type : "DTIME",
		priority : 7, 
		id: 'm39'
	},
	{//TODO duration priority
		// alarm - | duration + | date - | time + a r
		regExp: /(#after_\d+%.{0,10}?#dtime_(\d+)%)/gmi,
		replace: function ( h, t, c1, c2, c3, c4 ) {
			this.captured = [ SD_tools.now( + +t[ c2 ].func().h * 60 + +t[ c2 ].func().m ) ];
			this.origin = c1;
			return h;
		},
		func : function() {
			return this.captured[ 0 ];
		},
		type : "ATIME",
		priority : 9, 
		id: 'm40'
	},
	{
		//wordy date 4 may 2005
		regExp: /(#weekday_(\d+)%.{0,50}?#date_(\d+)%)/gmi,
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
		id: 'm41'
	},
	{
		regExp: /(#next_\d+%.{0,10}?#date_(\d+)%)/gmi,
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
		id: 'm42'
	},
	{
		//wordy date 4 may 2005
		regExp: /(#next_\d+%.{0,10}?#weekday_(\d+)%)/gmi,
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
		id: 'm43'
	},
	{
		//wordy date 4 may 2005
		regExp: /(#weekday_(\d+)%(?:.{0,10}?)#date_(\d+)%)/gmi,
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
		id: 'm44'
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
		id: 'm45'
	},
	{
		//wordy date 4 may 2005
		regExp: /(#date_(\d+)%.{0,10}?#date_(\d+)%)/gmi,
		replace: function (h, t, c1, c2, c3, c4) {
			if ( t[ c2 ].func() === t[ c3 ].func() ) {
				this.captured = [ t[ c2 ].func() ];
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
		id: 'm46'
	},
	{
		//wordy date 4 may 2005
		regExp: /(#daytime_(\d+)%)/gmi,
		replace: function ( h, t, c1, c2 ) {
			if ( t[ c2 ].origin.match( /noon/i ) ) {
				this.captured = [ { h : 12, m : 0 } ];
				this.origin = c1;
				return h;
			}
		},
		func: function () {
			return this.captured[ 0 ];
		},
		type: "TIME",
		priority: 7, 
		id: 'm47'
	}
];
