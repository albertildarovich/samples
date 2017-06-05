"use strict";
/**
* @author Kadyrov Albert <fluffy1snow@gmail.com>
* @module SmartDateLocale_RU
*/

var tokens = [
		{
			//TODO escape for geo coord-s
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)((?:\d+[.,]\d+|\d+)(?:\s{0,5}(?:тысяч|тыс|тысячей))?\s{0,3}(?:рублей|руб|р\.|долларов))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			type : "ESCAPE",
			id : "t0"
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
			//TODO escape for geo coord-s
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)((?:\d+[.,]\d+|\d+)\s{0,5}(?:тысяч|тыс|тысячей|млн|милион|милионов|миллиарда|млрд\.|млрд))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			type : "ESCAPE",
			id : "t1"
		},
		{
			//weight etc
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)((?:\d+|\d+,\d+)\s+(?:кг|кило|килограмм|килограммов|граммов))/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h;
			},
			type : "ESCAPE",
			id : "t2"
		},
		{
			//length etc
			// money
			regExp : /([^а-яА-яЁё0-9_]+|^)(\d+\s{0,3}(?:см|сантиметров|сантиметра|метров|метра|километров|километра))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			type : "ESCAPE",
			id : "t3"
		},
		{
			//some typical none-time formats
			regExp : /([^а-яА-яЁё0-9_]+|^)((?:\d+[,]\d+|\d+)\s{0,3}(?:литр|баллов|балла|срока|срок|сроков|раза|раз))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			type : "ESCAPE",
			id : "t4"
		},
		{
			//length etc
			// money
			regExp : /([^а-яА-яЁё0-9_]+|^)(\d\s+(?:курс|курса|курсов))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			type : "ESCAPE",
			id : "t5"
		},
		{
			//length etc
			// money
			regExp : /([^а-яА-яЁё0-9_]+|^)(\d+\s+(?:аудитории|ауд\.|кабинет|каб.))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			type : "ESCAPE",
			id : "t6"
		},
		{
			//length etc
			// money
			regExp : /([^а-яА-яЁё0-9_]+|^)(на\sчас\sназад)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			type : "ESCAPE",
			id : "t7"
		},
		{
			//length etc
			// money
			regExp : /([^а-яА-яЁё0-9_]+|^)(с\s?\d+\s?по\s\d+\s(?:страницы|страниц|стр\.|стр))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			type : "ESCAPE",
			id : "t8"
		},
		{
			//length etc
			// money
			regExp : /([^а-яА-яЁё0-9_]+|^)(\d+\s?-\s?\d+\s(?:человек|людей|чел\.|чел))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			type : "ESCAPE",
			id : "t9"
		},
		{
			// phones TODO phones with - etc
			regExp : /\b(\d{1}(?:.{0,2})\d{3}(?:.{0,2})\d{2,3}(?:.{0,2})\d{2}(?:.{0,2})\d{2})\b/gmi,
			replace : function ( h, c1 ) {
				this.captured = [ c1 ];
				this.origin = c1;
				return h;
			},
			type : "ESCAPE",
			id : "t10"
		},
		{
			regExp : /\b(\d{3}[-]\d{2}[-]\d{2})\b/gmi,
			replace : function ( h, c1 ) {
				this.captured = [ c1 ];
				this.origin = c1;
				return h;
			},
			type : "ESCAPE",
			id : "t11"
		},
		{
			// ips
			regExp : /\b(\d+[.-]\d+[./-]\d+[./-]\d+)\b/gmi,
			replace : function ( h, c1 ) {
				this.captured = [ c1 ];
				this.origin = c1;
				return h;
			},
			type : "ESCAPE",
			id : "t12"
		},
		{
			// not dates number amount based
			regExp : /(\d{2,99}[./\-\s]*\d{2,99}[./\-\s]*\d{5,99})/gmi,
			replace : function ( h, c1) {
				this.captured = [ c1 ];
				this.origin = c1;
				return h;
			},
			type : "ESCAPE",
			id : "t13"
		},
		{
			//noninteger numbers
			regExp : /\b(\d{3}[,°\.]\d+|\d+[,°\.]\d{3})\b/gmi,
			replace : function ( h, c1 ) {
				this.captured = [ c1 ];
				this.origin = c1;
				return h;
			},
			type : "ESCAPE",
			id : "t14"
		},
		{
			//noninteger numbers
			regExp : /(\d+Ч)/gm,
			replace : function ( h, c1 ) {
				this.captured = [ c1 ];
				this.origin = c1;
				return h;
			},
			func: function() {
				return this.captured[ 0 ];
			},
			type : "ESCAPE",
			id : "t15"
		},
		{
			//noninteger numbers
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(в\s{1,3}течение\s{1,3}часа)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func: function() {
				return { h : 1, m : 0 };
			},
			type : "DTIME",
			priority : 5,
			id : "t16"
		},
		{
			//noninteger numbers
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(полтора\sчаса)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func: function() {
				return { h : 1, m : 30 };
			},
			type : "DTIME",
			priority : 5,
			id : "t17"
		},
		{
			//noninteger numbers
			regExp : /((\d)[,.](\d)\s{0,3}(часам|часа|часов|ч\.|ч|минуту|минуты|минутам|минут|мин\.|мин|м\.|м))/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2, c3, c4];
				this.origin = c1;
				return h;
			},
			func: function() {
				if ( this.captured[ 2 ].match( /ч/i ) ) {
					return { h : this.captured[ 0 ], m : this.captured[ 1 ] * 6 };
				} else return { h : 0, m : this.captured[ 1 ] * 0.6 };
			},
			type : "DTIME",
			priority: 4,
			id : "t18"
		},
		{
			//noninteger numbers
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(за\s{1,3}полчаса)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func: function() {
				return '-30';
			},
			type : "RTIME",
			priority : 5,
			id : "t19"
		},
		{
			//noninteger numbers
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(полчаса)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func: function() {
				return { h : 0, m : 30 };
			},
			type : "DTIME",
			priority : 5,
			id : "t20"
		},
		{
			//noninteger numbers
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(за\s{1,3}сутки)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func: function() {
				return '-1440';
			},
			type : "RTIME",
			priority : 5,
			id : "t21"
		},
		/*{
			//noninteger numbers
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)((?:на\s{1,3})?(?:весь\s)?рабочий\sдень)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func: function() {
				return 'WORKDAY';
			},
			type : "DTIME",
			priority : 5,
			id : "t22"
		},*/

		{
			//noninteger numbers
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(на\s{1,3}полчаса)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func: function() {
				return { h : 0, m : 30 };
			},
			type : "DTIME",
			priority : 5,
			id : "t23"
		},
		{
			//noninteger numbers
			regExp : /(\d+[,°]\d+)/gmi,
			replace : function ( h, c1 ) {
				this.captured = [ c1 ];
				this.origin = c1;
				return h;
			},
			type : "ESCAPE",
			id : "t24"
		},
		{
			//noninteger numbers
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_.]+|^)((?:(?:3[2-9]|[4-9][0-9])[.,\-°]\d+)|(?:\d+[.,\-°][6-9][0-9]))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			type : "ESCAPE",
			id : "t25"
		},
		{
			//scores
			regExp : /\b(\d[:]\d)\b/gmi,
			replace : function ( h, c1 ) {
				this.captured = [ +c1 ];
				this.origin = c1;
				return h;
			},
			type : "ESCAPE",
			id : "t26"
		},
		{
			// big numbers
			regExp : /(«.+»|„.+“|‘.+’|".+"|'.+')/gmi,
			replace : function ( h, c1 ) {
				this.captured = [ +c1 ];
				this.origin = c1;
				return h;
			},
			type : "ESCAPE",
			id : "t27"
		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)(в\sтечение\sдня)([^а-яА-яЁё0-9_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func: function() {
				return "allday";
			},
			type : "DTIME",
			priority : 7,
			id : "t28"
		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)(во\sвремя\sсобытия|вовремя)([^а-яА-яЁё0-9_]|$)/gmi,
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
			id : "t29"
		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)(в\sтечение)([^а-яА-яЁё0-9_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func: function() {
				return '0';
			},
			type : "DPREP",
			priority : 7,
			id : "t30"
		},
		{
			// day time (AM PM etc)
			regExp : /((?:[^а-яА-яЁё0-9_]|^)(?:в|к)(?:[^а-яА-яЁё0-9_]|$)\s{0,3}\d{1,2}\s{0,3})(дня)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2.toLowerCase() ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "DAYTIME"

		},
		{
			//digital time
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(([0-1][0-9]|[2][0-4]|[0-9]).{0,3}?(?:часов|час|ч\.|ч).{0,3}?([0-5][0-9]|[0-9]).{0,3}?(?:минуту|минутам|минут|мин\.|мин|м\.|м))([^а-яА-яЁёa-zA-Z0-9\-]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4, c5 ) {
				this.captured = [ { h : +c3, m: +c4 } ];
				this.origin = c2;
				return c1 + h + c5;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "TIME",
			priority : 10,
			id : "t31"
		},
		{
			//noninteger numbers
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)((\d{1,2})\s{1,3}час)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c3 ];
				this.origin = c2;
				return c1 + h + c4;
			},
			func: function() {
				return this.captured[ 0 ];
			},
			type : "NUMBERHOUR",
			priority : 5,
			id : "t32"
		},
		{
			// wordy time
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]+|^)(час|часу|два|двум|двух|две|три|трем|трём|трех|трёх|четыре|четырем|пять|пяти|шесть|шести|семь|семи|восемь|восьми|девять|девяти|десять|десяти|одиннадцать|одиннадцати|двенадцать|двенадцати|сорок)(\sс\sполовиной\sчаса)([^а-яА-яЁё0-9_\-]+|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2.toLowerCase() ];
				this.origin = c2 + c3;
				return c1 + h + c4;
			},
			func : function() {
				if ( this.captured[ 0 ].match( /час/ ) ) {
					return { h : 1, m : 30 };
				} else if ( this.captured[ 0 ].match( /два/ ) ) {
					return { h : 2, m : 30 };
				} else if ( this.captured[ 0 ].match( /тр/ ) ) {
					return { h : 3, m : 30 };
				} else if ( this.captured[ 0 ].match( /чет/ ) ) {
					return { h : 4, m : 30 };
				} else if ( this.captured[ 0 ].match( /пят/ ) ) {
					return { h : 5, m : 30 };
				} else if ( this.captured[ 0 ].match( /шес/ ) ) {
					return { h : 6, m : 30 };
				} else if ( this.captured[ 0 ].match( /восем/ ) ) {
					return { h : 8, m : 30 };
				} else if ( this.captured[ 0 ].match( /сем/ ) ) {
					return { h : 7, m : 30 };
				} else if ( this.captured[ 0 ].match( /дев/ ) ) {
					return { h : 9, m : 30 };
				} else if ( this.captured[ 0 ].match( /дес/ ) ) {
					return { h : 10, m : 30 };
				} else if ( this.captured[ 0 ].match( /один/ ) ) {
					return { h : 11, m : 30 };
				}
			},
			type : "TIME",
			priority : 7,
			id : "t33"
		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)(с|от)([^а-яА-яЁё0-9_].{0,20}?[^а-яА-яЁё0-9_](?:до|-)(?:[^а-яА-яЁё0-9_]|$))/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func: function() {
				return this.captured[ 0 ];
			},
			type : "FROM",
			id : "t34"
		},
		{
			// money
			regExp : /(#from_\d+%.{0,20}?[^а-яА-яЁё0-9_])(до|-)([^а-яА-яЁё0-9_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func: function() {
				return this.captured[ 0 ];
			},
			type : "TO",
			id : "t35"
		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)(до)([^а-яА-яЁё0-9_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func: function() {
				return this.captured[ 0 ];
			},
			type : "TO",
			id : "t36"
		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)(во|в|на|к|с|около|от)([^а-яА-яЁё0-9_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2 ;
				return c1 + h + c3;
			},
			func: function() {
				return this.captured[ 0 ];
			},
			type : "PREP",
			id : "t37"
		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)(за)([^а-яА-яЁё0-9_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2 ;
				return c1 + h + c3;
			},
			func: function() {
				return this.captured[ 0 ];
			},
			type : "BEFORE",
			id : "t38"
		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)(следующий|следующем|следующей|следующую|следующ\.|следующ|след|след\.|сл\.)([^а-яА-яЁё0-9_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2 ;
				return c1 + h + c3;
			},
			func: function() {
				return this.captured[ 0 ];
			},
			type : "NEXT",
			id : "t39"
		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)(весь\sдень)([^а-яА-яЁё0-9_]|$)/gmi,
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
			id : "t40"
		},
		{
			//wordy date
			regExp : /(([^а-яА-яЁёa-zA-Z0-9\-_]|^)(позавчера|вчера|сегодня|завтра|послезавтра|через\sдень)([^а-яА-яЁёa-zA-Z0-9\-_]|$))/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c3.toLowerCase() ];
				this.origin = c3;
				return c2 + h + c4;
			},
			func : function() {
				switch ( this.captured[ 0 ] ) {
					case 'позавчера':
						return SD_tools.today( -2 );
					case 'вчера':
						return SD_tools.today( -1 );
					case 'сегодня':
						return SD_tools.today();
					case 'завтра':
						return SD_tools.today( +1 );
					case 'через день':
						return SD_tools.today( +2);
					case 'послезавтра':
						return SD_tools.today( +2 );
					default : SD_tools.today();
				}
			},
			type : "DATE",
			priority : 10,
			id : "t41"
		},
		{
			//digital date big type XX-XX-XXXX(201[5-9]|1[5-9])
			regExp : /\b(([0-2][0-9]|[3][0-1]|[0-9])[./-]([0][0-9]|1[0-2])[./-](201[5-9]|1[5-9]))\b/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2, c3, c4 ];
				this.origin = c1;
				if( SD_tools.setFullDate( this.captured[ 0 ], this.captured[ 1 ], this.captured[ 2 ], true ) === undefined ) return;
				return h;
			},
			func : function() {
				return SD_tools.setFullDate( this.captured[ 0 ], this.captured[ 1 ], this.captured[ 2 ] );
			},
			type : "DATE",
			priority : 10,
			id : "t42"
		},
		{
			//digital date big type XX-XX-XXXX
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(([0-2][0-9]|[3][0-1]|[0-9])[./-]([0][0-9]|1[0-2])[./-](\d{4}|\d{2}))([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4, c5, c6 ) {
				this.captured = [ c3, c4, c5 ];
				this.origin = c2;
				if( SD_tools.setFullDate( this.captured[ 0 ], this.captured[ 1 ], this.captured[ 2 ], true ) === undefined ) return;
				return c1 + h + c6;
			},
			func : function() {
				return SD_tools.setFullDate( this.captured[ 0 ], this.captured[ 1 ], this.captured[ 2 ] );
			},
			type : "DATE",
			priority : 3,
			id : "t43"
		},
		{
			//week name
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(понедельника|понедельник|пон\.|пон|пн\.|пн|пнд\.|пнд|вторник|втор\.|втор|вт\.|вт|среда|среду|ср\.|ср|четверг|четв\.|четв|чет\.|чет|чтв\.|чтв|чт\.|чт|пятница|пятницу|пятн\.|пятн|пят\.|пят|пт\.|пт|суббота|субботу|субб\.|субб|суб\.|суб|сб\.|сб|воскресенье|воскр\.|воскр|вс\.|вс)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2.toLowerCase() ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func : function() {
				if ( this.captured[ 0 ].match( /по|пн/ ) ) {
					return 1;
				} else if ( this.captured[ 0 ].match( /вт/ ) ) {
					return 2;
				} else if ( this.captured[ 0 ].match( /ср/ ) ) {
					return 3;
				} else if ( this.captured[ 0 ].match( /че|чт/ ) ) {
					return 4;
				} else if ( this.captured[ 0 ].match( /пя|пт/ ) ) {
					return 5;
				} else if ( this.captured[ 0 ].match( /су|сб/ ) ) {
					return 6;
				} else if ( this.captured[ 0 ].match( /во|вс/ ) ) {
					return 7;
				}
			},
			type : "WEEKDAY",
			priority : 5,
			id : "t44"
		},
		{
			//digital time
			regExp : /([^а-яА-яЁёa-zA-Z0-9\_.:-]|^)(([0-1][0-9]|[2][0-4]|[0-9])[-:.]([0-5][0-9]))(\s?-\s?([0-1][0-9]|[2][0-4]|[0-9])[-:.]([0-5][0-9]))([^а-яА-яЁёa-zA-Z0-9\_.:-]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4, c5, c6, c7, c8 ) {
				this.captured = [ { h : +c6 - +c3, m: +c7 - +c4 } ];
				this.origin = c5;
				return c1 + c2 + h + c8;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "DTIME",
			priority : 10,
			id : "t45"
		},
		{
			//digital time
			regExp : /([^а-яА-яЁёa-zA-Z0-9\_.:-]|^)(([0-1][0-9]|[2][0-4]|[0-9])([-:.])([0-5][0,5]))([^а-яА-яЁёa-zA-Z0-9\_.:-]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4, c5, c6 ) {
				var a = { h : +c3, m: +c5 };
				if ( +c3 === 0 ) a.duplicity = false;
				if( +c3 < 31 && +c5 < 13 && c4.match( /-\./) ) a.datealternative = true;
				this.captured = [ a ];
				this.origin = c2;
				return c1 + h + c6;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "TIME",
			priority : 10,
			id : "t46"
		},
		{
			//digital time
			regExp : /([^а-яА-яЁёa-zA-Z0-9\_.:-]|^)(([0-1][0-9]|[2][0-4]|[0-9])([-:])([0-5][0-9]))([^а-яА-яЁёa-zA-Z0-9\_:-]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4, c5, c6 ) {
				var a = { h : +c3, m: +c5 };
				if ( +c3 === 0 ) a.duplicity = false;
				if( +c3 < 31 && +c5 < 13 && c4.match( /-\./) ) a.datealternative = true;
				this.captured = [ a ];
				this.origin = c2;
				return c1 + h + c6;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "TIME",
			priority : 10,
			id : "t47"
		},
		{
			//digital date small type XX-XX
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_.]|^)(([0-2][0-9]|[3][0-1]|[0-9])[./-]([0][1-9]|1[0-2]))([^а-яА-яЁёa-zA-Z0-9\-_.]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4, c5 ) {
				this.captured = [ c3, c4 ];
				this.origin = c2;
				return c1 + h + c5;
			},
			func : function() {
				return SD_tools.nearestDayMonth( this.captured[ 0 ], this.captured[ 1 ]);
			},
			type : "DATE",
			priority : 6,
			id : "t48"
		},
		{
			//digital date small type XX-XX
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_.:]|^)((0[0-9]|1[0-2]|[0-9])([.-])([0-5][0-9]))([^а-яА-яЁёa-zA-Z0-9\-_:]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4, c5, c6 ) {
				var a = { h : +c3, m: +c5 };
				if ( +c3 === 0 ) a.duplicity = false;
				if( +c3 < 31 && +c5 < 13 && c4.match( /-\./) ) a.datealternative = true;
				this.origin = c2;
				this.captured = [ a ];
				return c1 + h + c6;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "TIME",
			priority : 6,
			id : "t48"
		},
		{
			//digital time
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(полночь|обед|обеда)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func : function() {
				if ( this.captured[ 0 ].match( /полн/i ) )  {
					return {h: 0, m: 0, duplicity: false };
				} else if ( this.captured[ 0 ].match( /обед/i ) ) {
					return { h : 12, m : 0 , duplicity: false };
				}
			},
			type : "TIME",
			priority : 8,
			id : "t49"
		},
		{
			//TODO fill it
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(час|часу|два|двум|двух|две|три|трем|трём|трех|трёх|четыре|четырем|пять|пяти|шесть|шести|семь|семи|восемь|восьми|девять|девяти|десять|десяти|одиннадцать|одиннадцати|двенадцать|двенадцати|сорок)([^а-яА-яЁёA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2.toLowerCase() ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func : function() {
				switch ( this.captured[ 0 ] ) {
					case 'час':
					case 'часу':
						return 1;
					case 'два':
					case 'двум':
					case 'двух':
					case 'две':
						return 2;
					case 'три':
					case 'трем':
					case 'трём':
					case 'трёх':
					case 'трех':
						return 3;
					case 'четыре':
					case 'четырем':
						return 4;
					case 'пять':
					case 'пяти':
						return 5;
					case 'шесть':
					case 'шести':
						return 6;
					case 'семь':
					case 'семи':
						return 7;
					case 'восемь':
					case 'восьми':
						return 8;
					case 'девять':
					case 'девяти':
						return 9;
					case 'десять':
					case 'десяти':
						return 10;
					case 'одиннадцать':
					case 'одиннадцати':
						return 11;
					case 'двеннадцать':
					case 'двеннадцати':
						return 12;
					case 'сорок':
						return 40;
					default : return 1;
				}
			},
			type : "NUMBER",
			id : "t50"
		},
		{
			// wordy time
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]+|^)(двадцатого|двадцать\sпервое|двадцать\sпервого|двадцать\sвторое|двадцать\sвторого|двадцать\sтретье|двадцать\sтретьего|двадцать\sчетвертое|двадцать\sчетвертого|двадцать\sпятое|двадцать\sпятого|двадцать\sшестое|двадцать\sшестого|двадцать\sседьмое|двадцать\sседьмого|двадцать\sвосьмое|двадцать\sвосьмого|двадцать\sдевятое|двадцать\sдевятого|тридцатое|тридцатого|тридцать\sпервое|тридцать\sпервого|первое|первого|второе|второго|третье|третьего|четвертое|четвертого|пятое|пятого|шестое|шестого|седьмое|седьмого|восьмое|восьмого|девятое|девятого|десятое|десятого|одиннадцатое|одиннадцатого|двенадцатое|двенадцатого|тринадцатое|тринадцатого|четырнадцатое|четырнадцатого|пятнадцатое|пятнадцатого|шестнадцатое|шестнадцатого|семнадцатое|семнадцатого|восемнадцатое|восемнадцатого|девятнадцатое|девятнадцатого|двадцатое)(?:\s+(?:числа))?([^а-яА-яЁё0-9_\-]+|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2.toLowerCase() ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func : function() {
				switch ( this.captured[ 0 ] ) {
					case 'первое':
					case 'первого':
						return 1;
					case 'второе':
					case 'второго':
						return 2;
					case 'три':
					case 'трем':
					case 'трём':
					case 'третьего':
						return 3;
					case 'четвертое':
					case 'четвертого':
						return 4;
					case 'пятое':
					case 'пятого':
						return 5;
					case 'шесть':
					case 'шести':
						return 6;
					case 'седьмое':
					case 'седьмого':
						return 7;
					case 'восьмое':
					case 'восьмого':
						return 8;
					case 'девятое':
					case 'девятого':
						return 9;
					case 'десять':
					case 'десяти':
					case 'десятое':
						return 10;
					case 'одиннадцать':
					case 'одиннадцати':
						return 11;
					case 'двеннадцать':
					case 'двеннадцати':
						return 12;
					case 'тринадцатое':
					case 'тринадцатого':
						return 13;
					case 'четырнадцатое':
					case 'четырнадцатого':
						return 14;
					case 'пятнадцатое':
					case 'пятнадцатого':
						return 15;
					case 'шестнадцатое':
					case 'шестнадцатого':
						return 16;
					case 'семнадцатое':
					case 'семнадцатого':
						return 17;
					case 'восемнадцатое':
					case 'восемнадцатого':
						return 18;
					case 'девятнадцатое':
					case 'девятнадцатого':
						return 19;
					case 'двадцатого':
					case 'двадцатое':
						return 20;
					case 'двадцать первое':
					case 'двадцать первого':
						return 21;
					case 'двадцать второе':
					case 'двадцать второго':
						return 22;
					case 'двадцать третье':
					case 'двадцать третьего':
						return 23;
					case 'двадцать четвертое':
					case 'двадцать четвертого':
						return 24;
					case 'двадцать пятое':
					case 'двадцать пятого':
						return 25;
					case 'двадцать шестого':
					case 'двадцать шестое':
						return 26;
					case 'двадцать седьмое':
					case 'двадцать седьмого':
						return 27;
					case 'двадцать восьмого':
					case 'двадцать восьмое':
						return 28;
					case 'двадцать девятое':
					case 'двадцать девятого':
						return 29;
					case 'тридцатого':
					case 'тридцатое':
						return 30;
					case 'тридцать первое':
					case 'тридцать первого':
						return 31;
					default : return 1;
				}
			},
			type : "NUMBER",
			id : "t51"
		},
		{
			// wordy time
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]+|^)(пол)(двадцатого|двадцать\sпервое|двадцать\sпервого|двадцать\sвторое|двадцать\sвторого|двадцать\sтретье|двадцать\sтретьего|двадцать\sчетвертое|двадцать\sчетвертого|двадцать\sпятое|двадцать\sпятого|двадцать\sшестое|двадцать\sшестого|двадцать\sседьмое|двадцать\sседьмого|двадцать\sвосьмое|двадцать\sвосьмого|двадцать\sдевятое|двадцать\sдевятого|тридцатое|тридцатого|тридцать\sпервое|тридцать\sпервого|первое|первого|второе|второго|третье|третьего|четвертое|четвертого|пятое|пятого|шестое|шестого|седьмое|седьмого|восьмое|восьмого|девятое|девятого|десятое|десятого|одиннадцатое|одиннадцатого|двенадцатое|двенадцатого|тринадцатое|тринадцатого|четырнадцатое|четырнадцатого|пятнадцатое|пятнадцатого|шестнадцатое|шестнадцатого|семнадцатое|семнадцатого|восемнадцатое|восемнадцатого|девятнадцатое|девятнадцатого|двадцатое)(?:\s+(?:числа))?([^а-яА-яЁё0-9_\-]+|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c3.toLowerCase() ];
				this.origin = c2 + c3;
				return c1 + h + c4;
			},
			func : function() {
				if ( this.captured[ 0 ].match( /перв/ ) ) {
					return { h : 0, m : 30 };
				} else if ( this.captured[ 0 ].match( /втор/ ) ) {
					return { h : 1, m : 30 };
				} else if ( this.captured[ 0 ].match( /трет/ ) ) {
					return { h : 2, m : 30 };
				} else if ( this.captured[ 0 ].match( /четв/ ) ) {
					return { h : 3, m : 30 };
				} else if ( this.captured[ 0 ].match( /пят/ ) ) {
					return { h : 4, m : 30 };
				} else if ( this.captured[ 0 ].match( /шес/ ) ) {
					return { h : 5, m : 30 };
				} else if ( this.captured[ 0 ].match( /сед/ ) ) {
					return { h : 6, m : 30 };
				} else if ( this.captured[ 0 ].match( /вос/ ) ) {
					return { h : 7, m : 30 };
				} else if ( this.captured[ 0 ].match( /дев/ ) ) {
					return { h : 8, m : 30 };
				} else if ( this.captured[ 0 ].match( /дес/ ) ) {
					return { h : 9, m : 30 };
				} else if ( this.captured[ 0 ].match( /один/ ) ) {
					return { h : 10, m : 30 };
				} else if ( this.captured[ 0 ].match( /две/ ) ) {
					return { h : 11, m : 30 };
				}
			},
			type : "TIME",
			priority : 7,
			id : "t52"
		},
		{
			// wordy time sp
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]+|^)(пара|пару)([^а-яА-яЁё0-9_\-]+|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2.toLowerCase() ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func : function() {
				switch ( this.captured[ 0 ] ) {
					case 'пара':
					case 'пару':
						return 2;
					default : return 1;
				}
			},
			type : "NUMBER",
			id : "t53"
		},
		{
			//months
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]+|^)(янв\.|янв|январь|января|январе|январю|фев\.|фев|февраль|февраля|феврале|февралю|мар\.|мар|марта|марте|марту|март|апр\.|апр|апрель|апреля|апреле|апрелю|май|мая|мае|маю|июн\.|июн|июнь|июня|июне|июню|июл\.|июл|июль|июля|июле|июлю|авг\.|авг|август|августе|августу|августа|сен\.|сен|сент\.|сент|сентябрь|сентября|сентябре|сентябрю|окт\.|окт|октябрь|октября|октябре|октябрю|ноя\.|ноя|нояб\.|нояб|ноябрь|ноября|ноябре|ноябрю|дек\.|дек|декабрь|декабря|декабре|декабрю)([^а-яА-яЁёa-zA-Z0-9\-_]+|$)/gmi,
			replace : function ( h, c1, c2, c3  ) {
				this.captured = [ c2.toLowerCase() ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func : function() {
				if ( this.captured[ 0 ].match( /ян/ ) ) {
					return '01';
				} else if ( this.captured[ 0 ].match( /фев/ ) ) {
					return '02';
				} else if ( this.captured[ 0 ].match( /мар/ ) ) {
					return '03';
				} else if ( this.captured[ 0 ].match( /апр/ ) ) {
					return '04';
				} else if ( this.captured[ 0 ].match( /май|мая|мае|маю/ ) ) {
					return '05';
				} else if ( this.captured[ 0 ].match( /июн/ ) ) {
					return '06';
				} else if ( this.captured[ 0 ].match( /июл/ ) ) {
					return '07';
				} else if ( this.captured[ 0 ].match( /авг/ ) ) {
					return '08';
				} else if ( this.captured[ 0 ].match( /сен/ ) ) {
					return '09';
				} else if ( this.captured[ 0 ].match( /окт/ ) ) {
					return '10';
				} else if ( this.captured[ 0 ].match( /ноя/ ) ) {
					return '11';
				} else if ( this.captured[ 0 ].match( /дек/ ) ) {
					return '12';
				}
			},
			type : "MONTH",
			id : "t54"
		},
		{
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(\d{1,2})(ч\.|ч)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
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
			id : "t55"
		},
		{
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(201[5-9]|1[5-9])г([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + ' г' + c3;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "NUMBER",
			priority : 10,
			id : "t56"
		},
		{
			//reminders
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(напомнить|предупредить)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.origin = c2;
				return c1 + h + c3;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "ACTIONREMIND",
			id : "t57"
		},
		{
			//TODO last space isn't capturing
			// just numbers
			regExp : /([^а-яА-яЁё0-9_\-]|^)(\d+)((?:(?:-ого|-го|го)\s{0,2}числа)|-ого|-го|го|е|ти|\s{0,2}числа)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ c2 ];
				this.origin = c2 + c3;
				return c1 + h + c4;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "DAYNUMBER",
			id : "t58"
		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_.]|^)(часам|часа|часов|ч\.|ч)([^а-яА-яЁё0-9_]|$|\.$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2 ;
				return c1 + h + c3;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "HOURINDEX",
			id : "t59"
		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_.]|^)((\d{1,2})(?:минуту|минуты|минутам|минут|мин\.|мин|м\.))([^а-яА-яЁё0-9_.]|$|\.$)/gmi,
			replace : function ( h, c1, c2, c3, c4 ) {
				this.captured = [ +c3 ];
				this.origin = c2 ;
				return c1 + h + c4;
			},
			func : function() {
				return { h : 0 , m : this.captured[ 0 ] };
			},
			type : "DTIME",
			id : "t60"
		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_.]|^)(минуту|минуты|минутам|минут|мин\.|мин|м\.|м)([^а-яА-яЁё0-9_.]|$|\.$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2 ;
				return c1 + h + c3;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "MINUTINDEX",
			id : "t61"
		},
		{
			// day time (AM PM etc)
			regExp : /(#hourindex_\d+%\s{0,3})(дня)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2.toLowerCase() ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "DAYTIME"

		},
		{
			// day time (AM PM etc)
			regExp : /([^а-яА-яЁёa-zA-Z0-9\-_]|^)(утра|утром|вечера|вечером|днем|полночь|ночи)([^а-яА-яЁёa-zA-Z0-9\-_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2.toLowerCase() ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func : function() {
				if ( this.captured[ 0 ].match( /веч|дн/ ) ) { return true; } else return false;
			},
			type : "DAYTIME"

		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)(дней|день|дня|дн|сутки|суток|недель|неделя|неделю|недели|нед|месяц|месяце|лет)([^а-яА-яЁё0-9_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "DATEINDEX",
			id : "t62"
		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)(месяца|мес)([^а-яА-яЁё0-9_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "MONTHINDEX",
			id : "t63"
		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)(года|году|год|г\.|г)([^а-яА-яЁё0-9_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "YEARINDEX",
			id : "t64"
		},
		{
			//TODO last space isn't capturing
			// just numbers
			regExp : /([^а-яА-яЁё0-9_\-]|^)(\d+)([^а-яА-яЁё0-9_\-a-zA-Z]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ +c2 ];
				this.origin = c2;
				return c1 + h + c3;
			},
			func : function() {
				return this.captured[ 0 ];
			},
			type : "NUMBER",
			id : "t65"
		},
		{
			// money
			regExp : /([^а-яА-яЁё0-9_]|^)(через)([^а-яА-яЁё0-9_]|$)/gmi,
			replace : function ( h, c1, c2, c3 ) {
				this.captured = [ c2 ];
				this.origin = c2 ;
				return c1 + h + c3;
			},
			type : "AFTER",
			id : "t66"
		}
	];
