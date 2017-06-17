(function() {
    var model = window.model;
    var JSONP = window.JSONP;
    var KEYS = ['items', 'msg', 'filter'];
    var URL = 'http://127.0.0.1:3476';
    var MSG = 'Start server by `node examples/data/server.js` on project root';

    Object.assign(model, {
        init: function(callback) {
            JSONP(URL + '/init', {
                onSuccess: function(data) {
                    console.log('inited', data);
                    KEYS.forEach(function(key) {
                        if (key in data) model.data[key] = data[key];
                    });
                    if (callback) callback();
                },
                onFailure: function() {
                    console.error(MSG);
                }
            });
        },
        flush: function(callback) {
            JSONP(URL + '/flush?data=' + encodeURIComponent(JSON.stringify(model.data)), {
                onSuccess: function(data) {
                    console.log('flushed');
                    if (callback) callback();
                },
                onFailure: function() {
                    console.error(MSG);
                }
            });
        }
    });
})();