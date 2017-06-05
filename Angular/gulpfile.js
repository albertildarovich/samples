// Generated on 2016-08-22 using generator-angular 0.15.1
'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var $ = require('gulp-load-plugins')();
var openURL = require('open');
var lazypipe = require('lazypipe');
var rimraf = require('rimraf');
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');
var ngHtml2Js = require("gulp-ng-html2js");
var htmlmin = require("gulp-htmlmin");
var concat = require("gulp-concat");
var addsrc = require("gulp-add-src");

var yeoman = {
  app: require('./package.json').appPath || 'app',
  dist: 'build'
};

var paths = {
  scripts: [yeoman.app + '/scripts/**/*.js'],
  styles: [yeoman.app + '/styles/**/*.scss'],
  test: ['test/spec/**/*.js'],
  testRequire: [
    'test/mock/**/*.js',
    'test/spec/**/*.js'
  ],
  karma: 'karma.conf.js',
  views: {
    main: yeoman.app + '/index.html',
    files: [yeoman.app + '/views/**/*.html']
  }
};

////////////////////////
// Reusable pipelines //
////////////////////////

var lintScripts = lazypipe()
  .pipe($.jshint, '.jshintrc')
  .pipe($.jshint.reporter, 'jshint-stylish');

var styles = lazypipe()
  .pipe($.sass, {
    outputStyle: 'expanded',
    precision: 10
  })
  .pipe($.autoprefixer, 'last 1 version')
  .pipe(gulp.dest, '.tmp/styles')
  .pipe(gulp.dest, yeoman.app + '/styles');
;

///////////
// Tasks //
///////////

gulp.task('styles', function () {
  return gulp.src(paths.styles)
    .pipe(styles());
});

gulp.task('lint:scripts', function () {
  return gulp.src(paths.scripts)
    .pipe(lintScripts());
});

gulp.task('clean:tmp', function (cb) {
  rimraf('./.tmp', cb);
});

gulp.task('start:client', ['start:server', 'styles'], function () {
  openURL('http://localhost:9000');
});

gulp.task('start:server', function() {
  $.connect.server({
    root: [yeoman.app, '.tmp'],
    livereload: true,
    // Change this to '0.0.0.0' to access the server from outside.
    port: 9000,
    middleware: function(connect, opt) {
        return [
          connect().use('/bower_components', connect.static('bower_components'))
        ];
    },
    fallback: yeoman.app + '/index.html'
  });
});

gulp.task('start:server:test', function() {
  $.connect.server({
    root: ['test', yeoman.app, '.tmp'],
    livereload: true,
    port: 9001
  });
});

gulp.task('watch', function () {
  $.watch(paths.styles)
    .pipe($.plumber())
    .pipe(styles())
    .pipe($.connect.reload());

  $.watch(paths.views.files)
    .pipe($.plumber())
    .pipe($.connect.reload());

  $.watch(paths.scripts)
    .pipe($.plumber())
    .pipe(lintScripts())
    .pipe($.connect.reload());

  $.watch(paths.test)
    .pipe($.plumber())
    .pipe(lintScripts());

  gulp.watch('bower.json', ['bower']);
});

gulp.task('serve:dev', function (cb) {
  runSequence('clean:tmp',
    ['lint:scripts'],
    ['start:client'],
    'watch', cb);
});

gulp.task('serve', function() {
  $.connect.server({
    root: [yeoman.dist],
    livereload: true,
    port: 9000,
    fallback: yeoman.dist + '/index.html'
  });
  openURL('http://localhost:9000');
});

gulp.task('test', ['start:server:test'], function () {
  var testToFiles = paths.testRequire.concat(paths.scripts, paths.test);
  return gulp.src(testToFiles)
    .pipe($.karma({
      configFile: paths.karma,
      action: 'watch'
    }));
});

// inject bower components
gulp.task('bower', function () {
  return gulp.src(paths.views.main)
    .pipe(wiredep({
      directory: 'bower_components'
    }))
  .pipe(gulp.dest(yeoman.app));
});

///////////
// Build //
///////////

gulp.task('clean:dist', function (cb) {
  rimraf('./build', cb);
});

gulp.task('client:build', ['templates','styles'], function () {
  var jsFilter = $.filter(['**/*.js']);
  var cssFilter = $.filter('**/*.css');
  var indexHtmlExcludeFilter = $.filter(['**/*', '!**/index.html'], { restore: true });
  var indexHtmlIncludeFilter = $.filter(['**/index.html'], { restore: true });

  return  gulp.src(paths.views.main)
    .pipe($.useref({
       transformPath: function(filePath) {
          return filePath.replace('../','')
       },
       searchPath: [yeoman.app, '.tmp' ]})
    )
    .pipe(jsFilter)
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(addsrc.append('.tmp/*.js'))
    .pipe(concat('app.min.js'))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.minifyCss({cache: true}))
    .pipe(cssFilter.restore())
    .pipe(indexHtmlExcludeFilter)
    .pipe($.rev())
    .pipe(indexHtmlExcludeFilter.restore())
    .pipe( $.revReplace())
    .pipe(gulp.dest(yeoman.dist));
});


gulp.task('templates', function () {
  return gulp.src(yeoman.app + '/views/*.html')
    .pipe(htmlmin())
    .pipe(ngHtml2Js({
        moduleName: "views",
        prefix: "views/"
    }))
    .pipe(concat("partials.min.js"))
    .pipe($.uglify())
    .pipe(gulp.dest( '.tmp'));
});

gulp.task('images', function () {
  return gulp.src(yeoman.app + '/images/*')
    .pipe($.cache($.imagemin({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })))
    .pipe(gulp.dest(yeoman.dist + '/images'));
});

gulp.task('copy:extras', function () {
  return gulp.src(yeoman.app + '/*/.*', { dot: true })
    .pipe(gulp.dest(yeoman.dist));
});

gulp.task('copy:fonts', function () {
  return gulp.src(yeoman.app + '/fonts/**/*')
    .pipe(gulp.dest(yeoman.dist + '/fonts'));
});

gulp.task('build', ['clean:dist'], function () {
  runSequence(['images', 'copy:extras', 'copy:fonts', 'client:build']);
});

gulp.task('default', ['build']);
