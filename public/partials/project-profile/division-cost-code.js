app.controller('ProjectProfileDivisionCostCodeCtrl',
    ['$scope', function($scope) {
        $scope.$parent.setCurrentTab('project-profile.division-cost-code');

        $scope.data = [
            {
                id: _.uniqueId(),
                name: "General Requirements",
                division: 'DIVISION 1',

                children: [
                  {
                    code: "01100",
                    name: "Summary"
                  },
                  {
                    code: "01200",
                    name: "Price and Payment Procedures"
                  },
                  {
                    code: "01300",
                    name: "Administrative Requirements",
                  },
                  {
                    code: "01400",
                    name: "Quality Requirements"
                  },
                  {
                    code: "01500",
                    name: "Temporary Facilities and Controls"
                  },
                  {
                    code: "01600",
                    name: "Product Requirements"
                  },
                  {
                    code: "01700",
                    name: "Execution Requirements"
                  },
                  {
                    code: "01800",
                    name: "Facility Operation"
                  },
                  {
                    code: "01900",
                    name: "Facility Decommissioning"
                  }
                ]
            },

            {
                "name": "Site Construction",
                "division": "DIVISION 2",
                children: []
            },
            {
                "name": "Concrete",
                "division": "DIVISION 3",
                children: []
            },
            {
                "name": "Masonry",
                "division": "DIVISION 4",
                children: []
            },

            {
                "name": "Metals",
                "division": "DIVISION 5",
                children: []
            }
        ];

    }])
