app.controller('ProjectProfilePermissionsCtrl',
    ['$scope', function($scope) {
        $scope.$parent.setCurrentTab('project-profile.project-permissions');

        $scope.isEmpty = function(obj) {
            return Object.keys(obj).length == 0;
        };

        $scope.toggle = function(node) {
            node.collapsed = !node.collapsed;
            _.each($scope.data, function(r) {
                handle = _.find(r.data, function(n) {
                    return n.id == node.id;
                });
                handle.collapsed = node.collapsed;
            });
        };

        $scope.selectRow = function(child) {
            _.each($scope.tree, function(node) {
                _.each(node.children, function(k) {
                    if(k.id == child.id) {
                        k.selected = true;
                    } else {
                        k.selected = false;
                    }
                });
            });
            _.each($scope.data, function(p) {
                p.all_selected = false;
                p.selected = false;
                _.each(p.data, function(k) {
                    _.each(k.children, function(l) {
                        if(l.id == child.id) {
                            l.selected = true;
                        } else {
                            l.selected = false;
                        }
                    });
                });
            });

        };

        $scope.selectPerson = function(person) {
            _.each($scope.tree, function(node) {
                _.each(node.children, function(k) {
                    k.selected = false;
                });
            });

            _.each($scope.data, function(p) {
                if (p == person) {
                    p.selected = true;
                    p.all_selected = true;

                    _.each(p.data, function(node) {
                        _.each(node.children, function(child) {
                            child.selected = true;
                        });
                    });
                } else {
                    p.selected = false;
                    _.each(p.data, function(node) {
                        _.each(node.children, function(child) {
                            child.selected = false;
                        });
                    });
                }
            });
        };

        $scope.selectCell = function(person, item) {
            _.each($scope.data, function(r) {
                r.all_selected = false;
                if (r == person) {
                    r.selected = true;
                } else {
                    r.selected = false;
                }

                _.each(r.data, function(i) {
                    _.each(i.children, function(k) {
                        if (k.id == item.id && r == person) {
                            k.selected = true;
                        } else {
                            k.selected = false;
                        }
                    });
                });
            });

            _.each($scope.tree, function(node) {
                _.each(node.children, function(k) {
                    if(k.id == item.id) {
                        k.selected = true;
                    } else {
                        k.selected = false;
                    }
                });
            });

            $scope.selectedPerson = person;
            $scope.popover = angular.copy(item);
            $scope.selectedItem = item;
        };

        $scope.save = function() {
            $scope.selectedItem.all = angular.copy($scope.popover.all);
            $scope.selectedItem.specific = angular.copy($scope.popover.specific);
        };

        $scope.data = [
            {
                name: 'Bob Jones',
                role: 'Project Super Admin',
                avatar: 'ben.jpg',
                color: 'warning',
                data: [
                    {
                        id: 'project',
                        children: [
                            {
                                id: 'profile',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'templates',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'workflow',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'team_members',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'reporting',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'project_team_access',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            }
                        ]
                    },
                    {
                        id: 'action_items',
                        children: [
                            {
                                id: 'general_action_items',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'rfi',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'submittal',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'punch_list',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'inspections',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            }
                        ]
                    },
                    {
                        id: 'communication',
                        children: [
                            {
                                id: 'chat',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'critical_messages',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true
                                },
                                specific: {
                                    destroy: true
                                }
                            },
                            {
                                id: 'meetings',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true

                                },
                                specific: {
                                    destroy: true
                                }
                            }
                        ]
                    },
                    {
                        id: 'scheduling',
                        children: [
                            {
                                id: 'scope_of_work',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'phase',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'subphase',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'schedule_line_item',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'procurement_item',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            }
                        ]
                    },
                    {
                        id: 'documents',
                        children: [
                            {
                                id: 'general',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'contacts',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true
                                },
                                specific: {
                                    destroy: true
                                }
                            },
                            {
                                id: 'drawings',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true
                                },
                                specific: {
                                    destroy: true
                                }
                            }
                        ]
                    },
                    {
                        id: 'photos',
                        children: [
                            {
                                id: 'project_photos',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            }
                        ]
                    },
                    {
                        id: 'financials'
                    },
                    {
                        id: 'selections'
                    }
                ]
            },

            {
                name: 'Eric Hoffman',
                role: 'Project Admin',
                avatar: '1.png',
                color: 'success',
                data: [
                    {
                        id: 'project',
                        children: [
                            {
                                id: 'profile',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'templates',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'workflow',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'team_members',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'reporting',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'project_team_access',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            }
                        ]
                    },
                    {
                        id: 'action_items',
                        children: [
                            {
                                id: 'general_action_items',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            },
                            {
                                id: 'rfi',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            },
                            {
                                id: 'submittal',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            },
                            {
                                id: 'punch_list',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            },
                            {
                                id: 'inspections',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            }
                        ]
                    },
                    {
                        id: 'communication',
                        children: [
                            {
                                id: 'chat',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            },
                            {
                                id: 'critical_messages',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            },
                            {
                                id: 'meetings',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            }
                        ]
                    },
                    {
                        id: 'scheduling',
                        children: [
                            {
                                id: 'scope_of_work',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'phase',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'subphase',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'schedule_line_item',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'procurement_item',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            }
                        ]
                    },
                    {
                        id: 'documents',
                        children: [
                            {
                                id: 'general',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'contacts',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true
                                },
                                specific: {
                                    destroy: true
                                }
                            },
                            {
                                id: 'drawings',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true
                                },
                                specific: {
                                    destroy: true
                                }
                            }
                        ]
                    },
                    {
                        id: 'photos',
                        children: [
                            {
                                id: 'project_photos',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            }
                        ]
                    },
                    {
                        id: 'financials'
                    },
                    {
                        id: 'selections'
                    }
                ]
            },

            {
                name: 'David Hunter',
                role: 'Project Admin',
                avatar: '3.png',
                color: 'success',
                data: [
                    {
                        id: 'project',
                        children: [
                            {
                                id: 'profile',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'templates',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'workflow',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'team_members',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'reporting',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'project_team_access',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            }
                        ]
                    },
                    {
                        id: 'action_items',
                        children: [
                            {
                                id: 'general_action_items',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'rfi',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'submittal',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'punch_list',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'inspections',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            }
                        ]
                    },
                    {
                        id: 'communication',
                        children: [
                            {
                                id: 'chat',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'critical_messages',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true
                                },
                                specific: {
                                    destroy: true
                                }
                            },
                            {
                                id: 'meetings',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true

                                },
                                specific: {
                                    destroy: true
                                }
                            }
                        ]
                    },
                    {
                        id: 'scheduling',
                        children: [
                            {
                                id: 'scope_of_work',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'phase',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'subphase',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'schedule_line_item',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'procurement_item',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            }
                        ]
                    },
                    {
                        id: 'documents',
                        children: [
                            {
                                id: 'general',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'contacts',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true
                                },
                                specific: {
                                    destroy: true
                                }
                            },
                            {
                                id: 'drawings',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true
                                },
                                specific: {
                                    destroy: true
                                }
                            }
                        ]
                    },
                    {
                        id: 'photos',
                        children: [
                            {
                                id: 'project_photos',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            }
                        ]
                    },
                    {
                        id: 'financials'
                    },
                    {
                        id: 'selections'
                    }
                ]
            },

            {
                name: 'Daniel Jenkins',
                role: 'Contractor',
                avatar: '4.png',
                data: [
                    {
                        id: 'project',
                        children: [
                            {
                                id: 'profile',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'templates',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'workflow',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'team_members',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'reporting',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'project_team_access',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            }
                        ]
                    },
                    {
                        id: 'action_items',
                        children: [
                            {
                                id: 'general_action_items',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            },
                            {
                                id: 'rfi',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            },
                            {
                                id: 'submittal',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            },
                            {
                                id: 'punch_list',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            },
                            {
                                id: 'inspections',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            }
                        ]
                    },
                    {
                        id: 'communication',
                        children: [
                            {
                                id: 'chat',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            },
                            {
                                id: 'critical_messages',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            },
                            {
                                id: 'meetings',
                                all: {
                                    create: true
                                },
                                specific: {
                                    read: true,
                                    edit: true,
                                    destroy: true
                                }
                            }
                        ]
                    },
                    {
                        id: 'scheduling',
                        children: [
                            {
                                id: 'scope_of_work',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'phase',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'subphase',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'schedule_line_item',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'procurement_item',
                                all: {
                                    read: true
                                },
                                specific: {
                                }
                            }
                        ]
                    },
                    {
                        id: 'documents',
                        children: [
                            {
                                id: 'general',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            },
                            {
                                id: 'contacts',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true
                                },
                                specific: {
                                    destroy: true
                                }
                            },
                            {
                                id: 'drawings',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true
                                },
                                specific: {
                                    destroy: true
                                }
                            }
                        ]
                    },
                    {
                        id: 'photos',
                        children: [
                            {
                                id: 'project_photos',
                                all: {
                                    create: true,
                                    read: true,
                                    edit: true,
                                    destroy: true
                                },
                                specific: {
                                }
                            }
                        ]
                    },
                    {
                        id: 'financials'
                    },
                    {
                        id: 'selections'
                    }
                ]
            },

            {
                name: 'John Cook',
                role: 'Contractor',
                avatar: 'users/dan.jpg',
                data: [
                    {
                        id: 'project',
                        children: [
                            {
                                id: 'profile',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'templates',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'workflow',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'team_members',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'reporting',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'project_team_access',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'action_items',
                        children: [
                            {
                                id: 'general_action_items',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'rfi',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'submittal',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'punch_list',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'inspections',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'communication',
                        children: [
                            {
                                id: 'chat',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'critical_messages',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'meetings',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'scheduling',
                        children: [
                            {
                                id: 'scope_of_work',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'phase',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'subphase',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'schedule_line_item',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'procurement_item',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'documents',
                        children: [
                            {
                                id: 'general',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'contacts',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'drawings',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'photos',
                        children: [
                            {
                                id: 'project_photos',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'financials'
                    },
                    {
                        id: 'selections'
                    }
                ]
            },

            {
                name: 'Elizabeth Ross',
                role: 'Contractor',
                avatar: 'elizabeth.png',
                data: [
                    {
                        id: 'project',
                        children: [
                            {
                                id: 'profile',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'templates',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'workflow',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'team_members',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'reporting',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'project_team_access',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'action_items',
                        children: [
                            {
                                id: 'general_action_items',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'rfi',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'submittal',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'punch_list',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'inspections',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'communication',
                        children: [
                            {
                                id: 'chat',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'critical_messages',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'meetings',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'scheduling',
                        children: [
                            {
                                id: 'scope_of_work',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'phase',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'subphase',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'schedule_line_item',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'procurement_item',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'documents',
                        children: [
                            {
                                id: 'general',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'contacts',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'drawings',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'photos',
                        children: [
                            {
                                id: 'project_photos',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'financials'
                    },
                    {
                        id: 'selections'
                    }
                ]
            },

            {
                name: 'Anthony Bailey',
                role: 'SubContractor',
                avatar: 'users/mike.jpg',
                data: [
                    {
                        id: 'project',
                        children: [
                            {
                                id: 'profile',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'templates',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'workflow',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'team_members',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'reporting',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'project_team_access',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'action_items',
                        children: [
                            {
                                id: 'general_action_items',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'rfi',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'submittal',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'punch_list',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'inspections',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'communication',
                        children: [
                            {
                                id: 'chat',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'critical_messages',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'meetings',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'scheduling',
                        children: [
                            {
                                id: 'scope_of_work',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'phase',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'subphase',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'schedule_line_item',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'procurement_item',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'documents',
                        children: [
                            {
                                id: 'general',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'contacts',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'drawings',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'photos',
                        children: [
                            {
                                id: 'project_photos',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'financials'
                    },
                    {
                        id: 'selections'
                    }
                ]
            },

            {
                name: 'Anthony Powell',
                role: 'SubContractor',
                avatar: 'users/dave_gebo.jpg',
                data: [
                    {
                        id: 'project',
                        children: [
                            {
                                id: 'profile',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'templates',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'workflow',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'team_members',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'reporting',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'project_team_access',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'action_items',
                        children: [
                            {
                                id: 'general_action_items',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'rfi',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'submittal',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'punch_list',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'inspections',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'communication',
                        children: [
                            {
                                id: 'chat',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'critical_messages',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'meetings',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'scheduling',
                        children: [
                            {
                                id: 'scope_of_work',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'phase',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'subphase',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'schedule_line_item',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'procurement_item',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'documents',
                        children: [
                            {
                                id: 'general',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'contacts',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'drawings',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'photos',
                        children: [
                            {
                                id: 'project_photos',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'financials'
                    },
                    {
                        id: 'selections'
                    }
                ]
            },

            {
                name: 'Dave Musgrave',
                role: 'Contractor',
                avatar: 'users/dave.jpg',
                data: [
                    {
                        id: 'project',
                        children: [
                            {
                                id: 'profile',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'templates',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'workflow',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'team_members',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'reporting',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'project_team_access',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'action_items',
                        children: [
                            {
                                id: 'general_action_items',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'rfi',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'submittal',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'punch_list',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'inspections',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'communication',
                        children: [
                            {
                                id: 'chat',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'critical_messages',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'meetings',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'scheduling',
                        children: [
                            {
                                id: 'scope_of_work',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'phase',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'subphase',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'schedule_line_item',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'procurement_item',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'documents',
                        children: [
                            {
                                id: 'general',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'contacts',
                                all: {},
                                specific: {}
                            },
                            {
                                id: 'drawings',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'photos',
                        children: [
                            {
                                id: 'project_photos',
                                all: {},
                                specific: {}
                            }
                        ]
                    },
                    {
                        id: 'financials'
                    },
                    {
                        id: 'selections'
                    }
                ]
            }

        ];

        $scope.tree = [
            {
                id: 'project',
                name: 'Project',
                collapsed: false,
                children: [
                    {id: 'profile', name: 'Profile'},
                    {id: 'templates', name: 'Templates'},
                    {id: 'workflow', name: 'Workflow'},
                    {id: 'team_members', name: 'Team Members'},
                    {id: 'reporting', name: 'Reporting'},
                    {id: 'project_team_access', name: 'Project Team Access'}
                ]
            },
            {
                id: 'action_items',
                name: 'Action Items',
                collapsed: false,
                children: [
                    {id: 'general_action_items', name: 'General Action Items'},
                    {id: 'rfi', name: 'RFI'},
                    {id: 'submittal', name: 'Submittal'},
                    {id: 'punch_list', name: 'Punchlist'},
                    {id: 'inspections', name: 'Inspections'}
                ]
            },
            {
                id: 'communication',
                name: 'Communication',
                collapsed: false,
                children: [
                    {id: 'chat', name: 'Chat'},
                    {id: 'critical_messages', name: 'Critical Messages'},
                    {id: 'meetings', name: 'Meetings'}
                ]
            },
            {
                id: 'scheduling',
                name: 'Scheduling',
                collapsed: false,
                children: [
                    {id: 'scope_of_work', name: 'Scope of Work'},
                    {id: 'phase', name: 'Phase'},
                    {id: 'subphase', name: 'Sub Phase'},
                    {id: 'schedule_line_item', name: 'Schedule Line Item'},
                    {id: 'procurement_item', name: 'Procurement Item'}
                ]
            },
            {
                id: 'documents',
                name: 'Documents',
                collapsed: false,
                children: [
                    {id: 'general', name: 'General'},
                    {id: 'contacts', name: 'Contacts'},
                    {id: 'drawings', name: 'Drawings'}
                ]
            },
            {
                id: 'photos',
                name: 'Photos',
                collapsed: false,
                children: [
                    {id: 'project_photos', name: 'Project Photos'}
                ]
            },
            {
                id: 'financials',
                name: 'Financials',
                collapsed: true,
                children: []
            },
            {
                id: 'selections',
                name: 'Selections',
                collapsed: true,
                children: []
            }
        ]
    }])
