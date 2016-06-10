var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('wiredep:scss', function () {
  return gulp
    .src('app/assets/scss/screen.scss')
    .pipe(wiredep({
      ignorePath: /^(\/|\.+(?!\/[^\.]))+\.+/,
      fileTypes: {
        scss: {
          replace: {
            scss: '@import "app{{filePath}}";'
          }
        }
      }
    }))
    .pipe(gulp.dest('app/assets/scss'));
});
