'use strict';

/**
 * @ngdoc function
 * @name aggieFeedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aggieFeedApp
 */
angular.module('aggieFeedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
