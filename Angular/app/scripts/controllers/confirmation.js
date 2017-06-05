'use strict';

angular.module('angularApp')
   .controller( 'confirmationCtrl', function ( $scope, $rootScope, $timeout, $state, $stateParams, $http, $cookies, model ) {
    $scope.data = model.getData();
    $scope.next = function() {
        $state.go( 'addition.calculation' );       
    }
    $scope.back = function() {
        $state.go( 'addition.input' );
    }
  });
