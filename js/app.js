/*#######################################################################
  
  naijaApp
  http://twitter.com/tbenjis
  The script reads all app data from applist.json and displays
  them with filters.
  image folder
  /img/apps - must contain a 228x228 logo of the app < 40kb

  Controlers
  ----------
  AppListController

  #######################################################################*/
var app = angular.module('naijaApp', []); //The app module

//creating a controller object incase we need more controllers
var controllers = {};

//lets sort the app list at random
function randSrt(){
      return (Math.round(Math.random())-0.5); 
    }

//we get the list from applist.json
controllers.AppListController = function($scope, $http) {
    $http.get('./applist.json').success(function(data) {
    $scope.applist = data.apps.sort(randSrt); //sort the applist here
  });
}

app.controller(controllers);