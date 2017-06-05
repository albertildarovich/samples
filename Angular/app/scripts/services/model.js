'use strict';

angular.module('angularApp')
.factory('model', function($http) {
  var Model = {
    data: {},
    setData: function(data) { 
        this.data = {
            a1: data.a1,
            a2: data.a2,
            a3: data.a3
        }
    },
    getData: function() { 
        return this.data;
    },
    removeData: function() {
        this.data = {};
    },
    getSum: function() {
        return this.data.a1 + this.data.a2 + this.data.a3;
    }
  };  
  return Model; 
});