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
 $scope.isInt = function(num){
   if(num==Math.floor(num)){
     return true;
   }
   else if(num!=Math.floor(num)){
     return false;
   }
 }
 $scope.dirtyFncs ={

    dirty: function (form){
    for(var prop in form) {
      if(form.hasOwnProperty(prop)) {
         if(form[prop].$dirty) {
           return true;
         }
      }
    }
    return false;
  },
  anyDirtyandInvalid: function (form){
     for(var prop in form) {
       if(form.hasOwnProperty(prop)) {
          if(form[prop].$dirty&&form[prop].$invalid) {
            return true;
          }
       }
     }
     return false;
   }
 };
}]);
