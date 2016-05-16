app.controller('PurchaseOrdersCtrl', function ($scope, members, projects, contracts, sows) {
    $scope.states = [
        {
            id: 1,
            name: 'AK'
        }, {
            id: 2,
            name: 'AL'
        }, {
            id: 3,
            name: 'CA'
        }, {
            id: 4,
            name: 'NY'
        }, {
            id: 5,
            name: 'TX'
        }, {
            id: 6,
            name: 'FL'
        }, {
            id: 7,
            name: 'HI'
        }, {
            id: 8,
            name: 'VA'
    }];

    $scope.date = new Date(2015, 7, 26);


    $scope.isTextable = true;
    $scope.users = members;
    $scope.projects = projects;
    $scope.contracts = contracts;
    $scope.sows = sows;
    $scope.procurements = [{
        id: 1,
        name: 'Piping'
    }];
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
