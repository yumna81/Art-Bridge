
(function () {
  var LOGIN_KEY = 'artbridge_loggedIn';
 
  window.ArtBridgeAuth = {
    isLoggedIn: function () {
      return localStorage.getItem(LOGIN_KEY) === 'true';
    },
    login: function () {
      localStorage.setItem(LOGIN_KEY, 'true');
    },
    logout: function () {
      localStorage.removeItem(LOGIN_KEY);
      window.location.href = 'index.html';
    }
  };
 
  if (!window.ArtBridgeAuth.isLoggedIn()) {
    window.location.href = 'index.html';
  }
});
 