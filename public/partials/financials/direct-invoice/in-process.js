app.controller('DirectInvoiceInProcessCtrl', function($scope, members, projects, categories, sows) {
    $scope.users = members;
    $scope.curResponsible = $scope.users[0];
    $scope.categories = categories;

    $scope.changeOptions = function(o) {
    };

    $scope.actions = [
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
        name: "Create Lien Release"
    },
    {
        id: _.uniqueId('action'),
        name: "Email"
    }];

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
    ];
});
