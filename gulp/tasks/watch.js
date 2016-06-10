var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('ghost', ['ghost:start'], function (callback) {
  runSequence(
    'symlink',
    'ghost:start', // sass (dependency of ghost:start) does not like it when symlink is run async
    function () {
      gulp.watch('app/**/*.hbs', ['browsersync:reload']);
      gulp.watch('app/assets/scss/**/*.scss', ['sass', 'browsersync:reload']);
      // gulp.watch(config.js, ['jshint']);

      return callback;
    }
  );
});
