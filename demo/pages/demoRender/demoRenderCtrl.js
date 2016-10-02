'use strict';

angular.module('demoApp')
    .controller('demoRenderCtrl', function($scope){


        // ----------------------------------------------------------------------------------------------------
        // ---- PARAMS CATALOGUE
        // ----------------------------------------------------------------------------------------------------
        /**
         * Here test use case
         *
         * Needed use case to valid the project :
         *      - Default
         *      - Inject an user
         *      - Inject an userId
         *      - Inject responsive design
         * @type {*[]}
         */
        $scope.params = [{
            /**
             * Default
             */
            case       : 'Default Case'
        },{
            /**
             * Case JSON
             */
            case       : 'Case inject Json',
            user       : {
                "id" : "userId",
                "fullname": "Mr Hello World"
            }
        }];

        // ---- Apply params
        $scope.chooseParams = function(index){
            // --- Define current status
            /**
             * Here define your params inject to paris1-user-render
             */
            // $scope.myOptions    = $scope.params[index].options;
            // $scope.myJson       = $scope.params[index].json;
            // $scope.myCallback   = $scope.params[index].callback;
            // $scope.myListener   = $scope.params[index].listeners;

            $scope.index          = index;
            $scope.refresh        = moment().valueOf();
            $scope.haveResult     = false;
        };

        // --- Init
        $scope.chooseParams(0);

        // ----------------------------------------------------------------------------------------------------
        // ---- DISPLAY CODE MODE
        // ----------------------------------------------------------------------------------------------------
        $scope.displayCode  = false;
        $scope.maxHeight    = $(window).height() - 250;

        $scope.showCode = function(){
            $scope.displayCode = !$scope.displayCode;
        };

        /**
         * Page description
         * @type {{title: string, icon: string, haveCodeSource: boolean}}
         */
        $scope.page         = {
            title : 'directive paris1-user-render',
            haveCodeSource : true,
            code : [{
                link : 'pages/demoRender/code/directive.html',
                language : 'html',
                title : 'Code HTML de la directive paris1-user-render'
            },{
                link : 'pages/demoRender/code/contract.json',
                language : 'json',
                title : 'Params available for the directive paris1-user-render'
            }]
        };

        /**
         * MODE Fullscreen
         */
        $scope.fullScreenMode = true;
        $scope.hideParams     = false;
        $scope.fullScreen = function(){
            $scope.hideParams = !$scope.hideParams;
        };

        /**
         * Update result viewer
         * @param from
         * @param code
         * @param isError
         */
        var displayCode = function(from,code,isError){

            $scope.haveResult   = true;

            $scope.result       = {
                code : code,
                isError : isError,
                title : from
            };
        };

    });