(function () {
    'use strict';
    
    angular.module('caseApp', [])
    .controller('caseController', caseController);
    
    caseController.$inject = ['$scope', '$filter'];
    function caseController($scope, $filter) {
      $scope.name = "karpaga lakshmi";
	  $scope.money = 7;
    
      $scope.upper = function () {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
      };
    }
    })();
