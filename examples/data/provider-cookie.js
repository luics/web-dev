(function() {
  /**
   * Cookie
   */
  var Cookie = {
    /**
     * @param key {String}
     * @returns {String}
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#Syntax
     */
    getItem: function(key) {
      var pattern = '(?:(?:^|.*;\\s*)' + key + '\\s*\\=\\s*([^;]*).*$)|^.*$';
      return decodeURIComponent(document.cookie.replace(new RegExp(pattern), "$1"));
    },
    /**
     * @param key {String}
     * @param value {String}
     * @param [opt] {Object}
     * @param [opt.path] {String}
     * @param [opt.domain] {String}
     * @param [opt.maxAge] {Number} unit is second
     * @param [opt.expires] {Date}
     * @param [opt.secure] {Boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#Syntax
     */
    setItem: function(key, value, opt) {
      opt = opt || {};
      var buf = [key, '=', encodeURIComponent(value)];
      if (opt.path) buf.push(';path=' + opt.path);
      if (opt.domain) buf.push(';domain=' + opt.domain);
      if (opt.maxAge) buf.push(';max-age=' + opt.maxAge);
      if (opt.expires) buf.push(';expires=' + opt.expires.toUTCString());
      if (opt.secure) buf.push(';secure');

      var str = buf.join('');
      document.cookie = str;
      return str;
    }
  };
  var storage = Cookie;

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