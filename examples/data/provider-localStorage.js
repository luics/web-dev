(function() {
  var model = window.model;
  Object.assign(model, {
    init: function(callback) {
      var data = localStorage.getItem(model.TOKEN);
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
        localStorage.setItem(model.TOKEN, JSON.stringify(model.data));
      }
      catch (e) {
        console.error(e);
      }
      if (callback) callback();
    }
  });
})();