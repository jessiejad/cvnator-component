'use strict';

'use strict';

angular.module('demoApp')
    .controller('demoFormCtrl', function($scope,$mdDialog){


        // ----------------------------------------------------------------------------------------------------
        // ---- PARAMS CATALOGUE
        // ----------------------------------------------------------------------------------------------------
        /**
         * Here test use case
         *
         * Needed use case to valid the project :
         *      - Default
         *      - Inject an user
         *      - Inject callback > onValid, onError, onSaveUser
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
            title : 'directive my form',
            haveCodeSource : true,
            code : [{
                link : 'pages/demoform/code/directive.html',
                language : 'html',
                title : 'Code HTML de la directive paris1-user-form'
            },{
                link : 'pages/demoform/code/contract.json',
                language : 'json',
                title : 'Contract available for the directive paris1-user-form'
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

        

        $scope.user = {
            name: '',
            firstname: '',
            phone:'',
            email:'',
            adress:''


        };

        $scope.submitForm = function() {

                // check to make sure the form is completely valid
                if ($scope.userForm.$valid) {
                    alert('our form is amazing');
                }

            };
    });