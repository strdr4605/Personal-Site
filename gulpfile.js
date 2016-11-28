'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');


gulp.task('imagemin', () =>
    gulp.src('./assets/src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./assets/dist/images'))
);

gulp.task('sass', function () {
  return gulp.src('./assets/src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./assets/dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['imagemin', 'sass', 'sass:watch']);

// autoprefixer gulp, imagemin gulp
