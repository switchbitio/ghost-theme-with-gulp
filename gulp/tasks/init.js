var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('init', ['symlink'], function () {
  return gulp
    .src('node_modules/ghost/core/server/data/schema/default-settings.json', {base : './'})
    .pipe(replace(/casper/g, 'my-ghost-theme'))
    .pipe(gulp.dest('./'));
});
