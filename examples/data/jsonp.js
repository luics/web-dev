(function() {
  var guid = 0;
  /**
   * Basic JSONP
   * @param url {String}
   * @param [onSuccess] {Function}
   * @param [onFailure] {Function}
   */
  window.JSONP = function(url, onSuccess, onFailure) {
    var script = document.createElement('script');
    var id = guid++;
    var jsonp = '__jsonp_' + id;
    window[jsonp] = function(res) {
      if (onSuccess) onSuccess(res);
      // define error & use onFailure
    };
    script.onload = function() {
      document.body.removeChild(script);
      delete window[jsonp];
    };

    url += (url.indexOf('?') > -1 ? '&' : '?') + new Date().getTime() + 'r';
    url += (url.indexOf('?') > -1 ? '&' : '?') + 'jsonp=' + jsonp;
    script.setAttribute('src', url);
    document.body.appendChild(script);
  };
})();