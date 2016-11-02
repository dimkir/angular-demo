var gulp  = require('gulp'),
    gutil = require('gulp-util'),

    jshint     = require('gulp-jshint'),
    compass    = require('gulp-compass'),
    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),



    input  = {
      'html': 'app/**/*.html',  // this will also copy templates
      'sass': 'app/**/*.scss',
      'lib_css' : 'app/lib-css/**/*.css',


      'lib_javascript'  : 'app/lib/**/*.js',
      'javascript': [
          '!app/lib/**/*',
          'app/**/*.js'
        ]
    },

    output = {
      'html'              : 'dist',

      'lib_css'           : 'dist/css/lib',
      'stylesheets'       : 'dist/css',
      'stylesheets_concat': 'styles-all.css', // will be in stylesheets dir

      'javascript'        : 'dist/js',
      'lib_javascript'    : 'dist/js/lib'
    };

/* run javascript through jshint */
gulp.task('jshint', function() {
  return gulp.src(input.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});    


/* concat javascript files, minify if --type production */
gulp.task('build-js', function() {
  return gulp.src(input.javascript)
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      //only uglify if gulp is ran with '--type production'
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.javascript));
});


/* compile scss files */
gulp.task('build-css', function() {
  return gulp.src(input.sass)
    .pipe(sourcemaps.init())
      .pipe(compass({
        css:      'dist/css',
        lib_css:  'dist/css/lib', 
        sass:     'app'             // watching is going to happen from there...
        }))

    .on('error', function(error) {
      // Would like to catch the error here 
      console.log(error);
      this.emit('end');
    })        
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.stylesheets))
    .pipe(concat(output.stylesheets_concat))
    .pipe(gulp.dest(output.stylesheets)) // it says write from this dir
    
    ;
});



/* copy any html files to dist */
gulp.task('copy-html', function() {
  return gulp.src(input.html)
    .pipe(gulp.dest(output.html));
});

gulp.task('copy-lib-css', function(){
  return gulp.src(input.lib_css)
    .pipe(gulp.dest(output.lib_css));

});


gulp.task('copy-lib-javascript', function(){
  return gulp.src(input.lib_javascript)
        .pipe(gulp.dest(output.lib_javascript));
});


/* Watch these files for changes and run the task on update */
gulp.task('watch', function() {
  gulp.watch(input.javascript, ['jshint', 'build-js']);
  gulp.watch(input.sass, ['build-css']);
  gulp.watch(input.html, ['copy-html']);
  gulp.watch(input.lib_css, ['copy-lib_css']);
  gulp.watch(input.lib_javascript, ['copy-lib-javascript']);
  
});


/* run the watch task when gulp is called without arguments */
gulp.task('default', ['jshint', 'build-js', 'build-css', 'copy-html', 'copy-lib-css', 'copy-lib-javascript', 'watch']);