var browserify   = require('browserify');
var gulp         = require('gulp');
var source       = require('vinyl-source-stream');
var config       = require('../config').browserify;

gulp.task('browserify', function() {
    var browserifyThis = function(bundleConfig) {

        var bundler = browserify({
            entries: bundleConfig.entries,
            debug: config.debug
        });

        var bundle = function() {
            return bundler
                .bundle()
                .pipe(source(bundleConfig.outputName))
                .pipe(gulp.dest(bundleConfig.dest));
        };

        return bundle();
    };

    config.bundleConfigs.forEach(browserifyThis);
});
