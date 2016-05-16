app.controller('RiskCtrl',
    ['$scope', '$stateParams', '$uibModal', function ($scope, $stateParams, $uibModal) {

        $scope.showAttachment = function(category) {
            $scope.category = category;

            var modalInstance = $uibModal.open({
                templateUrl: 'partials/team-members/risk-attachment.html',
                controller: 'RiskAttachmentCtrl',
                scope: $scope
            });

            modalInstance.result.then(function (res) {
            }, function () {

            });
        }
    }]
);
