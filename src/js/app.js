var config      = require('./config');
var xhrResponse = require('./utilities/xhr-response');
var Search      = require('./models/search');
var $           = require('./utilities/query-selector');

module.exports = {
    initialise: function() {
        var search = new Search;

        document.addEventListener('update-search', function() {
            search.photos = xhrResponse(search.xhr);

            search.renderPhotos(search.photos, $('.photo-list'));
        });

        $('.js-search-form').addEventListener('submit', function(e) {
            var term = $('.js-search-input').value;

            search.buildSearchRequest(term);

            e.preventDefault();
        });
    }
};

module.exports.initialise();
