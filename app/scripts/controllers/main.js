'use strict';

/**
 * @ngdoc function
 * @name aggieFeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aggieFeedApp
 */

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
  });
