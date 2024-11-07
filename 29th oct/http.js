var app = angular.module('userApp', []);
app.controller('userCtrl', function($scope, $http) {
    $scope.users = [];

    $scope.getUsers = function() {
        $http.get('https://jsonplaceholder.typicode.com/users')
            .then(function(response) {
                $scope.users = response.data;
            }, function(error) {
                console.error('Error occurred:', error);
            });
    };

    $scope.addUser = function() {
        var newUser = { name: 'Hemanth Bhat', email: 'hemanthbhat@example.com' };
        $http.post('https://jsonplaceholder.typicode.com/users', newUser)
            .then(function(response) {
                $scope.users.push(response.data);
                console.log("User added")
            }, function(error) {
                console.error('Error occurred:', error);
            });
    };

    $scope.updateUser = function() {
        var updatedUser = { name: 'Hemanth Bhat', email: 'hemanthbhat@example.com' };
        $http.put('https://jsonplaceholder.typicode.com/users/1', updatedUser)
            .then(function(response) {
                var index = $scope.users.findIndex(user => user.id === 1);
                if (index !== -1) {
                    $scope.users[index] = response.data;
                    console.log("1st user updated");
                }
            }, function(error) {
                console.error('Error occurred:', error);
            });
    };

    $scope.deleteUser = function() {
        var userId = 1; 
        $http.delete('https://jsonplaceholder.typicode.com/users/' + userId)
            .then(function(response) {
                $scope.users = $scope.users.filter(user => user.id !== userId);
            }, function(error) {
                console.error('Error occurred:', error);
            });
    };

    $scope.headRequest = function() {
        $http.head('https://jsonplaceholder.typicode.com/users')
            .then(function(response) {
                console.log('HEAD request successful:', response);
            }, function(error) {
                console.error('Error occurred:', error);
            });
    };

    
});
