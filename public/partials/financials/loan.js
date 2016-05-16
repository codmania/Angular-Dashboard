app.controller('LoanCtrl' ,
    ['$scope', '$state', '$stateParams', '$timeout', '$uibModal', function ($scope, $state, $stateParams, $timeout, $uibModal) {
        $scope.$parent.setCurrentTab($state.current.name);

        $scope.sows = [
            {
                id: 1,
                name: "Wood Finish"
            }, {
                id: 2,
                name: "Duis mollis, est non commodo"
            }
        ];

        $scope.data = [
            {
                desc: 'Plans',
                sow: '-',
                loan_amount: 1000,
                drawn_date: 2272.85,
                pending_draws: '',
                amount_remaining: 1272.85,
                percent_drawn: -127.3,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Engineering',
                sow: '-',
                loan_amount: 800,
                drawn_date: 857.50,
                pending_draws: '',
                amount_remaining: 57.5,
                percent_drawn: -7.2,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Project Manager',
                sow: '-',
                loan_amount: 30000,
                drawn_date: 15000,
                pending_draws: 2500,
                amount_remaining: 15000,
                percent_drawn: 50.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Superintendent',
                sow: '-',
                loan_amount: 60000,
                drawn_date: 30000,
                pending_draws: 5000,
                amount_remaining: 30000,
                percent_drawn: 50.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'General Labor',
                sow: '-',
                loan_amount: 10000,
                drawn_date: 4000,
                pending_draws: 1000,
                amount_remaining: 6000,
                percent_drawn: 60.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Waste Disposal',
                sow: '-',
                loan_amount: 8500,
                drawn_date: 459.91,
                pending_draws: 615.90,
                amount_remaining: 8040.09,
                percent_drawn: 94.6,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Temp Saintary Facility',
                sow: '-',
                loan_amount: 2000,
                drawn_date: 1135.82,
                pending_draws: 603.65,
                amount_remaining: 864.18,
                percent_drawn: 43.2,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'TempOffice',
                sow: '-',
                loan_amount: 2000,
                drawn_date: 1635.55,
                pending_draws: 516,
                amount_remaining: 364.45,
                percent_drawn: 18.2,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Temp Heat',
                sow: '-',
                loan_amount: 3500,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 3500,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Temp Water',
                sow: '-',
                loan_amount: 1000,
                drawn_date: '',
                pending_draws: 213.64,
                amount_remaining: 1000,
                percent_drawn: 100,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Temp Power',
                sow: '-',
                loan_amount: 2000,
                drawn_date: 64.92,
                pending_draws: '',
                amount_remaining: 1935.08,
                percent_drawn: 96.8,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Rental Equipment',
                sow: '-',
                loan_amount: 8500,
                drawn_date: 8510.23,
                pending_draws: '',
                amount_remaining: 10.23,
                percent_drawn: -0.1,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Survey / Layout',
                sow: '-',
                loan_amount: 2500,
                drawn_date: 1320.49,
                pending_draws: '',
                amount_remaining: 1179.51,
                percent_drawn: 47.2,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Testing',
                sow: '-',
                loan_amount: 1000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 1000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Small Tools',
                sow: '-',
                loan_amount: 1500,
                drawn_date: '',
                pending_draws: 853.75,
                amount_remaining: 1500,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Snow Removal',
                sow: '-',
                loan_amount: 5000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 5000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Final Construction Clean Up',
                sow: '-',
                loan_amount: 10000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 10000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Crane',
                sow: '-',
                loan_amount: 6500,
                drawn_date: 1492.48,
                pending_draws: 1134.35,
                amount_remaining: 5007.52,
                percent_drawn: 77.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Material Handling',
                sow: '-',
                loan_amount: 8000,
                drawn_date: 178.16,
                pending_draws: 99.58,
                amount_remaining: 7821.84,
                percent_drawn: 97.8,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Project Materials',
                sow: '-',
                loan_amount: 10000,
                drawn_date: 278.25,
                pending_draws: 412.62,
                amount_remaining: 9721.75,
                percent_drawn: 97.2,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'LOD Fence',
                sow: '-',
                loan_amount: 1500,
                drawn_date: 1500,
                pending_draws: '',
                amount_remaining: '',
                percent_drawn: 0.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Excavation',
                sow: '-',
                loan_amount: 55000,
                drawn_date: 55000,
                pending_draws: '',
                amount_remaining: '',
                percent_drawn: 0.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Engineered Fill',
                sow: '-',
                loan_amount: 5000,
                drawn_date: 13137,
                pending_draws: '',
                amount_remaining: 8137,
                percent_drawn: -162.7,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Import',
                sow: '-',
                loan_amount: 5000,
                drawn_date: 3197.44,
                pending_draws: '',
                amount_remaining: 1802.56,
                percent_drawn: 36.1,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Export',
                sow: '-',
                loan_amount: 10000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 10000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Rock Walls',
                sow: '-',
                loan_amount: 25000,
                drawn_date: 4462.5,
                pending_draws: '',
                amount_remaining: 20537.5,
                percent_drawn: 82.2,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Sewer Vault / Pump',
                sow: '-',
                loan_amount: 17500,
                drawn_date: 17500,
                pending_draws: '',
                amount_remaining: '',
                percent_drawn: 0.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Landscaping',
                sow: '-',
                loan_amount: 30000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 30000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Footings & Foundation',
                sow: '-',
                loan_amount: 150000,
                drawn_date: 144165,
                pending_draws: '',
                amount_remaining: 5835,
                percent_drawn: 3.9,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Concrete Flatwork',
                sow: '-',
                loan_amount: 42500,
                drawn_date: 13642.50,
                pending_draws: '',
                amount_remaining: 28857.50,
                percent_drawn: 67.9,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Concrete Pumping',
                sow: '-',
                loan_amount: 5000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 5000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Exterior Stone Veneer',
                sow: '-',
                loan_amount: 165000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 165000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Structural Steel',
                sow: '-',
                loan_amount: 55000,
                drawn_date: 52328.99,
                pending_draws: 2139.01,
                amount_remaining: 2671.01,
                percent_drawn: 4.9,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Decorative Metals',
                sow: '-',
                loan_amount: 5000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 5000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Steel Stairs',
                sow: '-',
                loan_amount: 24000,
                drawn_date: 1800,
                pending_draws: '',
                amount_remaining: 222000,
                percent_drawn: 92.5,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Rough Framing Labor',
                sow: '-',
                loan_amount: 96000,
                drawn_date: 94165,
                pending_draws: '',
                amount_remaining: 1835,
                percent_drawn: 1.9,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Rough Framing Materials',
                sow: '-',
                loan_amount: 125000,
                drawn_date: 125000,
                pending_draws: '',
                amount_remaining: '',
                percent_drawn: 0.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Deck Surface Material',
                sow: '-',
                loan_amount: 20000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 20000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Finish Carpentry',
                sow: '-',
                loan_amount: 35000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 35000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Finish Material',
                sow: '-',
                loan_amount: 15000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 15000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Cabinetry',
                sow: '-',
                loan_amount: 85000,
                drawn_date: '',
                pending_draws: 44543.5,
                amount_remaining: 85000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Timber Material',
                sow: '-',
                loan_amount: 12000,
                drawn_date: 1728.46,
                pending_draws: '',
                amount_remaining: 10271.54,
                percent_drawn: 85.6,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Timber Labor',
                sow: '-',
                loan_amount: 5000,
                drawn_date: 400,
                pending_draws: '',
                amount_remaining: 4600,
                percent_drawn: 92.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Wood Valances for Blinds',
                sow: '-',
                loan_amount: 9500,
                drawn_date: '',
                pending_draws: 9500,
                amount_remaining: 1000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Damp-proofing',
                sow: '-',
                loan_amount: 15000,
                drawn_date: 8040,
                pending_draws: '',
                amount_remaining: 6960,
                percent_drawn: 46.4,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Insulation',
                sow: '-',
                loan_amount: 22000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 22000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Siding Labor',
                sow: '-',
                loan_amount: 30000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 30000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Siding Material',
                sow: '-',
                loan_amount: 40000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 40000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Roofing',
                sow: '-',
                loan_amount: 67500,
                drawn_date: '',
                pending_draws: 35000,
                amount_remaining: 67500,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Gutters & Downspouts',
                sow: '-',
                loan_amount: 3000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 3000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Heat Tape',
                sow: '-',
                loan_amount: 2500,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 2500,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Chimney Caps',
                sow: '-',
                loan_amount: 7000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 7000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Entry Door',
                sow: '-',
                loan_amount: 13600,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 13600,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Entry Door Hardware',
                sow: '-',
                loan_amount: 3000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 3000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Exterior Door Hardware',
                sow: '-',
                loan_amount: 3000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 3000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Exterior Door Hardware Install',
                sow: '-',
                loan_amount: 500,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 500,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Overhead Doors',
                sow: '-',
                loan_amount: 13000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 13000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'windows & Exterior Doors',
                sow: '-',
                loan_amount: 65000,
                drawn_date: 26000,
                pending_draws: 35985,
                amount_remaining: 39000,
                percent_drawn: 60.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Window & Door Installation',
                sow: '-',
                loan_amount: 10000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 10000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Interior Doors',
                sow: '-',
                loan_amount: 20000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 20000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Mirrors',
                sow: '-',
                loan_amount: 4000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 4000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Shower Enclosures',
                sow: '-',
                loan_amount: 22500,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 22500,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Drywall',
                sow: '-',
                loan_amount: 55000,
                drawn_date: 13000,
                pending_draws: '',
                amount_remaining: 42000,
                percent_drawn: 76.4,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Tile / Stone',
                sow: '-',
                loan_amount: 14000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 14000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Tile / Stone Labor',
                sow: '-',
                loan_amount: 17500,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 17500,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Tile / Stone Flooring',
                sow: '-',
                loan_amount: 25000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 25000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Tile / Stone Flooring Labor',
                sow: '-',
                loan_amount: 30000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 30000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Wood Flooring',
                sow: '-',
                loan_amount: 30000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 30000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Wood Flooring Labor',
                sow: '-',
                loan_amount: 15000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 15000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Wood Stairs',
                sow: '-',
                loan_amount: 40000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 40000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Carpet',
                sow: '-',
                loan_amount: 25000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 25000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Epoxy Floors',
                sow: '-',
                loan_amount: 5500,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 5500,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Interior Paint & Stain',
                sow: '-',
                loan_amount: 75000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 75000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Exterior Paint & Stain',
                sow: '-',
                loan_amount: 5000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 5000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Interior Railings',
                sow: '-',
                loan_amount: 18000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 18000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Exterior Railings',
                sow: '-',
                loan_amount: 17000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 17000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Counter Tops',
                sow: '-',
                loan_amount: 50000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 50000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Closet Organizers',
                sow: '-',
                loan_amount: 20000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 20000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Toilet & Bath Hardware',
                sow: '-',
                loan_amount: 2500,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 2500,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Gas Fireplace',
                sow: '-',
                loan_amount: 28000,
                drawn_date: 22512.60,
                pending_draws: '',
                amount_remaining: 5487.4,
                percent_drawn: 19.6,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Appliances',
                sow: '-',
                loan_amount: 45000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 45000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Appliances Installation',
                sow: '-',
                loan_amount: 3500,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 3500,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Central Vecuum',
                sow: '-',
                loan_amount: 8000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 8000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Live Roof',
                sow: '-',
                loan_amount: 20000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 20000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Plumbing Labor',
                sow: '-',
                loan_amount: 55000,
                drawn_date: 8000,
                pending_draws: 8000,
                amount_remaining: 47000,
                percent_drawn: 85.5,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Plumbing Fixtures',
                sow: '-',
                loan_amount: 35000,
                drawn_date: '',
                pending_draws: 6586.73,
                amount_remaining: 35000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Exterior Paint & Stain',
                sow: '-',
                loan_amount: 5000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 5000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'RO Water System',
                sow: '-',
                loan_amount: 4000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 4000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Roof Drains',
                sow: '-',
                loan_amount: 12000,
                drawn_date: 10000,
                pending_draws: '',
                amount_remaining: 2000,
                percent_drawn: 16.7,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Fire Protection',
                sow: '-',
                loan_amount: 25000,
                drawn_date: 13336.58,
                pending_draws: 4445.53,
                amount_remaining: 11663.42,
                percent_drawn: 46.7,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Radiant Heating',
                sow: '-',
                loan_amount: 45000,
                drawn_date: '',
                pending_draws: 4000,
                amount_remaining: 45000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'HAVC',
                sow: '-',
                loan_amount: 85000,
                drawn_date: 51030,
                pending_draws: 14580,
                amount_remaining: 33970,
                percent_drawn: 40.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Electrical',
                sow: '-',
                loan_amount: 70000,
                drawn_date: 500,
                pending_draws: '',
                amount_remaining: 69500,
                percent_drawn: 99.3,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Light Fixture Package',
                sow: '-',
                loan_amount: 25000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 25000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Security System',
                sow: '-',
                loan_amount: 25000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 25000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Audio Video',
                sow: '-',
                loan_amount: 70000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 70000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Insurance',
                sow: '-',
                loan_amount: 6500,
                drawn_date: 4147.07,
                pending_draws: 1197,
                amount_remaining: 2352.93,
                percent_drawn: 36.2,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Exterior Paint & Stain',
                sow: '-',
                loan_amount: 5000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 5000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Consulting Fee',
                sow: '-',
                loan_amount: 15000,
                drawn_date: 14875,
                pending_draws: '',
                amount_remaining: 125,
                percent_drawn: 0.8,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Permits & Fees',
                sow: '-',
                loan_amount: '',
                drawn_date: 29166.38,
                pending_draws: '',
                amount_remaining: 29166.38,
                percent_drawn: 0.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Architecture',
                sow: '-',
                loan_amount: '',
                drawn_date: 34145.93,
                pending_draws: '',
                amount_remaining: 34145.93,
                percent_drawn: 0.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Builder Fee',
                sow: '-',
                loan_amount: 182413,
                drawn_date: 52674.04,
                pending_draws: 11858.58,
                amount_remaining: 129738.96,
                percent_drawn: 71.1,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Additional Soft Costs',
                sow: '-',
                loan_amount: '',
                drawn_date: 20000,
                pending_draws: '',
                amount_remaining: 20000,
                percent_drawn: 0.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Contingency',
                sow: '-',
                loan_amount: 97196,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 97196,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }
        ];

        $scope.isEdit = false;

        $scope.save = function() {
            $scope.isEdit = false;
        };

        $scope.addLine = function() {
            if ($scope.isEdit) {
                $scope.data.push({
                    desc: '',
                    loan_amount: 0,
                    drawn_date: 0,
                    pending_draws: 0,
                    amount_remaining: 0,
                    percent_drawn: 0,
                    percent_complete: 0,
                    percent_variance: 0
                });
            }
        }

        $scope.showDeletionModal = function() {
            $scope.modalInstance = $uibModal.open({
                windowClass: "loan-deletion-modal",
                templateUrl: "partials/financials/deletion-confirmation-modal.html",
                scope: $scope,
                backdrop: 'static'
            });
        };

        $scope.cancel = function() {
            $scope.modalInstance.dismiss('cancel');
            $scope.isConfirmed = false;
        };

        $scope.delete = function() {
            if (!$scope.isConfirmed) {
                $scope.isConfirmed = true;
            } else {
                $scope.modalInstance.dismiss('cancel');
                $scope.isConfirmed = false;
            }
        };

    }]);
