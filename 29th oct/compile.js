var app = angular.module('app',[]);

app.controller('emp',['$scope',function($scope){
    $scope.a = 1;
    $scope.b =  2;
    $scope.c =  4;
    /*$scope.updatec = function(){
        $scope.c = $scope.a * 4;
    };

    /*$scope.$watch("c",function(newValue, oldValue){
        if(newValue != oldValue){
            console.log("Updated c to " + newValue);
        }
    });*/

    $scope.$watchGroup(['a','b'],function(newValue, oldValue){
        if(newValue != oldValue)
            {
                $scope.c  = $scope.a * $scope.b;

            //console.log("Updated c to " + newValue);
        }
    });

}]);

