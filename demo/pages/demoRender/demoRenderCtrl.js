//'use strict';

'use strict';

angular.module('demoApp')
    .controller('demoRenderCtrl', function($scope, User){


        // ----------------------------------------------------------------------------------------------------
        // ---- PARAMS CATALOGUE
        // ----------------------------------------------------------------------------------------------------


/**     +
-         * Here test use case      
-         *     
-         * Needed use case to valid the project :      
-         *      - Default      
-         *      - Inject an user       
-         *      - Inject an userId     
-         *      - Inject responsive design     
-         * @type {*[]}     
-         */
        $scope.params = [{
            /**
             * Default
             */
            case        : 'Default Case',
            user        : undefined,
            callback    : undefined
        },{
            /**
             * Case user
             */
            case       : 'Case user',
            user    : {
                name : 'toto',
                firstName :"gaga",
                photo : 'http://127.0.0.1:9100/images/photos/F60.png',
                birthDate : "2000-01-01",    
                phone : "423 213 921",
                email : "totoga@gmail.com",
                address : "34 avenue saint martin, 75002 Paris"
            },
            callback : {
                valid : function(user){
                    displayCode('onValid', user)
                }
            }
        }];

        $scope.chooseParams = function(index){
            // --- Define current status

            // $scope.myOptions    = $scope.params[index].options;      
           // $scope.myJson       = $scope.params[index].json;        
           // $scope.myCallback   = $scope.params[index].callback;        
           // $scope.myListener   = $scope.params[index].listeners;
            $scope.myUser    = $scope.params[index].user;
            $scope.myCallback = $scope.params[index].callback;

            $scope.index          = index;
            $scope.refresh        = moment().valueOf();
            $scope.haveResult     = false;
        };

        // --- Init
        $scope.chooseParams(1);

        // --- Update result viewer
        var displayCode = function(from,code,isError){

            $scope.haveResult   = true;

            $scope.result       = {
                code : code,
                isError : isError,
                title : from
            };
        };
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
-         * Update result viewer        
-         * @param from     
-         * @param code     
-         * @param isError      
-         */        
       var displayCode = function(from,code,isError){     
       
            $scope.haveResult   = true;        
       
            $scope.result       = {        
                code : code,       
                isError : isError,     
                title : from       
            };     
        };
    });