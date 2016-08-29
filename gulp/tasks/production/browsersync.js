var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browsersync:production', function (callback) {
  browserSync.init({
    proxy: 'localhost:2368'
  });

  callback();
});

gulp.task('browsersync:reload', function (callback) {
  browserSync.reload();

  callback();
});
