angular
    .module('OWMApp', ['ngRoute'])
    .value('owmCities', ['New York', 'Dallas', 'Chicago'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            })
            .when('/city/:city', {
                templateUrl: 'city.html',
                controller: 'CityCtrl'

            })

        .when('/error', {
                template: '<p>Error - Page Not Found</p>'
            })
            .otherwise('/error');
    }])
    .run(function($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function() {
            $location.path('/error');
        });
    })
