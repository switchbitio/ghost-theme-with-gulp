var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var size = require('gulp-size');

gulp.task('optimize:images', function () {
  return gulp
    .src('app/assets/images/**/*.{jpg,jpeg,png,gif,svg}')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'))
    .pipe(size({
      showFiles: true
    }));
});
