'use strict';

angular.module('angularApp')
  .controller( 'signInCtrl', function ( $scope, $rootScope, $timeout, $state, $stateParams, $http, $cookies ) {
      
    $scope.credentials = {
      username: '',
      password: ''
    };
    
    $scope.error = '';

    $scope.login = function (credentials) {
        $scope.loading = true;
        $scope.error = '';
        $timeout( function() {            
            var expireDate = new Date();
            expireDate.setDate( expireDate.getDate() + 30 );
            $cookies.put( 'loginCookie', $scope.credentials.username, { 'expires': $scope.rememberMe ? expireDate : 0 } );
            $state.go( 'addition.input' );                      
      }, 2000)      
    };
  });
