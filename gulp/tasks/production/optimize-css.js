var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var size = require('gulp-size');

gulp.task('optimize:css', function () {
  return gulp
    .src('dist/assets/css/**/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(size({
      showFiles: true
    }));
});
