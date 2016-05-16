app.controller('BidsQuickModalCtrl', function($scope, $state, $uibModalInstance, projects, sows, bidTypes) {

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.finalize = function () {
        $uibModalInstance.close();
        $state.go('bids.main');
    };

    $scope.isShowDatePicker = false;
    $scope.selectedDate = new Date(2015, 7, 18);
    $scope.quickBidList = [{}];

    $scope.addAnotherBid = function () {

    };

    $scope.projects = projects;
    $scope.sows = sows;
    $scope.availableTypes = bidTypes;

    $scope.bidPrj = {
        project: {
            id: 1,
            name: "Choose"
        }
    };
    $scope.bidCont = {
        sow: {
            id: 1,
            name: "Choose"
        },
        typo: {
            id: 1,
            name: "Choose"
        }
    };

    $scope.selectProject = function(bidPrj, selectedProject) {
        bidPrj.project = selectedProject;
    }
    
    $scope.selectSow = function(bidCont, selectedSow) {
        bidCont.sow = selectedSow;
    }
    $scope.selectType = function(bidCont, selectedType) {
        bidCont.typo = selectedType;
    }
    $scope.addAnotherBid = function() {
        $scope.quickBidList.push(new Object());
    }

});