let user = { name: "John", years: 30 };

let {name: name, years : age, isAdmin = false} = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

//------------------------------------------------------------------------------------------------------

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(salaries){
    if(salaries){
        let topS = 0;
        let topName = "";
        for( let [ name, salary] of Object.entries(salaries)){
            if(topS<salary){
                topS = salary;
                topName = name;
            }
        }
        return topName
    }
    else
    return null
}

alert(topSalary(salaries))