app.controller('PayPreviewCtrl',
    ['$scope', '$stateParams', function ($scope, $stateParams) {

        $scope.payApplyName = "Electrical";

        $scope.leadList = [
            { id: 1, name: 'Bruce Wayne'}
        ];

        $scope.date = new Date(2015, 7, 26);

        $scope.itemList = [
            {
                project: 'Wilmington 46',
                contract: 'Electrical',
                scope: 'Electrical',
                contractedAmount: 55000,
                completed: 25,
                earned: 13750,
                previouslyPaid: 10000,
                amountDue: 3750,
                currentInvoice: 3750,
                variance: "-",
                estimatedDuration: '13 Days',
                retainage: 0,
                scheduledCompletion: 'Aug 30 2015',
                estimatedCompletion: 'Aug 29 2015',
                varianceTotal: '-1 Days'
            },
            {
                project: 'Wilmington 47',
                contract: 'Electrical',
                scope: 'Electrical',
                contractedAmount: 57938,
                completed: 97,
                earned: 56199.86,
                previouslyPaid: '-',
                amountDue: 56199.86,
                currentInvoice: 55982,
                variance: 217.86,
                estimatedDuration: '13 Days',
                retainage: 0,
                scheduledCompletion: 'Aug 19 2015',
                estimatedCompletion: 'Aug 18 2015',
                varianceTotal: '-1 Days'
            },
            {
                project: 'Wilmington 48',
                contract: 'Electrical',
                scope: 'Electrical',
                contractedAmount: 45000,
                completed: 10,
                earned: 4500,
                previouslyPaid: 4000,
                amountDue: 500,
                currentInvoice: 100,
                variance: 400,
                estimatedDuration: '11 Days',
                retainage: 0,
                scheduledCompletion: 'Sep 7, 2015',
                estimatedCompletion: 'Sep 5, 2015',
                varianceTotal: '+2 Days'
            }
        ];

        $scope.countryList = [
            {id: 1, name: "Canada"},
            {id: 2, name: "United States"},
        ];

        $scope.stateList = [
            {id: 1, name: "New York"},
            {id: 2, name: "Los Angeles"},
        ];

        $scope.actions = [{
            id: _.uniqueId('action'),
            name: "Distribute"
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
            name: "Create Lien Release"
        },
        {
            id: _.uniqueId('action'),
            name: "Email"
        }];

        $scope.commentList = [
            {
                photo: 'assets/img/avasisteam/iris.jpg',
                name: 'Bob Jones',
                content: 'Concrete to be poured tomorrow as soon as crew shows up',
                date: 'June 23, 2015  2:45pm'
            },
            {
                photo: '',
                name: 'Eric Hoffman',
                content: 'Hi Judy!  I was thinking that we should get together on Tuesday and discuss the bid that came from Hoffman & Hoffman',
                date: 'June 23, 2015  2:45pm'
            },
            {
                photo: 'assets/img/avasisteam/iris.jpg',
                name: 'Judy Simmons',
                content: 'Concrete to be poured tomorrow as soon as crew shows up',
                date: 'June 23, 2015  2:45pm'
            },
            {
                photo: 'assets/img/avasisteam/bruce.jpg',
                name: 'Eric Hoffman',
                content: 'Hi Judy!  I was thinking that we should get together on Tuesday and discuss the bid that came from Hoffman & Hoffman',
                date: 'June 23, 2015  2:45pm'
            },
            {
                photo: '',
                name: 'Judy Simmons',
                content: 'Concrete to be poured tomorrow as soon as crew shows up',
                date: 'June 23, 2015  2:45pm'
            }
        ];

        $scope.getInitials = function(name) {
            var nameSegs = name.split(' ');
            return nameSegs[0].substr(0, 1) + nameSegs[1].substr(0, 1);
        }
    }]
);
