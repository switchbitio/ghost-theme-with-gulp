var gulp = require('gulp');

gulp.task('copy:docker', ['dist'], function () {
  return gulp
    .src('dist/**/*')
    .pipe(gulp.dest('docker/ghost/dist'));
});
