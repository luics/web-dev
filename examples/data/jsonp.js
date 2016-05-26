(function() {
  var guid = 0;
  /**
   * Basic JSONP
   * @param url {String}
   * @param [opt] {Object}
   * @param [opt.onSuccess] {Function}
   * @param [opt.onFailure] {Function}
   */
  window.JSONP = function(url, opt) {
    opt = opt || {};
    var script = document.createElement('script');
    var id = guid++;
    var jsonp = '__jsonp_' + id;
    window[jsonp] = function(res) {
      if (opt.onSuccess) opt.onSuccess(res);
      // define error & use opt.onFailure
    };
    script.onload = function() {
      document.body.removeChild(script);
      delete window[jsonp];
    };

    url += (url.indexOf('?') > -1 ? '&' : '?') + 'jsonp=' + jsonp;
    script.setAttribute('src', url);
    document.body.appendChild(script);
  };
})();