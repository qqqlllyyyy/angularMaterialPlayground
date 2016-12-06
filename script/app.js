var app = angular.module('MyApp', ['ngMaterial', 'Users']);


app.config(function($mdIconProvider) {
  // $mdIconProvider.defaultIconSet('assets/img-avatars/svg-1.svg', 128);
  // $mdIconProvider.icon('svg-1', 'assets/img-avatars/svg-1.svg', 128);
  for (var i = 1; i < 10; i++) {
    $mdIconProvider.icon('svg-' + i, 'assets/img-avatars/svg-' + i + '.svg', 128);
  }
});
