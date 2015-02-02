var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', function() {
    gulp.watch(config.styles.src, ['styles']);
    gulp.watch([config.browserify.src], ['browserify']);
    gulp.watch([config.vendorScripts.src], ['vendor-scripts']);
});
