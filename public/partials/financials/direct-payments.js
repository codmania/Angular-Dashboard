app.controller('DirectPaymentsCtrl' ,
    ['$scope', '$state', '$stateParams', '$timeout', function ($scope, $state, $stateParams, $timeout) {
        $scope.$parent.setCurrentTab($state.current.name);
        $scope.sowData = [
            {
                value: 60,
                color: "#79c485",
                text: "60%",
                font: '18px AvenirNextLTPro-Regular'
            }
        ];

        /**
         * Data for Doughnut chart
         */
        $scope.mineData = [
            {
                value: 11,
                color: "#79c485"
            },
            {
                value: 8,
                color: "#f8ac59"
            }
        ];

        /**
         * Options for Doughnut chart
         */
        $scope.mineOptions = {
            segmentShowStroke : false,
            percentageInnerCutout : 70, // This is 0 for Pie charts
            animationSteps : 100,
            animationEasing : "easeOutBounce",
            animateRotate : true,
            animateScale : false,
            showTooltips: false

        };

        $scope.applies = {
            listRequiredByMe: [
                {flag: 'red', title: 'Measure and Mark the Wall', type: "Secure Ledger Board", due_date: '7/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc.'},initiator: {name: 'Martin Doors', company: 'ABC Inc.'}, sow: ['Windows'].join(", "), sow_completed: 24, amount: 48972.82, status: ['In Process', 0]},
                {flag: 'red', title: 'Bring New Tools', type: "Wilmington 47", due_date: '7/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc.'},initiator: {name: 'Martin Doors', company: 'ABC Inc.'}, sow: ['Windows'].join(", "), sow_completed: 80, amount: 48972.82, status: ['pending', 0]},
                {flag: 'red', title: 'Have Crew Meet Daily', type: "Wilmington 47", due_date: '7/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc.'},initiator: {name: 'Martin Doors', company: 'ABC Inc.'}, sow: ['Windows'].join(", "), sow_completed: 24, amount: 48972.82, status: ['Draft', 0]},
                {flag: 'yellow', title: 'Measure and Mark the Wall', type: "Wilmington 47", due_date: '7/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc.'},initiator: {name: 'Martin Doors', company: 'ABC Inc.'}, sow: ['Windows'].join(", "), sow_completed: 80, amount: 48972.82, status: ['In Process', 0]},
                {flag: 'yellow', title: 'Windows', type: "Wilmington 47", due_date: '7/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc.'},initiator: {name: 'Martin Doors', company: 'ABC Inc.'}, sow: ['Windows'].join(", "), sow_completed: 24, amount: 48972.82, status: ['In Process', 0]},
                {flag: 'yellow', title: 'Bring Old Tools', type: "Secure Ledger Board", due_date: '7/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc.'},initiator: {name: 'Martin Doors', company: 'ABC Inc.'}, sow: ['Windows'].join(", "), sow_completed: 80, amount: 48972.82, status: ['In Process', 0]},
                {flag: 'green', title: 'Check Blueprints', type: "Wilmington 47", due_date: '7/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc.'},initiator: {name: 'Martin Doors', company: 'ABC Inc.'}, sow: ['Windows'].join(", "), sow_completed: 24, amount: 48972.82, status: ['In Process', 0]}
            ],
            listRequiredByOthers: [
                {flag: 'red', title: 'Skylights', type: "Wilmington 47", due_date: '2/15/2015', responsible: {name: 'Beth Wiseman', company: 'ABC Inc.'},initiator: {name: 'Martin Doors', company: 'ABC Inc.'}, sow: ['Interia Windows'].join(', '), sow_completed: 80, amount: 26000.00, status: ['In Process', 0.2]},
                {flag: 'green', title: 'Inside Lights', type: "Wilmington 47",due_date: '6/30/2015', responsible: {name: 'Beth Wiseman', company: 'ABC Inc.'},initiator: {name: 'Canyon River Electric', company: 'ABC Inc.'}, sow: ['Inside Lighting  '].join(', '), sow_completed: 24, amount: 22500.08, status: ['pending', 0]}
            ],
            listDrafts: [
                {flag: 'draft', title: 'Measure and Mark the Wall', type: "Secure Ledger Board", due_date: '7/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc.'},initiator: {name: 'Martin Doors', company: 'ABC Inc.'}, sow: ['Windows'].join(", "), amount: 48972.82, status: ['Draft', 0]},
                {flag: 'draft', title: 'Bring New Tools', type: "Wilmington 47", due_date: '7/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc.'},initiator: {name: 'Martin Doors', company: 'ABC Inc.'}, sow: ['Windows'].join(", "), amount: 48972.82, status: ['Draft', 0]}
            ],
            listCompleted: [
                {flag: 'green', title: 'Measure and Mark the Wall', type: "Wilmington 47", due_date: '5/12/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc.'},initiator: {name: 'Ornamental Metal', company: 'ABC Inc.'}, sow: ['Stairs'].join(', '), amount: 1800.00, status: ['Completed', 1]},
                {flag: 'green', title: 'Bring New Tools', type: "Wilmington 47", due_date: '2/18/2015', responsible: {name: 'Dan Bonker', company: 'ABC Inc.'},initiator: {name: 'Ace Rental', company: 'ABC Inc.'}, sow: ['Framing'].join(', '), amount: 2128.12, status: ['Completed', 1]}
            ]
        };

    }]);
