Users.service('UserService', function($q) {

  var vm = this;

  vm.users = [
    {
      name: 'Lia Lugo',
      // avatar: 'assets/img-avatars/svg-1.svg',
      avatar: 'svg-1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a diam sollicitudin,\
                accumsan magna et, egestas mauris. Sed ut dapibus nisl. Sed ac sodales risus.'
    },
    {
      name: 'Thomas Burleson',
      avatar: 'svg-2',
      content: 'I love cheese....'
    },
    {
      name: 'Aaron Frost',
      avatar: 'svg-3',
      content: 'I love cheese....'
    },
    {
      name: 'Lawrency Ray',
      avatar: 'svg-4',
      content: 'I love cheese....'
    },
    {
      name: 'Gener Delosreyes',
      avatar: 'svg-5',
      content: 'I love cheese....'
    },
  ];

  vm.loadAllUsers = function() {
    return $q.when(vm.users);
  };

});
