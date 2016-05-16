app.factory("Authenticate", [
  "Restangular", function(Restangular) {

    var loginUrl = '/security/authenticate';
    var logoutUrl = '/security/logout';
    var propertiesUrl = '/identity/user/%id%/properties';
    var basePath = '';
    var loginPath = basePath + '/login';
    var successRedirect = basePath + '/my/airiq/reports';

    var Authenticate = {};

    Authenticate.getToken = function(loginData) {
        return Restangular.all(loginUrl).customPOST(loginData, undefined, undefined, {'Content-Type': "application/json"});
    };

    Authenticate.getCarriers = function(tokenData) {
        var propUrl = propertiesUrl.replace('%id%', tokenData.userId);
        return Restangular.all(propUrl).customGET(undefined, undefined, {'X-MSOTA-SESSION': tokenData.token});
    };

    return Authenticate;

  }
]);