var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('dist:docker', ['copy:docker'], function () {
  return gulp
    .src('')
    .pipe(shell([
      'docker-compose -f docker-compose.yml -p my-ghost-theme build'
    ], {
      cwd: 'docker'
    }));
});
