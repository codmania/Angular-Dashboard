app.controller('AiriqsearchMainCtrl',
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
        var groupVarName = 'selectedGroupMain';
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

        var canvas = document.getElementById("main-QbyS");
        var ctx = canvas.getContext("2d");
        var faresChart;

        var canvasUpper = document.getElementById("main-diff-upper");
        var ctxUpper = canvasUpper.getContext("2d");
        var chartUpper;

        var canvasNegative = $('#main-negative-block').find('canvas')[0];
        var ctxNegative = canvasNegative.getContext("2d");
        var chartNegative;

        var canvasPositive = $('#main-positive-block').find('canvas')[0];
        var ctxPositive = canvasPositive.getContext("2d");
        var chartPositive;

        var $loader = $('#main-loading');
        var $preloader = $('#main-placeholder');
        var $legend = $('#main-graph-legend');
        var $downloadLinks = $('#main-download-links');
        var $diffBlock = $('#main-diff-block');

        var $reportsBlock = $('#main-report-block');
        var $negativeBlock = $('#main-negative-block');
        var $positiveBlock = $('#main-positive-block');

        $scope.loader = false;
        $scope.preloader = true;
        $scope.legend = false;
        $scope.downloadLinks = true;

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
        $scope.allAirlines = true;
        $scope.airHeaders = [];

        $scope.savetoDashboard = function() {

        }
        $scope.buildReport = function() {
            // showCharts();
            var sd, ed, from, to, minThreshold, maxThreshold;
            var groupVarName = 'selectedGroupMain';
            $window[groupVarName] = window[groupVarName];

            sd = $scope.startDate;
            ed = $scope.endDate;
            from = $scope.tpa;
            to = $scope.dxb;

            maxThreshold = $scope.maxThreshold;
            minThreshold = $scope.minThreshold;

            if (typeof sd === 'undefined') {
                // showAlert('Start date is required!');
                return false;
            }

            if (typeof ed === 'undefined') {
                // showAlert('End date is required!');
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
            var searchString = from + '/' + to + '/' + formatDate(sd) + '/' + formatDate(ed);

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

            Futuredate.getData(token, searchString).then(function(response) {
                // console-log of query and response
                var responseTime = new Date().getTime() - ajaxTime;
                
                console.log("Start Date:", sd);
                console.log("End Date:", ed);
                console.log("From-To:", from, "-", to);
                console.log("Max Threshold:", maxThreshold);
                console.log("Min Threshold:", minThreshold);
                console.log("Response TIme:", responseTime, "ms");

                $scope.preloader = false;
                $scope.loader = false;
                $scope.legend = false;
                $scope.downloadLinks = true;

                gData = response;
                $scope.searchCompleted = false;
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
            //clear data
            if(window[groupVarName] && window[groupVarName].indexOf('all') === -1){
                var newData = {};
                for(var i in d.data){
                    if(window[groupVarName].indexOf(i) !== -1){
                        newData[i] = d.data[i];
                    }
                }
                //replace original data
                d.data = newData;
            }
            var labels = d.labels;
            var airlines = Object.keys(d.data);
            var tmp = airlines.splice(airlines.indexOf(window.defaultCarrier), 1);
            airlines.splice(0, 0, tmp[0]);

            //set this data globally for get csv
            window.globalData.labels = labels;
            window.globalData.data = d.data;

            //think do it before or after CVS???
            //think maybe needed clone or copy for this data

            // console-log for response
            console.log("Lables:", labels);

            for(var i in d.data){
                var vals = getVals(d.data[i]);

                // console-log for response
                console.log(i, ":", vals);

                var sum = vals.reduce(function(pv, cv) {
                    return pv + cv;
                }, 0);
                if(!sum){
                    delete d.data[i]; //unset air line with all clear rows
                }
            }
            if(!Object.keys(d.data).length){
                console.log('empty data');
                return false;
            }

            datasets = [];
            $scope.airHeaders = angular.copy(labels);
            $scope.airHeaders.unshift("");

            $window.globalData.fLabels = labels;
            var tableBody = '';
            airlines.forEach(function(airline){
                var colors;
                if(!d.data.hasOwnProperty(airline)){ return true; }
                if(airline.toUpperCase() == window.defaultCarrier){
                    colors = ['rgb(0, 0, 0)', 'rgba(0, 0, 0, 0.5)', 'rgb(0, 0, 0)'];
                } else {
                    colors = randColors();
                }

                var data = [];
                for (var i = 0; i < labels.length; i++) {
                    var val = d.data[airline][labels[i]].value;
                    val = val || null;
                    data.push(val);
                }

                datasets.push({
                    label: airline,
                    data: data,
                    fillColor: colors[1],
                    strokeColor: colors[0],
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: colors[2],
                    pointColor: colors[2]
                });

                var tableString = data.map(function(n, i){
                    return '<td data-th="' + airline + ' ' + labels[i] + '">' + (n || '') + '</td>'
                });
                tableBody += '<tr>';
                tableBody += '<th>'
                    + ((airline.toUpperCase() != window.defaultCarrier)
                        ? '<span class="glyphicon glyphicon-remove-circle remove-airline" data-airline="'
                        + airline.toUpperCase() + '"></span>' : '&nbsp;&nbsp;')
                    + airline + '</th>'
                    + tableString.join();
                tableBody += '</tr>';
            });

            chartData = {
                labels: labels,
                datasets: datasets
            };

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (faresChart){
                faresChart.destroy();
            }

            faresChart = new Chart(ctx).Line(chartData, chartConfig);
            //chartConfig['minVal'] = 0;
            //chartConfig['maxVal'] = 20000;
            //faresChart = new Chart(ctx).LineWithLine(chartData, chartConfig);

            // $reportsBlock.find('thead tr').html(tableHead);
            $reportsBlock.find('tbody').html(tableBody);
            $reportsBlock.show();

            $('#main-graph-legend').html(faresChart.generateLegend());

            generatePriceDiffSABarChart(d.data);
            // $('.save-to-dashboard').disable(false);
        }

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

        var positiveByDay = {};
        var negativeByDay = {};
        var p;
        function generatePriceDiffSABarChart(data){
            negativeByDay = {};
            positiveByDay = {};

            //$('#main-diff-block').show(0); it not showing now needed remove data
            if(typeof data[defaultCarrier] == 'undefined' || !Object.keys(data[defaultCarrier]).length){
                console.warn('no data');
                return false;
            }

            var main = data[defaultCarrier];
            var d = {};
            for(var i in main){
                if(main[i].value){
                    d[i] = main[i].value;
                }
            }

            if(!Object.keys(d).length){
                console.warn('all flights are empty');
                return false;
            }

            var labels = Object.keys(d); //need order them in
            var comparisonDataUpper = {};

            for(var airline in data){
                if(airline == defaultCarrier){ continue; }
                var item = data[airline];
                var rowUpper = [];
                for(var j in labels){
                    var label = labels[j];
                    if(!item[label].value){
                        rowUpper.push(null);
                    } else {
                        var diff = Math.round(item[label].value - d[label]);
                        rowUpper.push(diff);
                        //first iteration = first day
                        if(diff > 0) { //maybe check on zero
                            if(typeof positiveByDay[label] == 'undefined'){
                                positiveByDay[label] = {};
                            }
                            if(typeof positiveByDay[label][airline] == 'undefined'){
                                positiveByDay[label][airline] = {};
                            }
                            positiveByDay[label][airline] = diff;
                        } else {
                            if(typeof negativeByDay[label] == 'undefined'){
                                negativeByDay[label] = {};
                            }
                            if(typeof negativeByDay[label][airline] == 'undefined'){
                                negativeByDay[label][airline] = {};
                            }
                            negativeByDay[label][airline] = diff;
                        }
                    }
                }
                comparisonDataUpper[airline] = rowUpper;
            }


            var colors;
            var $selector;

            //------------------------------------------------------------------------------------------------------
            showProfitDifferential(1);

            //------------------------------------------------------------------------------------------------------
            var n = {};
            var nd = [];
            var nl = [];
            for(var i in window.globalData.fLabels){
                var day = window.globalData.fLabels[i];
                if(typeof negativeByDay[day] === 'undefined'){
                    if(typeof p[day] === 'undefined'){
                        continue;
                    }
                    nd.push(p[day]); //populate positive
                    nl.push(day);
                    continue;
                }
                nl.push(day);
                var item = negativeByDay[day];
                var min = 0;
                for(var company in item){
                    if(!min || item[company] < min){
                        min = item[company];
                    }
                }
                n[day] = min;
                nd.push(min);
            }
            if(nd.length){
                $selector = $('#main-negative-block');
                datasets = [];
                colors = randColors();
                datasets.push({
                    //label: firstKey,
                    data: nd,
                    fillColor: colors[2],
                    strokeColor: colors[0],
                    highlightFill: colors[0],
                    highlightStroke: colors[0]
                });

                chartData = {
                    labels: nl,
                    datasets: datasets
                };
                $selector.show(0);
                ctxNegative.clearRect(0, 0, canvasNegative.width, canvasNegative.height);
                if (chartNegative){ chartNegative.destroy(); }
                chartNegative = new Chart(ctxNegative).Bar(chartData, $.extend({scaleBeginAtZero: false}, chartConfig));

                var html = nd.map(function(n, i){
                    return '<td data-th="' + nl[i] + '">' + (n || 0) + '</td>'
                }).join();
                $selector.find('thead tr').html('<th>' + nl.join('</th><th>') + '</th>');
                $selector.find('tbody tr').html(html);
            }

        }

        function showProfitDifferential(multiplier){
            p = {};
            var pd = [];
            var pl = [];
            for (var i in window.globalData.fLabels) {
                var day = window.globalData.fLabels[i];
                if (typeof positiveByDay[day] === 'undefined') {
                    continue;
                }
                pl.push(day);
                var item = positiveByDay[day];

                var min = 0;

                for (var company in item) {
                    if (!min || item[company] < min) {
                        min = item[company];
                    }
                }

                if (negativeByDay[day]) {
                    p[day] = 0;
                    pd.push(0);
                } else {
                    min *= multiplier;
                    p[day] = min;
                    pd.push(min);
                }
            }
            if (pd.length) {
                $selector = $('#main-positive-block');
                var sum = pd.reduce(
                    function (pv, cv)
                    {
                        return pv + cv;
                    }, 0);
                datasets = [];
                colors = randColors();
                datasets.push(
                    {
                        //label: 'g', //how to show label [null, val, null, null]
                        data: pd,
                        fillColor: colors[2],
                        strokeColor: colors[0],
                        highlightFill: colors[0],
                        highlightStroke: colors[0]
                    });

                chartData = {
                    labels: pl, //check of correct order
                    datasets: datasets
                };
                $selector.show(0);
                ctxPositive.clearRect(0, 0, canvasPositive.width, canvasPositive.height);
                if (chartPositive) {
                    chartPositive.destroy();
                }
                chartPositive = new Chart(ctxPositive).Bar(chartData, $.extend({scaleBeginAtZero: false}, chartConfig));

                var html = pd.map(function(n, i){
                    return '<td data-th="' + pl[i] + '">' + (n || 0) + '</td>'
                }).join();
                $selector.find('thead tr').html('<th>' + pl.join('</th><th>') + '</th><th>Revenue by Range</th><th>Annual Projected Revenue</th>');
                $selector.find('tbody tr').html(html + '<td class="width-item" data-th="Revenue by Range">'
                    + sum + '</td><td class="width-item" data-th="Annual Projected Revenue">'
                    + parseFloat((sum / pd.length) * 365).toFixed(2) + '</td>');
            }
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