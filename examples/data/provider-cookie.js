(function() {
  var model = window.model;
  var cookie = document.cookie;

  Object.assign(model, {
    init: function(callback) {
      
      if (callback) callback();
    },
    flush: function(callback) {
      
      if (callback) callback();
    }
  });
})();