app.controller('ActionItemsCtrl',
    ['$scope', '$state', '$stateParams', '$uibModal', function($scope, $state, $stateParams, $uibModal) {

        // Action Items Main
        $scope.items = [];
        $scope.pieOptions = {
            type: 'pie',
            height: '50px',
            offset: -90,
            sliceColors: ['#79c485', '#eeeeee'],
            disableTooltips: true
        };
        $scope.gai = {
            state: "action-items.tasks",
            title: "Tasks",
            total: 28,
            green: 6,
            orange: 12,
            red: 8,
            completed: {
                total: 35,
                done: 7
            },
            assignedMe: {
                green: {
                    total: 3,
                    done: 1
                },
                orange: {
                    total: 5,
                    done: 1,
                },
                red: {
                    total: 2,
                    done: 0.5
                }
            }
        };

        $scope.rfi = {
            state: "action-items.rfi.main",
            title: "RFI",
            total: 10,
            green: 3,
            orange: 2,
            red: 2,
            completed: {
                total: 8,
                done: 1
            },
            assignedMe: {
                green: {
                    total: 1,
                    done: 1
                },
                orange: {
                    total: 1,
                    done: 1,
                },
                red: {
                    total: 1,
                    done: 1
                }
            },
            listRequiredByMe: [
                {flag: 'red', title: 'Garage Cement Finish', sTitle: '', due_date: '8/17/2015', responsible: {name: 'Jane Smith', company: ''},initiator: {name: 'Dale Guerra', company: 'All Concrete, Inc'}, sow: ['Concrete Flatwork'].join(', '), status: ['awating approval', 0.2]},
                {flag: 'yellow', title: 'Plumbing', sTitle: '', due_date: '8/19/2015', responsible: {name: 'Bruce Wayne', company: 'Synergy Construction'},initiator: {name: 'Christine Spendlove', company: 'Spendlove Plumbing'}, sow: ['Plumbing'].join(", "), status: ['awating approval', 0.3]},
                {flag: 'green', title: 'Hardwood Floor', sTitle: '', due_date: '9/25/2015', responsible: {name: 'Bruce Wayne', company: 'Synergy Construction'},initiator: {name: 'David Sokol', company: 'Rocky Mountain Ha...'}, sow: ['Hardwood Flooring'].join(", "), status: ['awating approval', 0.3]}
            ],

            listRequiredByOthers: [
                {flag: 'red', title: 'Exposed Roof Section', sTitle: '', due_date: '8/17/2015', responsible: {name: 'Bruce Wayne', company: 'Synergy Construction'},initiator: {name: 'Dave Gebo', company: 'On Top Roofing'}, sow: ['Roof Dry-In'].join(", "), status: ['awating approval', 0]},
                {flag: 'yellow', title: 'Fire Sprinkler Materials', sTitle: '', due_date: '8/20/2015', responsible: {name: 'Beth Wiseman', company: 'Synergy Construction'},initiator: {name: 'Beth Wiseman', company: 'Synergy Construction'}, sow: ['Fire Sprinkler Rough-In'].join(', '), status: ['awating approval', 0]},
                {flag: 'green', title: 'Door Hinges', sTitle: '', due_date: '9/3/2015', responsible: {name: 'Jim White', company: 'All-Purpose Windo...'},initiator: {name: 'Beth Wiseman', company: 'Synergy Construction'}, sow: ['Interior Doors'].join(', '), status: ['awating approval', 0]},
                {flag: 'green', title: 'Insulation Question', sTitle: '', due_date: '9/15/2015', responsible: {name: 'Beth Wiseman', company: 'Synergy Construction'},initiator: {name: 'Mike Bearnson', company: 'Cardall\'s Insulation'}, sow: ['Insulation'].join(', '), status: ['awating approval', 0.3]}
            ],
            listDrafts: [
                {flag: 'draft', title: 'Landscaping Up-keep', sTitle: '', due_date: '-', responsible: {name: '-', company: ''},initiator: {name: 'Beth Wiseman', company: 'Synergy Construction'}, sow: ['Landscaping'].join(', '), status: ['Draft', '-']}
            ],
            listCompleted: [
                {flag: 'completed', title: 'North Side Area Dimensions', sTitle: '', due_date: '1/27/2015', responsible: {name: 'Bruce Wayne', company: 'Synergy Construction'},initiator: {name: 'Dan Meyer', company: 'Redoubt Excava...'}, sow: ['Site Excavation'].join(', '), status: ['Completed', 1]}
            ]
        };

        $scope.changeOrder = {
            state: "action-items.change-order.main",
            title: "Change Order",
            total: 3,
            green: 3,
            orange: 0,
            red: 0,
            completed: {
                total: 3,
                done: 2
            },
            overview: {
                total: 129772,
                in_process: {
                    count: 1,
                    amount: 1200
                },
                completed: {
                    count: 2,
                    amount: 128572
                }
            },
            chart_data: [
                {
                    value: 11,
                    color: "#79c485"
                },
                {
                    value: 8,
                    color: "#f8ac59"
                }
            ],
            chart_options: {
                segmentShowStroke : false,
                percentageInnerCutout : 70, // This is 0 for Pie charts
                animationSteps : 100,
                animationEasing : "easeOutBounce",
                animateRotate : true,
                animateScale : false,
                showTooltips: false
            },
            assignedMe: {
                green: {
                    total: 1,
                    done: 1
                },
                orange: {
                    total: 0,
                    done: 0,
                },
                red: {
                    total: 0,
                    done: 0
                }
            },
            listRequiredByMe: [
                {flag: 'green', title: 'Plumbing Additions', due_date: 'Aug 24, 2015', type: "", responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Christine Spendlove', company: ''}, sow: ['Plumbing'].join(", "), sow_completed: 24, amount: 1200, status: ['Distrubuted', 0]}
            ],
            listRequiredByOthers: [
                // {flag: 'red', title: 'Submit Invoice for Additional Lumber', type: "Secure Ledger Board", due_date: '8/14/2015', responsible: {name: 'Dave Gebo', company: 'ABC Inc'},initiator: {name: 'Jeff Price', company: 'ABC Inc'}, sow: ['Roof Dry-In'].join(', '), sow_completed: 32, amount: 454543, status: ['In Process', 0.2]},
                // {flag: 'red', title: 'Discuss Ventilation Options', due_date: '8/16/2015', responsible: {name: 'Dave Musgrove', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Fireplace Install'].join(', '), sow_completed: 32, amount: 12342, status: ['In Process', 0]},
                // {flag: 'red', title: 'Complete Fireplace Framing', due_date: '8/17/2015', responsible: {name: 'John Steel', company: 'ABC Inc'},initiator: {name: 'John Steel', company: ''}, sow: ['Fireplace Install'].join(', '), sow_completed: 32, amount: 875656, status: ['In Process', 0.8]},
                // {flag: 'yellow', title: 'Electrical Overview', due_date: '8/18/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Mary Beroset', company: 'ABC Inc'}, sow: ['Main Floor Overhead Lighting'].join(', '), sow_completed: 32, amount: 7633, status: ['In Process', 0.3]}
            ],
            listDrafts: [
                // {flag: 'draft', title: 'Discuss Schedule for September', due_date: '9/12/2015', responsible: {name: 'Earnie Rutland', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Base '].join(', '), sow_completed: 32, amount: 278907, status: ['Draft', '-']},
                // {flag: 'draft', title: 'Follow Up on Code', due_date: '-', responsible: {name: '-', company: ''},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Fire Sprinker Rough In'].join(', '), sow_completed: 32, amount: 9765, status: ['Draft', '-']},
                // {flag: 'draft', title: 'Reminder to Input Bid', type: "Secure Ledger Board", due_date: '', responsible: {name: 'Brad Harrison', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Drywall'].join(', '), sow_completed: 32, amount: 34566, status: ['Draft', '-']},
                // {flag: 'draft', title: 'Required Primer', due_date: '-', responsible: {name: 'Mark Stevens', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Prime'].join(', '), sow_completed: 32, amount: 2097, status: ['Draft', '-']}
            ],
            listCompleted: [
                {flag: 'completed', title: 'Carpentry Addition', type: "", due_date: 'Jun 14, 2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Skylar Widdison', company: ''}, sow: ['Rough Carpentry'].join(', '), sow_completed: 32, amount: 80000, status: ['Approved', 1]},
                {flag: 'completed', title: 'Custom Metal Work', due_date: 'Feb 2, 2015', responsible: {name: 'Beth Wiseman', company: ''},initiator: {name: 'John Steel', company: ''}, sow: ['Metal Framing'].join(', '), sow_completed: 32, amount: 48572, status: ['Approved', 1]}
            ]
        };

        var punchList = {
            title: "Punch List",
            total: 5,
            green: 3,
            orange: 1,
            red: 1,
            state: "action-items.punch-items.list",
            completed: {
                total: 5,
                done: 0
            },
            assignedMe: {
                green: {
                    total: 1,
                    done: 0.2
                },
                orange: {
                    total: 1,
                    done: 0.5,
                },
                red: {
                    total: 1,
                    done: 0.7
                }
            }
        };

        $scope.inspections = {
            pieOptions: {
                type: 'pie',
                height: '120px',
                offset: -90,
                sliceColors: ['#fdae46', '#3aabd5', '#79c485'],
                disableTooltips: true
            },
            state: "action-items.inspections",
            title: "Inspection",
            total: 7,
            green: 6,
            orange: 1,
            red: 0,
            completed: {
                total: 8,
                done: 1
            },
            overview: {
                completed: 5,
                pending: 3,
                upcoming: 5,
                total: 13
            },
            assignedMe: {
                green: {
                    total: 2,
                    done: 0.4
                },
                orange: {
                    total: 1,
                    done: 0.3,
                },
                red: {
                    total: 0,
                    done: 0
                }
            },
            pendingList: [
                {
                    flag: 'red',
                    name: "Fuel Gas Piping",
                    type: "City",
                    inspector: {
                        name: "Ben Veromen",
                        company: ""
                    },
                    responsible: {
                        name: "Shane Rappleye",
                        company: "Arlington Gas Pipe Inc."
                    },
                    status: "Ready for Reinspection",
                    documents: 3,
                    date_completion: "Aug 11, 2015 / Aug 18, 2015",
                    order_by_date: "Aug 5, 2015",
                    next_inspection: "Aug 5, 2015",
                    date_completed: "Aug 23, 2015"
                },
                {
                    flag: 'orange',
                    name: "Framing",
                    type: "Owner",
                    inspector: {
                        name: "Bruce Wayne",
                        company: ""
                    },
                    responsible: {
                        name: "Dan Bonker",
                        company: "Sage Creek Framing Co."
                    },
                    status: "Action Required",
                    documents: 1,
                    date_completion: "Aug 19, 2015 / Aug 23, 2015",
                    order_by_date: "Aug 18, 2015",
                    next_inspection: "Aug 20, 2015",
                    date_completed: "Aug 23, 2015"
                },
                {
                    flag: 'green',
                    name: "4-Way Inspection",
                    type: "City",
                    inspector: {
                        name: "Mike Montgomery",
                        company: ""
                    },
                    responsible: {
                        name: "Bruce Wayne",
                        company: "Synergy Construction"
                    },
                    status: "Action Required",
                    documents: 2,
                    date_completion: "Aug 25, 2015 / Aug 29, 2015",
                    order_by_date: "Aug 21, 2015",
                    next_inspection: "Aug 25, 2015",
                    date_completed: "Aug 23, 2015"
                }
            ],
            upcomingList: [
                {
                    flag: 'green',
                    name: "Insulation",
                    type: "City",
                    inspector: {
                        name: "Ben Veromen",
                        company: ""
                    },
                    responsible: {
                        name: "Dave Gebo",
                        company: ""
                    },
                    status: "Scheduled",
                    documents: "-",
                    date_completion: "Sep 11, 2015 / Sep 12, 2015",
                    order_by_date: "Sep 9, 2015",
                    next_inspection: "-",
                    date_completed: "-"
                },
                {
                    flag: 'green',
                    name: "Drywall",
                    type: "Owner",
                    inspector: {
                        name: "Bruce Wayne",
                        company: ""
                    },
                    responsible: {
                        name: "Dave Musgrove",
                        company: ""
                    },
                    status: "Scheduled",
                    documents: "-",
                    date_completion: "Oct 5, 2015 / Oct 10, 2015",
                    order_by_date: "Sep 30, 2015",
                    next_inspection: "-",
                    date_completed: "-"
                },
                {
                    flag: 'green',
                    name: "Plumbing Final",
                    type: "City",
                    inspector: {
                        name: "William Wallance",
                        company: ""
                    },
                    responsible: {
                        name: "John Steel",
                        company: ""
                    },
                    status: "Needs to be Ordered",
                    documents: "-",
                    date_completion: "Oct 5, 2015 / Oct 11, 2015",
                    order_by_date: "Oct 1, 2015",
                    next_inspection: "-",
                    date_completed: "-"
                },
                {
                    flag: 'green',
                    name: "Mechanical Final",
                    type: "City",
                    inspector: {
                        name: "Ben Veromen",
                        company: ""
                    },
                    responsible: {
                        name: "Dave Gebo",
                        company: ""
                    },
                    status: "Needs to be Ordered",
                    documents: "-",
                    date_completion: "-",
                    order_by_date: "-",
                    next_inspection: "-",
                    date_completed: "-"
                },
                {
                    flag: 'green',
                    name: "Building Final",
                    type: "Final",
                    inspector: {
                        name: "Jill Scott",
                        company: ""
                    },
                    responsible: {
                        name: "Mike Hunter",
                        company: ""
                    },
                    status: "Needs to be Ordered",
                    documents: "-",
                    date_completion: "-",
                    order_by_date: "-",
                    next_inspection: "-",
                    date_completed: "-"
                }
            ],
            completedList: [
                {
                    flag: 'completed',
                    name: "Mechanical Rough In",
                    type: "City",
                    inspector: {
                        name: "Ben Veromen",
                        company: ""
                    },
                    responsible: {
                        name: "Mary Beroset",
                        company: ""
                    },
                    status: "Inspection Complete",
                    documents: 3,
                    date_completion: "Jul 16, 2015 / Jul 21, 2015",
                    order_by_date: "Jul 9, 2015",
                    next_inspection: "Jul 21, 2015",
                    date_completed: "4 of 4"
                },
                {
                    flag: 'completed',
                    name: "Plumbing Rough In",
                    type: "City",
                    inspector: {
                        name: "Ben Veromen",
                        company: ""
                    },
                    responsible: {
                        name: "Mike Riley",
                        company: ""
                    },
                    status: "Inspection Complete",
                    documents: 1,
                    date_completion: "Jun 24, 2015 / Jun 30, 2015",
                    order_by_date: "Jun 21, 2015",
                    next_inspection: "Jun 25, 2015",
                    date_completed: "11 of 11"
                },
                {
                    flag: 'completed',
                    name: "Roof Sheating & Shearwall",
                    type: "Owner",
                    inspector: {
                        name: "Bruce Wayne",
                        company: ""
                    },
                    responsible: {
                        name: "Mike Bearnson",
                        company: ""
                    },
                    status: "Inspection Complete",
                    documents: 1,
                    date_completion: "Apr 13, 2015 / Apr 15, 2015",
                    order_by_date: "Apr 2, 2015",
                    next_inspection: "Apr 14, 2015",
                    date_completed: "2 of 2"
                },
                {
                    flag: 'completed',
                    name: "Underfloor",
                    type: "Owner",
                    inspector: {
                        name: "Bruce Wayne",
                        company: ""
                    },
                    responsible: {
                        name: "Jim White",
                        company: ""
                    },
                    status: "Inspection Complete",
                    documents: 2,
                    date_completion: "Apr 5, 2015 / Apr 7, 2015",
                    order_by_date: "Mar 30, 2015",
                    next_inspection: "Apr 7, 2015",
                    date_completed: "3 of 3"
                },
                {
                    flag: 'completed',
                    name: "Footing & Foundation",
                    type: "Bank",
                    inspector: {
                        name: "Jill Scott",
                        company: ""
                    },
                    responsible: {
                        name: "Earnie Rutland",
                        company: ""
                    },
                    status: "Inspection Complete",
                    documents: 1,
                    date_completion: "Feb 20, 2015 / Feb 30, 2015",
                    order_by_date: "Feb 19, 2015",
                    next_inspection: "Feb 27, 2015",
                    date_completed: "9 of 9"
                }
            ],
            draftsList: [
                {
                    flag: 'edit',
                    name: "4-Way",
                    type: "",
                    inspector: {
                        name: "",
                        company: ""
                    },
                    responsible: {
                        name: "Bruce Wayne",
                        company: "Synergy Construction"
                    },
                    status: "Draft",
                    documents: 1,
                    date_completion: "-",
                    order_by_date: "Aug 21, 2015",
                    next_inspection: "-",
                    date_completed: "-"
                },
                {
                    flag: 'edit',
                    name: "Main Water Line",
                    type: "City",
                    inspector: {
                        name: "William Wallance",
                        company: ""
                    },
                    responsible: {
                        name: "Bruce Wayne",
                        company: "Synergy Construction"
                    },
                    status: "Draft",
                    documents: "-",
                    date_completion: "-",
                    order_by_date: "-",
                    next_inspection: "-",
                    date_completed: "-"
                }
            ]
        };

        $scope.showNewTaskModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/action-items/task/task-modal.html',
                controller: 'TaskModalCtrl',
                windowClass: 'gai-modal',
                resolve: {
                    currentTask: function () {
                        return {no: '1483', date: '8/10/2015', initiator: {name: 'Bruce Wayne'}, company: 'Synergy Construction', role: 'General Contractor', assignee: 1};
                    }
                }
            });

            modalInstance.result.then(function(res) {

            }, function() {

            });
        };


        $scope.round = function(val) {
            return Math.round(val);
        };

        $scope.goDetails = function(state) {
            $state.go(state);
        }

        $scope.go = function(state) {
            $state.go(state);
        }

        $scope.items.push($scope.gai);
        $scope.items.push($scope.rfi);
        $scope.items.push($scope.changeOrder);
        $scope.items.push(punchList);
        $scope.items.push($scope.inspections);

        // Inspection Table Gear Button
        $('body').on('shown.bs.dropdown', '.gear-dropdown', function () {
            var offsetRight = $(this).parentsUntil('.inspection-table').last().offset().left +
                              $(this).parentsUntil('.inspection-table').last().width() -
                              $(this).find('a.dropdown-toggle').offset().left -
                              $(this).find('a.dropdown-toggle').width();
            var offsetTop = $(this).find('a.dropdown-toggle').offset().top - $(this).parentsUntil('.inspection-table').last().offset().top

            $(this).find('ul.dropdown-menu').css('top', offsetTop + 10);
            $(this).find('ul.dropdown-menu').css('right', offsetRight + 10);
        });
    }]);
