app.controller('ProjectProfileConstructionLoanCtrl',
    ['$scope', function($scope) {
        $scope.$parent.setCurrentTab('project-profile.construction-loan-parameters');

        $scope.data = [
            {
                desc: 'Plans',
                sow: 'Wood Finish',
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
                sow: 'Duis Molis',
                loan_amount: 30000,
                drawn_date: 15000,
                pending_draws: 2500,
                amount_remaining: 15000,
                percent_drawn: 50.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Superintendent',
                sow: 'Wood Finish',
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
    }])
