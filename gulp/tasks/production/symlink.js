var gulp = require('gulp');
var symlink = require('gulp-sym');

gulp.task('symlink:production', function () {
  return gulp
    .src('dist')
    .pipe(symlink('node_modules/ghost/content/themes/my-ghost-theme', { force: true }));
});
