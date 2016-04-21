(function() {
  var app = angular.module("uReact", ['ngMessages']);
app.controller('formController', ['$scope', function($scope){
   user = {};
   $scope.sub = {
   submit: function(form) {
     if(form.$valid){
     maxBlocks = $scope.number;
     startGame();
     $("#custom-form").fadeOut();
     $("#custom").fadeIn();
     $("#submit").fadeOut();
     $("#how").fadeOut();
     $(".number").fadeIn();
     $("#errormes").fadeOut();
   }
   },
   click: function(){
     $("#custom-form").fadeIn();
     $("#custom").fadeOut();
     $("#submit").fadeIn();
     $("#how").fadeIn();
     $(".number").fadeOut();
     $("#errormes").fadeIn();
     $("#errormes").css({
       'position':'absolute',
       'font-size':'20px',
       'top':'58%',
       'left':'32%'
     })
   }
 }
}]);
})();
