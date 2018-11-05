;(function() {

  angular
    .module('devhub-test', [
      'ngRoute',
      'ngTable'
    ])
    .config(config);

  config.$inject = [ '$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider', '$routeParamsProvider',];

  function config( $routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/user/:id', {
        templateUrl: 'views/user.html',
        controller: 'UserController',
        controllerAs: 'user'
      })
      .otherwise({
        redirectTo: '/'
      });
  }



  angular
    .module('devhub-test')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {

    // put here everything that you need to run on page load

  }


})();
