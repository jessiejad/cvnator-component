'use strict';

angular.module('demoApp')
    
    .controller('appCtrl', function($scope, $timeout, $mdSidenav, $log,$http,$state,WEBAPP_CONFIG){

        // ----- FROM MATERIAL ANGULAR
        $scope.toggleRight = function() {
            $mdSidenav('right')
                .toggle()
                .then(function () {
                    //$log.debug("toggle " + navID + " is done");
                });
        };

        // ----- FROM MATERIAL ANGULAR
        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    //$log.debug("close RIGHT is done");
                });
        };

        // ----- Load pages available
        $http.get('data/pages.json').then(function(response){
            $scope.pages = response.data;
        });

        // ----- Go to a specific state
        $scope.goTo = function(state){
            $scope.close();
            $state.transitionTo(state);
        };

        /**
         * CONFIG
         */
        $scope.appName = WEBAPP_CONFIG.name;
        $scope.appVersion = WEBAPP_CONFIG.version;

    });
    
