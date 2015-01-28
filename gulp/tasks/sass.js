var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss    = require('gulp-minify-css');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../config').sass;

gulp.task('sass', function() {
    return sass(config.src, config.settings)
        .pipe(autoprefixer(config.support))
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest))
});
