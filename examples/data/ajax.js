(function() {
  var GET = 'get';
  var Ajax = window.Ajax = {
    /**
     * Basic Ajax
     * @param url {String}
     * @param [onSuccess] {Function}
     * @param [onFailure] {Function}
     */
    get: function(url, onSuccess, onFailure) {
      Ajax.io({method: GET, url: url, onSuccess: onSuccess, onFailure: onFailure});
    },
    io: function(opt) {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status >= 200 && request.status < 400) {
            var ret = request.responseText;
            var contentType = request.getResponseHeader('content-type');
            if (contentType == 'application/json' || contentType == 'text/json') {
              try {
                ret = JSON.parse(ret);
              } catch (e) {
                console.error(e);
                if (opt.onFailure) opt.onFailure(e);
              }
            }
            if (opt.onSuccess) opt.onSuccess(ret);
          }
          else {
            if (opt.onFailure) opt.onFailure();
          }
        }
      };

      request.open(opt.method, opt.url, true);
      request.send(null);
    }
  }
})();