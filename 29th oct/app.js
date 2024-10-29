// AngularJS application
var app = angular.module('myApp', []);

// Custom directive for user info
app.directive('userInfo', function() {
    return {
        restrict: 'E',
        scope: {
            name: '@',
            age: '@'
        },
        template: `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Name: {{ name }}</h5>
                    <p class="card-text">Age: {{ age }}</p>
                </div>
            </div>
        `
    };
});

// Custom directive for product info
app.directive('productInfo', function() {
    return {
        restrict: 'E',
        scope: {
            productName: '@',
            productPrice: '@'
        },
        template: `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Product: {{ productName }}</h5>
                    <p class="card-text">Price: {{ productPrice }}</p>
                </div>
            </div>
        `
    };
});