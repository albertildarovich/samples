'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */

/*this is undefined templates wrokaround*/
angular.module('views', []);
/**/

angular
  .module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'views',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
     $stateProvider
      .state( 'root', {
        url: ''
      } )
      .state('home', {
        url: '/home',
        title: 'Home page',
        templateUrl: 'views/home.html'
      } )
      .state( 'signIn', {
          url: '/signIn',
          title: 'Авторизация',
          templateUrl: 'views/signIn.html',
          controller: 'signInCtrl',
          controllerAs: 'signIn'
      } )
      .state( 'addition', {
          url: '/addition',
          abstract: true
      })
      .state( 'addition.input', {
          url: '/input',
          title: 'Data input',
          views: {
            'main-view': {
              templateUrl: 'views/additionInput.html',
              controller: 'inputCtrl',
              controllerAs: 'input'
            },
            'description': {
              templateUrl: 'views/description.html',
              controller: 'descriptionCtrl',
              controllerAs: 'description'
            }
          }
      })
      .state( 'addition.confirmation', {
          url: '/confirmation',
          title: 'Confirmation',
          views: {
            'main-view': {
              templateUrl: 'views/additionConfirmation.html',
              controller: 'confirmationCtrl',
              controllerAs: 'confirmation'
            },
            'description': {
              templateUrl: 'views/description.html',
              controller: 'descriptionCtrl',
              controllerAs: 'description'
            }
          }
        })
      .state( 'addition.calculation', {
          url: '/calculation',
          title: 'Processing',
          views: {
            'main-view': {
              templateUrl: 'views/additionCalculation.html',
              controller: 'calculationCtrl',
              controllerAs: 'calculation'
            },
            'description': {
              templateUrl: 'views/description.html',
              controller: 'descriptionCtrl',
              controllerAs: 'description'
            }
          }
       })
      .state( 'addition.result', {
          url: '/result',
          title: 'Result',
          views: {
            'main-view': {
              templateUrl: 'views/additionResult.html',
              controller: 'resultCtrl',
              controllerAs: 'result'
            },
            'description': {
              templateUrl: 'views/description.html',
              controller: 'descriptionCtrl',
              controllerAs: 'description'
            }
          }
      })
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  })
  .run(['$rootScope', '$state', '$cookies', '$timeout', function($rootScope, $state, $cookies, $timeout ) {
      !$state.current.name && $state.go( 'home' );
      $rootScope.$on('$stateChangeStart', function(event, toState) {
        if ( !$cookies.get( 'loginCookie') && ( toState.name !== 'home' ) && ( toState.name !== 'signIn' ) ) {
          event.preventDefault();
          $state.go( 'home' );
        }
      });
      $rootScope.$on('$stateChangeSuccess', function() {
          document.title = $state.current.title;
      });
  }])
