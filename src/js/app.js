var config = require('./config');

module.exports = function() {
    var FlickrSearch = FlickrSearch || {};

    FlickrSearch.config = config;

    console.log(FlickrSearch.config);
};

module.exports();
