/* PREFACE:
I did not add any comments to this program, so if you are confused about anything, email me
at gcc@ameritech.net and I will get back to you as soon as I can.
Comments will be coming soon, once I don't have a lot going on with school.
*/
var item_h = 0;
var item_w = 0;
var playTop = 55;
var max_width = 0;
var max_height = 0;
var blocknum = 0;
var blockyouron = 1;
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
var blocknum = 0;
var blockyouron = 1;
var startTime=Date.now();
setWindowSize();
var heightRatioMax = 728/150;
var heightRatioMin = 728/50;
var widthRatioMin=1289/50;
var widthRatioMax=1289/150;
var rand_min = Math.floor((heightRatioMax*max_height)/74)-2;
var rand_max = Math.floor((heightRatioMax*max_height)/26);
var rand_height = getRandomIntInclusive(200000/(rand_min, rand_max));
var rand_col1 = getRandomIntInclusive(0,9);
var rand_col2 = getRandomIntInclusive(0,9);
var rand_col3 = getRandomIntInclusive(0,9);
var pos_top=30;
var hideTime;
var react;
var totalTime = 0;
var rand_color;
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
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
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
var isPortrait = window.matchMedia("(orientation: landscape)").matches;
if(isMobile.iOS()){
  if (isPortrait) {
    isPortrait = window.matchMedia("(orientation: landscape)").matches;
    alert("Please switch to portrait mode!");
  };
};

window.addEventListener('resize', setWindowSize);

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
$("#startbut").click(function(){
  $("#playzone").css('height', max_height-55+'px');
  $("#playzone").css('width', max_width*0.8+'px');
  $("#startme").fadeOut();
  $("#difficulty").fadeIn();
  $("#easy").click(function(){
    multiplier=1;
    $("#difficulty").fadeOut();
    $("#blockAmount").fadeIn();
    randTime= 3000;
    $("#twenty").click(function(){
      maxBlocks=20;
      $("#blockAmount").fadeOut();
      $("#game").removeClass("hide");
      $("#game").fadeIn();
      startTime = Date.now();
    });
    $("#thirty").click(function(){
      maxBlocks=30;
      $("#blockAmount").fadeOut();
      $("#game").removeClass("hide");
      $("#game").fadeIn();
      startTime = Date.now();
    });
    $("#fifty").click(function(){
      maxBlocks=50;
      $("#blockAmount").fadeOut();
      $("#game").removeClass("hide");
      $("#game").fadeIn();
      startTime = Date.now();
    });
  });
  $("#medium").click(function(){
    multiplier=2;
    $("#difficulty").fadeOut();
    $("#blockAmount").fadeIn();
    randTime= 2000;
    $("#twenty").click(function(){
      maxBlocks=20;
      $("#blockAmount").fadeOut();
      $("#game").removeClass("hide");
      $("#game").fadeIn();
      startTime = Date.now();
    });
    $("#thirty").click(function(){
      maxBlocks=30;
      $("#blockAmount").fadeOut();
      $("#game").removeClass("hide");
      $("#game").fadeIn();
      startTime = Date.now();
    });
    $("#fifty").click(function(){
      maxBlocks=50;
      $("#blockAmount").fadeOut();
      $("#game").removeClass("hide");
      $("#game").fadeIn();
      startTime = Date.now();
    });
  });
  document.getElementById("hard").onclick=function(){
    multiplier=3;
    $("#difficulty").fadeOut();
    $("#blockAmount").fadeIn();
    randTime= 1000;
    $("#twenty").click(function(){
      maxBlocks=20;
      $("#blockAmount").fadeOut();
      $("#game").removeClass("hide");
      $("#game").fadeIn();
      startTime = Date.now();
    });
    $("#thirty").click(function(){
      maxBlocks=30;
      $("#blockAmount").fadeOut();
      $("#game").removeClass("hide");
      $("#game").fadeIn();
      startTime = Date.now();
    });
    $("#fifty").click(function(){
      maxBlocks=50;
      $("#blockAmount").fadeOut();
      $("#game").removeClass("hide");
      $("#game").fadeIn();
      startTime = Date.now();
    });
  };
  function make(maxNum, sec){
    setTimeout(function(){
      var a=document.getElementById("box");
      setWindowSize();
      rand_height = getRandomIntInclusive(50,150);
      item_h = getRandomIntInclusive(playTop+rand_height+5, (max_height-rand_height-5));
      if( isMobile.iPhone()!=null){
        rand_height = getRandomIntInclusive(30,70);
      }
      item_w = getRandomIntInclusive(rand_height, max_height-rand_height-350);
      a.style.top=item_h+'px';
      a.style.left=item_w+'px';
      a.style.backgroundColor="#"+rand_col1+"a"+rand_col2+"d"+rand_col3+"b";
      rand_col1 = getRandomIntInclusive(0,9);
      rand_col2 = getRandomIntInclusive(0,9);
      rand_col3 = getRandomIntInclusive(0,9);
      $("#box").fadeIn(100);
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
      if(item_w+rand_height>max_width*0.8){
        item_w = getRandomIntInclusive(rand_height, max_height-rand_height);
      }
      else if(item_h+rand_height>max_height){
        item_h = getRandomIntInclusive(playTop+rand_height+5, max_height-rand_height-5);
      }
    }, sec);
    blockyouron++;
    if(blockyouron-1>=maxNum){
      alert("Done!");
      $("#game").fadeOut(200);
      $("#finalStat").fadeIn(300);
      var finishTime = Date.now();
      var timeTaken = finishTime-makeTime;
      timeTaken/=1000;
      blocknum++;
      document.getElementById("youavg").innerHTML="You averaged " +average +" seconds per box.";
      document.getElementById("youhit").innerHTML="You hit "+blocknum+ " blocks in "+timeTaken+" seconds.";
      timeTaken+=10*missed_hits;
      if(blocknum===0){
        score=0;
      }
      else if(blocknum!==0){
        score = (blocknum*100*multiplier)/(timeTaken*2*average);
        score*=10000;
        score=Math.floor(score);
        score/=10000;
      }
      if (score=="Infinity"){
        score=0;
      }
      document.getElementById("youscore").innerHTML="You scored " + score + " points! Congrats!";
    }
  }
  var a = document.getElementById("box");
  a.onclick=function(){
    hideBox();
    blocknum++;
  };
  function hideBox(){
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
    if (blocknum===0){
      average=0;
    }
    else if(blocknum!==0){
      average = (totalTime/blocknum);
      average*=1000;
      average = Math.floor(average);
      average/=1000;
    }
    document.getElementById("check").innerHTML=average;
    make(maxBlocks, randTime);
    if (isMobile.iOS()!=null){
      $("#scoor").css({ 'margin-top':'20px', 'font-size':'12px'});
    }
  }
  document.getElementById("playzone").onclick=function(){
    missed_hits++;
    var scoress = document.getElementById("scores");
    scoress.insertAdjacentHTML('afterend', '<div id="scoor"> <p id="scoring"> </p> </div>');
    document.getElementById("scoring").innerHTML="Block number "+ blockyouron + ": missed";
    $("#box").fadeOut(100);
    if (isMobile.iOS()!=null){
      $("#scoor").css({ 'margin-top':'20px', 'font-size':'12px'});
    }
    make(maxBlocks,0.1);
  };
  document.getElementById("stopper").onclick=function(){
    stoppedTime= Date.now();
    startTime=0;
    react=0;
    this.style.display="none";
    b.style.display="block";
    interId= setInterval(myInter, 300);
  };
  function myInter() {
    a.style.display="none";
  }
  function stopInter() {
    clearInterval(interId);
    make(maxBlocks, 0.5);
  }
  document.getElementById("starter").onclick=function(){
    a.style.display="block";
    startTime=0;
    react=0;
    blockyouron--;
    this.style.display="none";
    document.getElementById("stopper").style.display="block";
    stopInter();
  };
});
document.getElementById("playAgain").onclick=function(){
  location.reload();
};
if( isMobile.iOS()!=null ){
  $(".customHr").css('margin-top', '-70px');
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
  $("#howman").css('left', '15%');
  $("#twenty").css('left', '25%');
  $("#thirty").css('left', '25%');
  $("#fifty").css('left', '25%');
  $("#starter").hide();
  $("#stopper").hide();
  $("#scores").css({
    'font-size':'15px',
    'right': '0%'
  });
  $("#youtime").css({
    'position':'absolute',
    'top':'5%',
    'font-size':'13px'
  });
  $("#scoring").css({
    'font-size': '15px'
  });
  $("#youavg").css({
    'left':'10%',
    'top':'5%',
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
    'top':'45%',
    'font-size': '15px'
  });
  $("#survey").css({
    'left':'10%',
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

}
setWindowSize();
