(function () {
    var app = angular.module("dashboardViewer");
    var DashboardController = function ($scope, $http) {
        $scope.search = function (username) {
            $http.get("https://cors.io/?https://99sszhzro1.execute-api.us-east-1.amazonaws.com/customers/info?cin=" + $scope.username)
                .then(function (response) {
                    //console.log(response.data);
                    $scope.user = response.data;
                    //console.log('SEARCH');
                });
        };
        $scope.username = "1500000021";
    };
    app.controller("DashboardController", DashboardController);
}());