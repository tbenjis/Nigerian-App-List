/*#######################################################################
  
  naijaApp
  http://twitter.com/tbenjis
  The script reads all app data from applist.json and displays
  them with filters.

  Controler
  ---------
  AppsController

  #######################################################################*/
var app = angular.module('naijaApp', []); //The app module

//creating a controller object incase we need more controllers
var controllers = {};

//we get the list from the applist.json
controllers.AppListController = function($scope, $http) {
    $http.get('./applist.json').success(function(data) {
    $scope.applist = data.apps;
  });

app.controller(controllers);