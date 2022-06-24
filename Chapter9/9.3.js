class Rabbit extends Object {
    constructor(name) {
     super() 
     // При переопределении конструктора:
     // Обязателен вызов конструктора родителя super() в конструкторе Child до обращения к this.
     this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Кроль");  
  alert( rabbit.hasOwnProperty('name') ); // Ошибка