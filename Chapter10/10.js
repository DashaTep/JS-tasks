class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = "FormatError";
    //this.stack = <стек вызовов>;
  }
}

let err = new FormatError("ошибка форматирования");

alert( err.message ); 
alert( err.name ); 
alert( err.stack ); 

alert( err instanceof FormatError ); 
alert( err instanceof SyntaxError ); 

