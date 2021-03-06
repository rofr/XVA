﻿
var myApp = angular.module("myApp", ['ngRoute', 'myControllers', 'xsockets']);

myApp.config(['$locationProvider', '$routeProvider', 'xsProvider',
    function ($locationProvider, $routeProvider, xsProvider) {
        // just set up one simple route
        $routeProvider.when('/chat/', {
            templateUrl: '/app/views/chat.html',
            controller: 'ChatController'
        }).otherwise({
            redirectTo: '/chat'
        });
        xsProvider.url = "ws://" + location.host;
        xsProvider.controllers = ["chat"];
    }
]);


