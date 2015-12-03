var website = angular.module('app', ['app.controllers', 'ui.router']);


website.run(function ($state, $rootScope, $stateParams) {
    //makes states work with html5
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.go('home')
});

website.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //enables html5 mode
    $locationProvider
        .html5Mode(
        {
            enabled: true,
            requireBase: false
        })
        .hashPrefix('!');

    //states
    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html'
        })
        .state('drones', {
            url: '/learn',
            templateUrl: 'templates/drones.html',
            controller: 'dronesCtrl'
        })
        .state('teststate', {
            url: '/learn/test',
            templateUrl: 'templates/test.html'
        })
        .state('mvhs', {
            url: '/mvhs',
            templateUrl: 'templates/mvhs.html'
        });
});
