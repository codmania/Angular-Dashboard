app.controller('AuthCtrl',
    ['$scope', '$state', '$rootScope', '$localStorage', 'Authenticate', function($scope, $state, $rootScope, $localStorage, Authenticate) {
        $scope.step = 'signup';

        $scope.createAccount = function() {
            $localStorage.currentUser = $scope.user;
            $rootScope.currentUser = $scope.user;
            // $state.go("airiq-search.main");
        }

        $scope.signIn = function() {
            var loginData = $scope.user;

            Authenticate.getToken(loginData).then(function(resp) {
                $localStorage.auth = JSON.stringify(resp);

                Authenticate.getCarriers(resp).then(function(response) {
                    var props = response.properties;
                    if(Object.keys(props).length){
                        if(props.defaultcarrier){
                            resp.defaultCarrier = props.defaultcarrier;
                        }
                        if(props.carriergroups){
                            resp.carrierGroups = props.carriergroups;
                        }
                    }
                    $rootScope.currentUser = $scope.user;
                    $localStorage.currentUser = $scope.user;
                    $localStorage.auth = JSON.stringify(resp);
                    $state.go("airiq-search.main");
                }, function(error) {
                    $state.go('sign-in');
                    // if(!error.responseText){
                    //     $state.go('sign-in');
                    // } else {
                    //     error = JSON.parse(error.responseText);
                    //     $state.go('sign-in');
                    // }
                });

            }, function(error) {
                $state.go('sign-in');
                // try{
                //     error = JSON.parse(error.responseText);
                //     // showAlert(error.message)
                //     $state.go('sign-in');

                // } catch (e){
                //     // showAlert(error.responseText);
                //     $state.go('sign-in');
                // }
            });
        }

        $scope.months = [];

        $scope.years = _.times(10, function(e){
            return {id: e, name: moment().year() + e};
        });

        $scope.states = [];

        $scope.countries = [];


    }]);