app.controller('ReportingMainCtrl',
    ['$scope', function($scope) {
        $scope.conditions = [{}];

        $scope.addFilter = function() {
            $scope.conditions.push({});
        };

    }]);
