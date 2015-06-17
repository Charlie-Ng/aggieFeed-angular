'use strict';

/**
 * @ngdoc directive
 * @name aggieFeedApp.directive:contact
 * @description
 * # contact
 */
angular.module('aggieFeedApp')
  .directive('createTime', function () {
    return {
      templateUrl: 'views/myTemplate.html',
      restrict: 'AE',
      replace: true
    };
  });
