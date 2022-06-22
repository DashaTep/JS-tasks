let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };


  function sumSalaries(salaries){
    let sum =0;
    for( let item of Object.values(salaries)){
        sum=sum+item;
    }
    return sum
  }
  
  alert( sumSalaries(salaries) );

  //------------------------------------------------------------------------------------------------------


  let user = {
    name: 'John',
    age: 30
  };
  
function count(user){
    let count = 0;
    for(let item of Object.keys(user)){
        if (item) count++; 
    }
    return count
}

  alert( count(user) );