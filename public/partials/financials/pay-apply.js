app.controller('PayApplyCtrl' ,
    ['$scope', '$state', '$stateParams', '$timeout', function ($scope, $state, $stateParams, $timeout) {
        $scope.$parent.setCurrentTab($state.current.name);
        $scope.sowData = [
            {
                value: 60,
                color: "#79c485",
                text: "60%",
                font: '18px AvenirNextLTPro-Regular'
            },
        ];
        
        $scope.applies = {
            listRequiredByMe: [
                {flag: 'red', title: 'Electrical', type: "Wilmington 47", due_date: '7/7/2015', responsible: {name: 'Bruce Wayne', company: 'Synergy Construction'},initiator: {name: 'Mike Riley', company: 'Canyon River Electric'}, sow: ['Electrical'].join(", "), amount: 55982, status: ['pending approval', 0]}
            ],
            listRequiredByOthers: [
                {flag: 'yellow', title: 'Lighting', type: "Wilmington 47", due_date: '7/9/2015', responsible: {name: 'Mary Beroset', company: 'Wasatch Lighting'},initiator: {name: 'Mary Beroset', company: 'Wasatch Lighting'}, sow: ['Interior Lighting'].join(', '), amount: 22500, status: ['further action required', 0.2]},
                {flag: 'yellow', title: 'Lighting', type: "Wilmington 47", due_date: '7/9/2015', responsible: {name: 'Iris Kennedy', company: 'World Bank'},initiator: {name: 'Mary Beroset', company: 'Wasatch Lighting'}, sow: ['Exterior Lighting'].join(', '), amount: 4500, status: ['approved awaiting payment', 0]}
            ],
            listDrafts: [
            ],
            listCompleted: [
                {flag: 'completed', title: 'Temp Sewer', type: "Wilmington 47", due_date: '1/6/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'Rebecca Smith', company: 'Summit Country'}, sow: ['-'].join(', '), amount: 3296, status: ['final', 1]},
                {flag: 'completed', title: 'Site Preparation', type: "Wilmington 47", due_date: '2/1/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'John Rocker', company: 'LTC Excavation'}, sow: ['-'].join(', '), amount: 75.797, status: ['final', 1]},
                {flag: 'completed', title: 'Wood Framing', type: "Wilmington 47", due_date: '2/19/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'Dan Bonker', company: 'Sage Creek Framing'}, sow: ['Framing'].join(', '), amount: 2128, status: ['final', 1]},
                {flag: 'completed', title: 'Foundation', type: "Wilmington 47", due_date: '2/28/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'Dave Guerra', company: 'All Concrete'}, sow: ['Foundation'].join(', '), amount: 117808, status: ['final', 1]},
                {flag: 'completed', title: 'HAVC', type: "Wilmington 47", due_date: '2/28/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'Dave Musgrove', company: 'Premier Heating & Air'}, sow: ['HAVC'].join(', '), amount: 51031, status: ['final', 1]},
                {flag: 'completed', title: 'Concrete Fireplace', type: "Wilmington 47", due_date: '3/5/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'Dave Guerra', company: 'All Concrete'}, sow: ['Fireplace'].join(', '), amount: 40000, status: ['final', 1]},
                {flag: 'completed', title: 'Plumbing', type: "Wilmington 47", due_date: '3/12/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'Christine Spendlove', company: 'Spendlove Plumbing'}, sow: ['Plumbing'].join(', '), amount: 17500, status: ['final', 1]},
                {flag: 'completed', title: 'Wood Framing CO', type: "Wilmington 47", due_date: '3/14/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'Dan Bonker', company: 'Sage Creek Framing'}, sow: ['Framing'].join(', '), amount: 2128, status: ['final', 1]},
                {flag: 'completed', title: 'Steel Framing', type: "Wilmington 47", due_date: '3/18/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'John Steel', company: 'L&L Steel Construction'}, sow: ['Framing'].join(', '), amount: 52329, status: ['final', 1]},
                {flag: 'completed', title: 'Plumbing', type: "Wilmington 47", due_date: '4/15/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'Christine Spendlove', company: 'Spendlove Plumbing'}, sow: ['Plumbing'].join(', '), amount: 8000, status: ['final', 1]},
                {flag: 'completed', title: 'Interior Doors', type: "Wilmington 47", due_date: '5/18/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'Jim White', company: 'All Purpose Windows & Doors'}, sow: ['Interior Doors'].join(', '), amount: 2600, status: ['final', 1]},
                {flag: 'completed', title: 'Custom Metal', type: "Wilmington 47", due_date: '5/18/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'Scott Benson', company: 'Innovation Iron'}, sow: ['Handrails'].join(', '), amount: 1800, status: ['final', 1]},
                {flag: 'completed', title: 'Wood Beaming', type: "Wilmington 47", due_date: '5/21/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'Earnie Rutland', company: 'Rutland Custom Woodworking'}, sow: ['Beams'].join(', '), amount: 2128, status: ['final', 1]},
                {flag: 'completed', title: 'Fireplaces', type: "Wilmington 47", due_date: '6/12/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'Dan Broadben', company: 'Alpine Gas Fireplace'}, sow: ['Fireplace'].join(', '), amount: 22513, status: ['final', 1]},
                {flag: 'completed', title: 'Fire Protection', type: "Wilmington 47", due_date: '6/12/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'James Barker', company: 'Fire Protection Specialties'}, sow: ['Sprinkler System'].join(', '), amount: 13337, status: ['final', 1]},
                {flag: 'completed', title: 'Gypsum Boards', type: "Wilmington 47", due_date: '6/28/2015', responsible: {name: 'NA', company: ''},initiator: {name: 'Joe Evans', company: 'KJ Tile'}, sow: ['Tile'].join(', '), amount: 13000, status: ['final', 1]}

            ]
        }

    }]);