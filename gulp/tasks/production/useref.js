var gulp = require('gulp');
var useref = require('gulp-useref');

gulp.task('useref', function () {
  return gulp
    .src('app/**/*.hbs')
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});
