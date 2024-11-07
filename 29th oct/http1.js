var app = angular.module('userApp', []);
app.controller('userCtrl', function($scope, $http) {
    $scope.users = [];

    $scope.getUsers = function() {
        $http.get("C:\Users\Admin\Desktop\[.txt")
            .then(function(response) {
                $scope.users = response.data;
            }, function(error) {
                console.error('Error occurred:', error);
            });
    };

    $scope.addUser = function() {
        var newUser = { name: 'Hemanth Bhat', email: 'hemanthbhat@gmail.com' };
        $http.post('C:\Users\Admin\Desktop\[.txt', newUser)
            .then(function(response) {
                $scope.users.push(response.data);
            }, function(error) {
                console.error('Error occurred:', error);
            });
    };

    $scope.deleteUser = function() {
        var userId = 1;
        $http.delete('C:\Users\Admin\Desktop\[.txt' + userId)
            .then(function(response) {
                $scope.users = $scope.users.filter(user => user.id !== userId);
            }, function(error) {
                console.error('Error occurred:', error);
            });
    };
});
