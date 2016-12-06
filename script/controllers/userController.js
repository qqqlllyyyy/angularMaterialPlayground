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



  function share($event) {

    // $mdBottomSheet.show({
    //   // controller: [$mdBottomSheet, UserSheetController],
    //   controller: UserSheetController,
    //   controllerAs: vm,
    //   templateUrl: 'views/bottomsheet.html',
    //   parent: angular.element(document.getElementById('content')),
    // });
    //
    //
    // function UserSheetController($mdBottomSheet) {
    //   // this.user = selectedUser;
    //   // this.items = [
    //   //   { name: 'Phone'       , icon: 'phone'       , icon_url: ''},
    //   //   { name: 'Twitter'     , icon: 'twitter'     , icon_url: ''},
    //   //   { name: 'Google+'     , icon: 'google_plus' , icon_url: ''},
    //   //   { name: 'Hangout'     , icon: 'hangouts'    , icon_url: ''},
    //   // ];
    //   // this.contactUser = function(action) {
    //   // // The actually contact process has not been implemented...
    //   // // so just hide the bottomSheet
    //   //   $mdBottomSheet.hide(action);
    //   // };
    // }

    $mdBottomSheet.show({
      //template: '<md-bottom-sheet class="md-grid md-has-header"><md-subheader>Share</md-subheader><md-list><md-list-item ng-repeat="item in items"><md-button class="md-grid-item-content" ng-click="listItemClick($index)"><i class="item.icon"></i><div class="md-grid-text"> {{ item.name }} </div></md-button></md-list-item></md-list></md-bottom-sheet>',
      templateUrl: 'views/bottomsheet.html',
      controller: GridBottomSheetCtrl,
      targetEvent: $event
    });
    function GridBottomSheetCtrl($scope, $mdBottomSheet) {
      // $scope.items = [
      //   { icon: 'fa-twitter', class: 'md-primary md-hue-2' },
      //   { icon: 'fa-google-plus', class: 'md-warn md-hue-2' },
      //   { icon: 'fa-facebook', class: 'md-primary' },
      //   { icon: 'fa-linkedin', class: 'md-primary' }
      // ];
      // $scope.listItemClick = function($index) {
      //   var clickedItem = $scope.items[$index];
      //   $mdBottomSheet.hide(clickedItem);
      // };
    }

  }

});
