app.controller('FinancialsBudgetCtrl',
    ['$scope', '$state', '$timeout', '$uibModal', function ($scope, $state, $timeout, $uibModal) {

        $scope.$parent.setCurrentTab($state.current.name);

        $scope.budgets = [
            {
                id: _.uniqueId(),
                name: "General Requirements",
                division: 'DIVISION 1',
                labor: 263991,
                materials: '',
                equipment: '',
                misc: '',
                total: 263991,
                items: 0,
                status: 0,
                cpsf: 26.97,
                percent_of_project: 9.50,

                children: [
                  {
                    id: _.uniqueId(),
                    name: "01100 Summary",
                    labor: '',
                    materials: '',
                    equipment: '',
                    misc: '',
                    total: '',
                    items: 0,
                    status: 0,
                    cpsf: '',
                    percent_of_project: 0.00
                  },
                  {
                    name: "01200 Price and Payment Procedures",
                    labor: "",
                    materials: "",
                    equipment: "",
                    misc: "",
                    total: "",
                    items: 0,
                    status: 0,
                    cpsf: "",
                    percent_of_project: 0.00
                  },
                  {
                    name: "01300 Administrative Requirements",
                    labor: 112272,
                    materials: "",
                    equipment: "",
                    misc: "",
                    total: 112272,
                    items: 0,
                    status: 0,
                    cpsf: 11.47,
                    percent_of_project: 4.00
                  },
                  {
                    name: "",
                    labor: 55532,
                    materials: "",
                    equipment: "",
                    misc: "",
                    total: 55532,
                    items: "EST #1002",
                    status: "Estimate",
                    cpsf: 0,
                    percent_of_project: 0,
                    detail: {
                        division: [
                            {name: "Division 1 General Requirements"}
                        ],
                        cost_code: [
                            "01300"
                        ],
                        sow: [
                            "None"
                        ]
                    }
                  },
                  {
                    name: "",
                    labor: 56740,
                    materials: "",
                    equipment: "",
                    misc: "",
                    total: 56740,
                    items: "INV #1003",
                    status: "PA #1052",
                    cpsf: 0,
                    percent_of_project: 0
                  },
                  {
                    name: "01400 Quality Requirements",
                    labor: "",
                    materials: "",
                    equipment: "",
                    misc: "",
                    total: "",
                    items: 0,
                    status: 0,
                    cpsf: "",
                    percent_of_project: 0.00
                  },
                  {
                    name: "01500 Temporary Facilities and Controls",
                    labor: "",
                    materials: "",
                    equipment: "",
                    misc: "",
                    total: "",
                    items: 0,
                    status: 0,
                    cpsf: "",
                    percent_of_project: 0.00
                  },
                  {
                    name: "01600 Product Requirements",
                    labor: "",
                    materials: "",
                    equipment: "",
                    misc: "",
                    total: "",
                    items: 0,
                    status: 0,
                    cpsf: "",
                    percent_of_project: 0.00
                  },
                  {
                    name: "01700 Execution Requirements",
                    labor: 151719,
                    materials: "",
                    equipment: "",
                    misc: "",
                    total: 151719,
                    items: 0,
                    status: 0,
                    cpsf: 15.50,
                    percent_of_project: 5.40
                  },
                  {
                    name: "",
                    labor: 151719,
                    materials: "",
                    equipment: "",
                    misc: "",
                    total: 151719,
                    items: "INV #1004",
                    status: "PA #1055",
                    cpsf: 0,
                    percent_of_project: 0
                  },
                  {
                    name: "01800 Facility Operation",
                    labor: "",
                    materials: "",
                    equipment: "",
                    misc: "",
                    total: "",
                    items: 0,
                    status: 0,
                    cpsf: "",
                    percent_of_project: 0.00
                  },
                  {
                    name: "01900 Facility Decommissioning",
                    labor: "",
                    materials: "",
                    equipment: "",
                    misc: "",
                    total: "",
                    items: 0,
                    status: 0,
                    cpsf: "",
                    percent_of_project: 0.00
                  }
                ]
            },

            {
                "name": "Site Construction",
                "division": "DIVISION 2",
                "labor": 30500,
                "materials": 120000,
                "equipment": 5500,
                "misc": 5900,
                "total": 215000,
                "items": 0,
                "cpsf": 21.97,
                "percent_of_project": 7.70,
                children: [
                  {
                    "name": "02050 Basic Site Materials and Methods",
                    "labor": 14000,
                    "materials": 32000,
                    "equipment": "",
                    "misc": "",
                    "total": 46000,
                    "items": '',
                    "cpsf": 4.70,
                    "percent_of_project": 1.60
                  },
                  {
                    "name": "",
                    "labor": 12000,
                    "materials": 21354,
                    "equipment": "",
                    "misc": "",
                    "total": 33354,
                    "items": "EST #1005",
                    "cpsf": '',
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": 2000,
                    "materials": 10646,
                    "equipment": "",
                    "misc": "",
                    "total": 12646,
                    "items": "INV #1006",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "02100 Site Remediation",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": 0,
                    "cpsf": "",
                    "percent_of_project": 0.0
                  },
                  {
                    "name": "02200 Site Preparation",
                    "labor": 16500,
                    "materials": 88000,
                    "equipment": 5500,
                    "misc": "",
                    "total": 110000,
                    "items": 0,
                    "cpsf": 11.24,
                    "percent_of_project": 3.90
                  },
                  {
                    "name": "",
                    "labor": 5130,
                    "materials": 27362,
                    "equipment": 1710,
                    "misc": "",
                    "total": 34203,
                    "items": "EST #1007",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": '',
                    "labor": 11370,
                    "materials": 60638,
                    "equipment": 3790,
                    "misc": 0,
                    "total": 75797,
                    "items": "PO #1009",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "02300 Earthwork",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "02400 Tunneling, Boring and Jacking",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "02450 Foundation and Load Bearing Elements",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "02500 Utility Services",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 19000,
                    "total": 19000,
                    "items": "",
                    "cpsf": 194,
                    "percent_of_project": 0.70
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 15704,
                    "total": 15704,
                    "items": "EST #1010",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 3296,
                    "total": 3296,
                    "items": "PO #1015",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "02600 Drainage and Containment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "02700 Bases, Ballasts, Pavements and Appurtenances",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "02800 Site Improvements and Amenities",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 30000,
                    "total": 30000,
                    "items": "",
                    "cpsf": 3.06,
                    "percent_of_project": 1.1
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 30000,
                    "total": 30000,
                    "items": "EST #1013",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "02900 Planting",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "02950 Site Restoration and Rehabilitation",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 10000,
                    "total": 10000,
                    "items": "",
                    "cpsf": 1.02,
                    "percent_of_project": 0.4
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 10000,
                    "total": 10000,
                    "items": "EST #1014",
                    "cpsf": "",
                    "percent_of_project": ""
                  }
                ]
            },

            {
                "name": "Concrete",
                "division": "DIVISION 3",
                "labor": 27900,
                "materials": 164600,
                "equipment": "",
                "misc": 5000,
                "total": 197500,
                "items": "",
                "cpsf": 20.18,
                "percent_of_project": 7.1,
                children:
                [
                  {
                    "name": "03050 Basic Concrete Materials and Methods",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 5000,
                    "total": 5000,
                    "items": "",
                    "cpsf": 0.51,
                    "percent_of_project": 0.2
                  },
                  {
                    "name": 0,
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 5000,
                    "total": 5000,
                    "items": "EST #1017",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "03100 Concrete Forms and Accessories",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "03200 Concrete Reinforcement",
                    "labor": 27900,
                    "materials": 164600,
                    "equipment": "",
                    "misc": "",
                    "total": 192500,
                    "items": "",
                    "cpsf": 19.67,
                    "percent_of_project": 6.9,
                    "depth": 2,
                    children: [
                      {
                        "name": "SOW:  Foundation",
                        "labor": 23100,
                        "materials": 129400,
                        "equipment": "",
                        "misc": "",
                        "total": 152500,
                        "items": "",
                        "cpsf": "",
                        "percent_of_project": ""
                      },
                      {
                        "name": "",
                        "labor": 4163,
                        "materials": 30529,
                        "equipment": "",
                        "misc": "",
                        "total": 34692,
                        "items": "EST #1015",
                        "cpsf": "",
                        "percent_of_project": "",
                        detail: {
                            division: [
                                {name: "Division 3 Concrete"}
                            ],
                            cost_code: [
                                "03200"
                            ],
                            sow: [
                                "Foundation"
                            ]
                        }
                      },
                      {
                        "name": "",
                        "labor": 18937,
                        "materials": 98871,
                        "equipment": "",
                        "misc": "",
                        "total": 117808,
                        "items": "BID #1016",
                        "cpsf": "",
                        "percent_of_project": ""
                      },
                      {
                        "name": "SOW:  Fireplace",
                        "labor": 4800,
                        "materials": 35200,
                        "equipment": "",
                        "misc": "",
                        "total": 40000,
                        "items": "",
                        "cpsf": "",
                        "percent_of_project": ""
                      },
                      {
                        "name": "",
                        "labor": 4800,
                        "materials": 35200,
                        "equipment": "",
                        "misc": "",
                        "total": 40000,
                        "items": "BID #1016",
                        "cpsf": "",
                        "percent_of_project": 0.00
                      },
                    ]
                  },
                  {
                    "name": "03300 Cast In",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "03400 Precast Concrete",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "03500 Cementitious Decks and Underlayment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "03600 Grouts",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "03700 Mass Concrete",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "03900 Concrete Restoration and Cleaning",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  }
                ]
            },

            {
                "name": "Masonry",
                "division": "DIVISION 4",
                "labor": "",
                "materials": "",
                "equipment": "",
                "misc": 155000,
                "total": 155000,
                "items": "",
                "cpsf": 15.84,
                "percent_of_project": 5.6,
                children:
                [
                  {
                    "name": "04050 Basic Masonry Materials and Methods",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "04200 Masonry Units",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "04400 Stone",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 155000,
                    "total": 155000,
                    "items": "",
                    "cpsf": 15.84,
                    "percent_of_project": 5.60
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 155000,
                    "total": 155000,
                    "items": "EST #1019",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "04500 Refractories",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "04600 Corrosion Resistant Masonry",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "04700 Simulated Masonry",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "04800 Masonry Assemblies",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "04900 Masonry Restoration and Cleaning",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  }
                ]
            },

            {
                "name": "Metals",
                "division": "DIVISION 5",
                "labor": 18162,
                "materials": 82539,
                "equipment": 2000,
                "misc": 18000,
                "total": 120701,
                "items": "",
                "cpsf": 12.33,
                "percent_of_project": 4.30,
                children:
                [
                  {
                    "name": "05050 Basic Metal Materials and Methods",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "05100 Structural Metal Framing",
                    "labor": 18162,
                    "materials": 80739,
                    "equipment": 2000,
                    "misc": "",
                    "total": 100901,
                    "items": "",
                    "cpsf": 10.31,
                    "percent_of_project": 3.60
                  },
                  {
                    "name": "",
                    "labor": 9419,
                    "materials": 42910,
                    "equipment": "",
                    "misc": "",
                    "total": 52329,
                    "items": "BID #1002",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": 8743,
                    "materials": 37829,
                    "equipment": 2000,
                    "misc": "",
                    "total": 48572,
                    "items": "CO #1008",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "05200 Metal Joists",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "05300 Metal Deck",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "05400 Cold Formed Metal Framing",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "05500 Metal Fabrications",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "05600 Hydraulic Fabrications",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "05700 Ornamental Metal",
                    "labor": "",
                    "materials": 1800,
                    "equipment": "",
                    "misc": 18000,
                    "total": 19800,
                    "items": "",
                    "cpsf": 2.02,
                    "percent_of_project": 0.70
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 18000,
                    "total": 18000,
                    "items": "EST #1013",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": 1800,
                    "equipment": "",
                    "misc": "",
                    "total": 1800,
                    "items": "PO #1018",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "05800 Expansion Control",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "05900 Metal Restoration and Cleaning",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  }
                ]
            },

            {
                "name": "Wood and Plastics",
                "division": "DIVISION 6",
                "labor": 111466,
                "materials": 304699,
                "equipment": 10128,
                "misc": 44872,
                "total": 471165,
                "items": "",
                "cpsf": 48.14,
                "percent_of_project": 16.90,
                children:
                [
                  {
                    "name": "06050 Basic Wood and Plastic Materials and Methods",
                    "labor": "",
                    "materials": "",
                    "equipment": 2128,
                    "misc": 14872,
                    "total": 17000,
                    "items": "",
                    "cpsf": 1.74,
                    "percent_of_project": 0.60
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": 2128,
                    "misc": "",
                    "total": 2128,
                    "items": "PO #1024",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 14872,
                    "total": 14872,
                    "items": "EST #1019",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "06100 Rough Carpentry",
                    "labor": 79466,
                    "materials": 219699,
                    "equipment": "",
                    "misc": "",
                    "total": 299165,
                    "items": "",
                    "cpsf": 30.56,
                    "percent_of_project": 10.70
                  },
                  {
                    "name": "",
                    "labor": 65066,
                    "materials": 154099,
                    "equipment": "",
                    "misc": "",
                    "total": 219165,
                    "items": "BID #1005",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": 14400,
                    "materials": 65600,
                    "equipment": "",
                    "misc": "",
                    "total": 80000,
                    "items": "CO #1013",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "06200 Finish Carpentry",
                    "labor": 32000,
                    "materials": 85000,
                    "equipment": 8000,
                    "misc": 30000,
                    "total": 155000,
                    "items": "",
                    "cpsf": 15.84,
                    "percent_of_project": 5.60
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 30000,
                    "total": 30000,
                    "items": "EST #1022",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": 20000,
                    "materials": 85000,
                    "equipment": "",
                    "misc": "",
                    "total": 105000,
                    "items": "BID #1007",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": 12000,
                    "materials": "",
                    "equipment": 8000,
                    "misc": "",
                    "total": 20000,
                    "items": "BID #1008",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "06400 Architectural Woodwork",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "06500 Structural Plastics",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "06600 Plastic Fabrications",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "06900 Wood and Plastic Restoration and Cleaning",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  }
                ]
            },

            {
                "name": "Thermal and Moisture Protection",
                "division": "DIVISION 7",
                "labor": 4000,
                "materials": 14040,
                "equipment": "",
                "misc": 189000,
                "total": 207040,
                "items": "",
                "cpsf": 21.15,
                "percent_of_project": 7.4,
                children: [
                  {
                    "name": "07050 Basic Thermal and Moisture Protection Materials and Methods",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 22000,
                    "total": 22000,
                    "items": "",
                    "cpsf": 2.25,
                    "percent_of_project": 0.8
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 22000,
                    "total": 22000,
                    "items": "EST #1030",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "07100 Damproofing and Waterproofing",
                    "labor": 2000,
                    "materials": 6040,
                    "equipment": "",
                    "misc": 10000,
                    "total": 18040,
                    "items": 0,
                    "cpsf": 1.84,
                    "percent_of_project": 0.6
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 10000,
                    "total": 10000,
                    "items": "EST #1031",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": 2000,
                    "materials": 6040,
                    "equipment": "",
                    "misc": "",
                    "total": 8040,
                    "items": "INV #1029",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "07200 Thermal Protection",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 2500,
                    "total": 2500,
                    "items": "",
                    "cpsf": 0.26,
                    "percent_of_project": 0.1
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 2500,
                    "total": 2500,
                    "items": "EST #1032",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "07300 Shingles, Roof Tiles, and Roof Coverings",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 67500,
                    "total": 67500,
                    "items": "",
                    "cpsf": 6.90,
                    "percent_of_project": 2.4
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 67500,
                    "total": 67500,
                    "items": "EST #1033",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "07400 Roofing and Siding Panels",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 7000,
                    "total": 7000,
                    "items": "",
                    "cpsf": 7.15,
                    "percent_of_project": 2.5
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 7000,
                    "total": 7000,
                    "items": "EST #1034",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "07500 Membrane Roofing",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "07600 Flashing and Sheet Metal",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "07700 Roof Specialties and Accessories",
                    "labor": 2000,
                    "materials": 8000,
                    "equipment": "",
                    "misc": 17000,
                    "total": 27000,
                    "items": "",
                    "cpsf": 2.76,
                    "percent_of_project": 1.0
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 17000,
                    "total": 17000,
                    "items": "EST #1031",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": 2000,
                    "materials": 8000,
                    "equipment": "",
                    "misc": "",
                    "total": 10000,
                    "items": "PA #1018",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "07800 Fire and Smoke Protection",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "07900 Joint Sealers",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  }
                ]
            },

            {
                "name": "Doors and Windows",
                "division": "DIVISION 8",
                "labor": "",
                "materials": 52000,
                "equipment": "",
                "misc": 94100,
                "total": 146100,
                "items": "",
                "cpsf": "",
                "percent_of_project": "",
                children: [
                  {
                    "name": "08050 Basic Door and Window Materials and Methods",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "08100 Metal Doors and Frames",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "08200 Wood and Plastic Doors",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 28500,
                    "total": 28500,
                    "items": 0,
                    "cpsf": 2.91,
                    "percent_of_project": 1.0
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 28500,
                    "total": 28500,
                    "items": "EST #1036",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "08300 Specialty Doors",
                    "labor": "",
                    "materials": 26000,
                    "equipment": "",
                    "misc": 7100,
                    "total": 33100,
                    "items": "",
                    "cpsf": 3.38,
                    "percent_of_project": 1.2
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 7100,
                    "total": 7100,
                    "items": "EST #1038",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": 0,
                    "labor": "",
                    "materials": 26000,
                    "equipment": "",
                    "misc": "",
                    "total": 26000,
                    "items": "PO #1032",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "08400 Entrances and Storefronts",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "08500 Windows",
                    "labor": "",
                    "materials": 26000,
                    "equipment": "",
                    "misc": 49000,
                    "total": 49000,
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": 26000,
                    "equipment": "",
                    "misc": "",
                    "total": 26000,
                    "items": "EST #1039",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": 26000,
                    "equipment": "",
                    "misc": "",
                    "total": 26000,
                    "items": "PO #1033",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "08600 Skylights",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.0
                  },
                  {
                    "name": "08700 Hardware",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 9500,
                    "total": 9500,
                    "items": "",
                    "cpsf": 0.97,
                    "percent_of_project": 0.3
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 9500,
                    "total": 9500,
                    "items": "EST #1037",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "08800 Glazing",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "08900 Glazed Curtain Wall",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  }
                ]
            },

            {
                "name": "Finishes",
                "division": "DIVISION 9",
                "labor": "",
                "materials": 13000,
                "equipment": "",
                "misc": 408000,
                "total": 421000,
                "items": 0,
                "cpsf": 43.01,
                "percent_of_project": 15.1,
                children: [
                  {
                    "name": "09050 Basic Finish Materials and Methods",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 45000,
                    "total": 45000,
                    "items": "",
                    "cpsf": 4.60,
                    "percent_of_project": 1.6
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 45000,
                    "total": 45000,
                    "items": "EST #1040",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "09100 Metal Support Assemblies",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "09200 Plaster and Gypsum Board",
                    "labor": "",
                    "materials": 13000,
                    "equipment": "",
                    "misc": 42000,
                    "total": 55000,
                    "items": "",
                    "cpsf": 5.62,
                    "percent_of_project": 2.0
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 42000,
                    "total": 42000,
                    "items": "EST #1041",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": 13000,
                    "equipment": "",
                    "misc": "",
                    "total": 13000,
                    "items": "PO #1036",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "09300 Tile",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 86500,
                    "total": 86500,
                    "items": "",
                    "cpsf": 8.84,
                    "percent_of_project": 3.1
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 86500,
                    "total": 86500,
                    "items": "EST #1042",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "09400 Terrazzo",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "09500 Ceilings",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "09600 Flooring",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 115500,
                    "total": 115500,
                    "items": "",
                    "cpsf": 11.80,
                    "percent_of_project": 4.1
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 115500,
                    "total": 115500,
                    "items": "EST #1043",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "09700 Wall Finishes",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 4000,
                    "total": 4000,
                    "items": "",
                    "cpsf": 0.41,
                    "percent_of_project": 0.1
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 4000,
                    "total": 4000,
                    "items": "EST #1044",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "09800 Acoustical Treatment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "09900 Paints and Coatings",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 115000,
                    "total": 115000,
                    "items": "",
                    "cpsf": 11.75,
                    "percent_of_project": 4.1
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 115000,
                    "total": 115000,
                    "items": "EST #1045",
                    "cpsf": "",
                    "percent_of_project": ""
                  }
                ]
            },

            {
                "name": "Specialties",
                "division": "DIVISION 10",
                "labor": 1600,
                "materials": 34250,
                "equipment": "",
                "misc": 60000,
                "total": 95850,
                "items": "",
                "cpsf": 9.79,
                "percent_of_project": 3.4,
                children: [
                  {
                    "name": "10100 Visual Display Boards",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10150 Compartments and Cubicles",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10200 Louvers and Vents",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10240 Grilles and Screens",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10250 Service Walls",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10260 Wall and Corner Guards",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10270 Access Flooring",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10290 Pest Control",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10300 Fireplaces and Stoves",
                    "labor": "",
                    "materials": 22513,
                    "equipment": "",
                    "misc": 10000,
                    "total": 32513,
                    "items": "",
                    "cpsf": 3.2,
                    "percent_of_project": 1.2
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 10000,
                    "total": 10000,
                    "items": "EST #1046",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": 22513,
                    "equipment": "",
                    "misc": "",
                    "total": 22513,
                    "items": "PO #1043",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "10340 Manufactured Exterior Specialties",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10350 Flagpoles",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10400 Identification Devices",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10450 Pedestrian Control Devices",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10500 Lockers",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10520 Fire Protection Specialties",
                    "labor": 1600,
                    "materials": 11737,
                    "equipment": "",
                    "misc": 5000,
                    "total": 18337,
                    "items": "",
                    "cpsf": 1.87,
                    "percent_of_project": 0.7
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 5000,
                    "total": 5000,
                    "items": "EST #1047",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": 1600,
                    "materials": 11737,
                    "equipment": "",
                    "misc": "",
                    "total": 13337,
                    "items": "BID #1042",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "10530 Protective Covers",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10550 Postal Specialties",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10600 Partitions",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10670 Storage Shelving",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10700 Exterior Protection",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10750 Telephone Specialties",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10800 Toilet, Bath, and Laundry Specialties",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 25000,
                    "total": 25000,
                    "items": "",
                    "cpsf": 2.55,
                    "percent_of_project": 0.9
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 2500,
                    "total": 2500,
                    "items": "EST #1048",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "10880 Scales",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "10900 Wardrobe and Closet Specialties",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 20000,
                    "total": 20000,
                    "items": "",
                    "cpsf": 2.04,
                    "percent_of_project": 0.7
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 20000,
                    "total": 20000,
                    "items": "EST #1049",
                    "cpsf": "",
                    "percent_7of_project": ""
                  }
                ]
            },

            {
                "name": "Equipment",
                "division": "DIVISION 11",
                "labor": "",
                "materials": "",
                "equipment": "",
                "misc": 4000,
                "total": 4000,
                "items": "",
                "cpsf": 0.41,
                "percent_of_project": 0.1,
                children: [
                  {
                    "name": "11010 Maintenance Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11020 Security and Vault Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11030 Teller and Service Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11040 Ecclesiastical Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11050 Library Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11060 Theater and Stage Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11070 Instrumental Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11080 Registration Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11090 Checkroom Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11100 Mercantile Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11110 Commercial Laundry and Dry Cleaning Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11120 Vending Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11130 Audio Visual Equipment'",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11140 Vehicle Service Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11150 Parking Control Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11160 Loading Dock Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11170 Solid Waste Handling Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11190 Detention Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11200 Water Supply and Treatment Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 4000,
                    "total": 4000,
                    "items": "",
                    "cpsf": 0.41,
                    "percent_of_project": 0.1
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 4000,
                    "total": 4000,
                    "items": "EST #1050",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "11280 Hydraulic Gates and Valves",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11300 Fluid Waste Treatment and Disposal Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11400 Food Service Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11450 Residential Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11460 Unit Kitchens",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11470 Darkroom Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11480 Athletic, Recreational, and Therapeutic Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11500 Industrial and Process Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11600 Laboratory Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11650 Planetarium Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11660 Observatory Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11680 Office Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11700 Medical Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11780 Mortuary Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11850 Navigation Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11870 Agricultural Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "11900 Exhibit Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  }
                ]
            },

            {
                "name": "Furnishings",
                "division": "DIVISION 12",
                "labor": "",
                "materials": "",
                "equipment": "",
                "misc": 84510,
                "total": 84510,
                "items": "",
                "cpsf": 8.63,
                "percent_of_project": 3.0,
                children: [
                  {
                    "name": "12050 Fabrics",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "12100 Art",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "12300 Manufactured Casework",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "12400 Furnishings and Accessories",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 84510,
                    "total": 84510,
                    "items": "",
                    "cpsf": 8.63,
                    "percent_of_project": 3.0
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "EST #1051",
                    "cpsf": "",
                    "percent_of_project": 0
                  },
                  {
                    "name": "12500 Furniture",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "12600 Multiple Seating",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "12700 Systems Furniture",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "12800 Interior Plants and Planters",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "12900 Furnishings Restoration and Repair",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  }
                ]
            },

            {
                "name": "Special Construction",
                "division": "DIVISION 13",
                "labor": "",
                "materials": "",
                "equipment": "",
                "misc": 3000,
                "total": 3000,
                "items": "",
                "cpsf": 3.06,
                "percent_of_project": 1.1,
                children: [
                  {
                    "name": "13010 Air Supported Structures",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13020 Building Modules",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13030 Special Purpose Rooms",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13080 Sound, Vibration, and Seismic Control",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13090 Radiation Protection",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13100 Lightning Protection",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13110 Cathodic Protection",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13120 PreEngineered Structures",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13150 Swimming Pools",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13160 Aquariums",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13165 Aquatic Park Facilities",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13170 Tubs and Pools",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13175 Ice Rinks",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13185 Kennels and Animal Shelters",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13190 Site Constructed Incinerators",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13200 Storage Tanks",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13220 Filter Underdrains and Media",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13230 Digester Covers and Appurtenances",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13240 Oxygenation Systems",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13260 Sludge Conditioning Systems",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13280 Hazardous Material Remediation",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13400 Measurement and Control Instrumentation",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13500 Recording Instrumentation",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13550 Transportation Control Instrumentation",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13600 Solar and Wind Energy Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": 0,
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13700 Security Access and Surveillance",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 3000,
                    "total": 3000,
                    "items": "",
                    "cpsf": 3.06,
                    "percent_of_project": 1.1
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 3000,
                    "total": 3000,
                    "items": "EST #1052",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "13800 Building Automation and Control",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13850 Detection and Alarm",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "13900 Fire Suppression",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  }
                ]
            },

            {
                "name": "Conveying Systems",
                "division": "DIVISION 14",
                "labor": "",
                "materials": "",
                "equipment": "",
                "misc": "",
                "total": "",
                "items": "",
                "cpsf": "",
                "percent_of_project": 0.00,
                children: [
                  {
                    "name": "14100 Dumbwaiters",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "14200 Elevators",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "14300 Escalators and Moving Walks",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "14400 Lifts",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "14500 Material Handling",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "14600 Hoists and Cables",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "14700 Turntables",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "14800 Scaffolding",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "14900 Transportation",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  }
                ]
            },

            {
                "name": "Mechanical",
                "division": "DIVISION 15",
                "labor": 12707,
                "materials": 63824,
                "equipment": "",
                "misc": 150970,
                "total": 227501,
                "items": "",
                "cpsf": 23.34,
                "percent_of_project": 8.2,
                children: [
                  {
                    "name": "15050 Basic Mechanical Materials and Methods",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "15100 Building Service Piping",
                    "labor": 2500,
                    "materials": 15000,
                    "equipment": "",
                    "misc": "",
                    "total": 17500,
                    "items": "",
                    "cpsf": 1.76,
                    "percent_of_project": 0.6
                  },
                  {
                    "name": "",
                    "labor": 2500,
                    "materials": 15000,
                    "equipment": "",
                    "misc": "",
                    "total": 17500,
                    "items": "BID #1058",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "15200 Process Piping",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "15300 Fire Protection Piping",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "15400 Plumbing Fixtures and Equipment",
                    "labor": "",
                    "materials": 8000,
                    "equipment": "",
                    "misc": 82000,
                    "total": 90000,
                    "items": "",
                    "cpsf": 9.19,
                    "percent_of_project": 3.2
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 82000,
                    "total": 82000,
                    "items": "EST #1053",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": 8000,
                    "equipment": "",
                    "misc": "",
                    "total": 8000,
                    "items": "PO #1089",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "15500 Heat Generation Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 45000,
                    "total": 45000,
                    "items": "",
                    "cpsf": 4.60,
                    "percent_of_project": 1.6
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 45000,
                    "total": 45000,
                    "items": "EST #1054",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "15600 Refrigeration Equipment",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "15700 Heating, Ventilating, and Air Conditioning Equipment",
                    "labor": 10207,
                    "materials": 40824,
                    "equipment": "",
                    "misc": 23970,
                    "total": 75001,
                    "items": "",
                    "cpsf": 7.66,
                    "percent_of_project": 2.7
                  },
                  {
                    "name": "",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": 23970,
                    "total": 75001,
                    "items": "EST #1055",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "",
                    "labor": 10207,
                    "materials": 40824,
                    "equipment": "",
                    "misc": "",
                    "total": 51031,
                    "items": "BID #1061",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "15800 Air Distribution",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "15900 HVAC Instrumentation and Controls",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "15950 Testing, Adjusting, and Balancing",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  }
                ]
            },

            {
                "name": "Electrical",
                "division": "DIVISION 16",
                "labor": 12600,
                "materials": 84898,
                "equipment": "",
                "misc": "",
                "total": 97498,
                "items": "",
                "cpsf": 9.96,
                "percent_of_project": 3.5,
                children: [
                  {
                    "name": "16050 Basic Electrical Materials and Methods",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "16100 Wiring Methods",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "16200 Electrical Power",
                    "labor": 12600,
                    "materials": 57398,
                    "equipment": "",
                    "misc": "",
                    "total": 69998,
                    "items": "",
                    "cpsf": 7.15,
                    "percent_of_project": 2.5
                  },
                  {
                    "name": "",
                    "labor": 12600,
                    "materials": 57398,
                    "equipment": "",
                    "misc": "",
                    "total": 69998,
                    "items": "BID #1065",
                    "cpsf": "",
                    "percent_of_project": ""
                  },
                  {
                    "name": "16300 Transmission and Distribution",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "16400 Low Voltage Distribution",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "16500 Lighting",
                    "labor": "",
                    "materials": 27500,
                    "equipment": "",
                    "misc": "",
                    "total": 27500,
                    "items": "",
                    "cpsf": 2.81,
                    "percent_of_project": 1.0,
                    "depth": 2,
                    children: [
                      {
                        "name": "SOW:  Interior Lighting",
                        "labor": "",
                        "materials": 22500,
                        "equipment": "",
                        "misc": "",
                        "total": 22500,
                        "items": "",
                        "cpsf": "",
                        "percent_of_project": ""
                      },
                      {
                        "name": "",
                        "labor": "",
                        "materials": 22500,
                        "equipment": "",
                        "misc": "",
                        "total": 22500,
                        "items": "PO# 1092",
                        "cpsf": "",
                        "percent_of_project": ""
                      },
                      {
                        "name": "SOW:  Exterior Lighting",
                        "labor": "",
                        "materials": 5000,
                        "equipment": "",
                        "misc": "",
                        "total": 5000,
                        "items": "",
                        "cpsf": "",
                        "percent_of_project": ""
                      },
                      {
                        "name": 0,
                        "labor": "",
                        "materials": 4500,
                        "equipment": "",
                        "misc": "",
                        "total": 4500,
                        "items": "PO# 1092",
                        "cpsf": "",
                        "percent_of_project": ""
                      },
                      {
                        "name": "",
                        "labor": "",
                        "materials": 500,
                        "equipment": "",
                        "misc": "",
                        "total": 500,
                        "items": "QP #1138",
                        "cpsf": "",
                        "percent_of_project": ""
                      }
                    ]
                  },
                  {
                    "name": "16700 Communications",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  },
                  {
                    "name": "16800 Sound and Video",
                    "labor": "",
                    "materials": "",
                    "equipment": "",
                    "misc": "",
                    "total": "",
                    "items": "",
                    "cpsf": "",
                    "percent_of_project": 0.00
                  }
                ]
            }
        ];

        $scope.showBudgetAdditionModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'budget-addition-modal.html',
                controller: 'BudgetAdditionModalCtrl',
                windowClass: 'buget-addition-modal'
            });

            modalInstance.result.then(function(result) {

            }, function() {

            });
        };

        $scope.showBudgetEstimateModal = function(item) {
            var modalInstance = $uibModal.open({
                templateUrl: 'budget-estimate-modal.html',
                controller: 'BudgetEstimateModalCtrl',
                windowClass: 'buget-addition-modal',
                resolve: {
                    currentItem: function () {
                        return item;
                    }
                }
            });

            modalInstance.result.then(function(result) {

            }, function() {

            });
        };

    }]);

app.controller('BudgetAdditionModalCtrl', function($scope, $uibModalInstance, divisions, sows) {
    $scope.isNameEdit = false;
    $scope.name = '';

    $scope.divisions = divisions;
    $scope.sows = sows;
    $scope.currentDivision = null;
    $scope.currentCostCode = null;

    $scope.$watchGroup(['labor', 'materials', 'equipment', 'misc'], function(n, o, scope) {
        $scope.total = _.sum(n);
    });

    $scope.labor = 1234456;
    $scope.materials = $scope.equipment = $scope.misc = 1234456;


    $scope.ok = function() {
        $uibModalInstance.close();
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    }
});

app.controller('BudgetEstimateModalCtrl', function($scope, $uibModalInstance, currentItem) {
    var item = currentItem;

    $scope.divisions = [];
    $scope.costCodes = [];
    $scope.sows = [];

    if ( item.detail != null && item.detail != "" && typeof item.detail != "undefined" ) {
        $scope.divisions.push({id: 1, name: item.detail.division[0].name});
        $scope.costCodes.push({id: 1, name: item.detail.cost_code[0]});
        $scope.sows.push({id: 1, name: item.detail.sow[0]});
    }
    $scope.labor = item.labor;
    $scope.materials = item.materials;
    $scope.equipment = item.equipment;
    $scope.misc = item.misc;

    $scope.$watchGroup(['labor', 'materials', 'equipment', 'misc'], function(n, o, scope) {
        $scope.total = _.sum(n);
    });

    $scope.ok = function() {
        $uibModalInstance.close();
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    }
});
