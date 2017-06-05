var tokens = [
	{
		//TODO escape for geo coord-s
		// money
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d+[.,]\d+|\d+)(\s+(?:(?:hundred|hundreds|thousand|thousands)|(?:dollar|dollars|\$)))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4 ) {
			this.captured = [ c2 + c3.toLowerCase() ];
			this.origin = c2 + c3;
			return c1 + h + c4;
		},
		type : "ESCAPE",
		id : "t0"
	},
	{
		//weight etc
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d+|\d+,\d+)(\s+(pounds|pound|gramms|gramm|gr\.))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4, c5 ) {
			this.captured = [ c2 + c3.toLowerCase() ];
			this.origin = c2 + c3;
			return c1 + h + c5;
		},
		type : "ESCAPE",
		id : "t1"
	},
	{
		//weight etc
		regExp : /(<\/?.+?>)/gmi,
		replace : function ( h, c1 ) {
			this.captured = [ c1 ];
			this.origin = c1;
			return h;
		},
		type : "E",
		id : "t1a"
	},
	{
		//length etc
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d+\s+(?:yard|foot|inch|mile))/gmi,
		replace : function ( h, c1, c2, c3, c4 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h;
		},
		type : "ESCAPE",
		id : "t3"
	},
	{
		// phones TODO phones with - etc(800) 299-8065
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d.{0,2}\d{3}.{0,2}\d{2,3}.{0,2}\d{2}.{0,2}\d{2})([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "ESCAPE",
		id : "t4"
	},
	{
		// phones TODO phones with - etc
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\(?\d{3}\)?.{0,2}\d{2,3}.{0,2}\d{4})([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "ESCAPE",
		id : "t4a"
	},
	{
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d{3}[-]\d{2}[-]\d{2})([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "ESCAPE",
		id : "t5"
	},
	{
		// ips
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)((?:\d+\.\d+\.\d+\.\d+)|(?:\d+\-\d+\-\d+\-\d+))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "ESCAPE",
		id : "t6"
	},
	{
		// not dates number amount based
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d{2,99}[.\s/-]*\d{2,99}[.\s/-]*\d{5,99})([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "ESCAPE",
		id : "t7"
	},
	{
		//noninteger numbers
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d{3}[,°\.]\d+|\d+[,°\.]\d{3})([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "ESCAPE",
		id : "t8"
	},
	{
		//noninteger numbers
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d+[,°]\d+)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "ESCAPE",
		id : "t9"
	},
	{
		//noninteger numbers
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)((?:3[2-9]|[4-9][0-9])[.,-°]\d+|\d+[.,-°][6-9][0-9])([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "ESCAPE",
		id : "t10"
	},
	{
		//scores
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d[:]\d)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "ESCAPE",
		id : "t11"
	},
	{
		//special numbers
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(#\d+)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "ESCAPE",
		id : "t12"
	},
	{
		// big numbers
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d{11,99})([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "ESCAPE",
		id : "t13"
	},
	{
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)((\d)[,](\d)\s{0,3}(hours|hour|h\.|h|minutes|min\.|min|m\.|m))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4, c5, c6 ) {
			this.captured = [ c3, c4, c5];
			this.origin = c2;
			return c1 + h + c6;
		},
		func: function() {
			if ( this.captured[ 2 ].match( /h/i ) ) {
				return { h : this.captured[ 0 ], m : this.captured[ 1 ] * 6 };
			} else return { h : 0, m : this.captured[ 1 ] * 0.6 };
		},
		type : "DTIME",
		id : "t14"
	},
	{
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(half.{1,5}hour\sbefore)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func: function() {
			return '-30';
		},
		type : "RTIME",
		priority : 5,
		id : "t15"
	},
	{
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(an.{1,3}hour\sbefore)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func: function() {
			return '-60';
		},
		type : "RTIME",
		priority : 5,
		id : "t16"
	},
	{
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(half.{1,5}hour)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func: function() {
			return { h : 0, m : 30 };
		},
		type : "DTIME",
		priority : 5,
		id : "t17"
	},
	{
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(an\shour\sand\s?a?\s?half)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func: function() {
			return { h : 1, m : 30 };
		},
		type : "DTIME",
		priority : 5,
		id : "t17a"
	},
	{
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d+[,°]\d+)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "ESCAPE",
		id : "t18"
	},
	{
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(3[2-9]|[4-9][0-9][.,\-°]\d+|\d+[.,\-°][6-9][0-9])([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "ESCAPE",
		id : "t19"
	},
	{
		//score
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d[:]\d)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "ESCAPE",
		id : "t20"
	},
	{
		// big numbers
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d{11,99})([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "ESCAPE",
		id : "t21"
	},
	{
		// at the time of event
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(at\b.{0,5}\btime\b.{0,5}event|in\stime)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func: function() {
			return '0';
		},
		type : "RTIME",
		priority : 7,
		id : "t22"
	},
	{
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(from)(\b.{0,30}\b(?:to|till|until)\b)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3 + c4;
		},
		func: function() {
			return this.captured[ 0 ];
		},
		type : "FROM",
		id : "t23"
	},
	{
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(since)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func: function() {
			return this.captured[ 0 ];
		},
		type : "FROM",
		id : "t24"
	},
	{
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(to|until|till)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func: function() {
			return this.captured[ 0 ];
		},
		type : "TO",
		id : "t25"
	},
	{
		// day time (AM PM etc)
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)((?:(?:in\s|at\s)?(?:the\s)?(?:evening|morning|afternoon))|at\snight|am|a\.m\.|pm|p\.m\.|noon)([^а-яА-яЁёa-zA-Z0-9_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2.toLowerCase() ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func : function() {
			if ( this.captured[ 0 ].match( /ev|noon|nigh|p/ ) ) { return true; } else return false;
		},
		type : "DAYTIME",
		id : "t26"
	},
	{
		// prepositions
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)((?:in|on|at\saround|at|about|around|until|from|for|by)(?:\s(?:the|a))?)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2 ;
			return c1 + h + c3;
		},
		func: function() {
			return this.captured[ 0 ];
		},
		type : "PREP",
		id : "t27"
	},
	{
		// money
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(before)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func: function() {
			return this.captured[ 0 ];
		},
		type : "BEFORE",
		id : "t28"
	},
	{
		// money
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(next|following|coming|sequent|incoming|proximate|ensuing|the\sone\safter)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func: function() {
			return this.captured[ 0 ];
		},
		type : "NEXT",
		id : "t29"
	},
	{
		// money
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(all\sday)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func: function() {
			return 'allday';
		},
		type : "DTIME",
		priority : 7,
		id : "t30"
	},
	{
		//wordy date
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(the\sday\sbefore\syesterday|yesterday|today|the\sday\sbefore|(?:the\s)?day\safter\stomorrow|tomorrow|after\stomorrow)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3) {
			this.captured = [ c2.toLowerCase() ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func : function() {
			switch ( this.captured[ 0 ] ) {
				case 'the day before yesterday':
					return SD_tools.today( -2 );
				case 'yesterday':
				case 'the day before':
					return SD_tools.today( -1 );
				case 'today':
					return SD_tools.today();
				case 'tomorrow':
				case 'the day after':
					return SD_tools.today( +1 );
				case 'the day after tomorrow':
				case 'after tomorrow':
					return SD_tools.today( +2 );
				default : SD_tools.today();
			}
		},
		type : "DATE",
		priority : 10,
		id : "t31"
	},
	{
		//digital date big type XX-XX-XXXX(201[5-9]|1[5-9])
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(([0]?[0-9]|1[0-2])[./-]([0-2][0-9]|[3][0-1]|[0-9])[./-](201[5-9]|1[5-9]))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4, c5, c6 ) {
			this.captured = [ c3, c4, c5 ];
			this.origin = c2;
			( new Date( this.captured[ 2 ], this.captured[ 0 ], this.captured[ 1 ] ) < ( SD_tools._getDate() ) ) && ( this.priority -= 5 );
			return c1 + h + c6;
		},
		func : function() {
			return SD_tools.setFullDate( this.captured[ 1 ], this.captured[ 0 ], this.captured[ 2 ] );
		},
		type : "DATE",
		priority : 10,
		id : "t32"
	},
	{
		//digital date big type XX-XX-XXXX(201[5-9]|1[5-9])
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)((201[5-9]|1[5-9])[./-]([0][0-9]|1[0-2])[./-]([0-2][0-9]|[3][0-1]|[0-9]))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4, c5, c6 ) {
			this.captured = [ c4, c5, c3 ];
			this.origin = c2;
			( ( ( new Date ).setYear( this.captured[ 2 ] ) ) < ( SD_tools._getDate() ) ) && ( this.priority -= 5 );
			return c1 + h + c6;
		},
		func : function() {
			return SD_tools.setFullDate( this.captured[ 1 ], this.captured[ 0 ], this.captured[ 2 ] );
		},
		type : "DATE",
		priority : 10,
		id : "t33"
	},
	{
		//digital date big type XX-XX-XXXX
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(([0]?[0-9]|1[0-2])[./-]([0-2][0-9]|[3][0-1]|[0-9])[./-](\d{4}|\d{2}))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4, c5, c6 ) {
			this.captured = [ c3, c4, c5 ];
			this.origin = c2;
			( ( ( new Date ).setYear( this.captured[ 2 ] ) ) < ( SD_tools._getDate() ) ) && ( this.priority -= 5 );
			return c1 + h + c6;
		},
		func : function() {
			return SD_tools.setFullDate( this.captured[ 1 ], this.captured[ 0 ], this.captured[ 2 ] );
		},
		type : "DATE",
		priority : 10,
		id : "t34"
	},
	{
		//digital date big type XX-XX-XXXX
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(([0-2][0-9]|[3][0-1]|[0-9])[./-](january|jan\.|jan|ja\.|ja|february|feb\.|feb|march|mar\.|mar|april|apr\.|apr|may|june|jun\.|jun|july|jul\.|jul|august|aug\.|aug|september|sept|sep\.|sep|october|oct\.|oct|november|nov\.|nov|december|dec\.|dec)[./-](\d{4}|\d{2}))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4, c5, c6 ) {
			var m;
			if ( c4.match( /ja/ ) ) {           m = 1;
			} else if ( c4.match( /fe/i ) ) {    m = 2;
			} else if ( c4.match( /mar/i ) ) {   m = 3;
			} else if ( c4.match( /apr/i ) ) {   m = 4;
			} else if ( c4.match( /may/i ) ) {   m = 5;
			} else if ( c4.match( /jun/i ) ) {   m = 6;
			} else if ( c4.match( /jul/i ) ) {   m = 7;
			} else if ( c4.match( /aug/i ) ) {   m = 8;
			} else if ( c4.match( /sep/i ) ) {   m = 9;
			} else if ( c4.match( /oct/i ) ) {   m = 10;
			} else if ( c4.match( /nov/i ) ) {   m = 11;
			} else if ( c4.match( /dec/i ) ) {   m = 12; }
			this.captured = [ c3, m, c5 ];
			if( SD_tools.setFullDate( this.captured[ 0 ], m, this.captured[ 2 ], true ) === undefined ) return;
			this.origin = c2;
			( ( ( new Date ).setYear( this.captured[ 2 ] ) ) < ( SD_tools._getDate() ) ) && ( this.priority -= 5 );
			return c1 + h + c6;
		},
		func : function() {
			return SD_tools.setFullDate( this.captured[ 0 ], this.captured[ 1 ], this.captured[ 2 ] );
		},
		type : "DATE",
		priority : 10,
		id : "t35"
	},
	{
		//TODO last space isn't capturing
		// just numbers
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)((?:(?:the|a)\s)?(\d+)\s?(?:st|rd|nd|th)(?:\s{0,2}day)?)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4 ) {
			this.captured = [ c3 ];
			this.origin = c2;
			return c1 + h + c4;
		},
		func : function() {
			return this.captured[ 0 ];
		},
		type : "DAYNUMBER",
		id : "t36"
	},
	{
		//week name
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(monday|mon\.|mon|mo\.|mo|tuesday|tues|tue\.|tue|tu\.|tu|wednesday|wed\.|wed|we\.|thursday|thu\.|thu|th\.|th|friday|fri\.|fri|fr\.|fr|saturday|sat\.|sat|sa\.|sa|sunday|sun\.|sun|su\.|su)([^а-яА-яЁёa-zA-Z0-9\-_’]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2.toLowerCase() ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func : function() {
			if ( this.captured[ 0 ].match( /mo/ ) ) {
				return 1;
			} else if ( this.captured[ 0 ].match( /\btu/ ) ) {
				return 2;
			} else if ( this.captured[ 0 ].match( /we/ ) ) {
				return 3;
			} else if ( this.captured[ 0 ].match( /th/ ) ) {
				return 4;
			} else if ( this.captured[ 0 ].match( /fr/ ) ) {
				return 5;
			} else if ( this.captured[ 0 ].match( /sa/ ) ) {
				return 6;
			} else if ( this.captured[ 0 ].match( /su/ ) ) {
				return 0;
			}
		},
		type : "WEEKDAY",
		priority: 5,
		id : "t37"
	},
	{
		//digital time
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(([0-1][0-9]|[2][0-4]|[0-9])[-:.]([0-5][0,5])(?:.{0,3}(am|a\.m\.|pm|p\.m\.|\bm\b))?(?:.{0,5}?(?:minutes|minute|min\.|mins|min|m\.|m))?)([^а-яА-яЁёa-zA-Z0-9_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4, c5, c6 ) {
			this.captured = [ +c3, +c4, c5 ];
			this.origin = c2;
			return c1 + h + c6;
		},
		func : function() {
			if ( this.captured[ 2 ] && this.captured[ 2 ].match( /\bm\b|am|a\.m\./i ) ) {
				if ( +this.captured[ 0 ] === 12 ) return { h: 0, m: 0, duplicity: false };
				return { h : this.captured[ 0 ], m : this.captured[ 1 ], duplicity: false }
			} else if ( this.captured[ 2 ] && this.captured[ 2 ].match( /p|pm/i ) ) {
				if ( this.captured[ 0 ] > 11 ) { return { h : this.captured[ 0 ], m : this.captured[ 1 ], duplicity: false }; } else return { h : this.captured[ 0 ] + 12, m : this.captured[ 1 ], duplicity: false };
			} else {
				return { h : this.captured[ 0 ], m : this.captured[ 1 ] }
			}
		},
		type : "TIME",
		priority : 10,
		id : "t38"
	},
	{
		//digital time
		regExp : /([^а-яА-яЁёa-zA-Z0-9:_]|^)(([0-1][0-9]|[2][0-4]|[0-9])[-:]([0-5][0-9])(?:.{0,3}(am|a\.m\.|m|pm|p\.m\.))?)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4, c5, c6 ) {
			this.captured = [ +c3, +c4, c5 ];
			this.origin = c2;
			return c1 + h + c6;
		},
		func : function() {
			if ( this.captured[ 2 ] && this.captured[ 2 ].match( /\bm\b|am|a\.m\./i ) && ( +this.captured[ 0 ] === 12 ) ) {
				return { h: 0, m: 0, duplicity: false };
			} else if ( this.captured[ 2 ] && this.captured[ 2 ].match( /p/i ) ) {
				if ( this.captured[ 0 ] > 11 ) { return { h : this.captured[ 0 ], m : this.captured[ 1 ], duplicity: false }; } else return { h : this.captured[ 0 ] + 12, m : this.captured[ 1 ], duplicity: false };
			} else return { h : this.captured[ 0 ], m : this.captured[ 1 ], duplicity: false }
		},
		type : "TIME",
		priority : 10,
		id : "t39"
	},
	{
		//digital time
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(([0-1][0-9]|[2][0-4]|[0-9]).{0,3}(?:hours|hour|hrs|h\.|h)(?:.{0,3}and)?.{0,3}([0-5][0-9]|[1-9]).{0,3}(?:minutes|minute|min\.|mins|min|m\.|m))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4, c5 ) {
			this.captured = [ { h : +c3 , m : +c4 } ];
			this.origin = c2;
			return c1 + h + c5;
		},
		func : function() {
			return this.captured[ 0 ];
		},
		type : "TIME",
		priority : 10,
		id : "t40"
	},
	{
		//digital date small type XX-XX
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(([0]?[1-9]|1[0-2])[./-]([0-2][0-9]|[3][0-1]))([^а-яА-яЁёa-zA-Z0-9\-_:]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4, c5 ) {
			this.captured = [ c3, c4 ];
			this.origin = c2;
			return c1 + h + c5;
		},
		func : function() {
			return SD_tools.nearestDayMonth( this.captured[ 1 ], this.captured[ 0 ]);
		},
		type : "DATE",
		priority : 6,
		id : "t41"
	},
	{
		// wordy time
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)((eleven|eleventh|twelve|twelveth|thirteen|thirteenth|fourteen|fourteenth|fifteen|fifteenth|sixteen|sixteenth|seventeen|seventeenth|eighteen|eighteenth|nineteen|nineteenth|twentieth|twenty.one|twenty.first|twenty.two|twenty.second|twenty.three|twenty.third|one|first|two|second|three|third|four|fourth|five|fifth|six|sixth|seven|seventh|eight|eighth|nine|nineth|ten|tenth).{0,3}(eleven|eleventh|twelve|twelveth|thirteen|thirteenth|fourteen|fourteenth|fifteen|fifteenth|sixteen|sixteenth|seventeen|seventeenth|eighteen|eighteenth|nineteen|nineteenth|twentieth|twenty.one|twenty.first|twenty.two|twenty.second|twenty.three|twenty.third|twenty.four|twenty.fourth|twenty.five|twenty.fifth|twenty.six|twenty.sixth|twenty.seven|twenty.seventh|twenty.eight|twenty.eighth|twenty.nine|twenty.nineth|twenty|thirtieth|thirty.one|thirty.first|thirty.five|thirty.six|thirty.sixth|thirty.seven|thirty.seventth|thirty.eight|thirty.eighth|thirty.nine|thirty.nineth|thirty|forty.one|forty.first|forty.second|forty.two|forty.third|forty.three|forty.five|forty.fifth|forty.six|forty.sixth|forty.seven|forty.seventh|forty.eight|forty.eighth|forty.nine|forty.nineth|forty|fifty.one|fifty.first|fifty.two|fifty.second|fifty.three|fifty.third|fifty.four|fifty.fourth|fifty.five|fifty.fifth|fifty.six|fifty.sixth|fifty.seven|fifty.seventh|fifty.eight|fifty.nine|fifty.nineth|fifty)(?:.{0,2}(?:o(?:'|\s|`)clock))?)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4, c5 ) {
			this.captured = [ c3.toLowerCase(), c4.toLowerCase() ];
			this.origin = c2;
			return c1 + h + c5;
		},
		func : function() {
			var hh, mm;
			if ( this.captured[ 0 ].match( /elev/ ) ) { hh = 11;
			} else if ( this.captured[ 0 ].match( /twel/ ) ) { hh = 12;
			} else if ( this.captured[ 0 ].match( /thirtee/ ) ) { hh = 13;
			} else if ( this.captured[ 0 ].match( /fourtee/ ) ) { hh = 14;
			} else if ( this.captured[ 0 ].match( /fiftee/ ) ) { hh = 15;
			} else if ( this.captured[ 0 ].match( /sixtee/ ) ) { hh = 16;
			} else if ( this.captured[ 0 ].match( /seventee/ ) ) { hh = 17;
			} else if ( this.captured[ 0 ].match( /eightee/ ) ) { hh = 18;
			} else if ( this.captured[ 0 ].match( /ninetee/ ) ) { hh = 19;
			} else if ( this.captured[ 0 ].match( /twenty.(fir|on)/ ) ) { hh = 21;
			} else if ( this.captured[ 0 ].match( /twenty.(sec|two)/ ) ) { hh = 22;
			} else if ( this.captured[ 0 ].match( /twenty.(thi|thr)/ ) ) { hh = 23;
			} else if ( this.captured[ 0 ].match( /fir|on/ ) ) { hh = 1;
			} else if ( this.captured[ 0 ].match( /sec|two/ ) ) { hh = 2;
			} else if ( this.captured[ 0 ].match( /thi|thr/ ) ) { hh = 3;
			} else if ( this.captured[ 0 ].match( /fou/ ) ) { hh = 4;
			} else if ( this.captured[ 0 ].match( /fi/ ) ) { hh = 5;
			} else if ( this.captured[ 0 ].match( /si/ ) ) { hh = 6;
			} else if ( this.captured[ 0 ].match( /sev/ ) ) { hh = 7;
			} else if ( this.captured[ 0 ].match( /eig/ ) ) { hh = 8;
			} else if ( this.captured[ 0 ].match( /nin/ ) ) { hh = 9;
			} else if ( this.captured[ 0 ].match( /ten/ ) ) { hh = 10;
			} else hh = 1;
			if ( this.captured[ 1 ].match( /elev/ ) ) { mm = 11;
			} else if ( this.captured[ 1 ].match( /twel/ ) ) { mm = 12;
			} else if ( this.captured[ 1 ].match( /thirtee/ ) ) { mm = 13;
			} else if ( this.captured[ 1 ].match( /fourtee/ ) ) { mm = 14;
			} else if ( this.captured[ 1 ].match( /fiftee/ ) ) { mm = 15;
			} else if ( this.captured[ 1 ].match( /sixtee/ ) ) { mm = 16;
			} else if ( this.captured[ 1 ].match( /seventee/ ) ) { mm = 17;
			} else if ( this.captured[ 1 ].match( /eightee/ ) ) { mm = 18;
			} else if ( this.captured[ 1 ].match( /ninetee/ ) ) { mm = 19;
			} else if ( this.captured[ 1 ].match( /twenty.(fir|on)/ ) ) { mm = 21;
			} else if ( this.captured[ 1 ].match( /twenty.(sec|two)/ ) ) { mm = 22;
			} else if ( this.captured[ 1 ].match( /twenty.(thi|thr)/ ) ) { mm = 23;
			} else if ( this.captured[ 1 ].match( /twenty.fou/ ) ) { mm = 24;
			} else if ( this.captured[ 1 ].match( /twenty.fi/ ) ) { mm = 25;
			} else if ( this.captured[ 1 ].match( /twenty.si/ ) ) { mm = 26;
			} else if ( this.captured[ 1 ].match( /twenty.sev/ ) ) { mm = 27;
			} else if ( this.captured[ 1 ].match( /twenty.e/ ) ) { mm = 28;
			} else if ( this.captured[ 1 ].match( /twenty.n/ ) ) { mm = 29;
			} else if ( this.captured[ 1 ].match( /twent/ ) ) { mm = 20;
			} else if ( this.captured[ 1 ].match( /thirty.(fir|on)/ ) ) { mm = 31;
			} else if ( this.captured[ 1 ].match( /thirty.(sec|two)/ ) ) { mm = 32;
			} else if ( this.captured[ 1 ].match( /thirty.(thi|thr)/ ) ) { mm = 33;
			} else if ( this.captured[ 1 ].match( /thirty.fou/ ) ) { mm = 34;
			} else if ( this.captured[ 1 ].match( /thirty.fi/ ) ) { mm = 35;
			} else if ( this.captured[ 1 ].match( /thirty.si/ ) ) { mm = 36;
			} else if ( this.captured[ 1 ].match( /thirty.sev/ ) ) { mm = 37;
			} else if ( this.captured[ 1 ].match( /thirty.e/ ) ) { mm = 38;
			} else if ( this.captured[ 1 ].match( /thirty.n/ ) ) { mm = 39;
			} else if ( this.captured[ 1 ].match( /thirt/ ) ) { mm = 30;
			} else if ( this.captured[ 1 ].match( /forty.(fir|on)/ ) ) { mm = 41;
			} else if ( this.captured[ 1 ].match( /forty.(sec|two)/ ) ) { mm = 42;
			} else if ( this.captured[ 1 ].match( /forty.(thi|thr)/ ) ) { mm = 43;
			} else if ( this.captured[ 1 ].match( /forty.fou/ ) ) { mm = 44;
			} else if ( this.captured[ 1 ].match( /forty.fi/ ) ) { mm = 45;
			} else if ( this.captured[ 1 ].match( /forty.si/ ) ) { mm = 46;
			} else if ( this.captured[ 1 ].match( /forty.sev/ ) ) { mm = 47;
			} else if ( this.captured[ 1 ].match( /forty.e/ ) ) { mm = 48;
			} else if ( this.captured[ 1 ].match( /forty.n/ ) ) { mm = 49;
			} else if ( this.captured[ 1 ].match( /fort/ ) ) { mm = 40;
			} else if ( this.captured[ 1 ].match( /fifty.(fir|on)/ ) ) { mm = 51;
			} else if ( this.captured[ 1 ].match( /fifty.(sec|two)/ ) ) { mm = 52;
			} else if ( this.captured[ 1 ].match( /fifty.(thi|thr)/ ) ) { mm = 53;
			} else if ( this.captured[ 1 ].match( /fifty.fou/ ) ) { mm = 54;
			} else if ( this.captured[ 1 ].match( /fifty.fi/ ) ) { mm = 55;
			} else if ( this.captured[ 1 ].match( /fifty.si/ ) ) { mm = 56;
			} else if ( this.captured[ 1 ].match( /fifty.sev/ ) ) { mm = 57;
			} else if ( this.captured[ 1 ].match( /fifty.e/ ) ) { mm = 58;
			} else if ( this.captured[ 1 ].match( /fifty.n/ ) ) { mm = 59;
			} else if ( this.captured[ 1 ].match( /fift/ ) ) { mm = 50;
			} else if ( this.captured[ 1 ].match( /sixty.(fir|on)/ ) ) { mm = 61;
			} else if ( this.captured[ 1 ].match( /sixty.(sec|two)/ ) ) { mm = 62;
			} else if ( this.captured[ 1 ].match( /sixty.(thi|thr)/ ) ) { mm = 63;
			} else if ( this.captured[ 1 ].match( /sixty.fou/ ) ) { mm = 64;
			} else if ( this.captured[ 1 ].match( /sixty.fi/ ) ) { mm = 65;
			} else if ( this.captured[ 1 ].match( /sixty.si/ ) ) { mm = 66;
			} else if ( this.captured[ 1 ].match( /sixty.sev/ ) ) { mm = 67;
			} else if ( this.captured[ 1 ].match( /sixty.e/ ) ) { mm = 68;
			} else if ( this.captured[ 1 ].match( /sixty.n/ ) ) { mm = 69;
			} else if ( this.captured[ 1 ].match( /sixt/ ) ) { mm = 60;
			} else if ( this.captured[ 1 ].match( /fir|on/ ) ) { mm = 1;
			} else if ( this.captured[ 1 ].match( /sec|two/ ) ) { mm = 2;
			} else if ( this.captured[ 1 ].match( /thi|thr/ ) ) { mm = 3;
			} else if ( this.captured[ 1 ].match( /fou/ ) ) { mm = 4;
			} else if ( this.captured[ 1 ].match( /fi/ ) ) { mm = 5;
			} else if ( this.captured[ 1 ].match( /si/ ) ) { mm = 6;
			} else if ( this.captured[ 1 ].match( /sev/ ) ) { mm = 7;
			} else if ( this.captured[ 1 ].match( /eig/ ) ) { mm = 8;
			} else if ( this.captured[ 1 ].match( /nin/ ) ) { mm = 9;
			} else if ( this.captured[ 1 ].match( /ten/ ) ) { mm = 10;
			} else mm = 1;
			return { h : hh, m : mm };
		},
		type : "TIME",
		priority : 8,
		id : "t42a"
	},
	{
		// wordy time
		regExp : /([^а-яА-яЁёa-zA-Z0-9_]|^)((?:\b(?:the|a|an)[\s]{0,2})?(eleven|eleventh|twelve|twelfth|thirteen|thirteenth|fourteen|fourteenth|fifteen|fifteenth|sixteen|sixteenth|seventeen|seventeenth|eighteen|eighteenth|nineteen|nineteenth|twentieth|twenty.one|twenty.first|twenty.two|twenty.second|twenty.three|twenty.third|twenty.four|twenty.fourth|twenty.five|twenty.fifth|twenty.six|twenty.sixth|twenty.seven|twenty.seventh|twenty.eight|twenty.eighth|twenty.nine|twenty.nineth|twenty|thirtieth|thirty.one|thirty.first|thirty.second|thirty.two|thirty.three|thirty.third|thirty.fourth|thirty.four|thirty.five|thirty.six|thirty.sixth|thirty.seven|thirty.seventth|thirty.eight|thirty.eighth|thirty.nine|thirty.nineth|thirty|fourty.one|fourty.first|forty.second|forty.two|forty.third|forty.three|forty.five|forty.fifth|forty.six|forty.sixth|forty.seven|forty.seventh|forty.eight|forty.eighth|forty.nine|forty.nineth|forty|fifty.one|fifty.first|fifty.two|fifty.second|fifty.three|fifty.third|fifty.four|fifty.fourth|fifty.five|fifty.fifth|fifty.six|fifty.sixth|fifty.seven|fifty.seventh|fifty.eight|fifty.nine|fifty.nineth|fifty|one|first|two|second|three|third|four|fourth|five|fifth|six|sixth|seven|seventh|eight|eighth|nine|nineth|ten|tenth))([^а-яА-яЁёa-zA-Z0-9_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4 ) {
			this.captured = [ c3.toLowerCase() ];
			this.origin = c2;
			return c1 + h + c4;
		},
		func : function() {
			if ( this.captured[ 0 ].match( /elev/ ) ) { return 11;
			} else if ( this.captured[ 0 ].match( /twel/ ) ) { return 12;
			} else if ( this.captured[ 0 ].match( /thirtee/ ) ) { return 13;
			} else if ( this.captured[ 0 ].match( /fourtee/ ) ) { return 14;
			} else if ( this.captured[ 0 ].match( /fiftee/ ) ) { return 15;
			} else if ( this.captured[ 0 ].match( /sixtee/ ) ) { return 16;
			} else if ( this.captured[ 0 ].match( /seventee/ ) ) { return 17;
			} else if ( this.captured[ 0 ].match( /eightee/ ) ) { return 18;
			} else if ( this.captured[ 0 ].match( /ninetee/ ) ) { return 19;
			} else if ( this.captured[ 0 ].match( /twenty.(fir|on)/ ) ) { return 21;
			} else if ( this.captured[ 0 ].match( /twenty.(sec|two)/ ) ) { return 22;
			} else if ( this.captured[ 0 ].match( /twenty.(thi|thr)/ ) ) { return 23;
			} else if ( this.captured[ 0 ].match( /twenty.fou/ ) ) { return 24;
			} else if ( this.captured[ 0 ].match( /twenty.fi/ ) ) { return 25;
			} else if ( this.captured[ 0 ].match( /twenty.si/ ) ) { return 26;
			} else if ( this.captured[ 0 ].match( /twenty.sev/ ) ) { return 27;
			} else if ( this.captured[ 0 ].match( /twenty.e/ ) ) { return 28;
			} else if ( this.captured[ 0 ].match( /twenty.n/ ) ) { return 29;
			} else if ( this.captured[ 0 ].match( /twent/ ) ) { return 20;
			} else if ( this.captured[ 0 ].match( /thirty.(fir|on)/ ) ) { return 31;
			} else if ( this.captured[ 0 ].match( /thirty.(sec|two)/ ) ) { return 32;
			} else if ( this.captured[ 0 ].match( /thirty.(thi|thr)/ ) ) { return 33;
			} else if ( this.captured[ 0 ].match( /thirty.fou/ ) ) { return 34;
			} else if ( this.captured[ 0 ].match( /thirty.fi/ ) ) { return 35;
			} else if ( this.captured[ 0 ].match( /thirty.si/ ) ) { return 36;
			} else if ( this.captured[ 0 ].match( /thirty.sev/ ) ) { return 37;
			} else if ( this.captured[ 0 ].match( /thirty.e/ ) ) { return 38;
			} else if ( this.captured[ 0 ].match( /thirty.n/ ) ) { return 39;
			} else if ( this.captured[ 0 ].match( /thirt/ ) ) { return 30;
			} else if ( this.captured[ 0 ].match( /forty.(fir|on)/ ) ) { return 41;
			} else if ( this.captured[ 0 ].match( /forty.(sec|two)/ ) ) { return 42;
			} else if ( this.captured[ 0 ].match( /forty.(thi|thr)/ ) ) { return 43;
			} else if ( this.captured[ 0 ].match( /forty.fou/ ) ) { return 44;
			} else if ( this.captured[ 0 ].match( /forty.fi/ ) ) { return 45;
			} else if ( this.captured[ 0 ].match( /forty.si/ ) ) { return 46;
			} else if ( this.captured[ 0 ].match( /forty.sev/ ) ) { return 47;
			} else if ( this.captured[ 0 ].match( /forty.e/ ) ) { return 48;
			} else if ( this.captured[ 0 ].match( /forty.n/ ) ) { return 49;
			} else if ( this.captured[ 0 ].match( /fort/ ) ) { return 40;
			} else if ( this.captured[ 0 ].match( /fifty.(fir|on)/ ) ) { return 51;
			} else if ( this.captured[ 0 ].match( /fifty.(sec|two)/ ) ) { return 52;
			} else if ( this.captured[ 0 ].match( /fifty.(thi|thr)/ ) ) { return 53;
			} else if ( this.captured[ 0 ].match( /fifty.fou/ ) ) { return 54;
			} else if ( this.captured[ 0 ].match( /fifty.fi/ ) ) { return 55;
			} else if ( this.captured[ 0 ].match( /fifty.si/ ) ) { return 56;
			} else if ( this.captured[ 0 ].match( /fifty.sev/ ) ) { return 57;
			} else if ( this.captured[ 0 ].match( /fifty.e/ ) ) { return 58;
			} else if ( this.captured[ 0 ].match( /fifty.n/ ) ) { return 59;
			} else if ( this.captured[ 0 ].match( /fift/ ) ) { return 50;
			} else if ( this.captured[ 0 ].match( /fir|\bon/ ) ) { return 1;
			} else if ( this.captured[ 0 ].match( /sec|two/ ) ) { return 2;
			} else if ( this.captured[ 0 ].match( /thi|thr/ ) ) { return 3;
			} else if ( this.captured[ 0 ].match( /fou/ ) ) { return 4;
			} else if ( this.captured[ 0 ].match( /fi/ ) ) { return 5;
			} else if ( this.captured[ 0 ].match( /si/ ) ) { return 6;
			} else if ( this.captured[ 0 ].match( /sev/ ) ) { return 7;
			} else if ( this.captured[ 0 ].match( /eig/ ) ) { return 8;
			} else if ( this.captured[ 0 ].match( /nin/ ) ) { return 9;
			} else if ( this.captured[ 0 ].match( /ten/ ) ) { return 10;
			} else return 1;
		},
		type : "NUMBER",
		id : "t42"
	},
	{
		//months
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(january|jan\.|jan|ja\.|ja|february|feb\.|feb|march|mar\.|mar|april|apr\.|apr|may|june|jun\.|jun|july|jul\.|jul|august|aug\.|aug|september|sept|sep\.|sep|october|oct\.|oct|november|nov\.|nov|december|dec\.|dec)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3  ) {
			this.captured = [ c2.toLowerCase() ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func : function() {
			if ( this.captured[ 0 ].match( /ja/ ) ) {           return 1;
			} else if ( this.captured[ 0 ].match( /fe/ ) ) {    return 2;
			} else if ( this.captured[ 0 ].match( /mar/ ) ) {   return 3;
			} else if ( this.captured[ 0 ].match( /apr/ ) ) {   return 4;
			} else if ( this.captured[ 0 ].match( /may/ ) ) {   return 5;
			} else if ( this.captured[ 0 ].match( /jun/ ) ) {   return 6;
			} else if ( this.captured[ 0 ].match( /jul/ ) ) {   return 7;
			} else if ( this.captured[ 0 ].match( /aug/ ) ) {   return 8;
			} else if ( this.captured[ 0 ].match( /sep/ ) ) {   return 9;
			} else if ( this.captured[ 0 ].match( /oct/ ) ) {   return 10;
			} else if ( this.captured[ 0 ].match( /nov/ ) ) {   return 11;
			} else if ( this.captured[ 0 ].match( /dec/ ) ) {   return 12; }
		},
		type : "MONTH",
		id : "t43"
	},
	{
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(([0-9]|1[0-2])[.:]([0-5][0-9])(?:\s{0,2})?(am|a\.m\.|pm|p\.m\.|n|m))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4, c5, c6 ) {
			if ( c3 < 24 && c4 < 60) {
				this.captured = [ +c3, +c4, c5 ];
				this.origin = c2;
				return c1 + h + c6;
			}
		},
		func : function() {
			if ( this.captured[ 2 ].match( /\bm\b|am|a\.m\./i ) && ( +this.captured[ 0 ] === 12 ) ) {
				return { h : 0, m : +this.captured[ 1 ], duplicity: false };
			} else if ( this.captured[ 2 ].match( /p|n/i ) ) {
				if ( this.captured[ 0 ] > 11 ) {
					return { h : this.captured[ 0 ], m : this.captured[ 1 ], duplicity: false };
				} else return { h : this.captured[ 0 ] + 12, m : this.captured[ 1 ], duplicity: false };
			} else return { h : this.captured[ 0 ], m : this.captured[ 1 ], duplicity: false }
		},
		type : "TIME",
		priority : 10,
		id : "t44"
	},
	{
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(([0-9]|1[0-2])[\s]{0,2}(am|a\.m\.|pm|p\.m\.|n))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4, c5 ) {
			if ( +c3 < 24 ) {
				this.captured = [ +c3, c4 ];
				this.origin = c2;
				return c1 + h + c5;
			}
		},
		func : function() {
			if ( this.captured[ 1 ].match( /\bm\b|am|a\.m\./i ) && ( +this.captured[ 0 ] === 12 ) ) {
				return {h: 0, m: 0, duplicity: false };
			} else if ( this.captured[ 1 ].match( /p/i ) ) {
				if ( this.captured[ 0 ] > 11 ) { return { h : this.captured[ 0 ], m : 0, duplicity: false }; } else return { h : this.captured[ 0 ] + 12, m : 0, duplicity: false };
			} else return { h : this.captured[ 0 ], m : 0, duplicity: false }
		},
		type : "TIME",
		priority : 10,
		id : "t45"
	},
	{
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d{1,2})(h)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4 ) {
			this.captured = [ c2 ];
			this.origin = c2 + c3;
			return c1 + h + c4;
		},
		func : function() {
			return this.captured[ 0 ];
		},
		type : "NUMBERHOUR",
		priority : 10,
		id : "t46"
	},
	{
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(201[5-9]|1[5-9])(y)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3, c4 ) {
			this.captured = [ c2 ];
			this.origin = c2 + c3;
			return c1 + h + c4;
		},
		func : function() {
			return this.captured[ 0 ];
		},
		type : "NUMBERYEAR",
		priority : 10,
		id : "t47"
	},
	{
		//reminders
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)((?:remind|notify|warn)(?:.{0,3}me)?)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.origin = c2;
			return c1 + h + c3;
		},
		func : function() {
			return this.captured[ 0 ];
		},
		type : "ACTIONREMIND",
		id : "t48"
	},
	{
		// money
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(hours|hour|hrs|h\.|h)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func : function() {
			return this.captured[ 0 ];
		},
		type : "HOURINDEX",
		id : "t49"
	},
	{
		// money
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(minutes|minute|mins|min\.|min)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func : function() {
			return this.captured[ 0 ];
		},
		type : "MINUTINDEX",
		id : "t50"
	},
	{
		// money
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)((?:a.{0,3})?(?:days|day|weeks|week))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func : function() {
			return this.captured[ 0 ];
		},
		type : "DATEINDEX",
		id : "t51"
	},
	{
		// money
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(months|month)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func : function() {
			return this.captured[ 0 ];
		},
		type : "MONTHINDEX",
		id : "t52"
	},
	{
		// money
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(years|year|y\.|y)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func : function() {
			return this.captured[ 0 ];
		},
		type : "YEARINDEX",
		id : "t53"
	},
	{
		//TODO last space isn't capturing
		// just numbers
		regExp : /([^а-яА-яЁёa-zA-Z0-9_:]|^)(\d+)([^а-яА-яЁёa-zA-Z0-9_:]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func : function() {
			return this.captured[ 0 ];
		},
		type : "NUMBER",
		id : "t54"
	},
	{
		//TODO last space isn't capturing
		// just numbers
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d+)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		func : function() {
			return this.captured[ 0 ];
		},
		type : "NUMBER",
		id : "t55"
	},
	{
		// money
		regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(after)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
		replace : function ( h, c1, c2, c3 ) {
			this.captured = [ c2 ];
			this.origin = c2;
			return c1 + h + c3;
		},
		type : "AFTER",
		id : "t56"
	}
];
