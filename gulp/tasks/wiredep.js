var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('wiredep', function () {
  return gulp
    .src('app/default.hbs', {base: './'})
    .pipe(wiredep({
      fileTypes: {
        html: {
          replace: {
            css: '<link rel="stylesheet" href="/{{filePath}}" />',
            js: '<script src="/{{filePath}}"></script>'
          }
        }
      }
    }))
    .pipe(gulp.dest('./'));
});
