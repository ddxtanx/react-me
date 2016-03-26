var blocknum = 1;
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
var missed_hits = 0;
var average = 0;
var stoppedTime = 0;
var restartTime = 0;
var interId;
var maxBlocks = 20;
var b = document.getElementById("starter");
var randTime = 0;
var time = Math.floor(Math.random() *randTime +1);
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
    document.getElementById("difficulty").style.display="none";
    document.getElementById("blockAmount").style.display="block";
    randTime= 3000;
    document.getElementById("twenty").onclick=function(){
      maxBlocks=20;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
    document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
    };
    document.getElementById("thirty").onclick=function(){
      maxBlocks=30;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
    document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
    };
    document.getElementById("fifty").onclick=function(){
      maxBlocks=50;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
    document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
    };
  };
  document.getElementById("medium").onclick=function(){
    document.getElementById("difficulty").style.display="none";
    document.getElementById("blockAmount").style.display="block";
    randTime= 2000;
    document.getElementById("twenty").onclick=function(){
      maxBlocks=20;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
    document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
    };
    document.getElementById("thirty").onclick=function(){
      maxBlocks=30;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
    document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
    };
    document.getElementById("fifty").onclick=function(){
      maxBlocks=50;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
    document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
    };
  };
  document.getElementById("hard").onclick=function(){
    document.getElementById("difficulty").style.display="none";
    document.getElementById("blockAmount").style.display="block";
    randTime= 1000;
    document.getElementById("twenty").onclick=function(){
      maxBlocks=20;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
    document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
    };
    document.getElementById("thirty").onclick=function(){
      maxBlocks=30;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
    document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
    };
    document.getElementById("fifty").onclick=function(){
      maxBlocks=50;
      document.getElementById("blockAmount").style.display="none";
      document.getElementById("game").className =
    document.getElementById("game").className.replace(/\bhide\b/,'');
      document.getElementById("game").style.display="block";
    };
  };
window.onload=setDivs;
function make(maxNum){
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
    time = Math.floor(Math.random() *randTime +1);
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
    makeTime = Date.now();
  }, time);
  document.getElementById("boxesHit").innerHTML=blocknum;
  blocknum++;
  if(blocknum-1>=maxNum){
    alert("Done!");
    document.getElementById("game").style.display="none";
    document.getElementById("finalStat").style.display="block";
  }
}
var a = document.getElementById("box");
a.onclick=function(){
  hideBox();
};
function hideBox(){
  hideTime=Date.now();
  react = (hideTime - makeTime)/1000;
  totalTime+=react;
  document.getElementById("score").innerHTML=react;
  a.style.display="none";
  var scoress = document.getElementById("scores");
  scoress.insertAdjacentHTML('afterend', '<div id="scoor"> <p id="scoring"> </p> </div>');
  var scorer = 5;
  document.getElementById("scoring").innerHTML="Block number "+ blocknum + ": " + react + " sec.";
  scorer+=5;
  average = (totalTime/blocknum);
  average*=1000;
  average = Math.floor(average);
  average/=1000;
  document.getElementById("check").innerHTML=average;
  make(maxBlocks);
}
document.getElementById("boxesMissed").innerHTML=missed_hits;
document.getElementById("playzone").onclick=function(){
  missed_hits++;
  document.getElementById("boxesMissed").innerHTML=missed_hits;
};
document.getElementById("stopper").onclick=function(){
  stoppedTime= Date.now();
  react=0;
  a.style.display="none";
  time*=100000;
  this.style.display="none";
  b.style.display="block";
  interId= setInterval(myInter, 300);
};
function myInter() {
  a.style.display="none";
}
function stopInter() {
  clearInterval(interId);
}
document.getElementById("starter").onclick=function(){
  alert("Working?");
  a.style.display="block";
  restartTime = Date.now();
  time = 1;
  this.style.display="none";
  alert(time);
  document.getElementById("stopper").style.display="block";
  stopInter();
};
};
