var app = angular.module('avasis',
    [
        'ui.router',
        'ngTable',
        'ngAnimate',
        'ui.bootstrap',
        'nvd3',
        'angles',
        'ngDropzone',
        'ui.tree',
        'jkuri.slimscroll',
        'ui.utils.masks',
        'rzModule',
        'slick',
        'ngStorage',
        'mgcrea.ngStrap',
        'restangular'
    ]);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}]);

app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('https://api1.webjet.com/metashopper/rs');
    // RestangularProvider.setRequestSuffix('.json');
});

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    return $stateProvider
        .state('sign-in', {
            url: '/sign-in',
            templateUrl: "partials/auth/sign-in.html",
            controller: "AuthCtrl",
            data: {
                pageName: 'Sign In'
            }
        })
        .state('sign-up', {
            url: '/sign-up',
            templateUrl: "partials/auth/sign-up.html",
            controller: "AuthCtrl",
            data: {
                pageName: 'Sign Up'
            }
        })
        .state('airiq', {
            url: '/',
            templateUrl: "partials/airiq/airiq.html",
            controller: "AiriqCtrl",
            data: {
                pageName: 'AirIQ'
            }
        })
        .state('airiq-search', {
            url: '/airiq-search',
            abstract: true,
            template: "<ui-view/>",
            controller: "AiriqsearchCtrl",
            data: {
                pageName: 'AirIQ Search'
            }
        })
        .state('airiq-search.main', {
            url: '/main',
            templateUrl: "partials/airiq-search/main.html",
            controller: "AiriqsearchMainCtrl",
        })
        .state('airiq-search.history', {
            url: '/history',
            templateUrl: "partials/airiq-search/history.html",
            controller: "AiriqsearchHistoryCtrl"
        })
        .state('airiq-search.demand', {
            url: '/demand',
            templateUrl: "partials/airiq-search/demand.html",
            controller: "AiriqsearchDemandCtrl"
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: "partials/dashboards/dashboard.html",
            controller: "DashboardCtrl",
            data: {
                pageName: 'My Dashboard'
            }
        })
        .state('financials', {
            url: '/financials',
            abstract: true,
            controller: "FinancialsCtrl",
            templateUrl: 'partials/financials/financials.html',
            data: {
                pageName: 'Financials'
            }
        })
        .state('financials.main', {
            url: '/main',
            templateUrl: "partials/financials/main.html",
            controller: "FinancialsMainCtrl",
        })
        .state('financials.budget', {
            url: '/budget',
            templateUrl: "partials/financials/budget.html",
            controller: "FinancialsBudgetCtrl"
        })
        .state('financials.bankdraw', {
            url: '/bankdraw-main',
            templateUrl: "partials/financials/bankdraw.html",
            controller: "FinancialsBankdrawCtrl"
        })
        .state('financials.loan', {
            url: '/construction?initialize',
            abstract: true,
            template: '<ui-view></ui-view>'
        })
        .state('financials.loan.main', {
            url: '/main',
            templateUrl: "partials/financials/loan.html",
            controller: "LoanCtrl"
        })
        .state('financials.loan.edit-params', {
            url: '/edit-params',
            templateUrl: "partials/financials/loan/edit-params.html",
            controller: "LoanEditParamsCtrl"
        })
        .state('financials.pay-apply', {
            url: '/payment-apply',
            templateUrl: "partials/financials/pay-apply.html",
            controller: "PayApplyCtrl"
        })
        .state('financials.purchase-orders', {
            url: '/purchase-orders/main',
            templateUrl: "partials/financials/purchase-order.html",
            controller: "PurchaseOrderCtrl"
        })
        .state('financials.invoices', {
            url: '/invoices/main',
            templateUrl: "partials/financials/invoices.html",
            controller: "InvoicesCtrl"
        })
        .state('financials.direct-payments', {
            url: '/direct-payments/main',
            templateUrl: "partials/financials/direct-payments.html",
            controller: "DirectPaymentsCtrl"
        })
        .state('direct-payment', {
            url: '/fiancials/direct-payments',
            absolute: true,
            template: '<ui-view></ui-view>'
        })
        .state('direct-payment.new', {
            url: '/new',
            templateUrl: "partials/financials/direct-payment/new.html",
            controller: "DirectPaymentNewCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Direct Payment'
            }
        })
        .state('direct-payment.in-process', {
            url: '/in-process',
            templateUrl: "partials/financials/direct-payment/in-process.html",
            controller: "DirectPaymentInProcessCtrl",
            data: {
                isHeaderHidden: true,
                pageName: "Direct Payment"
            }
        })
        .state('purchase-orders', {
            url: '/financials/purchase-orders',
            abstract: true,
            template: '<ui-view></ui-view>',
            controller: "PurchaseOrdersCtrl",
            data: {
                pageName: 'Purchase Order'
            }
        })
        .state('purchase-orders.new', {
            url: '/new',
            templateUrl: "partials/financials/purchase-order/new.html",
            controller: "PurchaseOrdersCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Create New Purchase Order'
            }
        })
        .state('purchase-orders.in-process', {
            url: '/in-process',
            templateUrl: "partials/financials/purchase-order/in-process.html",
            controller: "PurchaseOrdersCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Purchase Order'
            }
        })
        .state('purchase-orders.in-process-edit', {
            url: '/in-process-edit',
            templateUrl: "partials/financials/purchase-order/in-process-edit.html",
            controller: "PurchaseOrdersCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Purchase Order'
            }
        })
        .state('bankdraw', {
            url: '/financials/bankdraw',
            abstract: true,
            template: '<ui-view></ui-view>',
        })
        .state('bankdraw.new', {
            url: '/new',
            abstract: true,
            controller: "BankDrawNewCtrl",
            templateUrl: 'partials/financials/bankdraw/new/main.html',
            data: {
                isHeaderHidden: true,
                pageName: 'New Bank Draw Request'
            }
        })
        .state('bankdraw.new.payment-application', {
            url: '/payment-application',
            templateUrl: "partials/financials/bankdraw/new/payment-application.html",
            controller: "BankDrawPaymentApplicationCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('bankdraw.new.draw-details', {
            url: '/draw-details',
            templateUrl: "partials/financials/bankdraw/new/draw-details.html",
            controller: "BankDrawDrawDetailsCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('bankdraw.new.compliance', {
            url: '/compliance',
            templateUrl: "partials/financials/bankdraw/new/compliance.html",
            controller: "BankDrawComplianceCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('bankdraw.new.documents', {
            url: '/documents',
            templateUrl: "partials/financials/bankdraw/new/documents.html",
            controller: "BankDrawDocumentsCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('bankdraw.new.payment-details', {
            url: '/payment-details',
            templateUrl: "partials/financials/bankdraw/new/payment-details.html",
            controller: "BankDrawPaymentDetailsCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('bankdraw.new.finalize', {
            url: '/finalize',
            templateUrl: "partials/financials/bankdraw/new/finalize.html",
            controller: "BankDrawFinalizeCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('bankdraw.show', {
            url: '/:id',
            controller: "BankDrawShowCtrl",
            templateUrl: 'partials/financials/bankdraw/show/show.html',
            data: {
                isHeaderHidden: true,
                pageName: 'New Bank Draw Request'
            }
        })
        .state('team-members', {
            url: '/team-members',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Team members'
            }
        })
        .state('team-members.empty', {
            url: '/empty',
            templateUrl: 'partials/team-members/team-members-empty.html',
            controller: 'TeamMembersCtrl'
        })
        .state('team-members.list', {
            url: '/list',
            templateUrl: 'partials/team-members/team-members-list.html',
            controller: 'TeamMembersCtrl'
        })
        .state('team-members.risk', {
            url: '/risk',
            templateUrl: 'partials/team-members/risk.html',
            controller: 'RiskCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Risk Management'
            }
        })
        .state('action-items', {
            url: '/action-items',
            abstract: true,
            template: "<ui-view></ui-view>",
            data: {
                pageName: 'Action Items'
            }
        })
        .state('action-items.main', {
            url: '/main',
            templateUrl: "partials/action-items/action-items.html",
            controller: "ActionItemsCtrl"
        })
        .state('action-items.tasks', {
            url: '/tasks',
            templateUrl: 'partials/action-items/task/list.html',
            controller: 'TaskListCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Tasks'
            }
        })
        .state('action-items.rfi', {
            url: '/rfi',
            abstract: true,
            template: "<ui-view></ui-view>",
            controller: "ActionItemsCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'RFI'
            }
        })
        .state('action-items.rfi.main', {
            url: '/',
            templateUrl: "partials/action-items/rfi/rfi.html",
            controller: "ActionItemsCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'RFI'
            }
        })
        .state('action-items.rfi.new', {
            url: '/new',
            templateUrl: "partials/action-items/rfi/new.html",
            controller: "RFICtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Create New RFI'
            }
        })
        .state('action-items.rfi.in-process', {
            url: '/in-process',
            templateUrl: "partials/action-items/rfi/in-process.html",
            controller: "RFICtrl",
            data: {
                isHeaderHidden: true,
            }
        })
        .state('action-items.change-order', {
            url: '/change-order',
            abstract: true,
            template: "<ui-view></ui-view>",
            controller: "ActionItemsCtrl",
            data: {
                pageName: 'Change Order'
            }
        })
        .state('action-items.change-order.main', {
            url: '/',
            templateUrl: "partials/action-items/change-order.html",
            controller: "ActionItemsCtrl",
            data: {
                pageName: 'Change Orders',
                isHeaderHidden: true
            }
        })
        .state('action-items.change-order.new', {
            url: '/new',
            templateUrl: "partials/action-items/change-order/new.html",
            controller: "ChangeOrderCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Create New Change Order'
            }
        })
        .state('action-items.change-order.in-process', {
            url: '/in-process',
            templateUrl: "partials/action-items/change-order/in-process.html",
            controller: "ChangeOrderInProcessCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Change Order'
            }
        })
        .state('action-items.inspections', {
            url: '/inspections',
            templateUrl: "partials/action-items/inspections.html",
            controller: "ActionItemsCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Inspections'
            }
        })
        .state('action-items.inspections-new', {
            url: '/inspections/new',
            templateUrl: "partials/action-items/inspections/new.html",
            controller: "InspectionsNewCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Add New Inspection'
            }
        })
        .state('action-items.inspections-popup', {
            url: '/inspections-popup',
            templateUrl: "partials/action-items/inspections/main-popup.html",
            controller: "InspectionsMainPopupCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Inspections'
            }
        })
        .state('action-items.punch-items', {
            url: '/punch-items',
            abstract: true,
            template: "<ui-view></ui-view>",
        })
        .state('action-items.punch-items.list', {
            url: '/',
            templateUrl: "partials/action-items/punch-item/list.html",
            controller: "PunchItemListCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Punch List Items'
            }
        })
        .state('action-items.punch-items.new', {
            url: '/new',
            templateUrl: "partials/action-items/punch-item/new.html",
            controller: "PunchItemListCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'New Punch List Item'
            }
        })
        .state('projects', {
            url: '/projects',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Projects'
            }
        })
        .state('projects.main', {
            url: '/main',
            templateUrl: 'partials/projects/projects-overview.html',
            controller: 'ProjectsCtrl',
            data: {
                pageName: 'Project Overview'
            }
        })
        .state('projects.flag_alerts', {
            url: '/flag-alerts?bucket&filter',
            templateUrl: 'partials/projects/project-flag-alerts.html',
            controller: 'ProjectFlagAlertsCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Flag Alerts'
            }
        })
        .state('projects.start', {
            url: '/start',
            templateUrl: 'partials/projects/project-start.html',
            controller: 'ProjectStartCtrl',
            data: {
                pageName: 'Project Start'
            }
        })
        .state('items-requiring-approval', {
            url: '/items-requiring-approval',
            templateUrl: 'partials/projects/items-requiring-approval.html',
            controller: 'ItemsRequiringApprovalCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Items Requiring Approval'
            }
        })
        .state('documents', {
            url: '/documents',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Documents'
            }
        })
        .state('documents.main', {
            url: '/main',
            templateUrl: 'partials/documents/list.html',
            controller: 'DocumentsCtrl'
        })
        .state('bids', {
            url: '/bids',
            abstract: true,
            template: '<ui-view></ui-view>',
            controller: 'BidsCtrl',
            data: {
                pageName: 'Bids'
            }
        })
        .state('bids.main', {
            url: '/main',
            templateUrl: 'partials/bids/bids.html',
            controller: 'BidsMainCtrl'
        })
        .state('bids.compare', {
            url: '/compare',
            templateUrl: 'partials/bids/bids-compare.html',
            controller: 'BidsCompareCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Bids Compare'
            }
        })
        .state('bids.package', {
            url: '/package',
            templateUrl: 'partials/bids/bids-package.html',
            controller: 'BidsPackageCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Bid Package'
            }
        })
        .state('bids.new', {
            url: '/new',
            templateUrl: 'partials/bids/bids-new.html',
            controller: 'BidsCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Create New Bid'
            }
        })
       .state('comm', {
            url: '/communication',
            abstract: true,
            template: '<ui-view></ui-view>',
            controller: 'CommCtrl',
            data: {
                pageName: 'Team Communication'
            }
        })
        .state('comm.main', {
            url: '/main?filter',
            templateUrl: 'partials/comm/comm-main.html',
            controller: 'CommMainCtrl',
            data: {
                pageName: 'Team Communication'
            }
        })
       .state('comm.new', {
            url: '/new',
            templateUrl: 'partials/comm/comm-new.html',
            controller: 'CommNewCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Compose New Message'
            }
        })
        .state('procurement', {
            url: '/procurements',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Procurement'
            }
        })
        .state('procurement.main', {
            url: '/main',
            templateUrl: 'partials/procurement/list.html',
            controller: 'ProcurementsCtrl'
        })
        .state('procurement.new', {
            url:'/new',
            templateUrl: 'partials/procurement/new.html',
            controller: 'ProcurementCreateCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Create New Procurement'
            }
        })
        .state('procurement.show', {
            url:'/:id',
            templateUrl: 'partials/procurement/show.html',
            controller: 'ProcurementShowCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Procurement Detail'
            }
        })
        .state('procurement.create', {
            url:'/create',
            templateUrl: 'partials/procurement/create.html',
            controller: 'ProcurementCreateCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Create New Procurement'
            },
            abstract: true,
        })
        .state('procurement.create.step1', {
            url:'/step1',
            templateUrl: 'partials/procurement/steps/step1.html',
        })
        .state('procurement.create.step2', {
            url:'/step2',
            templateUrl: 'partials/procurement/steps/step2.html',
        })
        .state('procurement.create.step3', {
            url:'/step3',
            templateUrl: 'partials/procurement/steps/step3.html',
        })
        .state('procurement.create.step4', {
            url:'/step4',
            templateUrl: 'partials/procurement/steps/step4.html',
        })
        .state('payment-application', {
            url: '/financials/payment-application',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Create New Pay Application'
            }
        })
        .state('payment-application.initiate', {
            url: '/initiate',
            templateUrl: "partials/financials/payment-application/payment-initiate.html",
            controller: "FinancialsPaymentInitiateCtrl",
            data: {
                isHeaderHidden: true,
            }
        })
        .state('pay-application', {
            url: '/financials/pay-application',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Create New Pay Application'
            }
        })
        .state('pay-application.preview', {
            url: '/preview',
            templateUrl: 'partials/financials/pay-application/preview.html',
            controller: 'PayPreviewCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Pay Application'
            }
        })
        .state('payment-application.finalize', {
            url: '/finalize',
            templateUrl: "partials/financials/payment-application/payment-finalize.html",
            controller: "FinancialsPaymentFinalizeCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('direct-invoice', {
            url: '/fiancials/direct-invoice',
            absolute: true,
            template: '<ui-view></ui-view>'
        })
        .state('direct-invoice.new', {
            url: '/new',
            templateUrl: "partials/financials/direct-invoice/new.html",
            controller: "DirectInvoiceNewCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Create New Direct Invoice'
            }
        })
        .state('direct-invoice.in-process', {
            url: '/:id',
            templateUrl: "partials/financials/direct-invoice/in-process.html",
            controller: "DirectInvoiceInProcessCtrl",
            data: {
                isHeaderHidden: true,
                pageName: "Direct Invoice"
            }
        })
        .state('photos', {
            url: '/photos',
            templateUrl: 'partials/photos/photos.html',
            controller: 'PhotosCtrl',
            data: {
                pageName: 'Your Project Photos'
            }
        })
        .state('schedules', {
            url: '/schedules',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Schedules'
            }
        })
        .state('schedules.main', {
            url: '/main',
            templateUrl: 'partials/schedules/main.html',
            controller: 'SchedulesCtrl'
        })
        .state('schedules.detail', {
            url: '/:id',
            templateUrl: 'partials/schedules/detail.html',
            controller: 'ScheduleDetailCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Schedule Detail'
            }
        })
        .state('baseline-schedule', {
            url: '/baseline-schedule',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Baseline Schedule'
            }
        })
        .state('baseline-schedule.list', {
            url: '/list',
            templateUrl: 'partials/schedules/baseline/list.html',
            controller: 'BaselineScheduleCtrl'
        })
        .state('user', {
            url: '/user',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'User'
            }
        })
        .state('user.profile', {
            url: '/profile',
            templateUrl: 'partials/user/profile.html',
            controller: 'UserProfileCtrl',
            data: {
                pageName: 'User Profile'
            }
        })
        .state('project-profile', {
            url: '/project-profile',
            abstract: true,
            templateUrl: 'partials/project-profile/project-profile.html',
            controller: 'ProjectProfileCtrl',
            data: {
                pageName: 'Project Profile'
            }
        })
        .state('project-profile.construction-loan-parameters', {
            url: '/construction-loan-parameters',
            templateUrl: 'partials/project-profile/construction-loan-parameters.html',
            controller: 'ProjectProfileConstructionLoanCtrl'
        })
        .state('project-profile.division-cost-code', {
            url: '/division-cost-code',
            templateUrl: 'partials/project-profile/division-cost-code.html',
            controller: 'ProjectProfileDivisionCostCodeCtrl'
        })
        .state('project-profile.project-requirements', {
            url: '/project-requirements',
            templateUrl: 'partials/project-profile/project-requirements.html',
            controller: 'ProjectProfileRequirementsCtrl'
        })
        .state('project-profile.project-phases-sow', {
            url: '/project-phases-sow',
            templateUrl: 'partials/project-profile/project-phases-sow.html',
            controller: 'ProjectProfilePhaseSowCtrl'
        })
        .state('project-profile.project-permissions', {
            url: '/project-permissions',
            templateUrl: 'partials/project-profile/project-permissions.html',
            controller: 'ProjectProfilePermissionsCtrl'
        })
        .state('company-profile', {
            url: '/company-profile',
            abstract: true,
            templateUrl: 'partials/company-profile/company-profile.html',
            controller: 'CompanyProfileCtrl',
            data: {
                pageName: 'Company Profile'
            }
        })
        .state('company-profile.profile', {
            url: '/profile',
            templateUrl: 'partials/company-profile/profile.html',
            controller: 'ComProProfileCtrl'
        })
        .state('company-profile.documentation', {
            url: '/documentation',
            templateUrl: 'partials/company-profile/documentation.html',
            controller: 'ComProDocumentationCtrl'
        })
        .state('company-profile.approvals', {
            url: '/approvals',
            templateUrl: 'partials/company-profile/approvals.html',
            controller: 'ComProApprovalsCtrl'
        })
        .state('company-profile.permissions', {
            url: '/permissions',
            templateUrl: 'partials/company-profile/permissions.html',
            controller: 'ComProPermissionsCtrl'
        })
        .state('company-profile.templates', {
            url: '/templates',
            templateUrl: 'partials/company-profile/templates.html',
            controller: 'ComProTemplatesCtrl'
        })
        .state('company-profile.division-cost-code', {
            url: '/division-cost-code',
            templateUrl: 'partials/company-profile/division-cost-code.html',
            controller: 'ComProDivisionCostCodeCtrl'
        })
        .state('company-profile.project-phases-sow', {
            url: '/project-phases-sow',
            templateUrl: 'partials/company-profile/project-phases-sow.html',
            controller: 'ComProProjectPhasesSowCtrl'
        })
        .state('company-profile.project-templates', {
            url: '/project-templates',
            templateUrl: 'partials/company-profile/project-templates.html',
            controller: 'ComProProjectTemplatesCtrl'
        })
        .state('reporting', {
            url: '/reporting',
            absolute: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Reporting'
            }
        })
        .state('reporting.main', {
            url: '/main',
            templateUrl: 'partials/reporting/main.html',
            controller: 'ReportingMainCtrl'
        })
        .state('daily-log', {
            url: '/daily-log',
            templateUrl: "partials/daily-log/daily-log.html",
            controller: "DailyLogCtrl",
            data: {
                pageName: 'Daily Log'
            }
        })
        .state('sample', {
            url: '/sample',
            templateUrl: 'partials/sample/sample.html',
            controller: 'SampleCtrl',
            data: {
                pageName: 'Sample'
            }
        });

}]);

app.run (['$rootScope', '$localStorage', function($rootScope, $localStorage) {
    $rootScope.$on('$stateChangeStart', function(e, to) {
        $rootScope.currentUser = $localStorage.currentUser;
        if (to.controller != 'AuthCtrl' && _.isUndefined($rootScope.currentUser)) {
            window.location.replace("/#!/sign-in");
            e.preventDefault();
        }
        if (to.controller == 'AuthCtrl' && $rootScope.currentUser) {
            window.location.replace("/#!/");
            e.preventDefault();
        }
    });

    $rootScope.$on('$stateChangeSuccess', function(e, to) {
        if (!_.isUndefined(to.data)) {
            $rootScope.isHeaderHidden = to.data.isHeaderHidden;
        } else {
            $rootScope.isHeaderHidden = false;
        }

        $rootScope.pageName = to.data.pageName;
        $rootScope.isShowNotifyBar = false;
    });
}]);

app.constant("projects", [
    {
        id: _.uniqueId(),
        name: "Wilmington 45",
        address: "45 Wilmington Ave",
        city: "Arlington",
        state: "VA",
        zipcode: "90125"
    },
    {
        id: _.uniqueId(),
        name: "Wilmington 46",
        address: "46 Wilmington Ave",
        city: "Arlington",
        state: "VA",
        zipcode: "90125"
    },
    {
        id: _.uniqueId(),
        name: "Wilmington 47",
        address: "47 Wilmington Ave",
        city: "Arlington",
        state: "VA",
        zipcode: "90125"
    },
    {
        id: _.uniqueId(),
        name: "Wilmington 48",
        address: "48 Wilmington Ave",
        city: "Arlington",
        state: "VA",
        zipcode: "90125"
    }]);
app.constant("bidTypes",
    [
        {id: _.uniqueId(), name: 'Equipment'},
        {id: _.uniqueId(), name: 'Labor'},
        {id: _.uniqueId(), name: 'Material'},
        {id: _.uniqueId(), name: 'General'}
    ]);
app.constant("phases",
    [
        {id: _.uniqueId(), name: 'Start Project'},
        {id: _.uniqueId(), name: 'Site Preparation'},
        {id: _.uniqueId(), name: 'Foundation'},
        {id: _.uniqueId(), name: 'Framing'},
        {
            id: _.uniqueId(),
            name: 'Roof',
            subPhases: [
                {id: _.uniqueId(), name: 'Structural Support'},
                {id: _.uniqueId(), name: 'Frame Roof'},
                {id: _.uniqueId(), name: 'Close In Roof'},
                {id: _.uniqueId(), name: 'Roof Material'},
                {id: _.uniqueId(), name: 'Finish Details'}
            ]
        },
        {id: _.uniqueId(), name: 'Exterior'},
        {id: _.uniqueId(), name: 'Windows & Doors'},
        {id: _.uniqueId(), name: 'Painting'},
        {id: _.uniqueId(), name: 'Interior Finishes'},
        {id: _.uniqueId(), name: 'Fixtures & Appliances'},
        {id: _.uniqueId(), name: 'Completed Project'},
        {id: _.uniqueId(), name: 'Contingency Phase'}
    ]);

app.constant("sows",
    [
        {id: _.uniqueId(), name: 'Doors'},
        {id: _.uniqueId(), name: 'Drywall'},
        {id: _.uniqueId(), name: 'Fire Sprinkler Rough In'},
        {id: _.uniqueId(), name: 'Fireplace'},
        {id: _.uniqueId(), name: 'Form Footings'},
        {id: _.uniqueId(), name: 'Form Foundation Walls'},
        {id: _.uniqueId(), name: 'Foundation'},
        {id: _.uniqueId(), name: 'Framing'},
        {id: _.uniqueId(), name: 'Insulation'},
        {id: _.uniqueId(), name: 'Lighting'},
        {id: _.uniqueId(), name: 'Plumbing Rough In'},
        {id: _.uniqueId(), name: 'Prime'},
        {id: _.uniqueId(), name: 'Roof Dry In'},
        {id: _.uniqueId(), name: 'Rough Electrical'},
        {id: _.uniqueId(), name: 'Rough Mechanical'},
        {id: _.uniqueId(), name: 'Rough Plumbing'},
        {id: _.uniqueId(), name: 'Set Steel'},
        {id: _.uniqueId(), name: 'Snow Removal'},
        {id: _.uniqueId(), name: 'Stairs'},
        {id: _.uniqueId(), name: 'Windows'}
    ]);

app.constant("contracts",
    [
        {id: _.uniqueId(), name: 'BID #1002 - Structural Metal'},
        {id: _.uniqueId(), name: 'BID #1007 - Rough Carpentry'},
        {id: _.uniqueId(), name: 'BID #1016 - Concrete'},
        {id: _.uniqueId(), name: 'BID #1042 - Fire Protection'},
        {id: _.uniqueId(), name: 'BID #1058 - Building Service'},
        {id: _.uniqueId(), name: 'BID #1061 - HVAC'},
        {id: _.uniqueId(), name: 'BID #1065 - Electrical'},
        {id: _.uniqueId(), name: 'PO #1018 - RC Metal Works'},
        {id: _.uniqueId(), name: 'PO #1043 - Alpine Fireplace'}
    ]);
app.constant("classifications",
    [
        {id: _.uniqueId(), name: 'Labor'},
        {id: _.uniqueId(), name: 'Materials'},
        {id: _.uniqueId(), name: 'Equipment'},
        {id: _.uniqueId(), name: 'General'}
    ]);

app.constant("categories",
    [
        {id: _.uniqueId(), name: 'Architecture'},
        {id: _.uniqueId(), name: 'Electrical'},
        {id: _.uniqueId(), name: 'Engineering'},
        {id: _.uniqueId(), name: 'Estimating'},
        {id: _.uniqueId(), name: 'HVAC'}
    ]);

app.constant("invoices",
    [
        {id: _.uniqueId(), name: 'INV #1029 - Seasons Waterproofing'},
        {id: _.uniqueId(), name: 'INV #1042 - Summit County'}
    ]);

app.constant("members",
    [{
        id: _.uniqueId(),
        avatar: 'dave.jpg',
        name: 'Dave Musgrove',
        company: 'Premier Heating & Air, Inc.',
        phone: '861-569-6688',
        availability: 'On Site',
        next_sched: '18 Sep, 2015',
        project: 'Wilmington 47',
        role: 'Sub Contractor',
        sow: 'Fire Place',
    }, {
        id: _.uniqueId(),
        avatar: 'mike.jpg',
        name: 'Mike Riley',
        company: 'Canyon River Electric',
        phone: '385-285-8616',
        availability: 'On Site',
        next_sched: '18 Sep, 2015',
        project: 'Wilmington 47',
        role: 'Sub Contractor',
        sow: 'Multiple',
    }, {
        id: _.uniqueId(),
        avatar: 'mary.jpg',
        name: 'Mary Beroset',
        company: 'Wasatch Lighting, Inc.',
        phone: '861-891-1611',
        availability: 'On Site',
        show: 'No Show',
        next_sched: '24 Sep, 2015',
        project: 'Wilmington 47',
        role: 'Designer',
        sow: 'Main Floor Overhead Lighting'
    }, {
        id: _.uniqueId(),
        avatar: 'john.jpg',
        name: 'John Steel',
        company: 'L&L Steel Erection',
        alert: true,
        phone: '861 518 1636',
        availability: 'On Site',
        next_sched: '24 Sep, 2015',
        project: 'Wilmington 47',
        role: 'Sub Contractor',
        sow: 'Fire Place',
    }, {
        id: _.uniqueId(),
        avatar: 'gebo.jpg',
        name: 'Dave Gebo',
        company: 'On Top Roofing',
        alert: false,
        phone: '835 513 6185',
        availability: 'On Site',
        show: 'No Show',
        next_sched: '25 Sep, 2015',
        project: 'Multiple',
        role: 'Sub Contractor',
        sow: 'Multiple',
    }, {
        id: _.uniqueId(),
        avatar: 'dan.jpg',
        name: 'Dan Bonker',
        company: 'Sage Creek Framing Co.',
        alert: true,
        phone: '861 891 5339',
        availability: 'Off Site',
        next_sched: '18 Sep, 2015',
        project: 'Wilmington 47',
        role: 'Sub Contractor',
        sow: 'Frame 2nd Stroy',
    }, {
        id: _.uniqueId(),
        avatar: 'bruce.jpg',
        name: 'Bruce Wayne',
        company: 'Synergy Construction',
        alert: false,
        phone: '801 580 5683',
        availability: 'Off Site',
        next_sched: '18 Sep, 2015',
        project: 'Multiple',
        role: 'General Contractor',
        sow: 'Multiple',
    }, {
        id: _.uniqueId(),
        avatar: 'jeff.jpg',
        name: 'Jeff Price',
        company: 'Probuild',
        alert: false,
        phone: '835 563 6699',
        availability: 'Off Site',
        next_sched: '19 Sep, 2015',
        project: 'Multiple',
        role: 'Supplier',
        sow: 'Multiple',
    }, {
        id: _.uniqueId(),
        avatar: 'peters.jpg',
        name: 'Christian Peters',
        company: 'MyTy Appliance Specialists',
        alert: false,
        phone: '861 998 8283',
        availability: 'Off Site',
        next_sched: '1 Oct, 2015',
        project: 'Wilmington 47',
        role: 'Designer',
        sow: 'Fire Place',
    }, {
        id: _.uniqueId(),
        avatar: 'jane.jpg',
        name: 'Jane Smith',
        alert: false,
        phone: '801 942 1092',
        availability: 'Off Site',
        next_sched: '1 Oct, 2015',
        project: 'Wilmington 47',
        role: 'Owner',
    }]);

app.constant("divisions", [
    {
        id: _.uniqueId(),
        name: "Division 1 General Requirements",
        codes: [
            {id: _.uniqueId(), name: "01100 Summary"},
            {id: _.uniqueId(), name: "01200 Price and Payment Procedures"},
            {id: _.uniqueId(), name: "01300 Administrative Requirements"},
            {id: _.uniqueId(), name: "01400 Quality Requirements"},
            {id: _.uniqueId(), name: "01500 Temporary Facilities and Controls"},
            {id: _.uniqueId(), name: "01600 Product Requirements"},
            {id: _.uniqueId(), name: "01700 Execution Requirements"},
            {id: _.uniqueId(), name: "01800 Facility Operation"},
            {id: _.uniqueId(), name: "01900 Facility Decommissioning"}
        ]
    },
    {
        id: _.uniqueId(),
        name: "Division 2 Site Construction",
        codes: [
            {id: _.uniqueId(), name: "02050 Basic Site Materials and Methods"},
            {id: _.uniqueId(), name: "02100 Site Remediation"},
            {id: _.uniqueId(), name: "02200 Site Preparation"},
            {id: _.uniqueId(), name: "02300 Earthwork"},
            {id: _.uniqueId(), name: "02400 Tunneling, Boring and Jacking"},
            {id: _.uniqueId(), name: "02450 Foundation and Load"},
            {id: _.uniqueId(), name: "02500 Utility Services"},
            {id: _.uniqueId(), name: "02600 Drainage and Containment"},
            {id: _.uniqueId(), name: "02700 Bases, Ballasts, Pavements and Appurtenances"},
            {id: _.uniqueId(), name: "02800 Site Improvements and Amenities"},
            {id: _.uniqueId(), name: "02900 Planting"},
            {id: _.uniqueId(), name: "02950 Site Restoration and Rehabilitation"}
        ]
    },
    {
        id: _.uniqueId(),
        name: "Division 3 Concrete",
        codes: [
            {id: _.uniqueId(), name: "03050 Basic Concrete Materials and Methods"},
            {id: _.uniqueId(), name: "03100 Concrete Forms and Accessories"},
            {id: _.uniqueId(), name: "03200 Concrete Reinforcement"},
            {id: _.uniqueId(), name: "03300 Cast"},
            {id: _.uniqueId(), name: "03400 Precast Concrete"},
            {id: _.uniqueId(), name: "03500 Cementitious Decks and Underlayment"},
            {id: _.uniqueId(), name: "03600 Grouts"},
            {id: _.uniqueId(), name: "03700 Mass Concrete"},
            {id: _.uniqueId(), name: "03900 Concrete Restoration and Cleaning"}
        ]
    },
    {
        id: _.uniqueId(),
        name: "Division 4 Masonry",
        codes: [
            {id: _.uniqueId(), name: "04050 Basic Masonry Materials and Methods"},
            {id: _.uniqueId(), name: "04200 Masonry Units"},
            {id: _.uniqueId(), name: "04400 Stone"},
            {id: _.uniqueId(), name: "04500 Refractories"},
            {id: _.uniqueId(), name: "04600 Corrosion"},
            {id: _.uniqueId(), name: "04700 Simulated Masonry"},
            {id: _.uniqueId(), name: "04800 Masonry Assemblies"},
            {id: _.uniqueId(), name: "04900 Masonry Restoration and Cleaning"}
        ]
    },
    {
        id: _.uniqueId(),
        name: "Division 5 Metals",
        codes: [
            {id: _.uniqueId(), name: "05050 Basic Metal Materials and Methods"},
            {id: _.uniqueId(), name: "05100 Structural Metal Framing"},
            {id: _.uniqueId(), name: "05200 Metal Joists"},
            {id: _.uniqueId(), name: "05300 Metal Deck"},
            {id: _.uniqueId(), name: "05400 Cold"},
            {id: _.uniqueId(), name: "05500 Metal Fabrications"},
            {id: _.uniqueId(), name: "05600 Hydraulic Fabrications"},
            {id: _.uniqueId(), name: "05700 Ornamental Metal"},
            {id: _.uniqueId(), name: "05800 Expansion Control"},
            {id: _.uniqueId(), name: "05900 Metal Restoration and Cleaning"}
        ]
    },
    {
        id: _.uniqueId(),
        name: "Division 6 Wood and Plastics",
        codes: [
            {id: _.uniqueId(), name: "06050 Basic Wood and Plastic Materials and Methods"},
            {id: _.uniqueId(), name: "06100 Rough Carpentry"},
            {id: _.uniqueId(), name: "06200 Finish Carpentry"},
            {id: _.uniqueId(), name: "06400 Architectural Woodwork"},
            {id: _.uniqueId(), name: "06500 Structural Plastics"},
            {id: _.uniqueId(), name: "06600 Plastic Fabrications"},
            {id: _.uniqueId(), name: "06900 Wood and Plastic Restoration and Cleaning"}
        ]
    },
    {
        id: _.uniqueId(),
        name: "Division 7 Thermal and Moisture Protection",
        codes: [
            {id: _.uniqueId(), name: "07050 Basic Thermal and Moisture Protection Materials and Methods"},
            {id: _.uniqueId(), name: "07100 Damproofing and Waterproofing"},
            {id: _.uniqueId(), name: "07200 Thermal Protection"},
            {id: _.uniqueId(), name: "07300 Shingles, Roof Tiles, and Roof Coverings"},
            {id: _.uniqueId(), name: "07400 Roofing and Siding Panels"},
            {id: _.uniqueId(), name: "07500 Membrane Roofing"},
            {id: _.uniqueId(), name: "07600 Flashing and Sheet Metal"},
            {id: _.uniqueId(), name: "07700 Roof Specialties and Accessories"},
            {id: _.uniqueId(), name: "07800 Fire and Smoke Protection"},
            {id: _.uniqueId(), name: "07900 Joint Sealers"},
        ]
    },
    {
        id: _.uniqueId(),
        name: "Division 8 Doors and Windows",
        codes: [
            {id: _.uniqueId(), name: "08050 Basic Door and Window Materials and Methods"},
            {id: _.uniqueId(), name: "08100 Metal Doors and Frames"},
            {id: _.uniqueId(), name: "08200 Wood and Plastic Doors"},
            {id: _.uniqueId(), name: "08300 Specialty Doors"},
            {id: _.uniqueId(), name: "08400 Entrances and Storefronts"},
            {id: _.uniqueId(), name: "08500 Windows"},
            {id: _.uniqueId(), name: "08600 Skylights"},
            {id: _.uniqueId(), name: "08700 Hardware"},
            {id: _.uniqueId(), name: "08800 Glazing"},
            {id: _.uniqueId(), name: "08900 Glazed Curtain Wall"}
        ]
    },
    {
        id: _.uniqueId(),
        name: "Division 9 Finishes",
        codes: [
            {id: _.uniqueId(), name: "09050 Basic Finish Materials and Methods"},
            {id: _.uniqueId(), name: "09100 Metal Support Assemblies"},
            {id: _.uniqueId(), name: "09200 Plaster and Gypsum Board"},
            {id: _.uniqueId(), name: "09300 Tile"},
            {id: _.uniqueId(), name: "09400 Terrazzo"},
            {id: _.uniqueId(), name: "09500 Ceilings"},
            {id: _.uniqueId(), name: "09600 Flooring"},
            {id: _.uniqueId(), name: "09700 Wall Finishes"},
            {id: _.uniqueId(), name: "09800 Acoustical Treatment"},
            {id: _.uniqueId(), name: "09900 Paints and Coatings"}
        ]
    },
    {
        id: _.uniqueId(),
        name: "Division 10 Specialties",
        codes: [
            {id: _.uniqueId(), name: "10100 Visual Display Boards"},
            {id: _.uniqueId(), name: "10150 Compartments and Cubicles"},
            {id: _.uniqueId(), name: "10200 Louvers and Vents"},
            {id: _.uniqueId(), name: "10240 Grilles and Screens"},
            {id: _.uniqueId(), name: "10250 Service Walls"},
            {id: _.uniqueId(), name: "10260 Wall and Corner Guards"},
            {id: _.uniqueId(), name: "10270 Access Flooring"},
            {id: _.uniqueId(), name: "10290 Pest Control"},
            {id: _.uniqueId(), name: "10300 Fireplaces and Stoves"},
            {id: _.uniqueId(), name: "10340 Manufactured Exterior Specialties"},
            {id: _.uniqueId(), name: "10350 Flagpoles"},
            {id: _.uniqueId(), name: "10400 Identification Devices"},
            {id: _.uniqueId(), name: "10450 Pedestrian Control Devices"},
            {id: _.uniqueId(), name: "10500 Lockers"},
            {id: _.uniqueId(), name: "10520 Fire Protection Specialties"},
            {id: _.uniqueId(), name: "10530 Protective Covers"},
            {id: _.uniqueId(), name: "10550 Postal Specialties"},
            {id: _.uniqueId(), name: "10600 Partitions"},
            {id: _.uniqueId(), name: "10670 Storage Shelving"},
            {id: _.uniqueId(), name: "10700 Exterior Protection"},
            {id: _.uniqueId(), name: "10750 Telephone Specialties"},
            {id: _.uniqueId(), name: "10800 Toilet, Bath, and Laundry Specialties"},
            {id: _.uniqueId(), name: "10880 Scales"},
            {id: _.uniqueId(), name: "10900 Wardrobe and Closet Specialties"}
        ]
    },
    {
        id: _.uniqueId(),
        name: "Division 11 Equipment",
        codes: [
            {id: _.uniqueId(), name: "11010 Maintenance Equipment"},
            {id: _.uniqueId(), name: "11020 Security and Vault Equipment"},
            {id: _.uniqueId(), name: "11030 Teller and Service Equipment"},
            {id: _.uniqueId(), name: "11040 Ecclesiastical Equipment"},
            {id: _.uniqueId(), name: "11050 Library Equipment"},
            {id: _.uniqueId(), name: "11060 Theater and Stage Equipment"},
            {id: _.uniqueId(), name: "11070 Instrumental Equipment"},
            {id: _.uniqueId(), name: "11080 Registration Equipment"},
            {id: _.uniqueId(), name: "11090 Checkroom Equipment"},
            {id: _.uniqueId(), name: "11100 Mercantile Equipment"},
            {id: _.uniqueId(), name: "11110 Commercial Laundry and Dry Cleaning Equipment"},
            {id: _.uniqueId(), name: "11120 Vending Equipment"},
            {id: _.uniqueId(), name: "11130 Audio"},
            {id: _.uniqueId(), name: "11140 Vehicle Service Equipment"},
            {id: _.uniqueId(), name: "11150 Parking Control Equipment"},
            {id: _.uniqueId(), name: "11160 Loading Dock Equipment"},
            {id: _.uniqueId(), name: "11170 Solid Waste Handling Equipment"},
            {id: _.uniqueId(), name: "11190 Detention Equipment"},
            {id: _.uniqueId(), name: "11200 Water Supply and Treatment Equipment"},
            {id: _.uniqueId(), name: "11280 Hydraulic Gates and Valves"},
            {id: _.uniqueId(), name: "11300 Fluid Waste Treatment and Disposal Equipment"},
            {id: _.uniqueId(), name: "11400 Food Service Equipment"},
            {id: _.uniqueId(), name: "11450 Residential Equipment"},
            {id: _.uniqueId(), name: "11460 Unit Kitchens"},
            {id: _.uniqueId(), name: "11470 Darkroom Equipment"},
            {id: _.uniqueId(), name: "11480 Athletic, Recreational, and Therapeutic Equipment"},
            {id: _.uniqueId(), name: "11500 Industrial and Process Equipment"},
            {id: _.uniqueId(), name: "11600 Laboratory Equipment"},
            {id: _.uniqueId(), name: "11650 Planetarium Equipment"},
            {id: _.uniqueId(), name: "11660 Observatory Equipment"},
            {id: _.uniqueId(), name: "11680 Office Equipment"},
            {id: _.uniqueId(), name: "11700 Medical Equipment"},
            {id: _.uniqueId(), name: "11780 Mortuary Equipment"},
            {id: _.uniqueId(), name: "11850 Navigation Equipment"},
            {id: _.uniqueId(), name: "11870 Agricultural Equipment"},
            {id: _.uniqueId(), name: "11900 Exhibit Equipment"}
        ]
    },
    {
        id: _.uniqueId(),
        name: "Division 12 Furnishings",
        codes: [
            {id: _.uniqueId(), name: "12050 Fabrics"},
            {id: _.uniqueId(), name: "12100 Art"},
            {id: _.uniqueId(), name: "12300 Manufactured Casework"},
            {id: _.uniqueId(), name: "12400 Furnishings and Accessories"},
            {id: _.uniqueId(), name: "12500 Furniture"},
            {id: _.uniqueId(), name: "12600 Multiple Seating"},
            {id: _.uniqueId(), name: "12700 Systems Furniture"},
            {id: _.uniqueId(), name: "12800 Interior Plants and Planters"},
            {id: _.uniqueId(), name: "12900 Furnishings Restoration and Repair"}
        ]
    },
    {
        id: _.uniqueId(),
        name: "Division 13 Special Construction",
        codes: [
            {id: _.uniqueId(), name: "13010 Air"},
            {id: _.uniqueId(), name: "13020 Building Modules"},
            {id: _.uniqueId(), name: "13030 Special Purpose Rooms"},
            {id: _.uniqueId(), name: "13080 Sound, Vibration, and Seismic Control"},
            {id: _.uniqueId(), name: "13090 Radiation Protection"},
            {id: _.uniqueId(), name: "13100 Lightning Protection"},
            {id: _.uniqueId(), name: "13110 Cathodic Protection"},
            {id: _.uniqueId(), name: "13120 Pre"},
            {id: _.uniqueId(), name: "13150 Swimming Pools"},
            {id: _.uniqueId(), name: "13160 Aquariums"},
            {id: _.uniqueId(), name: "13165 Aquatic Park Facilities"},
            {id: _.uniqueId(), name: "13170 Tubs and Pools"},
            {id: _.uniqueId(), name: "13175 Ice Rinks"},
            {id: _.uniqueId(), name: "13185 Kennels and Animal Shelters"},
            {id: _.uniqueId(), name: "13190 Site"},
            {id: _.uniqueId(), name: "13200 Storage Tanks"},
            {id: _.uniqueId(), name: "13220 Filter Underdrains and Media"},
            {id: _.uniqueId(), name: "13230 Digester Covers and Appurtenances"},
            {id: _.uniqueId(), name: "13240 Oxygenation Systems"},
            {id: _.uniqueId(), name: "13260 Sludge Conditioning Systems"},
            {id: _.uniqueId(), name: "13280 Hazardous Material Remediation"},
            {id: _.uniqueId(), name: "13400 Measurement and Control Instrumentation"},
            {id: _.uniqueId(), name: "13500 Recording Instrumentation"},
            {id: _.uniqueId(), name: "13550 Transportation Control Instrumentation"},
            {id: _.uniqueId(), name: "13600 Solar and Wind Energy Equipment"},
            {id: _.uniqueId(), name: "13700 Security Access and Surveillance"},
            {id: _.uniqueId(), name: "13800 Building Automation and Control"},
            {id: _.uniqueId(), name: "13850 Detection and Alarm"},
            {id: _.uniqueId(), name: "13900 Fire Suppression"}
        ]
    },
    {
        id: _.uniqueId(),
        name: "Division 14 Conveying Systems",
        codes: [
            {id: _.uniqueId(), name: "14100 Dumbwaiters"},
            {id: _.uniqueId(), name: "14200 Elevators"},
            {id: _.uniqueId(), name: "14300 Escalators and Moving Walks"},
            {id: _.uniqueId(), name: "14400 Lifts"},
            {id: _.uniqueId(), name: "14500 Material Handling"},
            {id: _.uniqueId(), name: "14600 Hoists and Cables"},
            {id: _.uniqueId(), name: "14700 Turntables"},
            {id: _.uniqueId(), name: "14800 Scaffolding"},
            {id: _.uniqueId(), name: "14900 Transportation"}
        ]
    },
    {
        id: _.uniqueId(),
        name: "Division 15 Mechanical",
        codes: [
            {id: _.uniqueId(), name: "15050 Basic Mechanical Materials and Methods"},
            {id: _.uniqueId(), name: "15100 Building Service Piping"},
            {id: _.uniqueId(), name: "15200 Process Piping"},
            {id: _.uniqueId(), name: "15300 Fire Protection Piping"},
            {id: _.uniqueId(), name: "15400 Plumbing Fixtures and Equipment"},
            {id: _.uniqueId(), name: "15500 Heat"},
            {id: _.uniqueId(), name: "15600 Refrigeration Equipment"},
            {id: _.uniqueId(), name: "15700 Heating, Ventilating, and Air Conditioning Equipment"},
            {id: _.uniqueId(), name: "15800 Air Distribution"},
            {id: _.uniqueId(), name: "15900 HVAC Instrumentation and Controls"},
            {id: _.uniqueId(), name: "15950 Testing, Adjusting, and Balancing"}
        ]
    },
    {
        id: _.uniqueId(),
        name: "Division 16 Electrical",
        codes: [
            {id: _.uniqueId(), name: "16050 Basic Electrical Materials and Methods"},
            {id: _.uniqueId(), name: "16100 Wiring Methods"},
            {id: _.uniqueId(), name: "16200 Electrical Power"},
            {id: _.uniqueId(), name: "16300 Transmission and Distribution"},
            {id: _.uniqueId(), name: "16400 Low"},
            {id: _.uniqueId(), name: "16500 Lighting"},
            {id: _.uniqueId(), name: "16700 Communications"},
            {id: _.uniqueId(), name: "16800 Sound and Video"}
        ]
    }
]);

app.controller('AppCtrl',
    ['$scope', '$rootScope', '$state', '$localStorage', function ($scope, $rootScope, $state, $localStorage) {

        // Notifications
        $rootScope.isShowNotifyBar = false;

        $scope.$watch('notifications', function(n, o) {
            $scope.unreads = _.size(_.filter(n, function(item) {return !item.isRead}));
        }, true);

        $scope.notifications = [

        ];

        $scope.showNotificationsBar = function() {
            $rootScope.isShowNotifyBar = true;
        };

        $scope.hideNotificationsBar =function() {
            $rootScope.isShowNotifyBar = false;
        }

        $scope.markUnread = function(id, e) {
            var idx = _.findIndex($scope.notifications, function(n) {return n.id == id});
            var notification = $scope.notifications[idx];
            notification.isRead = false;
            e.stopPropagation();
            e.preventDefault();
        };

        $scope.select = function(id) {
            var idx = _.findIndex($scope.notifications, function(n) {return n.id == id});
            var notification = $scope.notifications[idx];
            if (!notification.isRead) {
                notification.isRead = true;
            }
        };

        $scope.logout = function() {
            $localStorage.currentUser = undefined;
            $localStorage.auth = undefined;
            $state.go('sign-in');
        }
    }]);