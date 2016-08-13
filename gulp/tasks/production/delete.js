var gulp = require('gulp');
var del = require('del');

gulp.task('delete', function () {
  del.sync('dist');
});
