'use strict';

angular.module('angularApp')
   .controller( 'calculationCtrl', function ( $scope, $rootScope, $timeout, $state, $stateParams, $http, $cookies, model ) {
  
    $scope.timer = 6;

    (function counter() {
        if( $scope.timer === 0 ) return $state.go( 'addition.result' );
        $scope.timer--;
        $timeout( function() {            
            counter();
        }, 1000); 
    })();

  });
