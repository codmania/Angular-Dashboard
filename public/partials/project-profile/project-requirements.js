app.controller('ProjectProfileRequirementsCtrl',
    ['$scope', function($scope) {
        $scope.$parent.setCurrentTab('project-profile.project-requirements');

        $scope.roles = [
            {id: 0, name: 'PSA'},
            {id: 1, name: 'GC'},
            {id: 2, name: 'PM'},
            {id: 3, name: 'OA'}
        ];

        $scope.members = [
            {id: 0, name: 'Bruce Wayne'},
            {id: 1, name: 'Dan Bonker'},
            {id: 2, name: 'John Steel'},
            {id: 3, name: 'Mary Berost'},
            {id: 4, name: 'Dave Gebo'},
            {id: 5, name: 'Dave Musgrove'},
            {id: 6, name: 'Christian Peters'},
        ];

        $scope.isOpened = false;

        $scope.item = {};

        $scope.changeRole = function(selectedVal) {
            $scope.item.role = _.findIndex($scope.roles, function(role) {return role.id == selectedVal;});
        };

        $scope.changeMember = function(selectedVal) {
            $scope.item.member = _.findIndex($scope.members, function(member) {return member.id == selectedVal;});
        };

        $scope.addNewRequirement = function() {
            $scope.isOpened = true;
        };

        $scope.cancel = function() {
            $scope.isOpened = false;
        }

        $scope.saveRequirement = function() {

            var data = angular.copy($scope.item);
            $scope.data.push(data);
            $scope.isOpened = false;
        };


        $scope.data = [
            {
                id: _.uniqueId(),
                member: 0,
                role: 0,
                team_members: false,
                rfis: true,
                inspection_items: false,
                punchlist_items: true,
                schedule_modifications: false,
                procurement_items: false,
                bids: false,
                purchase_orders: false,
                change_orders: false,
                invoices: true,
                payment_applications: false,
                direct_payments: true,
                bank_draws: true,
                documents: false
            }, {
                id: _.uniqueId(),
                member: 1,
                role: 1,
                team_members: true,
                rfis: true,
                inspection_items: false,
                punchlist_items: false,
                schedule_modifications: false,
                procurement_items: false,
                bids: false,
                purchase_orders: false,
                change_orders: true,
                invoices: true,
                payment_applications: true,
                direct_payments: true,
                bank_draws: true,
                documents: true
            }, {
                id: _.uniqueId(),
                member: 2,
                role: 2,
                team_members: false,
                rfis: true,
                inspection_items: false,
                punchlist_items: false,
                schedule_modifications: false,
                procurement_items: true,
                bids: false,
                purchase_orders: true,
                change_orders: false,
                invoices: true,
                payment_applications: false,
                direct_payments: true,
                bank_draws: true,
                documents: false
            }, {
                id: _.uniqueId(),
                member: 3,
                role: 3,
                team_members: false,
                rfis: false,
                inspection_items: false,
                punchlist_items: false,
                schedule_modifications: false,
                procurement_items: false,
                bids: false,
                purchase_orders: false,
                change_orders: false,
                invoices: false,
                payment_applications: false,
                direct_payments: false,
                bank_draws: false,
                documents: false
            }
        ];

        $scope.requirements = [
            {id: _.uniqueId(), name: 'Contractor Contacts', type: 'Document', document: 'Upload', message: 'N/A', frequency: 'N/A', trigger: 'N/A'},
            {id: _.uniqueId(), name: 'Photos', type: 'Notification', document: 'N/A', message: 'Please upload Project Photos', frequency: 'Daily at 5:00 PM', trigger: 'N/A'},
            {id: _.uniqueId(), name: 'Bond Request', type: 'Notification', document: 'N/A', message: 'Please initiate Bond for Enclave 14', frequency: 'One Time', trigger: 'Upon Bid Award'}
        ];
    }])
