var app = angular.module("postserviceapp", []);

app.controller("postController", function($scope, $http) {
    // Initialize the form data
    $scope.formData = {
        name: null,
        age: null,
        address: null
    };

    // Message to display after submission
    $scope.message = '';

    // Function to post data
    $scope.submitData = function() {
        // Prepare the data for posting
        var data = angular.copy($scope.formData);

        // Make the POST request
        $http.post("https://jsonplaceholder.typicode.com/posts", data)
            .then(function(response) {
                console.log(response);

                if (response.data) {
                    $scope.message = "Post Data Submitted Successfully!";
                    
                    // Optionally, you can clear the form after submission
                    $scope.formData = {
                        name: null,
                        age: null,
                        address: null
                    };
                }
            })
            .catch(function(error) {
                console.error("Error occurred during POST request:", error);
                $scope.message = "Error submitting data. Please try again.";
            });
    };
});