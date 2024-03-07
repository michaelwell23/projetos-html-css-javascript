const gulp = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));

function compileSass() {
  return gulp.src('scss/*.scss');
}

gulp.task('sass', compileSass);
