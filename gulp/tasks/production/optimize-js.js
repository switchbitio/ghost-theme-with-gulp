var gulp = require('gulp');
var uglify = require('gulp-uglify');
var size = require('gulp-size');

gulp.task('optimize:js', function () {
  return gulp
    .src('dist/assets/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(size({
      showFiles: true
    }));
});
