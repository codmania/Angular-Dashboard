app.controller('PunchItemListCtrl', function($scope, $uibModal, members, sows) {
    $scope.leadList = members;
    $scope.sows = sows;
    $scope.punchItem = {
        listRequiredByMe: [
            {flag: 'green', title: 'Tree Missing', sTitle: '', due_date: '-', responsible: {name: 'Torben Moench', company: ''},initiator: {name: '', company: ''}, sow: ['Landscaping'].join(", "), status: ['awating Start', 0]}
        ],

        listRequiredByOthers: [
            {flag: 'red', title: 'Garage Cement Finish', sTitle: '', due_date: '8/17/2015', responsible: {name: 'Jane Smith', company: ''},initiator: {name: 'Dale Guerra', company: 'All Concrete, Inc'}, sow: ['Concrete Flatwork'].join(', '), status: ['awating approval', 0.2]},
            {flag: 'yellow', title: 'Fire Sprinkler Materials', sTitle: '', due_date: '8/20/2015', responsible: {name: 'Beth Wiseman', company: 'Synergy Construction'},initiator: {name: 'Beth Wiseman', company: 'Synergy Construction'}, sow: ['Fire Sprinkler Rough-In'].join(', '), status: ['awating approval', 0]},
            {flag: 'green', title: 'Door Hinges', sTitle: '', due_date: '9/3/2015', responsible: {name: 'Jim White', company: 'All-Purpose Windo...'},initiator: {name: 'Beth Wiseman', company: 'Synergy Construction'}, sow: ['Interior Doors'].join(', '), status: ['awating approval', 0]},
            {flag: 'green', title: 'Insulation Question', sTitle: '', due_date: '9/15/2015', responsible: {name: 'Beth Wiseman', company: 'Synergy Construction'},initiator: {name: 'Mike Bearnson', company: 'Cardall\'s Insulation'}, sow: ['Insulation'].join(', '), status: ['awating approval', 0.3]}
        ],
        listDrafts: [
            {flag: 'draft', title: 'Landscaping Up-keep', sTitle: '', due_date: '-', responsible: {name: '-', company: ''},initiator: {name: 'Beth Wiseman', company: 'Synergy Construction'}, sow: ['Landscaping'].join(', '), status: ['Draft', '-']}
        ],
        listCompleted: [
            {flag: 'completed', title: 'Excavation Clean Up', sTitle: '', due_date: 'Feb 10, 2015', responsible: {name: 'Bruce Wayne', company: 'Synergy Construction'},initiator: {name: 'Dan Meyer', company: ''}, sow: ['Excavation'].join(', '), status: ['Completed', 1]}
        ]
    };


    $scope.showPunchItemDetailModal = function(item) {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/action-items/punch-item/detail-modal.html',
            controller: 'PunchItemDetailModalCtrl',
            windowClass: 'tm-modal-main',
            resolve: {
                currentItem: function() {
                    return item;
                }
            }
        });

        modalInstance.result.then(function (res) {
        }, function () {

        });
    }

});