app.controller('PunchItemDetailModalCtrl',
    function($scope, $uibModalInstance, members, sows, currentItem) {
        $scope.punchItem = currentItem;
        $scope.userList = members;
        $scope.sows = sows;

        $scope.photoList = [
            'assets/img/photos/photo11.jpg',
            'assets/img/photos/photo12.jpg',
            'assets/img/photos/photo13.jpg',
            'assets/img/photos/photo14.jpg',
            'assets/img/photos/photo21.jpg',
            'assets/img/photos/photo22.jpg',
            'assets/img/photos/photo23.jpg',
            'assets/img/photos/photo24.jpg',
            'assets/img/photos/photo25.jpg',
            'assets/img/photos/photo26.jpg',
            'assets/img/photos/photo27.jpg',
            'assets/img/photos/photo28.jpg'
        ]

        $scope.statuses = [
            'Awaiting Start',
            'In Progress',
            'Work Suspended',
            'Completed'
        ];

        $scope.comments = [
        {
            created_by: 'Dave Gebo',
            avatar: 'assets/img/users/dave_gebo.jpg',
            created_at: 'August 16, 2015 11:26pm',
            body: "Thanks for the heads up Beth. I'm pretty sure I know what you are referring to but I'll grab you today to make sure. Hopefully it's hiding somewhere...if not I'll get one here asap."
        }
        // {
        //     created_by: 'Bruce Wayne',
        //     avatar: 'assets/img/bruce-wayne.png',
        //     created_at: 'August 6, 2015 3:12pm',
        //     body: "Hey Dave, thanks for the notice. Working on a Saturday? I like you already... I'll have a few guys out there, ask for help if you need it."
        // },
        // {
        //     created_by: 'Dave Gebo',
        //     avatar: 'assets/img/users/dave_gebo.jpg',
        //     created_at: 'August 13, 2015 4:22pm',
        //     body: "Quick update, everything is going smoothly and we are looking ahead of schedule by a couple days."
        // },
        // {
        //     created_by: 'Bruce Wayne',
        //     avatar: 'assets/img/bruce-wayne.png',
        //     created_at: 'August 17, 2015 9:36am',
        //     body: "Attention: There will be drying concrete around the project today and tomorrow, please steer clear!"
        // }
        ]

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });
