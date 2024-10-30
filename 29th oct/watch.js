var app = angular.module('app',[]);

app.controller('emp',['$scope',function($scope){
    $scope.employees = [
        {empno: "1001", ename: "Hemanth"},
        {empno: "1002", ename: "Ravi"},
        {empno: "1003", ename: "Adi"},
    ];

$scope.addEmp = function(){
    var newempno = 1000 + $scope.employees.length + 1;
    var newName = "ename" + newempno;

    $scope.employees.push({empno: newempno, ename: newName});
};

$scope.modify3rdemp = function(){
    $scope.employees[2].ename = "Test"; 
};

/*$scope.$watch('employees',function(newValue,oldValue){
    console.log("no of employees: "+$scope.employees.length);
});*/

/*$scope.$watchCollection('employees',function(newValue,oldValue){
    console.log("no of employees: "+$scope.employees.length);
});*/

$scope.$watch('employees',function(newValue,oldValue){
    console.log("no of employees: "+$scope.employees.length);
},true); //deep watch

}]);