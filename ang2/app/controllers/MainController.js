var MainController = angular.module('App1.MainController', [])
    .controller('MainController', function ($scope, $location, callsService) {
        $scope.name = "Radu";

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        callsService.getCategories('categories').then(function(data) {
            $scope.categories = data;
        });

        callsService.getCategories('title').then(function(data) {
            $scope.chartTitle = data;
        });

        callsService.getCategories('series').then(function(data) {
            $scope.chartAreaData = data;
        });

        $scope.menu = [
            {
                'name' : '',
                'label' : 'Home'
            },
            {
                'name' : 'about',
                'label' : 'About'
            },
            {
                'name' : 'contact',
                'label' : 'Contact'
            }
        ];

        //$scope.categories = ['1750', '1800', '1850', '1900', '1950', '1999', '2050'];

        // $scope.chartTitle = 'Population';

        // $scope.chartAreaData = [{
        //     name: 'Asia',
        //     data: [502, 635, 809, 947, 1402, 3634, 5268]
        // }, {
        //     name: 'Africa',
        //     data: [106, 107, 111, 133, 221, 767, 1766]
        // }, {
        //     name: 'Europe',
        //     data: [163, 203, 276, 408, 547, 729, 628]
        // }, {
        //     name: 'America',
        //     data: [18, 31, 54, 156, 339, 818, 1201]
        // }, {
        //     name: 'Oceania',
        //     data: [2, 2, 2, 6, 13, 30, 46]
        // }];
    });
