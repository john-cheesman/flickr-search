var config = require('../config');
var updateSearch = new CustomEvent('update-search');

module.exports = function() {
    this.photos = null;

    this.xhr = new XMLHttpRequest();

    this.url = config.baseURL + '?format=json&method=flickr.photos.search&per_page=15&page=1&api_key=' + config.apiKey + '&text=';


    this.buildSearchRequest = function(term) {
        var url = this.url + term;

        this.xhr.open('GET', url);
        this.xhr.send();
    };

    this.xhr.onreadystatechange = function() {
        document.dispatchEvent(updateSearch);
    };

    this.renderPhotos = function(array, el) {
        el.innerHTML = '';

        for (var i = 0; i < array.length; i++) {
            var item =
                '<li>' +
                    '<img src="https://farm' + array[i].farm + '.staticflickr.com/' + array[i].server + '/' + array[i].id + '_' + array[i].secret + '.jpg" />' +
                '</li>';

            el.insertAdjacentHTML('beforeend', item);
        }
    }
};
