'use strict';

angular.module('demoApp')
    .controller('demoStyleChatCtrl', function($scope){


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
            case       : 'Template 2',
            options    : undefined,
            json       : { "css": [ 
      
      {
          "general": {
              "background-color":"#4f5d73"
          }
      },
      {
          "texte": {
              "color":"#87CEEB"
          }
      }
   ]},

            callback   : {
                valid : function(json){
                    displayCode('Callback : valid',json);
                    console.log(json);
                    $scope.general=json.css[0].general;
                    $scope.texte=json.css[1].texte;
                }
            },
            listeners  : {
                onError : function(errors){
                    displayCode('Listeners : onError',errors,true);
                }
            }},{
            /**
             * Callback active
             */
            case       : 'Template 3',
            options    : undefined,
            json       : { "css": [ 
      
      {
          "general": {
              "background-color":"#4f5d73"
          }
      },
      {
          "texte": {
              "color":"#87CEEB"
          }
      }
   ]},

            callback   : {
                valid : function(json){
                    displayCode('Callback : valid',json);
                    console.log(json);
                    $scope.general=json.css[0].general;
                    $scope.texte=json.css[1].texte;
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
            title : 'directive paris1-chat-style-editor',
            haveCodeSource : true,
            code : [{
                link : 'pages/demoStyleChat/code/directive.html',
                language : 'html',
                title : 'Code HTML de la directive paris1-chat-style-editor'
            },{
                link : 'pages/demoStyleChat/code/contract.json',
                language : 'json',
                title : 'Params available for the directive paris1-chat-style-editor'
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