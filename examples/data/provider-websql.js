// @see https://dev.w3.org/html5/webdatabase/
(function() {
  var model = window.model;
  var db;

  Object.assign(model, {
    init: function(callback) {
      db = window.openDatabase(model.TOKEN, '1.0', model.TOKEN, 5 * 1024 * 1024, function(db) {
        console.log('db created.');
      });
      db.transaction(function(transaction) {
        transaction.executeSql('CREATE TABLE IF NOT EXISTS CONF (k unique, v)', function() {
          transaction.executeSql('INSERT INTO CONF (k, v) VALUES ("items", "[]")');
          transaction.executeSql('INSERT INTO CONF (k, v) VALUES ("msg", "")');
          transaction.executeSql('INSERT INTO CONF (k, v) VALUES ("filter", "All")');
        });
      }, function(t, e) {
        console.error(e);
      });

      db.transaction(function(transaction) {
        for (var key in model.data) if (!model.data.hasOwnProperty(key)) {
          transaction.executeSql('SELECT v FROM CONF WHERE k="' + key + '"', [], function(t, r) {
            console.log(r);
            model.data[key] = JSON.parse(r.rows[0].v);
          });

          if (callback) callback();
        }
      }, function(t, e) {
        console.error(e);
      });
    },
    flush: function(callback) {
      //db.transaction(function(transaction) {
      //  for (var key in model.data) if (!model.data.hasOwnProperty(key)) {
      //    transaction.executeSql('UPDATE CONF SET v=? WHERE k="' + key + '"', [JSON.stringify(model.data[key])],
      //      function(t, e) {
      //        console.error(e);
      //      }, function(t, e) {
      //        console.error(e);
      //      }
      //    );
      //
      //    if (callback) callback();
      //  }
      //}, function(t, e) {
      //  console.error(e);
      //});
    }
  });
})();