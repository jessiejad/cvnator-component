'use strict';

angular.module('demoApp')
    .config(function ($urlRouterProvider, $stateProvider) {

    $stateProvider
        // ------------------------------------------------------------------------------------------------
        // HOMEPAGE - Init the current value
        // ------------------------------------------------------------------------------------------------
        .state('default', {
            url : '/',
            controller : 'homepageCtrl',
            templateUrl : "pages/_homepage/homepageView.html"
        })

        // ------------------------------------------------------------------------------------------------
        // DEMO EDITOR Component
        // ------------------------------------------------------------------------------------------------
        .state('userRender', {
            url : '/user-render',
            controller : 'demoRenderCtrl',
            templateUrl : "pages/demoRender/demoRenderView.html"
        })

        .state('userForm', {
            url : '/user-form',
            controller : 'demoFormCtrl',
            templateUrl : "pages/demoForm/demoFormView.html"
        })
    ;

        $urlRouterProvider.otherwise('/');
});