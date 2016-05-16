app.directive('projectFilter', function (projects) {
    return {
        restrict: 'E',
        scope: {
            currentItem: '=',
            ngSelect: '&'
        },
        templateUrl: 'partials/common/directives/project-filter/project-filter.html',
        link: function (scope, element, attrs) {
            scope.projects = projects;

            if (_.isUndefined(scope.currentItem))
                scope.currentItem = projects[3];
        }
    }
});