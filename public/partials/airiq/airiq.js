app.controller('AiriqCtrl',
    ['$scope', '$stateParams', '$timeout', function ($scope, $stateParams, $timeout) {

        $timeout(function() {
            $scope.itemsCompleted = 33;
        }, 500);
        $scope.oneAtATime = false;
    }]
);