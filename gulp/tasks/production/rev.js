var gulp = require('gulp');
var rev = require('gulp-rev');
var collect = require('gulp-rev-collector');

gulp.task('rev', function () {
  return gulp
    .src(['dist/assets/css/**/*.css',
      'dist/assets/js/**/*.js',
      'dist/assets/images/**/*.{jpg,jpeg,png,gif,svg}'],
      {base: 'dist'})
    .pipe(gulp.dest('dist'))
    .pipe(rev())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest({path: 'manifest.json'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('rev:collect', function () {
  return gulp
    .src(['dist/manifest.json', 'dist/**/*.{hbs,css,js}'])
    .pipe(collect())
    .pipe(gulp.dest('dist'));
});
