'use strict';

angular.module('paris1.user.render')
    .directive('myUser',function($log,User){
        return {
            templateUrl : 'paris1.personator/modules/render/directives/my-user/myUserView.html',
            scope : {
                user : '=?',
                callback : '=?',
                general: '=?',
                photo: '=?',
                liste: '=?'
            },link : function(scope){


                /**
                 *
                 */
                scope.$watch('callback',function(callback){
                    $log.info('Check callback',callback);

                    if(callback && callback.valid){
                        scope.isEditable = true;
                    }else{
                        scope.isEditable = false;
                    }
                });

                scope.$watch('user',function(user){
                    $log.info('test user change',user);
                    if(user){

                        scope.current_user = new User(user);
                        scope.user.birthDate = new Date(user.birthDate);
                    }else{
                        scope.current_user = new User();
                    }

                    console.log(scope.current_user);

                });

                scope.$watch('general',function(general){
                    $log.info('test general change',general);
                    if(general){

                        scope.myGeneral = general;
                    }else{
                        scope.myGeneral = "";
                    }

                    console.log(scope.myGeneral);

                });
                scope.$watch('photo',function(photo){
                    $log.info('test photo change',photo);
                    if(photo){

                        scope.myPhoto = photo;
                    }else{
                        scope.myPhoto = "";
                    }

                    console.log(scope.myPhoto);

                });
                scope.$watch('liste',function(liste){
                    $log.info('test liste change',liste);
                    if(liste){

                        scope.myListe = liste;
                    }else{
                        scope.myListe = "";
                    }

                    console.log(scope.myListe);

                });

                /**
                 *
                 */
                scope.isModeEdition = false;
                scope.goToEdition = function(){
                    scope.isModeEdition = !scope.isModeEdition;
                    scope.userEdit = angular.extend({},scope.user);
                };

                /**
                 *
                 */
                scope.valid = function(user){
                    scope.isModeEdition = !scope.isModeEdition;
                    scope.user = angular.extend({},scope.userEdit);

                    scope.current_user.create().then(function(user){
                        scope.callback.valid(user);
                    },function(reason){
                        alert('toto');
                    });


                }


            }
        }
    })