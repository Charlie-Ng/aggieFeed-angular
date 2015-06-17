'use strict';

/**
 * @ngdoc service
 * @name aggieFeedApp.myFactory
 * @description
 * # myFactory
 * Factory in the aggieFeedApp.
 */
angular.module('aggieFeedApp')
  .factory('myFactory', ['$http',
    function ($http) {
    // Service logic
    // ...

    var dynURL = 'http://api.openweathermap.org/data/2.5/find?lat=38.55391&lon=-121.7381&cnt=';
    var json = [];
    // Public API here
    return {
      getSource: function (callback, num) {
        var responseData = $http.get(dynURL + num);
        responseData.success(function(data){
          for(var i = data.count - 1; i >= 0; i--){
            json[data.count - 1 - i]=
            {
              "activity" : {
                "icon": data.list[i].weather[0].id,
                "actor": {
                  "id" : data.list[i].id,
                  "objectType": data.list[i].weather[0].main,
                  "displayName": data.list[i].name,
                  "author" : {
                    "id" : "weather",
                    "displayName" : data.list[i].weather[0].description
                  },//end of author
                  "image" : {
                    "color" : "#f1c40f"
                  }//end of image
                },//end of actor
                "verb": "post",
                "title": "Test Event",
                "object": {
                  "ucdSrcId" : "content identifier",
                  "objectType": "notification",
                  "content": "This is a test notification",
                  "ucdEdusModel" : {
                    "url" : "http://ucdavis.edu",
                    "urlDisplayName" : "UC Davis",
                    "event" : {
                      "location": data.list[i].name,
                      "hasStartTime" : true,
                      "startDate": "date string",
                      "endDate": "date string",
                      "isAllDay": false,
                      "iCalendar" : "iCal string",
                      "addToGoogleCalendar": "string"
                    }
                  },
                  "location" : {
                    "displayName": "coord",
                    "geo" : {
                      "latitude": data.list[i].coord.lat,
                      "longitude": data.list[i].coord.lon
                    },
                    "geometry" : {
                      "type": "Point",
                      "coordinates": [data.list[i].coord.lon,  data.list[i].coord.lat]
                    }
                  }
                },
                "to" : [
                  {
                    "id": "<kName>",
                    "g": false,
                    "i": false
                  }
                ],
                "ucdEdusMeta" : {
                  "labels" : ["~academic", "some-label"],
                  "startDate" : "date string",
                  "endDate" : "date string"
                }
              }};
          }//end for loop
          callback(json);
        });
      }//end of getSource
    };
  }]);
