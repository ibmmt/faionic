// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter',  ['ionic','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {


/*  $ionicConfigProvider.prefetchTemplates(false);

if(window.localStorage['auth']) {
  $urlRouterProvider.otherwise('/tab/alerts');
}else{
  $urlRouterProvider.otherwise('/intro');
}
*/

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'app/layout/public.html'
  })

 .state('app.dash', {
    url: '/dash',
    views: {
      'app-public': {
      templateUrl: 'app/home/home.html',
        controller: 'home'
      }
    }
  })

 /*#############################################################################################*/

  /*auth route*/

    .state('app.login', {
    url: '/login',
    views: {
      'app-public': {
      templateUrl: 'app/profile/view/login.html',
        controller: 'login'
      }
    }
  })
   

     .state('app.signup', {
    url: '/signup',
    views: {
      'app-public': {
      templateUrl: 'app/profile/view/signup.html',
        controller: 'signup'
      }
    }
  })

      .state('app.profile_edit', {
    url: '/profile_edit',
    views: {
      'app-public': {
      templateUrl: 'app/profile/view/profile_edit.html',
        controller: 'profile_edit'
      }
    }
  })

  .state('app.forget_pass', {
    url: '/forget_pass',
    views: {
      'app-public': {
      templateUrl: 'app/profile/view/forgot_password.html',
        controller: 'forget_password'
      }
    }
  })
/* .state('app.profile_view', {
    url: '/profile_view',
    views: {
      'app-public': {
      templateUrl: 'app/profile/view/profile_view.html',
        controller: 'home'
      }
    }
  })*/
   

   /*###########################################################################################*/

   /*Givs*/


    .state('givs', {
    url: '/givs',
    abstract: true,
    templateUrl: 'app/layout/givs.html'
  })


    .state('givs.list', {
    url: '/list',
    views: {
      'givs-list': {
      templateUrl: 'app/givs/view/givs_list.html',
        controller: 'givs_ctrl'
      }
    }
  })

     .state('givs.product', {
    url: '/list/product',
    views: {
      'givs-list': {
      templateUrl: 'app/givs/view/product_giv_list.html',
        controller: 'givs_ctrl'
      }
    }
  })

   .state('givs.event', {
    url: '/list/event',
    views: {
      'givs-list': {
      templateUrl: 'app/givs/view/event_giv_list.html',
        controller: 'givs_ctrl'
      }
    }
  })

    .state('givs.occasion', {
    url: '/list/occasion',
    views: {
      'givs-list': {
      templateUrl: 'app/givs/view/occasion_giv_list.html',
        controller: 'givs_ctrl'
      }
    }
  })

    .state('givs.special', {
    url: '/list/special',
    views: {
      'givs-list': {
      templateUrl: 'app/givs/view/product_giv_list.html',
        controller: 'givs_ctrl'
      }
    }
  })

      .state('givs.mission', {
    url: '/list/mission',
    views: {
      'givs-list': {
      templateUrl: 'app/givs/view/mission_giv_list.html',
        controller: 'givs_ctrl'
      }
    }
  })
   
   
   
   


  /*  .state('app.profile_view', {
    url: '/profile_view',
    views: {
      'givs-list': {
      templateUrl: 'app/profile/view/profile_view.html',
        controller: 'givs_ctrl'
      }
    }
  })*/
   





/*cart*/
.state('givs.cart', {
    url: '/list/cart',
    views: {
      'givs-list': {
      templateUrl: 'app/givs/view/cart.html',
        controller: 'givs_ctrl'
      }
    }
  })

   

   



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/givs/list');

});



