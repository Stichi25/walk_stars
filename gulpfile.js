'use strict';
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('less', function () {
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});
gulp.task('scripts', function() {
    return gulp.src([
        './libs/bootstrap/js/bootstrap.min.js',
        './libs/owl.carousel/owl.carousel.js']
    )
        .pipe(concat('build.js'))
        .pipe(gulp.dest('./build/'));
});