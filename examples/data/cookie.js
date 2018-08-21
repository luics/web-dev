(function() {
  /**
   * Cookie Util
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#Syntax
   */
  var Cookie = window.Cookie = {
    /**
     * @param key {String}
     * @returns {String}
     *
     */
    getItem: function(key) {
      var pattern = '(?:(?:^|.*;\\s*)' + key + '\\s*\\=\\s*([^;]*).*$)|^.*$';
      return decodeURIComponent(document.cookie.replace(new RegExp(pattern), "$1"));
    },
    /**
     * @param key {String}
     */
    removeItem: function(key) {
      Cookie.setItem(key, '', {maxAge: -1});
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
})();