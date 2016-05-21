// @see https://dev.w3.org/html5/webdatabase/
(function() {
  var model = window.model;
  var db;
  var KEYS = ['items', 'msg', 'filter'];

  Object.assign(model, {
    init: function(callback) {
      db = window.openDatabase(model.TOKEN, '0.0.1', model.TOKEN, 2 * 1024 * 1024);
      db.transaction(
        function(transaction) {
          transaction.executeSql('CREATE TABLE IF NOT EXISTS CONF (k unique, v)');
          KEYS.forEach(function(key) {
            transaction.executeSql('INSERT INTO CONF (k, v) VALUES (?, ?)', [key, JSON.stringify(model.data[key])]);
          });
        },
        null,
        function() {
          if (callback) callback();
        }
      );

      db.transaction(
        function(transaction) {
          KEYS.forEach(function(key) {
            transaction.executeSql('SELECT v FROM CONF WHERE k=?', [key], function(t, r) {
              model.data[key] = JSON.parse(r.rows[0].v);
            });
          });
        },
        null,
        function() {
          if (callback) callback();
        }
      );
    },
    flush: function(callback) {
      db.transaction(
        function(transaction) {
          KEYS.forEach(function(key) {
            transaction.executeSql('UPDATE CONF SET v=? WHERE k=?', [JSON.stringify(model.data[key]), key]);
          });
        },
        null,
        function() {
          if (callback) callback();
        }
      );
    }
  });
})();