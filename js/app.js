var app = angular.module("uReact", ['ngMessages']);
app.controller('formController', function(){
   user = {};
   user.sub = {
   submit: function(form) {
     if(form.$valid){
     maxBlocks = user.number;
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
 user.dirtyFncs ={

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
});
