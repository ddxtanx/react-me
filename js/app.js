var app = angular.module("uReact", []);
app.controller('formController', function(){
   this.user = {};
   submit: function(){
     maxBlocks = parseInt(document.getElementById("custom-form").value);
     e.preventDefault();
     startGame();
     $("#custom-form").fadeIn();
     $("#custom").fadeOut();
     $("#submit").fadeIn();
     $("#how").fadeIn();
     $(".number").fadeOut();
   }
});
