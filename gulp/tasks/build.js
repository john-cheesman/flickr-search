var gulp      = require('gulp');
var sequence  = require('run-sequence');

gulp.task('build', function() {
    sequence([
        'clean',
        'browserify',
        'sass'
    ]);
});
