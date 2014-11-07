'use strict';

angular.module('travisTest')
  .controller('NavbarCtrl', ['$scope', function ($scope) {
    $scope.date = new Date();
  }]);
