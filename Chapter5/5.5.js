function camelize(str){
    str = str.split('-')
    str = str.map((i, index) => {
        if (index == 0)  return i
        else {
            return i[0].toUpperCase() + i.slice(1)
        }
    })
        return str.join('')
}
alert(camelize("background-color"))

//------------------------------------------------------------------------------------------------------

function filterRange(arr, a, b){
    return arr.filter((value) => {
        if( value>=a && value<=b )
        return value
    })
}

let arr1 = [5, 3, 8, 1];

let filtered = filterRange(arr1, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr1 ); // 5,3,8,1 (без изменений)

//------------------------------------------------------------------------------------------------------

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i = i - 1;
    }
  }
}

let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4);

alert(arr2); // [3, 1]
//------------------------------------------------------------------------------------------------------

let arr3 = [5, 2, 1, -10, 8];

arr3.sort((i, j) => {
  return j - i;
});

alert(arr3); // 8, 5, 2, 1, -10

//------------------------------------------------------------------------------------------------------

let arr4 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  let arr5 = arr.slice().sort();
  return arr5;
}
let sorted = copySorted(arr4);
alert(sorted); // CSS, HTML, JavaScript
alert(arr4); // HTML, JavaScript, CSS (без изменений)

//------------------------------------------------------------------------------------------------------

function Calculator() {

  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function (str) {
    let str1 = str.split(' ');
    a = +str1[0];
    b = +str1[2];
    operation = str1[1];
    return this.methods[operation](a,b)
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("9 ** 2");
alert(result);

//------------------------------------------------------------------------------------------------------

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
let names = []

for(let key in users){
    names.push(users[key].name)
}

alert( names ); // Вася, Петя, Маша

//------------------------------------------------------------------------------------------------------

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];

let usersMapped = []
for(let key in users1){
    usersMapped.push({
    fullName: `${users1[key].name} ${users1[key].surname}`,
    id: users1[key].id
      })
}

alert( usersMapped[0].id ) 
alert( usersMapped[0].fullName )

//------------------------------------------------------------------------------------------------------

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr = [ vasya2, petya2, masha2 ];

function sortByAge(arr){
    arr.sort((a,b)=> a.age - b.age)
}

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

//------------------------------------------------------------------------------------------------------

let arr5 = [1, 2, 3];

function shuffle(arr){
    arr.sort(() => 0.5 - Math.random());
}

shuffle(arr5);
alert(arr5);

//------------------------------------------------------------------------------------------------------

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };

let arr6 = [ vasya3, petya3, masha3 ];

function getAverageAge(arr){
    let sum = 0;
    for(let key in arr){
        sum = sum + arr[key].age;
    }
    sum=sum/arr.length;
    return sum;
}
alert(getAverageAge(arr6) ); 

//------------------------------------------------------------------------------------------------------

function unique(arr) {
    let uniqueElements = []

    for(let item of arr){
        if(!uniqueElements.includes(item)){
            uniqueElements.push(item)
        }
    }

    return uniqueElements;
}
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O