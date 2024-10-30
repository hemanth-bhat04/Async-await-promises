
var app = angular.module('myApp', []);


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


app.directive('productInfo', function() {
    return {
        restrict: 'E', //used as an  element

        scope: {
            productName: '@',  //one way binding

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