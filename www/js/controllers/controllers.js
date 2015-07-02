angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $location, Items) {
  $scope.itemsList = Items.all();

  $scope.goToDetail = function(id){
    $location.path('tab/dash/' + id);
    console.log('Going to location with path id: ' + id);
  };
})

.controller('DashDetailCtrl', function($scope, $stateParams, Items) {
  $scope.item = Items.get($stateParams.dashItemID);
})

.controller('BuzzCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    notifications: true
  };
});
