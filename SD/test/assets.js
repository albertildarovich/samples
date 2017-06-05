"use strict";
/**
 * @author Kadyrov Albert <fluffy1snow@gmail.com>
 * @module TestAssets
 */

var TCcounter = 0, r, a, j, k, e, g, mc1 = 0, mc2 = 0, fails = 0, warns = 0, passes = 0, beginTime;

function compareTwoEvents ( eventA, eventB ) {
	if ( !eventA && !eventB ) return false;
	if ( !eventA && eventB ) return 'Empty left';
	if ( eventA && !eventB ) return 'Empty right';
	for ( var ks = [ 'event_type', 'event_startDate', 'event_startTime', 'event_duration', 'event_result', 'event_alarms' ], i = ks.length; i--; ) {
		if ( eventA[ ks[ i ] ] !== eventB[ ks[ i ] ] ) return 'Does not match ' + ks[ i ];
	}
	return false;
}
console.log( testCases );
//console.profile();

for ( a in testCases ) {
	TCcounter++;
	if ( testCases.hasOwnProperty( a ) ) {
		beginTime = new Date;
			smartDateParse( testCases[ a ].origin,
			{
				model: null,
				environment: testCases[ a ].environment,
				debug : 0,
				singleMode : false
			},
			function ( ret, result ) {
				var r00, r01, r10;
				if ( !ret ) {
					// TODO Переделать на сравнение последовательности
					// TODO Добавить проверку уникальности результатов
					if ( !( r00 = compareTwoEvents( result[ 0 ], testCases[ a ].expectations[ 0 ] ) ) ) {
						console.log( '%s PASS First given item match first expected', a, '\n###########################################################' );
						passes++;
						mc1++;
					} else {
						if ( !( r01 = compareTwoEvents( result[ 0 ], testCases[ a ].expectations[ 1 ] ) ) || !( r10 = compareTwoEvents( result[ 1 ], testCases[ a ].expectations[ 0 ] ) ) ) {
							console.log( "%s WARN", a, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' );
							console.log( result, testCases[ a ].expectations );
							console.log( r00, r01, r10 );
							warns++;
							mc2++;
						} else {
							console.log( "%s FAIL", a );
							console.log( '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' );
							console.log( result, testCases[ a ].expectations );
							console.log( r00, r01, r10 );
							console.log( '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@' );
							fails++;
						}
					}
				} else {
					console.log( "SmartDate returned error", ret );
				}
			} );
	}
}
//console.profileEnd();
console.log( "Total TC =", TCcounter, "Result PASSES=" + Math.round( passes/TCcounter * 100 ) + '%' + ', WARNS=' + Math.round( warns/TCcounter * 100 )+ '%' + ', FAILS=' + Math.round( fails/TCcounter * 100 ) + '%', 'priority matching passes=' + mc1, 'warns=' + mc2 );
