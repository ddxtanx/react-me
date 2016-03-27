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
var i = 3;
var startTime=Date.now();
var rand_height = getRandomIntInclusive(50,150);
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
function setHW(h, w, divid, fontsiz){
  var divnam = document.getElementById(divid);
  divnam.style.height=h;
  divnam.style.width=h;
  divman.style.fontSize=fontsiz;
}
function setDivs(){
  setHW(1000, 100, "timeTitle", 100+'px');
}
document.getElementById("startbut").onclick=function(){
  document.getElementById("startme").style.display="none";
  document.getElementById("difficulty").style.display="block";
  document.getElementById("easy").onclick=function(){
    multiplier=1;
    document.getElementById("difficulty").style.display="none";
    document.getElementById("blockAmount").style.display="block";
    randTime= 3000;
    document.getElementById("twenty").onclick=function(){
      maxBlocks=20;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
      document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
      startTime = Date.now();
    };
    document.getElementById("thirty").onclick=function(){
      maxBlocks=30;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
      document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
      startTime = Date.now();
    };
    document.getElementById("fifty").onclick=function(){
      maxBlocks=50;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
      document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
      startTime = Date.now();
    };
  };
  document.getElementById("medium").onclick=function(){
    multiplier=2;
    document.getElementById("difficulty").style.display="none";
    document.getElementById("blockAmount").style.display="block";
    randTime= 2000;
    document.getElementById("twenty").onclick=function(){
      maxBlocks=20;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
      document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
      startTime = Date.now();
    };
    document.getElementById("thirty").onclick=function(){
      maxBlocks=30;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
      document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
      startTime = Date.now();
    };
    document.getElementById("fifty").onclick=function(){
      maxBlocks=50;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
      document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
      startTime = Date.now();
    };
  };
  document.getElementById("hard").onclick=function(){
    multiplier=3;
    document.getElementById("difficulty").style.display="none";
    document.getElementById("blockAmount").style.display="block";
    randTime= 1000;
    document.getElementById("twenty").onclick=function(){
      maxBlocks=20;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
      document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
      startTime = Date.now();
    };
    document.getElementById("thirty").onclick=function(){
      maxBlocks=30;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
      document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
      startTime = Date.now();
    };
    document.getElementById("fifty").onclick=function(){
      maxBlocks=50;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
      document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
      startTime = Date.now();
    };
  };
  window.onload=setDivs;
  function make(maxNum, sec){
    setTimeout(function(){
      var a=document.getElementById("box");
      var max_height= document.getElementById("playzone").clientHeight;
      var max_width= screen.width*0.8;
      var item_h=getRandomIntInclusive(200, max_height-50);
      var item_w=getRandomIntInclusive(0, max_width-150);
      a.style.top=item_h+'px';
      a.style.left=item_w+'px';
      a.style.backgroundColor="#"+rand_col1+"a"+rand_col2+"d"+rand_col3+"b";
      rand_col1 = getRandomIntInclusive(0,9);
      rand_col2 = getRandomIntInclusive(0,9);
      rand_col3 = getRandomIntInclusive(0,9);
      a.style.display="block";
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
    }, sec);
    blockyouron++;
    if(blockyouron-1>=maxNum){
      alert("Done!");
      document.getElementById("game").style.display="none";
      document.getElementById("finalStat").style.display="block";
      var finishTime = Date.now();
      var timeTaken = finishTime-makeTime;
      timeTaken/=1000;
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
    a.style.display="none";
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
    make(maxBlocks,randTime);

  }
  document.getElementById("playzone").onclick=function(){
    missed_hits++;
    var scoress = document.getElementById("scores");
    scoress.insertAdjacentHTML('afterend', '<div id="scoor"> <p id="scoring"> </p> </div>');
    document.getElementById("scoring").innerHTML="Block number "+ blockyouron + ": missed";
    a.style.display="none";
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
    make(maxBlocks, .5);
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
};
document.getElementById("playAgain").onclick=function(){
  location.reload();
};
