"use strict";
/**
* @author Kadyrov Albert <fluffy1snow@gmail.com>
* @module SmartDate
*/

var
	DEBUG =  0,
	DEBUG2 = 0,
	_fakeModel = function ( res ) {
		for ( var i = 0, dof, d, p = res; i < res.length; i++ ) {
			if ( p[ i ].query.time && p[ i ].query.date && ( typeof( p[ i ].query.date ) === 'string' ) ) {
				if ( p[ i ].query.workTime ) {
					while ( p[ i ].query.workTime[ weekdays[ ( ( ( new Date( p[ i ].query.date ) ).getDay() ) ) ] ] === '-' ) {
						d = ( new Date( p[ i ].query.date.replace( /-/g, '/') ) );
						dof = new Date ( d.setDate( new Date( d.getDate() + 1 ) ));
						p[ i ].query.date = SD_tools.setFullDate( dof.getDate(), dof.getMonth(), +( dof.getFullYear().toString() ).slice( -2 ) );
					}
					p[ i ].query.time = { h : +( p[ i ].query.workTime[ weekdays[ ( new Date( p[ i ].query.date.replace( /-/g, '/' ) ) ).getDay() ] ].match( /(.+?):/ ) ? p[ i ].query.workTime[ weekdays[ ( ( ( new Date( p[ i ].query.date.replace( /-/g, '/' ) ) ).getDay() ) ) ] ].match( /(.+?):/ )[ 1 ] : 9 ), m : 0, duplicity: false };
				} else p[ i ].query.time = { h : SD_tools.now( 0, 'h' ), m : SD_tools.now( 0, 'm' ), duplicity: false };
			} else if ( p[ i ].query.time ) p[ i ].query.time = { h : 9, m : 0, duplicity: false };
			if ( p[ i ].query.date ) p[ i ].query.date = SD_tools.today();
		}
		return res;
	}
	, retoken = /#.+?_(\d+)%/
	, retokeng = /#.+?_(\d+)%/g
	, _l
	, _retokenize = function ( tokens, text ) {
		while( _l = retoken.exec( text ) ) {
			text = text.replace( _l[ 0 ], tokens[ _l[ 1 ]].origin );
		}
		return text;
	}
	, _extract_token= function ( text, tokens ) {
		var rxb, res = [], lrxp = /#.+?_(\d+)%/g;
		while( rxb = lrxp.exec( text ) ) {
			res.push( { _id :  tokens[ rxb[ 1 ] ].id, _origin : tokens[ rxb[ 1 ]].origin, _type : tokens[ rxb[ 1 ]].type } );
			if ( tokens[ rxb[ 1 ]].origin.match( /#\w+%/ ) ) {
				res = res.concat( _extract_token( tokens[ rxb[ 1 ] ].origin, tokens ) );
			}
		}
		return res;
	}
	, _checkCharReg = /[^.:?,]/
	, _checkChar = function( a ) {
		if ( !a ) return '';
		if ( _checkCharReg.exec( a ) ) { return a } else return '';
	}
	, _clean = function ( text, matched, tokens ) {
		DEBUG && console.log( 'cleaning', '\ntext - ', text, '\ntokens - ', matched, matched.length, matched[ 0 ] );
		for ( var i = 0; i < matched.length; i++ ) {
			DEBUG2 && console.log( matched[ i ] );
			if ( matched[ i ] ) {
				var r = new RegExp( '(..|.)?(.|^)(' + matched[i] + ')(.|$)(..|.)?' , 'mi');
				DEBUG2 && console.log( text );
				text = ( text.replace( /&nbsp;/g, ' ' ) ).trim();
				text = text.replace( r, function( match, p1, p2, p3, p4, p5 ) {
					var ch1, ch2, ch3 = p2, ch4 = p4, ch5, ch6;
					if ( p1 && p1.length > 1 ) {
						ch1 = p1.slice(0, 1); ch2 = p1.slice(1, 2);
					} else ch2 = p1;
					if ( p5 && p5.length > 1 ) {
						ch5 = p5.slice( -2, -1); ch6 = p5.slice( -1 );
					} else ch5 = p5;
					if ( ch2 && ch2.match( /-|—/ ) ) {
						if ( ch5 && ch5.match( /-|—/ ) ) {
							return '';
						} else if ( ch4 && ch4.match( /,/ ) ) {
							if ( ch5 ) {
								return _checkChar( ch1 ) + ch4 + ( ch5 || '' ) + _checkChar( ch6 );
							} else {
								return _checkChar( ch1 ) + ( ch5 || '' ) + _checkChar( ch6 );
							}
						} else if ( ch4 && ch4.match( /[\.!?\)]/ ) ) {
							if ( ch5 ) {
								return ( ch4 || '') + ( ch5 || '' ) + _checkChar( ch6 );
							} else return ( ch4 || '');
						} else return ( ch4 || '' ) + ( ch5 || '' ) + _checkChar( ch6 );
					} else if ( ch3 && ch3.match( /\s/ ) ) {
						DEBUG2 && console.log( 1, arguments, p1, p2, p3, p4, p5 );
						if ( ch5 && ch5.match( /-|—/ ) ) {
							if ( ch2 && ch2.match(/[\.!?]/)) {
								return _checkChar( ch1 ) + ( ch2 || '' ) + ( ch3 || '' );
							} else if ( ch2 && ch2.match(/,/)) {
								return _checkChar( ch1 ) + _checkChar( ch6 );
							} else return _checkChar( ch1 ) + ( ch2 || '' ) + ( ch3 || '' );
						} else if ( ch4 && ch4.match( /\s/ ) )	{
							return _checkChar( ch1 ) + ( ch2 || '' ) + ch3 + ( ch5 || '' ) + _checkChar( ch6 );
						} else if ( ch4 && ch4.match ( /,/ ) ) {
							if ( ch5 ) {
								if ( ch2 && ch2.match( /\./ ) ) {
									return _checkChar( ch1 ) + ( ch2 || '' ) + _checkChar( ch6 );
								} else return _checkChar( ch1 ) + ( ch2 || '' ) + ch4 +( ch5 || '' ) + _checkChar( ch6 );
							} else {
								return _checkChar( ch1 ) + ( ch2 || '' ) + ch3 + ( ch5 || '' ) + _checkChar( ch6 );
							}
						} else if ( ch4 && ch4.match ( /:/ ) ) {
							if ( ch5 && ch5.match( /\s/ ) ) {
								return _checkChar( ch1 ) + ( ch2 || '' ) + ch5 + _checkChar( ch6 );
							} else return _checkChar( ch1 ) + ( ch2 || '' ) + ( ch5 || '' ) + _checkChar( ch6 );
						} else if ( ch4 && ch4.match( /[\.!?\)]/ ) ) {
							if ( ch2 && ch2.match( /[\.!?]/ ) ) {
								return _checkChar( ch1 ) + ( ch2 || '' ) + ( ch5 || '' ) + _checkChar( ch6 );
							} else if ( ch2 && ch2.match ( /,/ ) ) {
								if ( ch5 ) {
									return _checkChar( ch1 ) + ( ch4 || '') + ( ch5 || '' ) + _checkChar( ch6 );
								} else return _checkChar( ch1 ) + ( ch4 || '') + _checkChar( ch6 );
							} else return _checkChar( ch1 ) + ( ch2 || '' ) + ch4 + ( ch5 || '' ) + _checkChar( ch6 );
						} else if ( ch4 && ch4.match( /#|</ ) ) {
							return _checkChar( ch1 ) + ( ch2 || '' ) + ( ch4 || '' )+ ( ch5 || '' ) + _checkChar( ch6 );
						} else if ( !( ch4 && ch5 ) ) {
							if (ch2 && ch2.match(/,/)) {
								return _checkChar( ch1 ) + _checkChar( ch6 );
							} else return _checkChar( ch1 ) + ( ch2 || '' ) + _checkChar( ch6 );
						} else {
							return _checkChar( ch1 ) + ( ch2 || '' ) + ( ch3 || '' ) + ( ch5 || '' ) + _checkChar( ch6 );
						}
					} else if ( ch3 && ch3.match( /,/ ) ) {
						DEBUG2 && console.log( 2, arguments, ch2, ch3, p3, ch4, ch5 );
						if ( ch4.match( /\s/ ) ) {
							return _checkChar( ch1 ) + ( ch2 || '' ) + ch3 + ( ch5 || '' ) + _checkChar( ch6 );
						} else if ( ch4 && ch4.match ( /,/ ) ) {
							return _checkChar( ch1 ) + ( ch2 || '' ) + ch3 + ( ch5 || '' ) + _checkChar( ch6 );
						} else if ( ch4 && ch4.match( /[\.!?]/ ) ) {
							return _checkChar( ch1 ) + ( ch2 || '' ) + ch3 + ( ch5 || '' ) + _checkChar( ch6 );
						} else if ( !( ch4 && ch5 ) ) {
							if ( ch2 && ch2.match( /\s/ ) ) {
								return _checkChar( ch1 ) + _checkChar( ch6 );
							} else return ( ch2 || '' );
						} else return _checkChar( ch1 ) + ( ch2 || '' ) + ( ch5 || '' ) + _checkChar( ch6 );
					} else if ( ch3 && ch3.match( /\(/ ) ) {
						return _checkChar( ch1 ) + ( ch5 || '' ) + _checkChar( ch6 );
					} else if ( !( ch2 && ch3 ) ) {
						DEBUG2 && console.log( 3, arguments, ch2, ch3, p3, ch4, ch5 );
						if ( ch4.match( /[,\.:]/ ) && ( ch5 && ch5.match(/\s/) ) ) {
							return _checkChar( ch1 ) + _checkChar( ch6 );
						} else if ( ch4 && ch4.match( /#|</ ) ) {
							return _checkChar( ch1 ) + ( ch2 || '' ) + ( ch4 || '' )+ ( ch5 || '' ) + _checkChar( ch6 );
						} else if ( ch5 && ch5.match( /-/ ) ) {
							return _checkChar( ch1 );
						} else return _checkChar( ch1 ) + ( ch5 || '' ) + _checkChar( ch6 );
					} else if ( ch4 && ch4.match( /,/ ) ) {
						DEBUG2 && console.log( 2, arguments, ch2, ch3, p3, ch4, ch5 );
						return _checkChar( ch1 ) + ( ch2 || '' ) + ( ch3 || '' ) + ( ch4 || '' ) + ( ch5 || '' ) + _checkChar( ch6 );
					} else {
						DEBUG2 && console.log( 4, arguments, ch2, ch3, p3, ch4, ch5 );
						return _checkChar( ch1 ) + ( ch2 || '' ) + ( ch3 || '' ) + ( ch4 || '' ) + ( ch5 || '' ) + _checkChar( ch6 );
					}
				});
				DEBUG2 && console.log( text );
			}
		}
		text = _retokenize( tokens, text );
		return text;
	}
	, weekdays = [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]
	, smartDateParse = function ( text, options, callback ) {
			var
				_t = []
				, k = []
				, kpr = []
				, combError = false
				, sdt_queries = SD_tools.queries
				, i, rx, mt, cb, s1, s2, pr, textmatch
				, _sort = function() {
					k.sort( function( a, b ) {
						if ( a.priority < b.priority ) {
							return 1;
						}
						if ( a.priority > b.priority) {
							return -1;
						}
						return 0;
					});
				}
				, _processModelResult = function ( res ) {
					DEBUG && console.log( res, res[ 0 ]._id );
					for ( var i = 0; i < res.length; i++ ) {
						DEBUG && console.log( 'processing model result', res[ i ] );
						_processCombRes( sdt_queries[ res[ i ]._id ].callback( res[ i ].query ), sdt_queries[ res[ i ]._id ].match,  res[ i ].query.time ? false : true );
					}
				},
				_checkCombProperties = function( c ) {
					!c.event_type && ( c.event_type = "N" );
					!c.event_startDate && ( c.event_startDate = SD_tools.today() );
					!c.event_duration && ( c.event_duration = "30" );
					!c.event_startTime && ( c.event_startTime = "09:00" );
				},
				_dayShift = function( date, offset ) {
					var d = ( new Date( date.replace( /-/g, '/') ) ), dof = new Date ( d.setDate( new Date( d.getDate() + offset ) ));
					return SD_tools.setFullDate( dof.getDate(), dof.getMonth() + 1, +( dof.getFullYear().toString().slice( -2 ) ) );
				},
				_getWorkTime = function( sourcedate) {
					var wt = SD_tools.workTime, r = {}, lwt;
					if ( wt && ( lwt = wt[ weekdays[ ( ( ( new Date( sourcedate.replace( /-/g, '/' ) ) ).getDay() ) ) ] ] ) ) {
						if ( lwt === '-' ) return;
						lwt.replace( /(\d+):(\d+)-(\d+):(\d+)/, function( match, p1, p2, p3, p4) {
							if ( match ) {
								r = { beg : { h : +p1, m : +p2 }, end : { h : +p3, m : +p4 } };
							}
						} );
						return r;
					}
				},
				_checkRelevance = function ( c ) {
					var WTcheck, alt;
					//if ( c.event_startTime.datealternative && ( c.requested === true ) && c.event_startDate === SD_tools.today()) {
					//	alt = _clone( c );
					//	if ( !( alt.event_startDate = SD_tools.setDate( alt.event_startTime.h, alt.event_startTime.m, true ) ) ) return;
					//	_stringifyAndPush(  )
					//}
					if ( ( c.event_startDate === SD_tools.today() ) && c.event_startTime.h && ( c.event_startTime.h < SD_tools.now( 0, 'h' ) ) && ( c.requested === true ) ) { c.event_startDate = _dayShift( c.event_startDate, 1 ); c.priority -= 1; }
					WTcheck = _getWorkTime( c.event_startDate );
					if( c.event_duration === 'allday' ) {
						if ( WTcheck ) {
							if ( ( c.event_startTime.h >= WTcheck.beg.h ) || ( c.event_startTime.h <= WTcheck.end.h ) ) {
								if ( c.event_startDate === SD_tools.today() ) {
									c.event_duration = SD_tools._durationCounter( c.event_startTime, WTcheck.end );
								} else c.event_duration = SD_tools._durationCounter( WTcheck.beg, WTcheck.end );
							}
						} else c.event_duration = SD_tools._durationCounter( c.event_startTime, 0 );
					}
					if ( c.event_startTime.h && ( ( WTcheck  && ( ( +c.event_startTime.h < WTcheck.beg.h ) || ( +c.event_startTime.h > WTcheck.end.h ) ) ) || ( c.event_startDate === SD_tools.today() && +c.event_startTime.h < SD_tools.now( 0, 'h' ) ) ) ) c.priority -= 1;
					if ( ( c.event_startDate === SD_tools.today() ) && c.event_startTime.h && ( c.event_startTime.h < SD_tools.now( 0, 'h' ) ) ) c.priority -= 1;
					if ( c.event_startTime.offset ) { c.event_startDate = _dayShift( c.event_startDate, c.event_startTime.offset ) }
				},
				_stringifyAndPush = function( c, ks_array, duplicate ) {
					var h = c.event_startTime.h, m = c.event_startTime.m, cl, d, dof;
					if ( +h === 24 ) h = 0;
					if ( duplicate ) {
						cl = _clone( c );
						_checkRelevance( c );
						c.event_startTime = ( +h > 9 ? h : '0' + h ) + ':' + ( +m > 9 ? m : '0' + +m );
						ks_array.push( c );
						cl.event_startTime.h = +h + 12;
						_checkRelevance( cl );
						if ( +cl.event_startTime.h === 24 ) cl.event_startTime.h = 0;
						cl.event_startTime = ( +cl.event_startTime.h > 9 ? cl.event_startTime.h : '0' + cl.event_startTime.h )+ ':' + ( +m > 9 ? m : '0' + +m );
						ks_array.push( cl );
					} else {
						_checkRelevance( c );
						c.event_startTime = ( +h > 9 ? h : '0' + h ) + ':' + ( +m > 9 ? m : '0' + +m );
						ks_array.push( c );
					}
				},
				_processCombRes = function ( result, match, requested ) {
					DEBUG && console.log('processing comb results', result, match, requested );
					if ( result ) {
						DEBUG && console.log( 'current processing combination', result );
						result.match = match;
						requested && ( result.requested = true );
						_checkCombProperties( result );
						if ( result.event_startTime.h && ( result.event_startTime.h < 13 ) && ( result.event_startTime.duplicity !== false ) ) {
							_stringifyAndPush( result, k, true );
						} else {
							_stringifyAndPush( result, k )
						}
						DEBUG && console.log( 'pushed to k - ', k, result, '\n^^^^^^^^^^^^^^^^^^^^^^^^^^final^^^^^^^^^^^^^^^^^^^^^^^^^^^^' );
					}
				},
				_clone = function ( obj ) {
					return JSON.parse( JSON.stringify( obj ) );
				};

			if( options.debug ) DEBUG = 1;

			if ( options.environment ) {
				options.environment.date ? SD_tools.localDate = new Date( options.environment.date.replace( /-/g, '/' ) ) : SD_tools.today().replace( /-/g, '/' );
				options.environment.time ? SD_tools.localDate.setHours( +options.environment.time.slice( 0,2 ), +options.environment.time.slice( -2 ) ) : SD_tools.now( 0, 'ISO' );
				SD_tools.workTime = options.environment.workTime;
			} else 	SD_tools.localDate = null;
			SD_tools.query = [];
			DEBUG && console.log( text );

			for ( i = 0; i < tokens.length, rx = tokens[ i ]; i++ ) {
				text = text.replace( rx.regExp , function () {
					//DEBUG && console.log( rx.regExp );
					var lt, c = Array.prototype.slice.call( arguments ), r = '#' + rx.type + '_' + _t.length + '%', tk = { origin : c.shift(), captured : c, func: rx.func, type : rx.type, priority : rx.priority, id : rx.id };
					_t[ _t.length ] = tk;
					if ( !( lt = rx.replace.apply( tk, [ r ].concat( c ) ) ) ) {
						return arguments[ 0 ];
					} else return lt;
				} );
			}
			for ( i = 0; i < metatokens.length, rx = metatokens[ i ]; i++ ) {
				text = text.replace( rx.regExp , function () {
					DEBUG && console.log( rx.regExp );
					var c = Array.prototype.slice.call( arguments ), r = '#' + rx.type + '_' + _t.length + '%', lr, tk = { origin : c.shift(), captured : c, func: rx.func, type : rx.type, priority : rx.priority, id : rx.id };
					_t[ _t.length ] = tk;
					if ( !( lr = rx.replace.apply( tk, [ r ].concat( [ _t ] ).concat( c ) ) ) ) {
						return arguments[ 0 ]
					} else return lr;
				} );
			}
			DEBUG && console.log( 'this is tokens ' , _t );
			DEBUG && console.log( 'this is text with tokens', text );
			if ( _t.length ) {
				for ( i = 0; i < combinations.length, cb = combinations[i]; i++) {
					while (( mt = cb.regExp.exec( text )) !== null) {
						DEBUG && console.log('regExp - ', cb.regExp, '\nmatched in current comb - ', mt, text, '\n_________________________try_____________________________');
						textmatch = _retokenize( _t, mt[ 0 ] );
						mt.shift();
						//try {
							_processCombRes( cb.extract( _t, { captured_text : textmatch, match_items : mt, combination_id: cb.id, tokens : [] }, text ), { captured_text : textmatch, match_items : mt, combination_id: cb.id, tokens : [] } );
						//} catch (error) {
						//	combError = error
						//}
					}
				}
			}
			if ( sdt_queries.length) {
				/*if ( SD_adapter && SD_adapter.requestModel ) {
					s1 = setTimeout( function () {
						DEBUG && console.log( 'time out!' );
						_processModelResult( _fakeModel( sdt_queries ) );
						clearTimeout( s2 );
					}, 1000 );
					SD_adapter.requestModel( sdt_queries, function ( err, res ) {
							clearTimeout( s1 );
							DEBUG && console.log( 'request returned', res );
							_processModelResult( err ? _fakeModel( res ) : res );
						},
						function (s) {
							s2 = s;
						});
				} else {*/
					_processModelResult( _fakeModel( sdt_queries ) );
				//}
				SD_tools.queries = [];
			}
	_sort();
	if ( !options.singleMode  ) {
		pr = k[ 0 ] && k[ 0 ].priority;
		kpr.push( k[ 0 ] );
		for ( i = 1; i < k.length; i++ ) {
			( k[ i ].priority === pr ) && kpr.push( k[ i ] );
		}
		k = kpr;
	}
	if ( k.length && k[ 0 ] ) {
		for ( i = 0; i < k.length ; i++ ) {
			k[ i ].event_result = _clean( k[ i ].event_result, k[ i ].match.match_items, _t );
			for ( var j = 0, lk = k[ i ].match, tok = []; j < k[ i ].match.match_items.length; j++ ) {
				if ( lk.match_items[ j ] && lk.match_items[ j ].match( /#/ ) ) {
					if ( _t[ SD_tools._getNumber( lk.match_items[ j ] )].origin.match( /#/) ) {
						lk.tokens = lk.tokens.concat( [ { _id : _t[ SD_tools._getNumber( lk.match_items[ j ] ) ].id , _origin:  _t[ SD_tools._getNumber( lk.match_items[ j ] ) ].origin, _type:  _t[ SD_tools._getNumber( lk.match_items[ j ] ) ].type } ] ).concat( _extract_token( _t[ SD_tools._getNumber( lk.match_items[ j ] ) ].origin, _t ) );
					} else lk.tokens.push( { _id : _t[ SD_tools._getNumber( lk.match_items[ j ] ) ].id , _origin:  _t[ SD_tools._getNumber( lk.match_items[ j ] ) ].origin, _type:  _t[ SD_tools._getNumber( lk.match_items[ j ] ) ].type } );
				}
			}
		}
	}
	typeof( options ) === "function" ? options( combError, k ) : callback( combError, k );
};
