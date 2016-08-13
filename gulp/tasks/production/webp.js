var gulp = require('gulp');
var webp = require('gulp-webp');
var rename = require('gulp-rename');
var size = require('gulp-size');

gulp.task('webp', function () {
  return gulp
    .src('dist/assets/images/**/*.{jpg,jpeg,png}')
    .pipe(size({
      showFiles: true
    }))
    .pipe(rename(function(filepath) {
      filepath.extname = filepath.extname + filepath.extname;
    }))
    .pipe(webp())
    .pipe(gulp.dest('dist/assets/images'))
    .pipe(size({
      showFiles: true
    }));
});
