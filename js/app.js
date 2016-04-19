var app = angular.module("uReact", []);
app.controller('formController', function($scope){
   this.user = {};
   $scope.sub = {
   submit: function() {
     maxBlocks = user.maxBlocks;
     e.preventDefault();
     startGame();
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
