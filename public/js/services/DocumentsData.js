angular.module('esApp').factory('DocumentsData', function ($resource, $q) {
  var resource = $resource("/api/documents");
  return {
    getAll: function () {
      var deferred = $q.defer();
      resource.query({},
        function (response) { deferred.resolve(response) },
        function (response) { deferred.reject(response) });

      return deferred.promise;
    }
  }
});
