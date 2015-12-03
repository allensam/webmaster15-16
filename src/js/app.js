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
        .state('techstate', {
            url: '/learn/tech',
            templateUrl: 'templates/tech.html'
        })
        .state('uses', {
            url: '/learn/uses',
            templateUrl: '/templates/uses.html'
        })
        .state('mvhs', {
            url: '/mvhs',
            templateUrl: 'templates/mvhs.html'
        });
});
