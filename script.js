document.getElementById("startbut").onclick=function(){
  document.getElementById("startme").style.display="none";
  document.getElementById("game").className =
document.getElementById("game").className.replace(/\bhide\b/,'');
    var blocknum = 1;
    var i = 3;
    var max_height= document.getElementById("playzone").clientHeight;
    var max_width= screen.width*.8;
    var makeTime = Date.now();
    var rand_height = getRandomIntInclusive(50,150);
    var rand_col1 = getRandomIntInclusive(0,9);
    var rand_col2 = getRandomIntInclusive(0,9);
    var rand_col3 = getRandomIntInclusive(0,9);
    var pos_top=30;
    var hideTime;
    var react;
    var rand_color;
    var time = Math.floor(Math.random() *2999 +1);
    function getRandomIntInclusive(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function make(idtag){
      setTimeout(function(){
        var a=document.getElementById(idtag);
        var item_h=getRandomIntInclusive(100, max_height-100);
        var item_w=getRandomIntInclusive(0, max_width-200);
        a.style.top=item_h+'px';
        a.style.left=item_w+'px';
        a.style.backgroundColor="#"+rand_col1+"a"+rand_col2+"d"+rand_col3+"b";
        rand_col1 = getRandomIntInclusive(0,9);
        rand_col2 = getRandomIntInclusive(0,9);
        rand_col3 = getRandomIntInclusive(0,9);
        a.style.display="block";
        time = Math.floor(Math.random() *2999 +1);
        if(i%3==0){
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
      blocknum++;
    }
    var a = document.getElementById("box");
    a.onclick=function(){
      hideTime=Date.now();
      react = (hideTime - makeTime)/1000;
      document.getElementById("score").innerHTML=react;
      a.style.display="none";
      var scoress = document.getElementById("scores");
      scoress.insertAdjacentHTML('afterend', '<div class="scoor"> <p id="scoring"> </p> </div>');
      var scorer = 5;
      document.getElementById("scoring").innerHTML="For block number "+ blocknum + " it took you " + react + " seconds";
      scorer+=5;
      make("box");
      if(document.getElementById("scoring").top>636){
        document.getElementById("scoring").style.display="none";
      }
    };

    }
