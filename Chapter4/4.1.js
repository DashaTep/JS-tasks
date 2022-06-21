// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// //-----------------------------------------------------------------------------------------------------

// let schedule = {};
// alert( isEmpty(schedule)); 

// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); 

// function isEmpty(obj){
//     for(let key in obj){
//         return false
//     }
//     return true
// }

// //-----------------------------------------------------------------------------------------------------

// const user = {
//     name: "John"
//   };
  
//   // это будет работать?
//   user.name = "Pete"; 

//   //будет работать, в объектах можно изменять содержимое

//   //-----------------------------------------------------------------------------------------------------

//   let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
  
//   let sum=0;
//   for (let key in salaries) {
//     sum = sum + salaries[key];
//   }  
//   alert(sum); 


  //-----------------------------------------------------------------------------------------------------
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  }
    
 function multiplyNumeric(obj){
    for (let key in obj)
    {
        if(typeof(obj[key]) =='number')
        obj[key]=obj[key]*2;
    }
  }

multiplyNumeric(menu);
console.log(menu)