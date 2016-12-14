'use strict';

angular.module('demoApp')
    .controller('demoStyleCtrl', function($scope){


        // ----------------------------------------------------------------------------------------------------
        // ---- PARAMS CATALOGUE
        // ----------------------------------------------------------------------------------------------------

        $scope.params = [{
            /**
             * Default
             */
            case       : 'Default Case',
            options    : undefined,
            json       : undefined,
            callback   : undefined,
            listeners  : undefined
        },{
            /**
             * Case JSON
             */
            case       : 'Case inject Json',
            options    : undefined,
            json       : { "background-color" : "red" },
            callback   : undefined,
            listeners  : undefined

        },{
            /**
             * Callback active
             */
            case       : 'Case Callback and Function',
            user    : {
                name : 'toto',
                firstName :"gaga",
                photo : 'http://127.0.0.1:9100/images/photos/F60.png',
                birthDate : "2000-01-01",    
                phone : "423 213 921",
                email : "totoga@gmail.com",
                address : "34 avenue saint martin, 75002 Paris"
            },
            options    : undefined,
            json       : {  "css": [ 
      {
          "myStyle": {
              "background-color":"red",
              "color":"blue"
          }
      }, 
      {
          "myStyle2": {
              "background-color":"green",
              "color":"red"
          }
      },
      {
          "myStyle3": {
              "background-color":"green",
              "color":"red"
          }
      }
   ]},

            callback   : {
                valid : function(json){
                    displayCode('Callback : valid',json);
                    console.log(json.css[0].myStyle);
                    $scope.myStyle=json.css[0].myStyle;
                    $scope.myStyle2=json.css[1].myStyle2;
                    $scope.myStyle3=json.css[2].myStyle3;
                    
                }
            },
            listeners  : {
                onError : function(errors){
                    displayCode('Listeners : onError',errors,true);
                }
            }
        }];

        $scope.chooseParams = function(index){
            // --- Define current status
            $scope.myOptions    = $scope.params[index].options;
            $scope.myJson       = $scope.params[index].json;
            $scope.myCallback   = $scope.params[index].callback;
            $scope.myListener   = $scope.params[index].listeners;
            $scope.myUser       = $scope.params[index].user;

            $scope.index          = index;
            $scope.refresh        = moment().valueOf();
            $scope.haveResult     = false;
        };

        // --- Init
        $scope.chooseParams(0);

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
            title : 'directive paris1-user-style-editor',
            haveCodeSource : true,
            code : [{
                link : 'pages/demoStyle/code/directive.html',
                language : 'html',
                title : 'Code HTML de la directive paris1-user-style-editor'
            },{
                link : 'pages/demoStyle/code/contract.json',
                language : 'json',
                title : 'Params available for the directive paris1-user-style-editor'
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