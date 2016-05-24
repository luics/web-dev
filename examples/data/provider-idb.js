(function() {
  window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  if (!window.indexedDB) {
    window.alert("IndexedDB is not supported.");
    return;
  }

  var model = window.model;
  var CONF = 'CONF';
  var KEYS = ['items', 'msg', 'filter'];
  var db;

  Object.assign(model, {
    init: function(callback) {
      var request = window.indexedDB.open(model.TOKEN + 4, 1);
      request.onerror = function(event) {
        console.error('Database error: ' + event.target.errorCode);
      };
      request.onsuccess = function(event) {
        db = event.target.result;
        var transaction = db.transaction([CONF]);
        var objectStore = transaction.objectStore(CONF);
        KEYS.forEach(function(key) {
          var request = objectStore.get(key);
          request.onsuccess = function(event) {
            //console.log(request.result);
            model.data[key] = request.result.value;
          };
        });
        transaction.oncomplete = function(event) {
          console.log('oncomplete', model.data);
          if (callback) callback();
        };
      };
      request.onupgradeneeded = function(event) {
        console.log('onupgradeneeded', event);
        var db = event.target.result;

        var objectStore = db.createObjectStore(CONF, {keyPath: 'key'});
        objectStore.createIndex('key', 'key', {unique: true});
        objectStore.transaction.oncomplete = function(event) {
          var transaction = db.transaction([CONF], 'readwrite');
          var objectStore = transaction.objectStore(CONF);
          KEYS.forEach(function(key) {
            objectStore.add({key: key, value: model.data[key]});
          });

          transaction.oncomplete = function(event) {
            if (callback) callback();
          };
        };
      };

    },
    flush: function(callback) {
      var transaction = db.transaction([CONF], 'readwrite');
      var objectStore = transaction.objectStore(CONF);
      KEYS.forEach(function(key) {
        objectStore.put({key: key, value: model.data[key]});
      });

      transaction.oncomplete = function() {
        if (callback) callback();
      };
    }
  });
})();