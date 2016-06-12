(function() {
  var model = window.model;
  Object.assign(model, {
    init: function(callback) {
      // do nothing
      if (callback) callback();
    },
    flush: function(callback) {
      // do nothing
      if (callback) callback();
    }
  });
})();