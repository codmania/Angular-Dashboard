app.factory("Futuredate", [
  "Restangular", function(Restangular) {

    var baseFutureUrl = "/airdata/trends";
    var baseHistoryUrl = "/airdata/history";
    var Futuredate = {};

    Futuredate.getData = function(token, searchString) {
        return Restangular.all(baseFutureUrl).all(searchString).one('0').customGET(undefined, undefined, {'X-MSOTA-SESSION': token});
    };

    Futuredate.getHistory = function(token, searchString) {
        return Restangular.all(baseHistoryUrl).all(searchString).customGET(undefined, undefined, {'X-MSOTA-SESSION': token});
    };

    return Futuredate;

  }
]);