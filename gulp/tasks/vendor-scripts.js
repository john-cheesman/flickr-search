var gulp   = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var config = require('../config').vendorScripts;

gulp.task('vendor-scripts', function() {
    gulp.src(config.src)
        .pipe(concat(config.outputName))
        .pipe(uglify())
        .pipe(gulp.dest(config.dest));
});
