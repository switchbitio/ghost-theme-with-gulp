var gulp = require('gulp');

gulp.task('copy', function () {
  return gulp
    .src(['app/package.json',
      'app/*.txt',
      'app/browserconfig.xml'])
    .pipe(gulp.dest('dist'));
});

gulp.task('copy:fonts', function () {
  return gulp
    .src('app/assets/fonts/icons/**', {base: 'app/assets/fonts'})
    .pipe(gulp.dest('dist/assets/fonts'));
});
