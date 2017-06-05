'use strict';

angular.module('angularApp')
   .controller( 'inputCtrl', function ( $scope, $rootScope, $timeout, $state, $stateParams, $http, $cookies, model ) {
    
    $scope.inputData = {};
    $scope.submit = function() {
        model.setData($scope.inputData);
        $state.go( 'addition.confirmation');
    }
  });
