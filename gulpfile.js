var gulp  = require('gulp'),
    gutil = require('gulp-util'),

    jshint     = require('gulp-jshint'),
    compass    = require('gulp-compass'),
    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),

    input  = {
      'html': 'app/*.html',
      'sass': 'app/**/*.scss',
      'javascript': [
          '!app/lib/**/*',
          'app/**/*.js'
        ]
    },

    output = {
      'html': 'dist',
      'stylesheets': 'dist/css',
      'javascript': 'dist/js'
    };

/* run javascript through jshint */
gulp.task('jshint', function() {
  return gulp.src(input.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});    