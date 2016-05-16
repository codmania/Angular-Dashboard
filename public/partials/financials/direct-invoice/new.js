app.controller('DirectInvoiceNewCtrl', function($scope, members, projects, contracts, sows, classifications) {
    $scope.projects = projects;
    $scope.contracts = contracts;
    $scope.sows = sows;
    $scope.classifications = classifications;
    $scope.payee = members;
    $scope.states = [
        {
            id: 1,
            name: 'CA'
        }, {
            id: 2,
            name: 'NY'
        }
    ];

    $scope.actions = [{
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


    $scope.data = [
        {
            budgetted: false
        }
    ];

    $scope.addLine = function() {
        $scope.data.push({
            budgetted: false
        });
    };

    $scope.paymentForm = [
        {
            id: 1,
            name: 'Payment Form'
        }
    ];

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
});
