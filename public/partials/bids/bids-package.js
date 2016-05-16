/**
* Created by Anton on 12/17/2015
*/
app.controller('BidsPackageCtrl',
    ['$scope', '$state', function($scope, $state) {

        $scope.bidName = "Wilmington 47 - Hardwood Floors";
        $scope.users = [
            {
                id: _.uniqueId(),
                name: 'Bruce Wayne'
            }, {
                id: _.uniqueId(),
                name: 'Dan Bonker'
            }, {
                id: _.uniqueId(),
                name: 'Mike Riley'
            }];

        $scope.curResponsible = $scope.users[0];

        $scope.date = new Date(2015, 7, 26);

        $scope.documents = [
            'Document Name.pdf',
            'Document Name.jpg'
        ];

        $scope.projectLinks = [
            'http://projectlink.com',
            'http://anotherprojectlink.com/somethin...'
        ];

        $scope.actions = [{
            id: _.uniqueId('action'),
            name: "Distribute"
        },
        {
            id: _.uniqueId('action'),
            name: "Submit Bid"
        },
        {
            id: _.uniqueId('action'),
            name: "Compare"
        },
        {
            id: _.uniqueId('action'),
            name: "Award"
        },
        {
            id: _.uniqueId('action'),
            name: "Accept Award"
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
            name: "Record Payment"
        },
        {
            id: _.uniqueId('action'),
            name: "Email"
        }];

        $scope.projectEstimates = [
            {
                scopeOfWork: 'Hardwood Floor Main',
                quantity: 3000,
                measurement: 'Square Feet',
                material: 'Bruce Antique Oak',
                materialLink: 'www.smokeymthardwood.com',
                details: '3/4 in. Thick x 3-1/4 in. Wide x Random Length Solid Hardwood Flooring (22 sq. ft./case) $7.18 Sq. Ft.'
            }, {
                scopeOfWork: 'Hardwood Floor Basement',
                quantity: 1500,
                measurement: 'Square Feet',
                material: 'Millstead Red Oak',
                materialLink: 'www.smokeymthardwood.com',
                details: '3/4 in. Thick x 3-1/4 in. Wide x Random Length Solid Hardwood Flooring (20 sq. ft./case) $5.99 Sq. Ft.'
            }
        ];

        $scope.costScheduledBreakdown = [
            {
                scopeOfWork: {
                    title: 'Hardwood Floor Main',
                    division: 'Division 5'
                },
                costCode: {
                    code: '582',
                    title: 'Wood Flooring'
                },
                phase: {
                    parent: '9 - Interior Finishes',
                    sub: '9.8 - Flooring'
                },
                duration: '2 weeks',
                labor: 17250.00,
                material: 21540.00,
                equipment: 2000.00,
                misc: 1035.00,
                total: 41825.00,
                requireSelection: true,
                responsibleToSelection: 'Interior Designer',
                requireOrder: true,
                responsibleToSelection2: 'Subcontractor'
            }, {
                scopeOfWork: {
                    title: 'Hardwood Floor Basement',
                    division: 'Division 5'
                },
                costCode: {
                    code: '582',
                    title: 'Wood Flooring'
                },
                phase: {
                    parent: '9 - Interior Finishes',
                    sub: '9.2 - Flooring'
                },
                duration: '2 weeks',
                labor: 9100.00,
                material: 8985.00,
                equipment: 2000.00,
                misc: 890,
                total: 20975.00,
                requireSelection: false,
                responsibleToSelection: '',
                requireOrder: true,
                responsibleToSelection2: 'Subcontractor'
            }
        ];

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

    }]);
