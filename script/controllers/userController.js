Users.controller('UserController', function($mdBottomSheet, $mdSidenav, UserService) {


  var vm = this;

  // Variables
  vm.selected = null;
  vm.users = [];

  // Functions
  vm.selectUser = selectUser;
  vm.share = share;
  vm.toggleList = toggleUsersList;


  UserService
    .loadAllUsers()
    .then(function(users) {
      vm.users = [].concat(users);
      vm.selected = users[0];
    });


  // ------------------------------------------------------------
  // Function Details


  function toggleUsersList() {
    $mdSidenav('left').toggle();
  }

  function selectUser(user) {
    vm.selected = user;
  }



  function share(selectedUser) {

    $mdBottomSheet.show({
      controller: UserSheetController,
      controllerAs: 'bottomCtrl',
      templateUrl: 'views/bottomsheet.html',
      parent: angular.element(document.getElementById('content')),
    });


    function UserSheetController($mdBottomSheet) {

      this.user = selectedUser;
      this.items = [
        { name: 'Phone'       , icon: 'phone-square'       , url: 'http://www.google.com'},
        { name: 'Twitter'     , icon: 'twitter-square'     , url: 'http://www.twitter.com'},
        { name: 'Google+'     , icon: 'google-plus-square' , url: 'http://www.google.com'},
        { name: 'Git'         , icon: 'git-square'         , url: 'http://www.github.com'},
      ];
      this.contactUser = function(action) {
      // The actually contact process has not been implemented...
      // so just hide the bottomSheet
        $mdBottomSheet.hide(action);
      };
    }



  }

});
