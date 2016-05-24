(function() {
  var GET = 'get';
  var POST = 'post';
  var Ajax = window.Ajax = {
    get: function(url, onSuccess, onFailure) {
      Ajax.io({method: GET, url: url, onSuccess: onSuccess, onFailure: onFailure});
    },
    io: function(opt) {
      var httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status >= 200 && httpRequest.status < 400) {
            if (opt.onSuccess) opt.onSuccess(httpRequest.responseText);
          }
          else {
            if (opt.onFailure) opt.onFailure();
          }
        }
      };

      httpRequest.open(opt.method, opt.url, true);
      httpRequest.send(null);
    }
  }
})();