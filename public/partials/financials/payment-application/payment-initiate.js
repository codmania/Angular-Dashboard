app.controller('FinancialsPaymentInitiateCtrl', function ($scope, $uibModal, projects, contracts, sows) {
    $scope.projects = projects;
    $scope.contracts = contracts;
    $scope.sows = sows;

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

    $scope.showBillingItemsModal = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/financials/payment-application/billing-items-modal.html',
            controller: 'BillingItemsCtrl',
            windowClass: 'tm-modal-main'
        });

        modalInstance.result.then(function (res) {
        }, function () {

        });
    }
});
