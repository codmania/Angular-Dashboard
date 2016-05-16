app.controller('UserProfileCtrl',
    ['$scope', '$uibModal', function($scope, $uibModal) {
        $scope.isTwoStepSecuirty = true;

        $scope.current_projects = [
            {
                name: 'Project Name Goes Here',
                role: 'Subcontractor',
                sow: 'Scope of work name goes help',
                sow_completion: 48,
                availability: 'On Site',
                show: 'No Show',
                next_sched: '24 Jun, 2015'
            }, {
                name: 'Project Name Goes Here',
                role: 'Subcontractor',
                sow: 'Scope of work name goes help',
                sow_completion: 48,
                availability: 'On Site',
                show: 'No Show',
                next_sched: '24 Jun, 2015'
            }, {
                name: 'Project Name Goes Here',
                role: 'Subcontractor',
                sow: 'Scope of work name goes help',
                sow_completion: 48,
                availability: 'On Site',
                show: 'No Show',
                next_sched: '24 Jun, 2015'
            }, {
                name: 'Project Name Goes Here',
                role: 'Subcontractor',
                sow: 'Scope of work name goes help',
                sow_completion: 48,
                availability: 'On Site',
                show: 'No Show',
                next_sched: '24 Jun, 2015'
            }
        ];

        $scope.archived_projects = [
            {
                name: 'Project Name goes here',
                role: 'SubContractor',
                sow: 'Scope of work name goes here'
            }, {
                name: 'Project Name goes here',
                role: 'SubContractor',
                sow: 'Scope of work name goes here'
            }
        ];
    }]);
