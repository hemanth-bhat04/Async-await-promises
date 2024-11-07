var app = angular.module("app",[]);
app.controller('emp',['$scope','calcfactory',function($scope,calcfactory){

    $scope.a = 10;
    $scope.b = 20;

    $scope.dosum = function(){
        $scope.sum = calcfactory.getsum($scope.a,$scope.b);
    };
}]);

app.factory('calcfactory',['$http','$log',function($http,$log){
$log.log("instantiating calcfactory...");
var calcservice = {};
calcservice.getsum  = function(a,b){
  return parseInt(a) + parseInt(b);
};
return calcservice

}]);