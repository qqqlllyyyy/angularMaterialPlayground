var app = angular.module('MyApp', ['ngMaterial', 'Users']);


app.config(function($mdIconProvider, $mdThemingProvider) {
  for (var i = 1; i < 10; i++) {
    $mdIconProvider.icon('svg-' + i, 'assets/img-avatars/svg-' + i + '.svg', 128);
  }

  $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('red');
});
