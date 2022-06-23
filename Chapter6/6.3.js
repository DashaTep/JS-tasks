
function sum(a) {
    return function(b) {
      return a + b; 
    };
  
  }
  
  alert( sum(1)(2) ); // 3
  alert( sum(5)(-1) ); // 4

  //------------------------------------------------------------------------------------------------------
  let arr = [1, 2, 3, 4, 5, 6, 7];

 function inBetween(a, b) {
    return function(x) {
      if( x >= a && x <= b) return true
      else false
    };
  }
  
  alert(arr.filter(inBetween(3, 6)) ); 


  function inArray(arr) {
    return function(x) {
     if(arr.includes(x)) return true
     else false
    };
  }
  
  alert( arr.filter(inArray([1, 2, 10])) ); 
    //------------------------------------------------------------------------------------------------------
    
    let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" }
      ];
      
      function byField(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
      }
      
      users.sort(byField('name'));
      users.forEach(user => alert(user.name)); 
      
      //------------------------------------------------------------------------------------------------------

      