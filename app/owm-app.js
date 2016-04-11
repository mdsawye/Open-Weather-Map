angular
    .module('OWMApp', ['ngRoute', 'ngAnimate'])
    .value('owmCities', ['New York', 'Dallas', 'Chicago'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl as home'
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
    .run(function($rootScope, $location, $timeout) {
        $rootScope.$on('$routeChangeError', function() {
            $location.path('/error');
        });
        $rootScope.$on('$routeChangeStart', function() {
        $rootScope.isLoading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
      $timeout(function() {
        $rootScope.isLoading = false;
      }, 1000);
    });
})
  
