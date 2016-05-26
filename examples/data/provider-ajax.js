(function() {
  var model = window.model;
  var Ajax = window.Ajax;
  var KEYS = ['items', 'msg', 'filter'];
  var URL = 'http://127.0.0.1:3476';
  var MSG = 'Start server by `node examples/data/server.js` on project root';

  Object.assign(model, {
    init: function(callback) {
      Ajax.get(URL + '/init', function(data) {
        console.log('inited', data);
        KEYS.forEach(function(key) {
          if (key in data) model.data[key] = data[key];
        });
        if (callback) callback();
      }, function() {
        console.error(MSG);
      });
    },
    flush: function(callback) {
      Ajax.get(URL + '/flush?data=' + encodeURIComponent(JSON.stringify(model.data)), function(res) {
        console.log('flushed');
        if (callback) callback();
      }, function() {
        console.error(MSG);
      });
    }
  });
})();