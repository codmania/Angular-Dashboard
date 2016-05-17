app.controller('AiriqsearchDemandCtrl',
    ['$scope', '$stateParams', '$localStorage', '$window', 'Futuredate', '$timeout', function ($scope, $stateParams, $localStorage, $window, Futuredate, $timeout) {

        // Initializer
        $window.defaultCarrierGroup = 'all';
        $window.defaultCarrier = 'SA';
        var userData = $localStorage.auth;
        var userCarrierGroups = [];
        if(userData){
            $window.defaultCarrier = JSON.parse(userData).defaultCarrier || 'SA';
            userCarrierGroups = JSON.parse(userData).carrierGroups || [];
        }
        $window.userCarrierGroups = userCarrierGroups;
        var groupsLabels = Object.keys(userCarrierGroups);
        $scope.options = [];
        for(var i in groupsLabels){
            var label = groupsLabels[i];
            for(var j in userCarrierGroups[label]){
                var airline = userCarrierGroups[label][j];
                if(airline == window.defaultCarrier) { continue; }
                $scope.options.push({id: _.uniqueId(), name: airline});
            }
        }
        var groupVarName = 'selectedGroupHistory';
        $window[groupVarName] = $window[groupVarName];

        var gData;
        var datasets;
        var chartData;
        var chartConfig = {
            animation: false,
            barShowStroke: false,
            tooltipTitleFontFamily: "'Titillium Web',sans-serif",
            tooltipFontStyle: "600",
            tooltipFontFamily: "'Titillium Web',sans-serif",
            tooltipTitleFontStyle: "600",
            scaleFontFamily: "'Titillium Web',sans-serif",
            scaleFontStyle: "700",
            responsive: true,
            maintainAspectRatio: true,
            tooltipFillColor: "rgba(0,0,0,0.8)",
            multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"
        };

        $window.globalData = {labels:[], data:[], fLabels:[]};

        var canvas = document.getElementById("demand-QbyS");
        var ctx = canvas.getContext("2d");
        var faresChart;

        Chart.types.Line.extend({
            name: "LineWithLine",
            initialize: function () {
                Chart.types.Line.prototype.initialize.apply(this, arguments);
            },
            draw: function () {
                Chart.types.Line.prototype.draw.apply(this, arguments);

                var scale = this.scale;
                var pixelValue = scale.steps;
                //var pixelValue = scale.max / scale.height;
                //var pixelValue = scale.max / scale.endPoint - scale.startPoint;
                console.log(pixelValue);
                //scale.endPoint scale.startPoint | scale.max / scale.endPoint - scale.startPoint = pixelValue

                if(this.options.hasOwnProperty('maxVal')){
                    var lineAtValYMax = this.options.maxVal;
                    var linePixelsMax = lineAtValYMax / pixelValue;
                    var yMax = scale.height + scale.startPoint - linePixelsMax; //todo
                    console.log('yMax', yMax);

                    this.chart.ctx.beginPath();
                    this.chart.ctx.moveTo(scale.startPoint + 32, yMax);
                    this.chart.ctx.strokeStyle = '#ff0000';
                    this.chart.ctx.lineTo(this.chart.width, yMax);
                    this.chart.ctx.stroke();

                    this.chart.ctx.textAlign = 'center';
                    this.chart.ctx.fillText('MAX', this.chart.width - 16, yMax + 8);
                }

                if(this.options.hasOwnProperty('minVal')){
                    var lineAtValYMin = this.options.minVal;
                    var linePixelsMin = lineAtValYMin / pixelValue;
                    var yMin = scale.height - 24 - linePixelsMin; //todo
                    console.log('yMin', yMin);

                    this.chart.ctx.beginPath();
                    this.chart.ctx.moveTo(scale.startPoint + 32, yMin);
                    this.chart.ctx.strokeStyle = '#00ff00';
                    this.chart.ctx.lineTo(this.chart.width, yMin);
                    this.chart.ctx.stroke();

                    this.chart.ctx.textAlign = 'center';
                    this.chart.ctx.fillText('MIN', this.chart.width - 16, yMin - 8);
                }

            }
        });

        var $loader = $('#history-loading');
        var $preloader = $('#history-placeholder');
        var $legend = $('#history-graph-legend');
        var $dowloadLinks = $('#history-download-links');

        $scope.allAirlines = true;
        $scope.airHeaders = [];

        $scope.loader = false;
        $scope.preloader = true;
        $scope.legend = false;
        $scope.downloadLinks = false;
        $scope.diffBlock = false;
        $scope.reportsBlock = false;
        $scope.negativeBlock = false;
        $scope.positiveBlock = false;

        $scope.searchTypes = [
            {
                id: 1,
                name: 'All'
            }, {
                id: 2,
                name: 'Ecomomy'
            }, {
                id: 3,
                name: 'Business'
            }
        ];

        $scope.timeTypes = [
            {
                id: 1,
                name: 'Hour'
            }, {
                id: 2,
                name: 'Day'
            }
        ];
        $scope.selectedType = angular.copy($scope.timeTypes[0]);
        $scope.preloader = true;

        $scope.savetoDashboard = function() {

        }
        $scope.buildReport = function() {
            // showCharts();
            var sd, ed, od, from, to, minThreshold, maxThreshold;

            od = $scope.depDate;
            sd = $scope.startDate;
            ed = $scope.endDate;
            from = $scope.tpa;
            to = $scope.dxb;

            maxThreshold = $scope.maxThreshold;
            minThreshold = $scope.minThreshold;

            var dt = $scope.selectedType;

            if (typeof sd === 'undefined') {
                // showAlert('Start date is required!');
                return false;
            }

            if (typeof ed === 'undefined') {
                // showAlert('End date is required!');
                return false;
            }

            if (typeof od === 'undefined') {
                return false;
            }

            if (typeof from === 'undefined' || $.trim(from).length === 0) {
                // showAlert('Origin is required!');
                return false;
            }

            if (typeof to === 'undefined' || $.trim(to).length === 0) {
                // showAlert('Destination is required!');
                return false;
            }

            var searchString = from + '/' + to + '/' + formatDate(od) + '/period/'
                + formatDate(sd) + '/' + formatDate(ed);

            $scope.loader = true;
            $scope.preloader = true;
            $scope.legend = false;
            $scope.downloadLinks = false;

            var token = JSON.parse($localStorage.auth) || {};
            if(token['token']){
                token = token['token']
            } else {
                token = ''
            }

            var ajaxTime= new Date().getTime();

            Futuredate.getDemand(token, searchString, dt.name).then(function(response) {
                // console-log of query and response
                var responseTime = new Date().getTime() - ajaxTime;
                console.log("Dep Date:", od);
                console.log("Start Date:", sd);
                console.log("End Date:", ed);
                console.log("From-To:", from, "-", to);
                console.log("Max Threshold:", maxThreshold);
                console.log("Min Threshold:", minThreshold);
                console.log("Response TIme:", responseTime, "ms");

                $scope.preloader = false;
                $scope.loader = false;
                $scope.legend = false;
                $scope.dowloadLinks = true;

                gData = response;
                showCharts(response.data, response.labels);
            }, function(error) {
                if(error.status == 401){
                    //unset auth if it was set
                    // $localStorage.auth = undefined;
                }
                $scope.loader = false;
                console.warn(error);
            });
        }

        function showCharts(dData, dLabels){
            var d = {};
            d.data = dData;
            d.labels = dLabels;

            var labels = d.labels;
            //clear data
            // window.globalDataDemand.labels = labels;
            // window.globalDataDemand.data = d.data;

            // console-log for response
            console.log("Lables:", labels);

            if(!Object.keys(d.data).length){
                console.log('empty data');
                return false;
            }

            datasets = [];
            $scope.airHeaders = angular.copy(labels);
            $scope.airHeaders.unshift("");

            // window.globalDataDemand.fLabels = labels;
            var colors = randColors();

            datasets.push({
                data: d.data,
                fillColor: colors[1],
                strokeColor: colors[0],
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: colors[2],
                pointColor: colors[2]
            });

            chartData = {
                labels: labels,
                datasets: datasets
            };

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (faresChart) {
                faresChart.destroy();
            }

            faresChart = new Chart(ctx).Line(chartData, chartConfig);

            $('#demand-graph-legend').html(faresChart.generateLegend());
        };

        $scope.changeOption = function() {
        }

        var formatDate = function (date) {
            var month = date.getMonth() + 1;
            if (month < 10) {
                month = '0' + month;
            }

            var day = date.getDate();
            if (day < 10) {
                day = '0' + day;
            }

            return date.getFullYear() + '-' + month + "-" + day;
        };

        function getVals(obj){
            var values = [];
            for(var i in obj){
                var val = obj[i].value ? obj[i].value : 0;
                values.push(val);
            }
            return values;
        }
        function getRandColor(brightness) {
            //6 levels of brightness from 0 to 5, 0 being the darkest
            var rgb = [Math.random() * 128, Math.random() * 256, Math.random() * 256];
            var mix = [brightness * 51, brightness * 51, brightness * 51]; //51 => 255/5
            var mixedrgb = [(Math.random() * 128) + rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function (x) {
                return Math.round(x / 2.0);
            });

            return mixedrgb.join(",");
        }
        function randColors() {
            var mixedrgb = getRandColor(0);
            return ["rgb(" + mixedrgb + ")", "rgba(" + mixedrgb + ",0.2)", "rgba(" + mixedrgb + ", 1)"];
        }

        $scope.downloadCSV = function() {

        };
        $scope.downloadPDF = function() {

        };

        $timeout(function() {
        }, 500);
        $scope.oneAtATime = false;
    }]
);