'use strict';

angular.module('angularApp')
   .controller( 'descriptionCtrl', function ( $scope, $rootScope, $timeout, $state, $stateParams, $http, $cookies ) {
      
    $scope.username = $cookies.get( 'loginCookie' );
    
    $scope.stage = $state.current.title;
    
  })
  .filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
  })
  .filter('hidedomain', function() {
    return function(input) {
      return (!!input) ? input.replace( /(.+@.)(.+)(\.)/g, function(match, p1, p2, p3, offset, string ) {
        return p1 + Array(p2.length + 1).join("*") + p3;
      }) : '';
    }
  });
