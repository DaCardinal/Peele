angular.module('starter.login', [])

.controller('LoginCtrl', function($scope, $state, $location, $ionicViewService) {
  $scope.loginData = {
    username: '',
    password: ''
  }

  $scope.doLogin = function() {
    console.log('Sign-In');
    $ionicViewService.nextViewOptions({
      disableBack: true
    });
    $state.go('tab.dash', {}, {location: "replace", reload: true});
    // $location.path('/tab/dash');
    // window.location.reload();
  };

  $scope.doLogout = function() {
    console.log('Logging Out');
    $ionicViewService.nextViewOptions({
      disableBack: true
    });
    $state.go('login', {}, {location: "replace", reload: true});
    // $location.path('login');
    // window.location.reload();
  };
});
