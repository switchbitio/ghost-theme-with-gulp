var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('ghost', function (callback) {
  runSequence(
    'symlink',
    'ghost:start',
    function () {
      gulp.watch('app/**/*.hbs', ['browsersync:reload']);

      callback();
    }
  );
});
