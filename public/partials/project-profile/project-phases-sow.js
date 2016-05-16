app.controller('ProjectProfilePhaseSowCtrl',
    ['$scope', function($scope) {
        $scope.$parent.setCurrentTab('project-profile.project-phases-sow');

        $scope.phases = [
            {id: _.uniqueId(), name: 'Quam Amet Mattis', number: 13, predecessors: 'Bob Jones, David Hunter', successors: 'Bob Jones, David Hunter', isEditable: false},
            {id: _.uniqueId(), name: 'Quam Amet Mattis', number: 13, predecessors: 'Eric Hoffman', successors: 'Eric Hoffman', isEditable: false},
            {id: _.uniqueId(), name: 'Quam Amet Mattis', number: 13, predecessors: 'Kimball Frank, Sam Kovac, David Hunter', successors: 'Kimball Frank, Sam Kovac, David Hunter', isEditable: false},
            {id: _.uniqueId(), name: 'Quam Amet Mattis', number: 13, predecessors: 'Eric Hoffman', successors: 'Eric Hoffman', isEditable: false}
        ];

        $scope.sows = [
            {id: _.uniqueId(), name: 'Quam Amet Mattis', phase: 'Ullamcorper Fusce', subphase: 'Vestibulum Tellus Bibendum', division: 'Ligula', cost_code: '01110', isEditable: false},
            {id: _.uniqueId(), name: 'Quam Amet Mattis', phase: 'Ullamcorper Fusce', subphase: 'Vestibulum Tellus Bibendum', division: 'Ligula', cost_code: '01110', isEditable: false},
            {id: _.uniqueId(), name: 'Quam Amet Mattis', phase: 'Ullamcorper Fusce', subphase: 'Vestibulum Tellus Bibendum', division: 'Ligula', cost_code: '01110', isEditable: false}
        ];

        $scope.addNewPhase = function() {
            $scope.phases.push({id: _.uniqueId(), name: '', number: 0, predecessors: '', successors: '', isEditable: true});
        };

        $scope.addNewSow = function() {
            $scope.sows.push({id: _.uniqueId(), name: '', phase: '', subphase: '', division: '', cost_code: '', isEditable: true});
        };
    }])
