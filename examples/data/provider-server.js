(function() {
  var model = window.model;
  var Ajax = window.Ajax;
  var KEYS = ['items', 'msg', 'filter'];
  var URL = 'http://127.0.0.1:3476';
  var MSG = 'Start server by `node examples/data/server.js` on project root';

  Object.assign(model, {
    init: function(callback) {
      Ajax.get(URL + '/init', function(res) {
        console.log('inited', res);
        try {
          var data = JSON.parse(res);
          KEYS.forEach(function(key) {
            if (key in data) model.data[key] = data[key];
          });
        } catch (e) {
          console.error(e);
        }
        if (callback) callback();
      }, function() {
        console.error(MSG);
      });
    },
    flush: function(callback) {
      Ajax.get(URL + '/flush?' + encodeURIComponent(JSON.stringify(model.data)), function(res) {
        console.log('flushed');
        if (callback) callback();
      }, function() {
        console.error(MSG);
      });
    }
  });
})();