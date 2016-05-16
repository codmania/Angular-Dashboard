app.controller('TaskModalCtrl', function($scope, $uibModalInstance, members, projects, currentTask, sows) {
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.distribute = function () {
        $uibModalInstance.close();
    }
    $scope.task = currentTask;
    $scope.isNewModal = _.isUndefined(currentTask.title);

    $scope.isShowDatePicker = false;
    $scope.selectedDate = new Date(2015, 7, 18);
    $scope.isMoreOptionsShow = false;

    $scope.projects = projects;
    $scope.assignees = members;
    $scope.sows = sows

    $scope.comments = [
        {
            avatar: 'bruce.jpg',
            author: 'Bruce Wayne',
            date: 'May 20, 2015 - 3:40pm',
            desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        }, {
            avatar: 'jeff.jpg',
            author: 'Jeff Price',
            date: 'May 20, 2015 - 3:40pm',
            desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        }, {
            avatar: 'peters.jpg',
            author: 'Christian Peters',
            date: 'May 20, 2015 - 3:40pm',
            desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        }, {
            avatar: 'jane.jpg',
            author: 'Jane Smith',
            date: 'May 20, 2015 - 3:40pm',
            desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        }, {
            avatar: 'dan.jpg',
            author: 'Dan Bonker',
            date: 'May 20, 2015 - 3:40pm',
            desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        }, {
            avatar: 'bruce.jpg',
            author: 'Bruce Wayne',
            date: 'May 20, 2015 - 3:40pm',
            desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        }, {
            avatar: 'jeff.jpg',
            author: 'Jeff Price',
            date: 'May 20, 2015 - 3:40pm',
            desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        }, {
            avatar: 'peters.jpg',
            author: 'Christian Peters',
            date: 'May 20, 2015 - 3:40pm',
            desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        }, {
            avatar: 'jane.jpg',
            author: 'Jane Smith',
            date: 'May 20, 2015 - 3:40pm',
            desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        }, {
            avatar: 'dan.jpg',
            author: 'Dan Bonker',
            date: 'May 20, 2015 - 3:40pm',
            desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        }
    ];

});
