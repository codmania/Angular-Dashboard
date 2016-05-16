app.controller('InspectionsNewCtrl', function ($scope, projects, types, phases, sows) {
    $scope.projects = projects;
    $scope.phases = phases;
    $scope.types = types;
    $scope.sows = sows;
});
