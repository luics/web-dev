// @see https://dev.w3.org/html5/webdatabase/
(function() {
  var model = window.model;
  var db;
  var KEYS = ['items', 'msg', 'filter'];

  Object.assign(model, {
    init: function(callback) {
      db = window.openDatabase(model.TOKEN, '1.0', model.TOKEN, 5 * 1024 * 1024, function(db) {
        console.log('db created');
      });
      db.transaction(function(transaction) {
        transaction.executeSql('CREATE TABLE IF NOT EXISTS CONF (k unique, v)', [], function(t, r) {
          console.log('table created', r);
          KEYS.forEach(function(key, index) {
            transaction.executeSql('INSERT INTO CONF (k, v) VALUES (?, ?)', 
              [key, JSON.stringify(model.data[key])], function(t, r) {
              if (index == KEYS.length - 1) {
                if (callback) callback();
              }
            });
          });
        }, function(t, e){
          KEYS.forEach(function(key, index) {
            transaction.executeSql('SELECT v FROM CONF WHERE k="' + key + '"', [], function(t, r) {
              model.data[key] = JSON.parse(r.rows[0].v);
              if (index == KEYS.length - 1) {
                if (callback) callback();
              }
            });
          });
        });
        
      }, function(t, e) {
        console.error(e);
      });

      //db.transaction(function(transaction) {
      //  
      //}, function(t, e) {
      //  console.error(e);
      //});
    },
    flush: function(callback) {
      db.transaction(function(transaction) {
        KEYS.forEach(function(key, index) {
          // TODO encoding v to avoid failing
          transaction.executeSql('UPDATE CONF SET v=? WHERE k="' + key + '"', [JSON.stringify(model.data[key])],
            function success(t, r) {
              if (index == KEYS.length - 1) {
                if (callback) callback();
              }
            }, function error(t, e) {
              console.error(e);
            }
          );
        });
      }, function(t, e) {
        console.error(e);
      });
    }
  });
})();