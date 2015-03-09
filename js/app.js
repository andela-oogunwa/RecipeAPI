var cakeApp = angular.module('recipeApp',['recipeAppService']);
    cakeApp.controller('recipeAppCntrl',['$scope','recipeAppFactory', function($scope , recipeAppFactory){
      $scope.searchTitle = function () {
        $scope.loadDiv = true;
          recipeAppFactory.httpCall($scope.titleKeyword, function (response) {
            $scope.loadDiv = false;
            $scope.hideResults = false;
            $scope.response = response;
            $scope.titleKeyword = "";
            $scope.resultCount = response.ResultCount;
              if(response.ResultCount === 0) {
              $scope.noResult = "No result found";
            }
              else {
                $scope.noResult = "";
              }
          });
      }; 
    }]);