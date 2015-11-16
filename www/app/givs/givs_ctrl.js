angular.module('starter.controllers')

.controller('givs_ctrl', function($scope, $http,$window) {
  $scope.items = [];
  $scope.loadMoreGiv = function() {
   $http.get('json/givs.json').success(function(items) {
   //  $http.get('http://fagive.herokuapp.com/givs.json').success(function(items) {
       $scope.givs=items;
       console.log("items success");
     
       //$scope.$broadcast('scroll.infiniteScrollComplete');

    $scope.$broadcast('scroll.infiniteScrollComplete');

    
    });
  };

  $scope.moreGivCanBeLoaded = function() {
  	return true;

  }

  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMoreGiv();
  });







var cart = {items:[]};


 $scope.getCart=function() {
      return JSON.parse($window.localStorage['my_cart'] || '{}');
    }


$scope.addToCart=function(giv,qty){
  console.log(giv);
  giv.quantity=qty;


console.dir($window.localStorage['my_cart'] || '{}');


  //var obj= JSON.stringify($window.localStorage['my_cart'] || '{}');
   console.log("-------------------------------------------------");
  console.log(Object.keys().length);

  if (Object.keys(obj).length==0) {
    cart.items.push(giv);
    $window.localStorage['my_cart'] = cart;

  }else{

    console.log("else");
     console.log(obj);

  }

 
   console.log(cart);
    console.log("---------ll;l;l----------------------------------------");

  //console.log(cart);



 // console.log(giv,qty);




}

/*hhhhhhhhhhhhhhhhhhhhhhhhhhhh*/

 /*var getValue = function(){
        return $window.sessionStorage.length;
    }
      
    var getData = function(){
      var json = [];
      $.each($window.sessionStorage, function(i, v){
        json.push(angular.fromJson(v));
      });
      return json;
    }
      
    $scope.images = getData();
    $scope.count = getValue();
  
    $scope.addToCart = function(giv,qty){
      giv.quantity=gty;
       
       
        $window.sessionStorage.setItem(id, JSON.stringify(giv));
        $scope.count = getValue();
        $scope.images = getData();
    }
    
    $scope.removeItem = function(id){
      $window.sessionStorage.removeItem(id);
      $document.
      $scope.count = getValue();
      $scope.images = getData();
      alert('Removed with Success!');
    }
*/

/*jjjjjjjjjjjjjjjjjjj*/





}
);