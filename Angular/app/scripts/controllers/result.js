'use strict';

angular.module('angularApp')
   .controller( 'resultCtrl', function ( $scope, $rootScope, $timeout, $state, $stateParams, $http, $cookies, model ) {
    
    $scope.res = model.getSum();
    $scope.data = model.getData();

    !$scope.res && $state.go( 'addition.input' );

    $scope.odd = function() {
      return !($scope.res & 1);
    }
    
    $scope.back = function() {
        $state.go( 'addition.input' );
    }

  });
