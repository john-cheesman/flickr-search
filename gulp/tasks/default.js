var gulp     = require('gulp');
var sequence = require('run-sequence');

gulp.task('default', function() {
    sequence([
        'build',
        'watch'
    ]);
});
