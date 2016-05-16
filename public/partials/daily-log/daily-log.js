app.controller('DailyLogCtrl', function($scope) {
    $scope.scheduleChartData = [
        {
            value: 32,
            color: "#79c485",
            text: "32%",
            font: '18px AvenirNextLTPro-Regular'
        },
        {
            value: 64,
            color: "#3aabd5",
            text: "64%",
            font: '18px AvenirNextLTPro-Regular'
        }
    ];

    $scope.schedules = [{
            id: _.uniqueId(),
            description: "Roof Dry-In",
            start_date: moment('2015-08-17'),
            end_date: moment('2015-08-20'),
            schedule_type: "success",
            status: 'in progress',
            completion_percentage: 60,
            assigned_to: 'Dave Gebo',
            avatar: 'assets/img/users/dave_gebo.jpg'
        },
        {
            id: _.uniqueId(),
            description: "Rough HVAC",
            start_date: moment('2015-08-17'),
            end_date: moment('2015-08-25'),
            schedule_type: "warning",
            status: "suspended",
            completion_percentage: 40,
            assigned_to: 'Dave Musgrove',
            avatar: 'assets/img/users/dave.jpg'
        },
        {
            id: _.uniqueId(),
            description: "Rough Electrical",
            start_date: moment('2015-08-17'),
            end_date: moment('2015-08-18'),
            schedule_type: "primary",
            status: "in progress",
            completion_percentage: 90,
            assigned_to: 'Mike Riley',
            avatar: 'assets/img/users/mike.jpg'
        },
        {
            id: _.uniqueId(),
            description: "Framing",
            start_date: moment('2015-08-17'),
            end_date: moment('2015-08-17'),
            schedule_type: "danger",
            status: "in progress",
            completion_percentage: 100,
            assigned_to: 'Dan Bonker',
            avatar: 'assets/img/users/dan.jpg'
        },
        {
            id: _.uniqueId(),
            description: "Plumbing",
            start_date: moment('2015-08-17'),
            end_date: moment('2015-09-01'),
            schedule_type: "primary",
            status: "in progress",
            completion_percentage: 20,
            assigned_to: 'Mary',
            avatar: 'assets/img/users/mary.jpg'
        }
    ];

    $scope.upcomingSchedules = [{
        id: _.uniqueId(),
        user: {
            name: 'Jim Stevens',
            role: 'Sub Contractor',
            avatar: 'assets/img/users/john.jpg',
            phone: '123-1234-1231'
        },
        sow: 'Kitchen Cabinets',
        confirmed: 'yes',
        material_list: 'Brown Mapple Cabinets',
        material_status: 'confirmed on site',
        material_confirmed: 'yes'
    }]

    $scope.todayItemList = [
            {
                number: 'RFI#1244',
                name: 'Garage Cement Finish',
                project: 'Wilmington 45'
            },
            {
                number: 'BID#1833',
                name: 'Structural Metal Framing',
                project: 'Wilmington 45'
            },
            {
                number: 'PRO#1017',
                name: 'Foundation Concrete',
                project: 'Wilmington 45'
            },
            {
                number: 'CO#2339',
                name: 'Additional Storage',
                project: 'Wilmington 45'
            },
            {
                number: 'TSK#1405',
                name: 'Complete Rough Electical',
                project: 'Wilmington 45'
            },
            {
                number: 'RFI#1272',
                name: 'Roofline Materials',
                project: 'Wilmington 46'
            },
            {
                number: 'RFI#1012',
                name: 'Vinyl Siding',
                project: 'Wilmington 46'
            },
            {
                number: 'BID#1031',
                name: 'Hardwood Flooring',
                project: ''
            },
            {
                number: 'SOW#1092',
                name: 'Roof Dry-In',
                project: 'Wilmington 47'
            },
            {
                number: 'TSK#1201',
                name: 'Finish Closing in Roof',
                project: 'Wilmington 47'
            },
            {
                number: 'TSK#1392',
                name: 'Roof Dry-In Discussion',
                project: 'Wilmington 47'
            },
            {
                number: 'RFI#1923',
                name: 'Roofline Modification',
                project: 'Wilmington 47'
            },
            {
                number: 'SOW#1009',
                name: 'Framing',
                project: 'Wilmington 48'
            },
            {
                number: 'RFI#1926',
                name: 'Radiant Flooring in Kitchen',
                project: 'Wilmington 48'
            },
            {
                number: 'TSK#1014',
                name: 'Follow Up on Steel Support',
                project: 'Wilmington 48'
            }
        ];
});