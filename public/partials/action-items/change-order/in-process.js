app.controller('ChangeOrderInProcessCtrl', function($scope, members, projects, categories, sows) {
    $scope.users = members;
    $scope.curResponsible = $scope.users[0];
    $scope.categories = categories;
    $scope.projects = projects;
    $scope.sows = sows;

    $scope.changeOptions = function(o) {
    }
    $scope.actions = [{
        id: _.uniqueId('action'),
        name: "Distribute"
    },
    {
        id: _.uniqueId('action'),
        name: "Work Completed"
    },
    {
        id: _.uniqueId('action'),
        name: "Material Received"
    },
    {
        id: _.uniqueId('action'),
        name: "Request Approval"
    },
    {
        id: _.uniqueId('action'),
        name: "Further Action Required"
    },
    {
        id: _.uniqueId('action'),
        name: "Approve"
    },
    {
        id: _.uniqueId('action'),
        name: "Record Payment"
    },
    {
        id: _.uniqueId('action'),
        name: "Email"
    }];

    $scope.approvers = angular.copy($scope.users);
    $scope.request = "Hi Christine, I was under the impression that there was going to be two sinks in the Master Guest Room but I spoke with Bruce and he didn't see it in the drawings. Would you be able to change things around a bit to add a sink? Let me know your thoughts and if you can do it, please fill ou the table with the cost/schedule info. Thanks!";

    $scope.date = new Date(2015, 7, 26);
    $scope.comments = [
        {
            avatar: 'bruce.jpg',
            author: 'Bruce Wayne',
            date: 'Aug 16, 2015 - 10:29am',
            desc: 'No issues on my end here. I\'ll let you guy\'s resolve this. Let me know if you need any input!'
        }, {
            avatar: 'skylar.jpg',
            author: 'Christian Spendlove',
            date: 'Aug 17, 2015 - 9:16am',
            desc: 'Hi Jane, that should be no problem at all. I will look into the additional costs. It shouldn\'t be a big change...'
        }
        // {
        //     avatar: 'peters.jpg',
        //     author: 'Christian Peters',
        //     date: 'May 20, 2015 - 3:40pm',
        //     desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        // }, {
        //     avatar: 'jane.jpg',
        //     author: 'Jane Smith',
        //     date: 'May 20, 2015 - 3:40pm',
        //     desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        // }, {
        //     avatar: 'dan.jpg',
        //     author: 'Dan Bonker',
        //     date: 'May 20, 2015 - 3:40pm',
        //     desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        // }, {
        //     avatar: 'bruce.jpg',
        //     author: 'Bruce Wayne',
        //     date: 'May 20, 2015 - 3:40pm',
        //     desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        // }, {
        //     avatar: 'jeff.jpg',
        //     author: 'Jeff Price',
        //     date: 'May 20, 2015 - 3:40pm',
        //     desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        // }, {
        //     avatar: 'peters.jpg',
        //     author: 'Christian Peters',
        //     date: 'May 20, 2015 - 3:40pm',
        //     desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        // }, {
        //     avatar: 'jane.jpg',
        //     author: 'Jane Smith',
        //     date: 'May 20, 2015 - 3:40pm',
        //     desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        // }, {
        //     avatar: 'dan.jpg',
        //     author: 'Dan Bonker',
        //     date: 'May 20, 2015 - 3:40pm',
        //     desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
        // }
    ];

});
