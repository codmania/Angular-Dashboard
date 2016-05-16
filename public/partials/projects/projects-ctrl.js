/**
 * Created by Darcy on 12/2/2015.
 */
'use strict'

app.controller('ProjectsCtrl', function($scope, $state, $stateParams, $uibModal, projects) {
    $scope.schedule_completed = 0;
    $scope.project_completed = 0;
    $scope.doughnutOptions = {};
    $scope.doughnutData = [];

    $scope.schedule_completed = [60, 40, 90, 20, 100];
    $scope.project_completed = 33;

    $scope.actionItems = [{
        invoice: "TSK #10234",
        title: "Need Stairs Ready for Floor Lights",
        type: 'task',
        responsible: 'Bruce Wayne',
        active: true
    },
    {
        invoice: "TSK #10247",
        title: "Complete Fireplace Framing",
        type: 'task',
        responsible: 'John Steel',
        active: true
    },
    {
        invoice: "TSK #10249",
        title: "Close Garage Roof",
        type: 'task',
        responsible: "Mike Hunter",
        active: true
    },
    {
        invoice: "TSK #10252",
        title: "Finish Closing in Roof",
        type: 'task',
        responsible: "Dave Gebo",
        active: true
    },
    {
        invoice: "PRO #10005",
        title: "Owner to Select Kitchen Cabinets",
        type: 'task',
        responsible: "Jane Smith",
        active: true
    },
    {
        invoice: "RFI #10021",
        title: "Roofline Modification",
        type: 'rfi',
        responsible: "Dave Gebo",
        active: false
    },
    {
        invoice: "RFI #10021",
        title: "Raidant Flooring in Driveway",
        type: 'rfi',
        responsible: "Dale Gurrea",
        active: false
    },
    {
        invoice: "TSK #10217",
        title: "Install Project Fencing",
        type: 'task',
        responsible: "Torben Moench",
        active: false
    }];

    $scope.goComm = function () {
        $state.go('comm.main');
    };
    $scope.goDoc = function () {
        $state.go('documents.main');
    };

    // Action Main GAI New Modal
    $scope.showNewTaskModal = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/action-items/task/task-modal.html',
            controller: 'TaskModalCtrl',
            windowClass: 'gai-modal',
            resolve: {
                currentTask: {}
            }
        });

        modalInstance.result.then(function(res) {

        }, function() {

        });
    }

    $scope.showActionItemModal = function(item) {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/action-items/task/task-modal.html',
            controller: 'TaskModalCtrl',
            windowClass: 'gai-modal',
            resolve: {
                currentTask: item
            }
        });
    }

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

    /**
     * Data for Doughnut chart
     */
    $scope.mineData = [
        {
            value: 5,
            color:"#ed5565"
        },
        {
            value: 4,
            color: "#f8ac59"
        },
        {
            value: 6,
            color: "#79c485"
        }
    ];

    /**
     * Options for Doughnut chart
     */
    $scope.mineOptions = {
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 60, // This is 0 for Pie charts
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false
    };

    $scope.teamData = [
        {
            value: 15,
            color:"#ed5565"
        },
        {
            value: 10,
            color: "#f8ac59"
        },
        {
            value: 17,
            color: "#79c485"
        }
    ];

    /**
     * Options for Doughnut chart
     */
    $scope.teamOptions = {
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 60, // This is 0 for Pie charts
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    };

    /**
    * Financial chart data
    */
    $scope.financialChartData = [
        {
            value: 32,
            color: "#79c485",
            text: "32%"
        },
        {
            value: 64,
            color: "#3aabd5",
            text: "64%"
        }
    ];

    $scope.teamMemberChartData = [
        {
            value: 13,
            color: "#3aabd5",
            text: "32%"
        },
        {
            value: 100,
            color: "#79c485",
            text: "100%"
        }
    ]
});
