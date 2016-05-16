app.controller('TeamMembersCtrl',  ['$scope', '$stateParams', '$uibModal', '$sce', function ($scope, $stateParams, $uibModal, $sce) {

    $scope.test = "hello world";

    $scope.showInviteModal = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/team-members/invite-modal.html',
            controller: 'TeamMembersInviteCtrl',
            windowClass: 'tm-modal-main'
        });

        modalInstance.result.then(function (res) {
        }, function () {

        });
    }

    $scope.showProjectModal = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/team-members/project-modal.html',
            controller: 'TeamMembersProjectCtrl',
            windowClass: 'tm-modal-main'
        });

        modalInstance.result.then(function (res) {
        }, function () {

        });
    }

    $scope.members = [
        {
            id: _.uniqueId(),
            avatar: 'dave.jpg',
            name: 'Dave Musgrove',
            company: 'Premier Heating & Air, Inc.',
            phone: '861-569-6688',
            availability: 'On Site',
            next_sched: '18 Sep, 2015',
            project: 'Wilmington 47',
            role: 'Sub Contractor',
            sow: 'Fire Place',
            flag: {
                danger: 1,
                warning: 2
            }
        }, {
            id: _.uniqueId(),
            avatar: 'mike.jpg',
            name: 'Mike Riley',
            company: 'Canyon River Electric',
            phone: '385-285-8616',
            availability: 'On Site',
            next_sched: '18 Sep, 2015',
            project: 'Wilmington 47',
            role: 'Sub Contractor',
            sow: 'Multiple',
            sow_popover: $sce.trustAsHtml("<div>Main Floor Overhead Lighting<br>Rough Electrical<br>Stairway Floor Lighting</div>"),
            flag: {
                warning: 3
            }
        }, {
            id: _.uniqueId(),
            avatar: 'mary.jpg',
            name: 'Mary Beroset',
            company: 'Wasatch Lighting, Inc.',
            phone: '861-891-1611',
            availability: 'On Site',
            show: 'No Show',
            next_sched: '24 Sep, 2015',
            project: 'Wilmington 47',
            role: 'Designer',
            sow: 'Main Floor Overhead Lighting'
        }, {
            id: _.uniqueId(),
            avatar: 'john.jpg',
            name: 'John Steel',
            company: 'L&L Steel Erection',
            alert: true,
            phone: '861 518 1636',
            availability: 'On Site',
            next_sched: '24 Sep, 2015',
            project: 'Wilmington 47',
            role: 'Sub Contractor',
            sow: 'Fire Place',
            flag: {
                danger: 1
            }
        }, {
            id: _.uniqueId(),
            avatar: 'gebo.jpg',
            name: 'Dave Gebo',
            company: 'On Top Roofing',
            alert: false,
            phone: '835 513 6185',
            availability: 'On Site',
            show: 'No Show',
            next_sched: '25 Sep, 2015',
            project: 'Multiple',
            project_popover: $sce.trustAsHtml("<div>Wilmington 47<br>Wilmington 48</div>"),
            role: 'Sub Contractor',
            sow: 'Multiple',
            sow_popover: $sce.trustAsHtml("<div>Roof Dry-In<br>Set Steel</div>"),
            flag: {
                danger: 4,
                warning: 1
            }
        }, {
            id: _.uniqueId(),
            avatar: 'dan.jpg',
            name: 'Dan Bonker',
            company: 'Sage Creek Framing Co.',
            alert: true,
            phone: '861 891 5339',
            availability: 'Off Site',
            next_sched: '18 Sep, 2015',
            project: 'Wilmington 47',
            role: 'Sub Contractor',
            sow: 'Frame 2nd Stroy',
        }, {
            id: _.uniqueId(),
            avatar: 'bruce.jpg',
            name: 'Bruce Wayne',
            company: 'Synergy Construction',
            alert: false,
            phone: '801 580 5683',
            availability: 'Off Site',
            next_sched: '18 Sep, 2015',
            project: 'Multiple',
            project_popover: $sce.trustAsHtml("<div>Wilmington 45<br>Wilmington 46<br>Wilmington 47<br>Wilmington 48</div>"),
            role: 'General Contractor',
            sow: 'Multiple',
            sow_popover: $sce.trustAsHtml("<div>Frame 2nd Story<br>Insulation<br>Snow Removal</div>"),
            flag: {
                danger: 2,
                warning: 5
            }
        }, {
            id: _.uniqueId(),
            avatar: 'jeff.jpg',
            name: 'Jeff Price',
            company: 'Probuild',
            alert: false,
            phone: '835 563 6699',
            availability: 'Off Site',
            next_sched: '19 Sep, 2015',
            project: 'Multiple',
            project_popover: $sce.trustAsHtml("<div>Wilmington 47<br>Wilmington 48</div>"),
            role: 'Supplier',
            sow: 'Multiple',
            sow_popover: $sce.trustAsHtml("<div>Roof Dry-In<br>Set Steel</div>"),
            flag: {
                warning: 3
            }
        }, {
            id: _.uniqueId(),
            avatar: 'peters.jpg',
            name: 'Christian Peters',
            company: 'MyTy Appliance Specialists',
            alert: false,
            phone: '861 998 8283',
            availability: 'Off Site',
            next_sched: '1 Oct, 2015',
            project: 'Wilmington 47',
            role: 'Designer',
            sow: 'Fire Place',
        }, {
            id: _.uniqueId(),
            avatar: 'jane.jpg',
            name: 'Jane Smith',
            alert: false,
            phone: '801 942 1092',
            availability: 'Off Site',
            next_sched: '1 Oct, 2015',
            project: 'Wilmington 47',
            role: 'Owner',
            flag: {
                warning: 1
            }
        }
    ];
    $scope.selectedMembers = $scope.members;

    $scope.onSite = false;

    $scope.toggleOnSite = function() {
        $scope.onSite = !$scope.onSite;
        if ($scope.onSite) {
            $scope.selectedMembers = _.filter($scope.members, function(m) {return m.availability == 'On Site';});
        } else {
            $scope.selectedMembers = $scope.members;
        }
    }

}]);
