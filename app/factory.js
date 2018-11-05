;(function() {

  angular
    .module('devhub-test')
    .factory('getDataFromAPI', getDataFromAPI);

  getDataFromAPI.$inject = ['$http'];

  function getDataFromAPI($http) {

    return {
      loadData: loadData
    };

  }


})();
