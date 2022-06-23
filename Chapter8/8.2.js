function Sum(a,b){
    this.a=a;
    this.b=b;
    this.sum = this.a + this.b
}

let sum1 = new Sum(2,4);
let sum2= new sum1.constructor(3,4);

alert(sum2.sum)

//------------------------------------------------------------------------------------------------------

function Multi(a,b){
    this.a=a;
    this.b=b;
    this.multi = this.a * this.b
}
Multi.prototype = {}

let mul1 = new Sum(2,4);
let mul2= new mul1.constructor(3,4);

alert(mul2.multu)

