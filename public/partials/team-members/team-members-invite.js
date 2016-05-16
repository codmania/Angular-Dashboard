app.controller('TeamMembersInviteCtrl', function($scope, $state, $filter, $uibModalInstance, members, projects) {
    $scope.inviteUserList = [
        {isUserListOpened: {status: false}}
    ];

    $scope.inviteProjectsList = [{}];
    $scope.option = {};
    $scope.option.isUserListOpened = false; //

    $scope.availableUsers = members;
    $scope.availableProjects = projects;

    $scope.filteredUsers = [];


    $scope.availableRoles = [
        {
            id: 1,
            name: "Subcontractor"
        },
        {
            id: 2,
            name: "Contractor"
        },
        {
            id: 3,
            name: "Another Role"
        },
        {
            id: 4,
            name: "Some Other Role"
        }
    ];

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.sendInvite = function() {
        $uibModalInstance.dismiss('cancel');
        $state.go('team-members.list');
    }

    $scope.selectUser = function(inviteUser, selectedUser) {
        inviteUser.user = angular.copy(selectedUser);
        inviteUser.isUserListOpened = !inviteUser.isUserListOpened;
    }

    $scope.selectProject = function(invitePrj, selectedProject) {
        invitePrj.project = selectedProject;
    }

    $scope.selectRole = function(invitePrj, selectedRole) {
        invitePrj.role = selectedRole;
    }

    $scope.addAnotherProject = function() {
        $scope.inviteProjectsList.push(new Object());
    }

    $scope.addAnotherUser = function() {
        $scope.inviteUserList.push(new Object({isUserListOpened: {status: false}}));
    }

    $scope.searchUserByName = function(inviteUser) {
        $scope.filteredUsers = $filter('filter')($scope.availableUsers, {name: inviteUser.user.name});
        inviteUser.isUserListOpened.status = $scope.filteredUsers.length != 0 && inviteUser.user.name != '';
    };
});
