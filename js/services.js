var recipeAppService = angular.module('recipeAppService',[]);
  recipeAppService.factory('recipeAppFactory',['$http', function($http){

    var recipeUrl = 'http://api.bigoven.com/recipes?title_kw=',
        apiKey = 'dvx0hom7nq400HGdFUJ164n6U7H9eA2V';
    return {
      httpCall: function (titleKeyword , callback) {
        return $http.get(recipeUrl + titleKeyword + "&pg=1&rpp=30&api_key=" + apiKey)
        .success(callback)
        .error(function(error){
          console.log(error);
        });
      }
    }
  }]);
