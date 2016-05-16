app.factory("Futuredate", [
  "Restangular", function(Restangular) {

    var baseEndPoint = "/airdata/trends";
    var Futuredate = {};

    Futuredate.getData = function(token, searchString) {
        return Restangular.all(baseEndPoint).all(searchString).one('0').customGET(undefined, undefined, {'X-MSOTA-SESSION': token});
    };

    return Futuredate;

  }
]);