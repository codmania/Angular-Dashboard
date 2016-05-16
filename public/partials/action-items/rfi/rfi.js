app.controller('RFICtrl', function($scope, members, categories, sows) {
    $scope.users = members;
    $scope.categories = categories;
    $scope.sows = sows;

    $scope.curResponsible = $scope.users[0];
    $scope.date = new Date(2015, 7, 26);

    /** Dropzone config
    *
    */
    $scope.dropzoneConfig = {
        url: '/upload',
        parallelUploads: 2,
        maxFileSize: 30,
        acceptedFiles: "image/*,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/xml",
        clickable: '.btn-file-input',
        previewTemplate: $('.upload-preview').html(),
        previewsContainer: '#upload-files-container',
        accept: function(file) {
            var thumbnail = $(file.previewElement).find('span.preview img');
            switch (file.type) {
                case 'application/pdf':
                    thumbnail.attr('src', "assets/img/documents/icons/pdf_file.png");
                    $(file.previewElement).find('span.preview').addClass('not-image');
                    break;
                case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                    thumbnail.attr('src', "assets/img/documents/icons/text_file.png");
                    $(file.previewElement).find('span.preview').addClass('not-image');
                    break;
            }
        }
    };

    $scope.dropzoneEventHandlers = {
        addedfile: function(file) {
        },
        thumbnail: function(file, dataUrl) {
        },
    };

    $scope.rfiName = "Garage Cement Finish";
    $scope.desInfo = "Hi Jane, I oversaw what treatments were being discussed for the garage with Concrete Covers. All of the mentioned treatments will make the concrete pourous and succeptable to damage. It is not a good option to keep it looking nice in the long term.";
    $scope.solution = "I would suggest looking into some different treatments that can give similar results. If your mind is set, you can also consider doing a type of apoxy over the top to protect the concrete. I think that is the best solution...it will just have a more glossy look. \n\nHi Jane, the apoxy take a few hours to apply and about an hour to dry. Check with Concrete Covers but it shouldnt be a big deal.";
    $scope.clarify = "Dale, thanks a lot for looking into this. I had no idea we would be creating a long term issue, good catch!\nPlease let me know how long the apoxy takes to apply and dry if you know. We have a lot of people on site in the next week and I don't want anyone walking through it.";

    $scope.accesses = [
        {user: {avatar: 'dan.jpg', name: 'Dan Bonker', phone: '415 123 3456'}, company: 'Flora Corp', role: 'Senior Director', responsibility: 'Aenean Ultricies', access: 'View'},
        {user: {avatar: 'dave.jpg', name: 'Dave Musgrove', phone: '415 123 3456'}, company: 'Flora Corp', role: 'Senior Director', responsibility: 'Aenean Ultricies', access: 'View'},
        {user: {avatar: 'dave_gebo.jpg', name: 'Dave Gebo', phone: '415 123 3456'}, company: 'Flora Corp', role: 'Senior Director', responsibility: 'Aenean Ultricies', access: 'View'},
        {user: {avatar: 'john.jpg', name: 'John Steel', phone: '415 123 3456'}, company: 'Flora Corp', role: 'Senior Director', responsibility: 'Aenean Ultricies', access: 'View'},
    ];

    $scope.activities = [
        {user: {avatar: 'dan.jpg', name: 'Dan Bonker', phone: '415 123 3456'}, name: 'Distributed Bid Package', date: 'Aug 23, 2015 - 11:00 AM', role: 'Senior Director'},
        {user: {avatar: 'dave.jpg', name: 'Dave Musgrove', phone: '415 123 3456'}, name: 'Fermentum Pharetra Porta Cursus', date: 'Aug 23, 2015 - 10:00 AM', role: 'Owner'},
        {user: {avatar: 'dave_gebo.jpg', name: 'Dave Gebo', phone: '415 123 3456'}, name: 'Fermentum Pharetra Porta Cursus', date: 'Aug 23, 2015 - 9:00 AM', role: 'SubContractor'}
    ];

    $scope.attachments = [
        {document: 'FirePlace Concrete', item: 'RFI #1023', attached_date: 'Aug 23, 2015 - 11:00 AM', initiator: 'Bob Jones'},
        {document: 'Inceptos Sit Condimentum', item: 'RFI #1023', attached_date: 'Aug 23, 2015 - 11:00 AM', initiator: 'Eric Hoffman'}
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

    $scope.comments = [
        {
            avatar: 'bruce.jpg',
            author: 'Bruce Wayne',
            date: 'Aug 13, 2015 - 8:49am',
            desc: 'Thanks for looking into this Dale. Please let me know if I can help. I\'ll talk to Jane when I see her and have her get back to you.'
        }, {
            avatar: 'dale.jpg',
            author: 'Dale Guerra',
            date: 'Aug 13, 2015 - 1:26pm',
            desc: 'No problem Bruce, I would hate to see the wrong treatment get used! I will make sure it get\'s handled appropriately.'
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
