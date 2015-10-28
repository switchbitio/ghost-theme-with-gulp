var gulp = require('gulp');

gulp.task('ghost', ['ghost:start'], function (callback) {
  gulp.watch('app/**/*.hbs', ['browsersync:reload']);

  callback();
});
