app.controller('ComProTemplatesCtrl', function($scope) {
    $scope.$parent.setCurrentTab('company-profile.templates');

    $scope.templates = [
        {name: 'RFI', uploaded_at: 'Feb 12, 2016', uploader: 'John Doe', modified_at: 'Feb 12, 2016', modifier: 'Eric Hoffman'},
        {name: 'Change Order', uploaded_at: 'Feb 12, 2016', uploader: 'John Doe', modified_at: 'Feb 12, 2016', modifier: 'Eric Hoffman'},
        {name: 'Punch List', uploaded_at: 'Feb 12, 2016', uploader: 'John Doe', modified_at: 'Feb 12, 2016', modifier: 'Eric Hoffman'},
        {name: 'Inspection', uploaded_at: 'Feb 12, 2016', uploader: 'John Doe', modified_at: 'Feb 12, 2016', modifier: 'Eric Hoffman'},
        {name: 'Purchase Order', uploaded_at: 'Feb 12, 2016', uploader: 'John Doe', modified_at: 'Feb 12, 2016', modifier: 'Eric Hoffman'},
        {name: 'Invoice', uploaded_at: 'Feb 12, 2016', uploader: 'John Doe', modified_at: 'Feb 12, 2016', modifier: 'Eric Hoffman'},
        {name: 'Payment Application', uploaded_at: 'Feb 12, 2016', uploader: 'John Doe', modified_at: 'Feb 12, 2016', modifier: 'Eric Hoffman'},
        {name: 'Direct Payment', uploaded_at: 'Feb 12, 2016', uploader: 'John Doe', modified_at: 'Feb 12, 2016', modifier: 'Eric Hoffman'},
        {name: 'Bid', uploaded_at: 'Feb 12, 2016', uploader: 'John Doe', modified_at: 'Feb 12, 2016', modifier: 'Eric Hoffman'},
        {name: 'Procurement', uploaded_at: 'Feb 12, 2016', uploader: 'John Doe', modified_at: 'Feb 12, 2016', modifier: 'Eric Hoffman'}
    ];
});
