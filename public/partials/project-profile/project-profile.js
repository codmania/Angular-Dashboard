app.controller('ProjectProfileCtrl',
    ['$scope', function ($scope) {

        $scope.currentState = 'project-profile.construction-loan-parameters';

        $scope.setCurrentTab = function(state) {
            $scope.currentState = state;
        }

        $scope.isActive = function(state) {
            return _.startsWith($scope.currentState, state);
        }

    }]);
