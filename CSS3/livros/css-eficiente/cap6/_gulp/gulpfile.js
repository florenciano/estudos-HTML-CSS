var gulp, jshint, changed, imagemin, minifyHTML, minifyCSS, concat, stripDebug, uglify, scripts, styles, images, karma;

// include gulp
gulp = require('gulp');

// include plug-ins

jshint = require('gulp-jshint');

changed = require('gulp-changed');

imagemin = require('gulp-imagemin');

minifyHTML = require('gulp-minify-html');

// concat js & css
concat = require('gulp-concat');

// strio debug & console in js
stripDebug = require('gulp-strip-debug');

// uglify js
uglify = require('gulp-uglify');

minifyCSS = require('gulp-minify-css');

//karma server
karma = require('karma').Server;


// paths

// scripts path
scripts = "./assets/js/*.js";

// styles path
styles = "./assets/stylesheets/*.css";

// images path
images = "./assets/images/**/*";


// tasks

// JS hint task
gulp.task('jshint', function() {

  gulp.src(scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));

});

// minify new images
gulp.task('imagemin', function() {
  
  var imgSrc, imgDst;

  imgSrc = images;
  imgDst = './build/assets/images';
 
  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));

});

// minify new or changed HTML pages
gulp.task('minifyHTML', function() {
  var htmlSrc = './*.html',
      htmlDst = './build';
 
  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});


// JS concat, strip debugging and minify
gulp.task('processJS', function() {

  gulp.src([scripts])
    .pipe(concat('app.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/assets/js/'));

});


// CSS concat and minify
gulp.task('processCSS', function() {

  gulp.src([styles])
    .pipe(concat('style.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/assets/stylesheets/'));

});

// run karma tests
// Run test once and exit
gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});



// default gulp task
gulp.task('default', ['jshint', 'minifyHTML', 'processJS', 'processCSS'], function() {

  // watch for HTML changes
  gulp.watch('./*.html', function() {
    gulp.run('minifyHTML');
  });

  // watch for JS changes
  gulp.watch(scripts, function() {
    gulp.run('jshint', 'processJS');
  });

  // watch for CSS changes
  gulp.watch(styles, function() {
    gulp.run('processCSS');
  });

});






