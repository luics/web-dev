(function() {
  var model = window.model;
  var storage = window.sessionStorage;

  Object.assign(model, {
    init: function(callback) {
      var data = storage.getItem(model.TOKEN);
      try {
        if (data) model.data = JSON.parse(data);
      }
      catch (e) {
        console.error(e);
      }

      if (callback) callback();
    },
    flush: function(callback) {
      try {
        storage.setItem(model.TOKEN, JSON.stringify(model.data));
      }
      catch (e) {
        console.error(e);
      }
      if (callback) callback();
    }
  });
})();