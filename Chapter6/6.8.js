function printNumbers(from, to) {
    let a = from;  
    let t = setInterval(function() {
      alert(a);
      if (a == to) {
        clearInterval(t);
      }
      a++;
    }, 1000);
  }
    printNumbers(1, 4);

    function printNumbersWithRecursion(from, to) {
        let a = from; 

        setTimeout(function showS(){
            alert(a)
            if(a<to){
                setTimeout(showS,1000)
            } 
            a++
        }, 1000)        
      }
      printNumbersWithRecursion(1, 4);
