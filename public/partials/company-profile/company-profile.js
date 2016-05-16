app.controller('CompanyProfileCtrl', function($scope) {
    $scope.currentState = 'company-profile.profile';

    $scope.setCurrentTab = function(state) {
        $scope.currentState = state;
    }

    $scope.isActive = function(state) {
        return _.startsWith($scope.currentState, state);
    }
});
