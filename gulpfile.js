const gulp = require('gulp');
const del = require('del');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const help = require('gulp-task-listing');

gulp.task('help', help);

gulp.task('compile', function () {
  return gulp.src('lib/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('build/lib'));
});

gulp.task('lint', function () {
  return gulp.src([
    'gulpfile.js',
    'test/*.js',
    'lib/**/*.js'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('clean', function () {
  return del(['build']);
});

gulp.task('default', ['lint', 'compile']);
