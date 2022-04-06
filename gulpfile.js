/* eslint-disable */

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('build-styles', function() {
  return gulp.src('app/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('app/css/'));
});

// Watch task
gulp.task('watch', ['build-styles'],  function() {
  gulp.watch('app/scss/**/*.scss', ['build-styles']);
});

gulp.task('default', ['watch']);
