var dest = './web/assets';
var src  = './src';

module.exports = {
    clean: {
      dest: [dest]
    },
    styles: {
        src: src + '/scss/**/*.scss',
        dest: dest + '/css',
        settings: {
            sourcemap: true
        },
        support: {
            browsers: ['last 2 versions']
        }
    },
    vendorScripts: {
        src: [src + '/js/vendor/*.js'],
        dest: dest + '/js',
        outputName: 'vendor.js'
    },
    browserify: {
        src: src + '/js/**/*.js',
        debug: true,
        bundleConfigs: [{
            entries: src + '/js/app.js',
            dest: dest + '/js',
            outputName: 'scripts.js'
        }]
    }
};
