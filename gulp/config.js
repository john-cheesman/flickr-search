var dest = './web/assets';
var src  = './src';

module.exports = {
    clean: {
      dest: [dest]
    },
    sass: {
        src: src + '/scss/style.scss',
        dest: dest + '/css',
        settings: {
            sourcemap: true
        },
        support: {
            browsers: ['last 2 versions']
        }
    },
    browserify: {
        debug: true,
        bundleConfigs: [{
            entries: src + '/js/app.js',
            dest: dest + '/js',
            outputName: 'scripts.js'
        }]
    }
};
