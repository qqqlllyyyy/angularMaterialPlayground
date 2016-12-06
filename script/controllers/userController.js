Users.controller('UserController', function($mdSidenav, $mdBottomSheet, $log, UserService) {
//app.controller('UserController', function() {

  var vm = this;
  vm.selected = null;
  vm.users = [];

  //UserService.loadAllUsers().then(function(users){alert(users);});
  UserService
    .loadAllUsers()
    .then(function(users) {
      vm.users = [].concat(users);
      vm.selected = users[0];
    });

  vm.selectUser = function(user) {
    vm.selected = user;
  };

});
