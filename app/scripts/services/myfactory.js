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

    var responseData = $http.get('http://api.openweathermap.org/data/2.5/find?lat=38.55391&lon=-121.7381&cnt=10');
    var json = [];
    // Public API here
    return {
      getSource: function (callback) {
        responseData.success(function(data){
          for(var i = 0; i < data.count; i++){
            json[i]=
            {
              "activity" : {
                "icon": "icon-comment-alt",
                "actor": {
                  "id" : data.list[i].id,
                  "objectType": "weather",
                  "displayName": data.list[i].name,
                  "author" : {
                    "id" : "weather",
                    "displayName" : data.list[i].weather.description
                  },
                  "image" : {
                    "color" : "#f1c40f"
                  }
                },
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
                      "latitude": data.list[i].lat,
                      "longitude": data.list[i].lon
                    },
                    "geometry" : {
                      "type": "Point",
                      "coordinates": [data.list[i].lon, data.list[i].lat]
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

          }
          callback(json);
        });
      }
    };
  }]);
