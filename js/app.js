/*#######################################################################
  
  naijaApp
  http://twitter.com/tbenjis
  The script reads all app data from applist.json and displays
  them with filters.
  image folder
  /img/apps - must contain a 228x228 logo of the app < 30kb

  Controlers
  ----------
  AppListController

  #######################################################################*/
var app = angular.module('naijaApp', ['ui.bootstrap']); //The app module

//creating a controller object incase we need more controllers
var controllers = {};

//lets sort the app list at random
function randSrt(){
      return (Math.round(Math.random())-0.5); 
}

app.filter('startFrom', function () {
  return function (input, start) {
    if (input) {
      start = +start;
      return input.slice(start);
    }
    return [];
  };
});

//we get the list from applist.json
controllers.AppListController = function($scope, $http, $filter) {
    
  $http.get('./applist.json').success(function(data) {
  $scope.applist = data.apps.sort(randSrt); //sort the applist here    

   //pagination settings
   $scope.maxSize = 5;
   $scope.currentPage = 1;
   $scope.perPage = 42;
   $scope.total = $scope.applist.length;
   $scope.totalPages = Math.ceil($scope.total/$scope.perPage);

  //we count both android and IOS apps for the graph 
  getCount = function(strType){
    return $filter('filter')( $scope.applist, {$:strType}, true).length
  }

  //do a little chart data
  var doughnutData = [
          {
            value: getCount('Android'),
            color:"#27ae60",
            highlight: "#2ecc71",
            label: "Android"
          },
          {
            value: getCount('IOS'),
            color: "#c0392b",
            highlight: "#e74c3c",
            label: "IOS"
          },
          {
            value: getCount('BlackBerry'),
            color: "#D24726",
            highlight: "#DC572E",
            label: "BlackBerry"
          },
          {
            value: getCount('Windows'),
            color: "#2672EC",
            highlight: "#2E8DEF",
            label: "Windows"
          }
        ];

  //draw the chat
  var ctx = document.getElementById("chart-area").getContext("2d");
  var myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});

  });

}

app.controller(controllers);

