app.controller('ComProProfileCtrl', function($scope) {
    $scope.$parent.setCurrentTab('company-profile.profile');

    $scope.current_projects = [
        {name: 'Project name goes here', type: 'Fermentum', sqft: 13000, start_date: 'Aug 23, 2015', est_duration: '3 Months, 0 Days. 1 Year', contingency: '10%'},
        {name: 'Project name goes here', type: 'Fermentum', sqft: 1234, start_date: 'Aug 23, 2015', est_duration: '3 Months, 0 Days. 1 Year', contingency: '10%'},
        {name: 'Project name goes here', type: 'Fermentum', sqft: 8000, start_date: 'Aug 23, 2015', est_duration: '3 Months, 0 Days. 1 Year', contingency: '10%'},
        {name: 'Project name goes here', type: 'Fermentum', sqft: 7850, start_date: 'Aug 23, 2015', est_duration: '3 Months, 0 Days. 1 Year', contingency: '10%'}
    ];

    $scope.archived_projects = [
        {name: 'Project name goes here', type: 'Fermentum', comp_date: 'Dec 6, 2014'},
        {name: 'Project name goes here', type: 'Fermentum', comp_date: 'Dec 6, 2014'}
    ];
});
