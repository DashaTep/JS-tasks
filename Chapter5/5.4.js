let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");

let sr = Math.floor((styles.length-1)/2)
styles[sr] = "Классика";

fisrtElement = styles.shift();
alert(fisrtElement);

styles.unshift("Рэп", "Регги");


alert(styles)

//-----------------------------------------------------------------------------------------------------

function sumInput(){
    let nums = [];

    while (1) {
        let num = prompt("число", 0);
        if( !isFinite(num) || num=="" || num==null) break;
    
    nums.push(+num)
    }

    let sum = 0; 
    for (let i =0; i<nums.length; i++){
        sum= sum+ nums[i];
    }
    return sum
}

alert(sumInput())

//-----------------------------------------------------------------------------------------------------

function getMaxSubSum(arr){
    let sum = 0;

    for(let i =0 ; i<arr.length; i++){
        let currentSum = 0;
        for(let j =i; j<arr.length; j++)
        {
            currentSum= currentSum + arr[j];
            sum = Math.max(sum, currentSum)
        }
    }
    return sum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); 