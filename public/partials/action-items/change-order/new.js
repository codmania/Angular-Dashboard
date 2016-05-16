app.controller('ChangeOrderCtrl', function($scope, members, categories, sows) {
    $scope.date = new Date(2015, 7, 26);

    $scope.users = members;
    $scope.categories = categories;
    $scope.sows = sows;

    $scope.curResponsible = $scope.users[0];

    $scope.changeOptions = function(o) {
    };

});
