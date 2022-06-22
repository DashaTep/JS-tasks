// две переменные равны, если ссылаются на один и тот же объект
let user = {
    name:"Ann",
    age:17
};
function A() { return user }
function B() { return user }
alert( new A() == new B() ); 

//-----------------------------------------------------------------------------------------------------

function Calculator() {
    this.read = () => {
      this.x = +prompt('введите х', 0);
      this.y = +prompt('введите у', 0);
    };
  
    this.sum = () => {
      return this.x + this.y;
    };
  
    this.mul = () =>{
      return this.x * this.y;
    };
  }
  
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//------------------------------------------------------------------------------------------------------

function Accumulator(value){
    this.value = value;
    
    this.read = ()=>{
        this.value = this.value + +prompt('введите число', 0)
    }
}


let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
