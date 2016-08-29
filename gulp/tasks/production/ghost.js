var gulp = require('gulp');
var ghost = require('ghost');
var path = require('path');
var runSequence = require('run-sequence');
var env = require('gulp-env');
var shell = require('gulp-shell');

var g;

gulp.task('ghost:production', ['dist'], function () {
  g = ghost({
    config: path.join(__dirname, '../../ghost-prod-config.js')
  });

  env({
    file: 'gulp/prod.env.json'
  });

  g.then(function (ghostServer) {
    ghostServer.start().then(function () {
      runSequence(
        'symlink:production',
        'browsersync:production'
      );
    });
  });
});

gulp.task('ghost:docker', ['dist:docker'], function () {
  return gulp
    .src('')
    .pipe(shell([
      'docker-compose -f docker-compose.yml -p my-ghost-theme up'
    ], {
      cwd: 'docker'
    }));
});
