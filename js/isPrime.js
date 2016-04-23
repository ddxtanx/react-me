
  function isPrime(num) {
    //TODO
    var prime;
    if (num<=1){
      return false;
    }
    else{
      for (var i = 2; i<num; i++){
        if (num%i==0){
          return false;
          prime = false;
          i=num+1;
        }
      }
      return true;
    }
  }
  function primeList(num){
    var primeArray = []
    for(var i = 2; i<=num; i++){
      if (isPrime(i)){
        primeArray.push(i);
      }
    }
    return primeArray;
  }
  function primeNum(num){
    return primeList(num).length;
  }
  var input = prompt("What Num");
  alert(primeList(input));
  alert(primeNum(input));
