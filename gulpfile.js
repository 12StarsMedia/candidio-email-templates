var gulp = require('gulp'),
    premailer = require('gulp-premailer');

gulp.task('build', function () {
    gulp.src('./templates/*.html')
        .pipe(premailer())
        .pipe(gulp.dest('./dist/'));
})