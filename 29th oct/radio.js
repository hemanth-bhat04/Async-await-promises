angular.module('quizApp', [])
    .controller('QuizController', function($scope) {
        $scope.answers = {
            question1: '',
            languages: {
                JavaScript: false,
                PHP: false,
                HTML: false,
                CSS: false
            }
        };

        $scope.submitted = false;

        $scope.submitQuiz = function() {
            $scope.submitted = true;
        };
    });