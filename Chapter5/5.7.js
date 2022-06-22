function unique(arr) {
    let set = new Set()
    
    for( let item of arr){
        set.add(item)
    }
    return set;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert(Array.from(unique(values))); 

//------------------------------------------------------------------------------------------------------


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){
    let arr2=[];
    let set = new Set();
    for(let item of arr){
        arr2.push(item.toLowerCase())
    }

    let map = new Map()
    for(let item of arr2){
        let keyWord = item.split("").sort().join('')
        map.set(keyWord, item)
    }
    
    let arr3 = Array.from(map.values())
    return arr3;
}

alert(aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

//------------------------------------------------------------------------------------------------------

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys()); //переводим в массив, так как map - итерируемый объект 
keys.push("more");
alert(keys); 