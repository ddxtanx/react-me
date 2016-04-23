/* PREFACE:
I did not add any comments to this program, so if you are confused about anything, email me
at gcc@ameritech.net and I will get back to you as soon as I can.
Comments will be coming soon, once I don't have a lot going on with school.
*/
// No Scrolling
document.ontouchmove = function(event){
  event.preventDefault();
};
var isOff = false;
// Variable initilazation

//Audio Controls
var audioArr = {
  theme: new Audio("../music/theme.mp3"),
  audio1: new Audio("../music/cracking.wav"),
  audio2: new Audio("../music/pong.wav"),
  audio3: new Audio("../music/pop.wav")
};
//Play Theme
audioArr.theme.play();
console.log(audioArr);
//Audio Volume Control
document.onkeydown = function(e) {

  switch(e.keyCode){

    case 38:
    if(!isOff&&audioArr.audio1.volume<1){
      audioArr.audio1.volume+=0.1;
      audioArr.audio2.volume+=0.1;
      audioArr.audio3.volume+=0.1;
    }
    console.log(audioArr.audio1.volume);
    break;
    case 40:
    if(!isOff&&audioArr.audio1.volume>0){
      audioArr.audio1.volume-=0.1;
      audioArr.audio2.volume-=0.1;
      audioArr.audio3.volume-=0.1;
    }
    console.log(audioArr.audio1.volume);
    break;
  }
  if(audioArr.audio1.volume<0){
    audioArr.audio1.volume=0;
    audioArr.audio2.volume=0;
    audioArr.audio3.volume=0;
  }
  else if (audioArr.audio1.volume>1){
    audioArr.audio1.volume=1;
    audioArr.audio2.volume=1;
    audioArr.audio3.volume=1;
  }
  if(audioArr.audio1.volume+0.25>1){
    audioArr.theme.volume=1;
  }
  audioArr.theme.volume=audioArr.audio1.volume+0.25;
};
//Volume On and Off
audioArr.turnOffVolume = function(){
  isOff=true;
  this.audio1.volume = 0;
  this.audio2.volume = 0;
  this.audio3.volume = 0;
  this.theme.volume = 0;
  $("#soundBut").hide();
  $("#soundButOn").fadeIn();
  document.getElementById("onoff").innerHTML= "Sound Off.";
};
audioArr.turnOnVolume = function(){
  isOff= false;
  this.audio1.volume = 0.5;
  this.audio2.volume = 0.5;
  this.audio3.volume = 0.5;
  this.theme.volume = 0.75;
  $("#soundButOn").hide();
  $("#soundBut").fadeIn();
  document.getElementById("onoff").innerHTML= "Sound On.";
};

// Pause and Start theme functions
document.getElementById("stopper").onclick=function(){
  this.style.display="none";
  b.style.display="block";
  audioArr.theme.pause();
};
document.getElementById("starter").onclick=function(){
  audioArr.theme.play();
  this.style.display="none";
  document.getElementById("stopper").style.display="block";
};

// Workaround for 300ms delay
function startGame(){
  $("#blockAmount").fadeOut();
  $("#game").removeClass("hide");
  $("#game").fadeIn();
  startTime = Date.now();
  make(maxBlocks, 0.5);
  startTime=Date.now();
}

$("#soundButOn").hide();
$("#errormes").hide();
$("#custom-form").fadeOut();
$("#submit").hide();
$("#how").hide();
var reacAr = [];
var scorAr = [];
$(function() {
  FastClick.attach(document.body);
});
var meh = [];
// finding height and width of screen
function setWindowSize() {
  if (typeof (window.innerWidth) == 'number') {
    max_width = window.innerWidth;
    max_height = window.innerHeight;
  } else {
    if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
      max_width = document.documentElement.clientWidth;
      max_height = document.documentElement.clientHeight;
    } else {
      if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        max_width = document.body.clientWidth;
        max_height = document.body.clientHeight;
      }
    }
  }
}
var sizeMult = 0;
//Determining what OS the user is on
var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iPad: function() {
    return navigator.userAgent.match(/iPad/i);
  },
  iPhone: function(){
    return navigator.userAgent.match(/iPhone/i);
  },
  iOS: function(){
    return navigator.userAgent.match(/iPhone/||/iPad/||/iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  Chrome: function(){
    return navigator.userAgent.match(/Chrome/i);
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var item_h = 0;
var item_w = 0;
var playTop = 55;
var max_width = 0;
var max_height = 0;
var blocknum = 0;
var blockyouron = 0;
var i = 3;
var makeTime = Date.now();
var rand_height = getRandomIntInclusive(50,150);
var rand_col1 = getRandomIntInclusive(0,9);
var rand_col2 = getRandomIntInclusive(0,9);
var rand_col3 = getRandomIntInclusive(0,9);
var pos_top=30;
var hideTime;
var react;
var totalTime = 0;
var rand_color;
var startTime=Date.now();
var amountOfGames = 0;
setWindowSize();
var heightRatioMax = 728/150;
var heightRatioMin = 728/50;
var widthRatioMin=1289/50;
var widthRatioMax=1289/150;
var rand_min = Math.floor((heightRatioMax*max_height)/74)-2;
var rand_max = Math.floor((heightRatioMax*max_height)/26);
var averagesArray = [];
var scoresArray = [];
var missed_hits = 0;
var average = 0;
var stoppedTime = 0;
var restartTime = 0;
var interId;
var maxBlocks = 20;
var multiplier = 0;
var timeTaken =0;
var score = 0;
var b = document.getElementById("starter");
var randTime = 0;
var startTime;
window.addEventListener('resize', setWindowSize);
window.addEventListener('resize', resetWindowSize);
function resetWindowSize(){
  $("#playzone").css({
    'height': 'max_height'+'px',
    'width':'max_width'+'px'
  });
}
if(max_height!=document.getElementById("playzone").style.height||max_width!=document.getElementById("playzone").style.width){
  $("#playzone").css({
    'height': 'max_height'+'px',
    'width':'max_width'+'px'
  });
}
var randLetArr = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var randLetNum = getRandomIntInclusive(0, 15);
function make(maxNum, sec){
  setTimeout(function(){
    var a=document.getElementById("box");
    setWindowSize();
    //Random height and width and position
    rand_height = getRandomIntInclusive(50,150);
    rand_height*=sizeMult;
    item_h = getRandomIntInclusive((playTop+rand_height+5), (max_height-rand_height-20));
    if( isMobile.iPhone()!=null){
      rand_height = getRandomIntInclusive(30,70);
    }
    item_w = getRandomIntInclusive(rand_height, (max_width*0.8)-(rand_height)-20);
    a.style.top=item_h+'px';
    a.style.left=item_w+'px';
    a.style.backgroundColor="#"+randLetArr[getRandomIntInclusive(0,15)]+randLetArr[getRandomIntInclusive(0,15)]+randLetArr[getRandomIntInclusive(0,15)]+randLetArr[getRandomIntInclusive(0,15)]+randLetArr[getRandomIntInclusive(0,15)]+randLetArr[getRandomIntInclusive(0,15)];
    rand_col1 = getRandomIntInclusive(0,9);
    rand_col2 = getRandomIntInclusive(0,9);
    rand_col3 = getRandomIntInclusive(0,9);
    $("#box").fadeIn(100);
    //Random shapes
    if(i%3===0){
      a.style.borderRadius="0%";
      a.style.height=rand_height+"px";
      a.style.width=rand_height+"px";
      rand_height = getRandomIntInclusive(50,150);
      i+=getRandomIntInclusive(1,5);
    }
    else if(i%3==1){
      a.style.borderRadius="35%";
      a.style.height=rand_height+"px";
      a.style.width=rand_height+"px";
      rand_height = getRandomIntInclusive(50,150);
      i+=getRandomIntInclusive(1,5);
    }
    else if(i%3==2){
      a.style.borderRadius="100%";
      a.style.height=rand_height+"px";
      a.style.width=rand_height+"px";
      rand_height = getRandomIntInclusive(50,150);
      i+=getRandomIntInclusive(1,5);
    }
    startTime = Date.now();
    //Resetting if a block is placed out of boundaries
    if(item_w+rand_height>max_width*0.8){
      item_w = getRandomIntInclusive(rand_height, max_height-rand_height);
    }
    else if(item_h+rand_height>max_height){
      item_h = getRandomIntInclusive(playTop+rand_height+5, max_height-rand_height-5);
    }
  }, sec);
  blockyouron++;
  // Game end function
  if(blockyouron-1>=maxNum){
    alert("Done!");
    $("#game").fadeOut(200);
    $("#finalStat").fadeIn(300);
    var finishTime = Date.now();
    var timeTaken = finishTime-startTime;
    timeTaken/=1000;
    blocknum++;
    if(blocknum===0||score===0){
      score=0;
      blocknum=0;
    }
    blocknum--;
    average=timeTaken/blocknum;
    var blockPer = (blocknum/maxBlocks)*100;
    //Editing final page
    document.getElementById("youavg").innerHTML="You had " + blockPer +"% accuracy!";
    document.getElementById("youhit").innerHTML="You hit "+blocknum+ " blocks in "+timeTaken+" seconds.";
    timeTaken+=10*missed_hits;
    if(average===0||blocknum===0){
      score=0;
    }
    score*=multiplier;
    document.getElementById("youscore").innerHTML="You scored " + score + " points! Congrats!";
  }
}
//Game function
function Game(){
  item_h = 0;
  item_w = 0;
  playTop = 55;
  max_width = 0;
  max_height = 0;
  blocknum = 0;
  blockyouron = -1;
  i = 3;
  makeTime = Date.now();
  pos_top=30;
  totalTime = 0;
  setWindowSize();
  heightRatioMax = 728/150;
  heightRatioMin = 728/50;
  widthRatioMin=1289/50;
  widthRatioMax=1289/150;
  rand_min = Math.floor((heightRatioMax*max_height)/74)-2;
  rand_max = Math.floor((heightRatioMax*max_height)/26);
  rand_height = getRandomIntInclusive(200000/(rand_min, rand_max));
  rand_col1 = getRandomIntInclusive(0,9);
  rand_col2 = getRandomIntInclusive(0,9);
  rand_col3 = getRandomIntInclusive(0,9);
  pos_top=30;
  totalTime = 0;
  missed_hits = 0;
  average = 0;
  stoppedTime = 0;
  restartTime = 0;
  maxBlocks = 20;
  multiplier = 0;
  timeTaken =0;
  score = 0;
  b = document.getElementById("starter");
  randTime = 0;
  //Setting sizes
  setWindowSize();
  $("#playzone").css('width', max_width*0.8);
  $("#playzone").css('height', max_height-55);
  //Fade in blocks on start page
  $("#squarespan").mouseenter(function(){
    $("#square").fadeIn();
  });
  $("#circlespan").mouseenter(function(){
    $("#circle").fadeIn();
  });
  $("#squirclespan").mouseenter(function(){
    $("#squircle").fadeIn();
  });
  $("#squarespan").mouseleave(function(){
    $("#square").fadeOut();
  });
  $("#circlespan").mouseleave(function(){
    $("#circle").fadeOut();
  });
  $("#squirclespan").mouseleave(function(){
    $("#squircle").fadeOut();
  });
  //Page to page transitions
  $("#startbut").click(function(){
    $("#playzone").css('height', max_height-55+'px');
    $("#playzone").css('width', max_width*0.8+'px');
    $("#startme").fadeOut();
    $("#difficulty").fadeIn();
    $("#easy").click(function(){
      multiplier=1;
      sizeMult=1.15;
      $("#difficulty").fadeOut();
      $("#blockAmount").fadeIn();
      randTime= 2000;
      $("#twenty").click(function(){
        maxBlocks=20;
        startGame();
      });
      $("#thirty").click(function(){
        maxBlocks=30;
        startGame();
      });
      $("#fifty").click(function(){
        maxBlocks=50;
        startGame();
      });
    });
    $("#medium").click(function(){
      sizeMult=0.7;
      multiplier=2;
      $("#difficulty").fadeOut();
      $("#blockAmount").fadeIn();
      randTime= 1000;
      $("#twenty").click(function(){
        maxBlocks=20;
        startGame();
      });
      $("#thirty").click(function(){
        maxBlocks=30;
        startGame();
      });
      $("#fifty").click(function(){
        maxBlocks=50;
        startGame();
      });
    });
    document.getElementById("hard").onclick=function(){
      sizeMult = 0.5;
      multiplier=3;
      $("#difficulty").fadeOut();
      $("#blockAmount").fadeIn();
      randTime= 500;
      $("#twenty").click(function(){
        maxBlocks=20;
        startGame();
      });
      $("#thirty").click(function(){
        maxBlocks=30;
        startGame();
      });
      $("#fifty").click(function(){
        maxBlocks=50;
        startGame();
      });
    };
    var a = document.getElementById("box");
    //This function makes the block afert a set amount of seconds
    make();
    //Function that hides the box and puts the score data on the play screen
    function hid(){
      var a = document.getElementById("box");
      hideTime=Date.now();
      react = (hideTime - startTime)/1000;
      totalTime+=react;
      document.getElementById("score").innerHTML=react;
      $("#box").fadeOut(100);
      var scoress = document.getElementById("scores");
      scoress.insertAdjacentHTML('afterend', '<div id="scoor"> <p id="scoring"> </p> </div>');
      var scorer = 5;
      document.getElementById("scoring").innerHTML="Block number "+ blockyouron + ": " + react + " sec.";
      scorer+=5;
      if(rand_height/1000===0){
        rand_height+=0.2;
      }
      scorAr.push(1/(react*(rand_height/1000)));
      meh.push(rand_height);
      reacAr.push(react);
      score+=Math.floor(1/(react*(rand_height/1000)));
      if (blocknum===0){
        average=0;
      }
      else if(blocknum!==0){
        average = (totalTime/blocknum);
        average*=1000;
        average = Math.floor(average);
        average/=1000;
      }
      make(maxBlocks, randTime);
      if (isMobile.iOS()!=null){
        $("#scoor").css({ 'margin-top':'20px', 'font-size':'12px'});
      }
    }
    if(document.getElementById("playzone").style.display=="block"){
      $("#playzone").css('width', max_width*0.8);
      $("#playzone").css('height', max_height-55);
    }
    //Function of you miss the box
    document.getElementById("playzone").onclick=function(){
      missed_hits++;
      var scoress = document.getElementById("scores");
      scoress.insertAdjacentHTML('afterend', '<div id="scoor"> <p id="scoring"> </p> </div>');
      document.getElementById("scoring").innerHTML="Block number "+ blockyouron + ": missed";
      $("#box").hide();
      if (isMobile.iOS()!=null){
        $("#scoor").css({ 'margin-top':'25px', 'font-size':'12px'});
      }
      make(maxBlocks,0);
    };
    function ifSound(){
      var randn = getRandomIntInclusive(1,500);
      if(randn%2===0){
        audioArr.audio3.play();
      }
      else if(randn%3===0){
        audioArr.audio2.play();
      }
      else if(randn%4===0){
        audioArr.audio1.play();
      }
      else{
        audioArr.audio2.play();
      }
      randn = getRandomIntInclusive(1,500);
    }
    document.getElementById("box").onclick=function(){
      hid();
      blocknum++;
      var randn = getRandomIntInclusive(1,500);
      ifSound();
    };
    // Function for stopping and restarting the game
  });
  $(".customHr").css({
    'top':'0.05*max_height+"px"'
  });
  // Handels if the device is IOS
  if( isMobile.iOS()!=null ){
    $(".customHr").css('margin-top', '-80px');
    $(".customHr").css('width', '100%');
    $("#startbut").css('top', '82%');
    $("#startbut").css('font-size', '15px');
    $("#circle").css({
      'height':'75px',
      'width':'75px',
      'margin-left':'-5%'
    });
    $("#square").css({
      'height':'50px',
      'width':'50px',
      'top':'2%',
    });
    $("#squircle").css({
      'height':'50px',
      'width':'50px',
      'top': '9%',
      'left':'78%'
    });
    $("#difTitle").css({
      'left':'10px',
      'top':'0%',
      'font-size':'29px'
    });
    $("#easy").css('left', '15%');
    $("#medium").css('left', '15%');
    $("#hard").css('left', '15%');
    $("#howman").css({
      'left': '10%',
      'font-size': '25px'
    });
    $("#twenty").css({
      'left': '25%',
      'top':'30%',
      'font-size':'25px'
    });
    $("#thirty").css({
      'left': '25%',
      'top':'45%',
      'font-size':'25px'
    });
    $("#fifty").css({
      'left': '25%',
      'top':'60%',
      'font-size':'25px'
    });
    $("#custom").css({
      'left': '15%',
      'top':'75%',
      'font-size':'25px'
    });
    $("#how").css({
      'font-size':'20px'
    });
    $("#custom-form").css({
      'font-size':'15px'
    });
    $("#submit").css({
      'font-size':'15px'
    });
    $("#starter").hide();
    $("#stopper").hide();
    $("#scores").css({
      'font-size':'15px',
      'right': '0%'
    });
    $("#youtime").css({
      'position':'absolute',
      'top':'5%',
      'font-size':'13px',
      'left': '40%'
    });
    $("#scoring").css({
      'font-size': '15px'
    });
    $("#youavg").css({
      'left':'10%',
      'top':'10%',
      'font-size' : '15px'
    });
    $("#youscore").css({
      'left':'10%',
      'top':'35%',
      'font-size': '15px'
    });
    $("#youhit").css({
      'left':'10%',
      'top':'25%',
      'font-size': '15px'
    });
    $("#playAgain").css({
      'left':'10%',
      'top':'65%',
      'font-size': '15px'
    });
    $("#survey").css({
      'right':'10%',
      'top':'55%',
      'font-size': '15px'
    });
    $("#startscph").css('font-size', '13px');
    $("#titleslot").css({
      'left':'25%',
      'top':'10%'
    });
    $("#average").css({
      'position': 'absolute',
      'left': '30%'
    });
    $("#difTitle").css({
      'left':'30px',
      'top':'10%',
      'font-size':'19px'
    });
    $("#userid").css({
      'height':'0',
      'width':'0'
    });
    $("#repoid").css({
      'height':'0',
      'width':'0'
    });
    $("#bugs").css({
      'font-size':'15px',
      'position':'absolute',
      'top':'45%'
    });
    alert("There is audio in this game! Be warned!");
    $(".sobut").hide();
    var result = confirm( "Do you want to play music?" );
    if ( result ) {
      audioArr.theme.play();
    }
    setWindowSize();
  }
  // Handeling if device is landscape and IOS
  if(isMobile.iPad()!=null){
    $(".customHr").css({
      'margin-top':'-10px'
    });
    $("#repoid").css({
      'height':'0',
      'width':'0'
    });
    $("#userid").css({
      'height':'0',
      'width':'0'
    });
    alert("There is audio in this game! Be warned!");
    $(".sobut").hide();
    var result = confirm( "Do you want to play music?" );
    if ( result ) {
      audioArr.theme.play();
      document.getElementById("stopper").style.display="none";
      b.style.display="block";
    }else{
      $("#stopper").hide();
      $("#starter").hide();
    }
  }
}
setWindowSize();
//Run game
Game();
//Play again function
$("#playAgain").click(function(){
  averagesArray.push(average);
  scoresArray.push(score);
  amountOfGames = scoresArray.length;
  averagesArray = averagesArray.sort(function(a, b){return a-b});
  scoresArray = scoresArray.sort(function(a, b){return b-a});
  var gamesPlayed = [];
  for (var x = 0; x<amountOfGames; x++){
    gamesPlayed.push(x+1);
  }
  $("#finalStat").fadeOut(300);
  $("#difficulty").fadeIn(300);
  document.getElementById("scoor").innerHTML="";
  Game();
});
