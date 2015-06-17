'use strict';

/**
 * @ngdoc function
 * @name aggieFeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aggieFeedApp
 */

angular.module('aggieFeedApp')
  .controller('MainCtrl', ['$scope', '$http', 'myFactory',
    function ($scope, $http, myFactory) {

    myFactory.getSource(function(data){
      $scope.data = data;
    });


  }]);
