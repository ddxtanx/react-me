var app = angular.module("uReact", []);
app.controller('formController', function($scope){
   var user = {};
   $scope.sub = {
   submit: function(form) {
     if(form.$valid){
     maxBlocks = user.maxBlock;
     startGame();
   }
   },
   click: function(){
     $("#custom-form").fadeIn();
     $("#custom").fadeOut();
     $("#submit").fadeIn();
     $("#how").fadeIn();
     $(".number").fadeOut();
   }
 }
});
