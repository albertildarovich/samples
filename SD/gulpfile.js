"use strict";
var
	pjson = require( './package.json' )
	, fs = require( 'fs' )
	, path = require( 'path' )
	, gulp = require( 'gulp' )
	, dest = gulp.dest
	, concat = require( 'gulp-concat' )
	, replace = require( 'gulp-replace' )
	, wrapper = require( 'gulp-wrapper' )
	, wrap = require( 'gulp-wrap' )
	, uglify = require( 'gulp-uglify' )
	, gutil = require( 'gulp-util' )
	, colors = require( 'colors' )
	, getLangTask = function ( lang ) {
		return function () {
			var
				gs = gulp.src( [
					process.env.PROJECT_DIR + '/common/SD_tools.js',
					process.env.PROJECT_DIR + '/languages/' + lang + '/tokens.js',
					process.env.PROJECT_DIR + '/languages/' + lang + '/metatokens.js',
					process.env.PROJECT_DIR + '/languages/' + lang + '/combinations.js',
					process.env.PROJECT_DIR + '/common/SmartDate.js'
				] )
					.pipe( replace( /['"]+use strict['"]+;/g, '' ) )
					.pipe( replace( /^\s*DEBUG.+$/gm, '' ) )
				;
			if ( process.env.STAGE !== 'dev' ) {
				gs = gs
					.pipe( uglify( { mangle : false } ) )
					.pipe( wrap('\n/*\n * @file <%= file.relative %>\n*/\n<%= contents %>\n' ) );
			}
			return gs
				.pipe( concat( lang + '.js' ) )
				.pipe( wrap('"use strict";\n\n/**\n * SmartDate v' + pjson.version + '.' + process.env.BUILD + '\n * Language: ' + lang + '\n */\n\n<%= contents %>\n' ) )
				.pipe( dest( process.env.TMP_DIR ) )
				;
		}
	}
	, getLangTestTask = function ( lang ) {
		return function () {
			return gulp.src( [
					process.env.PROJECT_DIR + '/common/SD_tools.js',
					process.env.PROJECT_DIR + '/languages/' + lang + '/tokens.js',
					process.env.PROJECT_DIR + '/languages/' + lang + '/metatokens.js',
					process.env.PROJECT_DIR + '/languages/' + lang + '/combinations.js',
					process.env.PROJECT_DIR + '/common/SmartDate.js',
					process.env.PROJECT_DIR + '/test/tc-' + lang + '.js',
					process.env.PROJECT_DIR + '/test/assets.js'
				] )
					.pipe( replace( /['"]+use strict['"]+;/g, '' ) )
					.pipe( replace( /^\s*DEBUG.+$/gm, '' ) )
					.pipe( concat( 'test-' + lang + '.js' ) )
					.pipe( wrap('"use strict";\n\n( function (){\n<%= contents %>\n} ).call( this );\n' ) )
					.pipe( dest( process.env.BUILD_DIR ) )
				;
		}
	}
	, getCompleteTask = function ( platform, lang ) {
		var ext = /(?:\.([^.]+))?$/.exec( platform )[ 1 ];
		return function () {
			var files = {};
			return gulp.src( [ process.env.PROJECT_DIR + '/adapters/' + platform ] )
				.pipe( replace( /\/%\s*([^\s%]+)\s*%\//, function ( original, captured ) {
					if ( captured === 'smartDate' ) {
						return files[ lang ] || ( files[ lang ] = fs.readFileSync( process.env.TMP_DIR + '/' + lang + '.js' ) );
					} else {
						return original;
					}
				} ) )
				.pipe( concat( platform.replace( new RegExp( '\\.' + ext + '$', 'gi' ), '' ) + '-' + lang + '.' + ext ) )
				.pipe( dest( process.env.BUILD_DIR ) )
				;
		}
	}
	, tests = []
	, tasks = []
	, languages, platforms, l, p, ext
	;

[ "PROJECT_DIR", "BUILD_DIR", "TMP_DIR" ].forEach( function ( env_name ) {
	if ( !process.env[ env_name ] ) throw new Error( 'Empty environment variable ' + env_name );
	process.env[ env_name ] = path.resolve( process.env[ env_name ] );
	gutil.log( env_name + '=' + process.env[ env_name ] );
} );

[ "BUILD", "STAGE" ].forEach( function ( env_name ) {
	if ( !process.env[ env_name ] ) throw new Error( 'Empty environment variable ' + env_name );
	gutil.log( env_name + '=' + process.env[ env_name ] );
} );

languages = fs.readdirSync( process.env.PROJECT_DIR + '/languages' ).filter( function ( p ) {
	return fs.lstatSync( process.env.PROJECT_DIR + '/languages/' + p ).isDirectory();
} );

l = languages.length;
while ( l-- ) {
	gulp.task( languages[ l ], getLangTask( languages[ l ] ) );
	gulp.task( tests[ tests.length ] = 'test-' + languages[ l ], getLangTestTask( languages[ l ] ) );

}
gulp.task( 'languages', languages );
gulp.task( 'tests', tests );

platforms = fs.readdirSync( process.env.PROJECT_DIR + '/adapters' ).filter( function ( p ) {
	return fs.lstatSync( process.env.PROJECT_DIR + '/adapters/' + p ).isFile();
} );

p = platforms.length;
while ( p-- ) {
	l = languages.length;
	while ( l-- ) gulp.task( tasks[ tasks.length ] = platforms[ p ] + '.' + languages[ l ], [ 'languages' ], getCompleteTask( platforms[ p ], languages[ l ] ) );
}


gulp.task( 'test', [ 'tests' ] );
gulp.task( 'default', tasks );
