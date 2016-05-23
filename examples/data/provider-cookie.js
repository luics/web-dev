(function() {
  var storage = window.Cookie;

  var model = window.model;
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
        storage.setItem(model.TOKEN, JSON.stringify(model.data), {maxAge: 31536e3}); // 1 year
      }
      catch (e) {
        console.error(e);
      }
      if (callback) callback();
    }
  });
})();