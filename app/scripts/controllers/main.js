'use strict';

/**
 * @ngdoc function
 * @name aggieFeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aggieFeedApp
 */


function addZero(i){
  if(i < 10){
    i = "0" + i;
  }
  return i;
}

function getCurrentTime(){
  var d = new Date();
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  return h + ":" + m + ":" + s;
}


function weatherImg(num){
  if(num >= 200 && num <= 299){
    return "11d.png";
  }
  if(num >= 300 && num <= 399){
    return "09d.png";
  }
  if(num >= 500 && num <= 599){
    return "10d.png";
  }
  if(num >= 600 && num <= 699){
    return "13d.png";
  }
  if(num >= 700 && num <= 799){
    return "50d.png";
  }
  if(num >= 800 && num <= 899){
    return "02d.png";
  }
  return "02d.png";
}



angular.module('aggieFeedApp')
  .controller('MainCtrl', ['$scope', '$http', 'myFactory',
    function ($scope, $http, myFactory) {
      $scope.num = 1;
      $scope.data = [];
      $scope.createTime = [];
      $scope.weatherIcon = [];


      //img generator
      function imgGenerator(){
        var temp;
        for(var i = 0; i < $scope.data.length; i++){
          temp = weatherImg(Number($scope.data[i].activity.icon));
          $scope.weatherIcon[i] = 'http://openweathermap.org/img/w/' + temp;

        }
      }

    //first time
      $scope.createTime[0] = getCurrentTime();
      myFactory.getSource(function(data){
        $scope.data = data;
        imgGenerator();
      }, $scope.num);



    //button clicked
    $scope.show = function(){
      $scope.createTime[$scope.num] = getCurrentTime();
      $scope.num++;
      myFactory.getSource(function(data){
        $scope.data = data;
        imgGenerator();
      }, $scope.num);
    };


  }]);

