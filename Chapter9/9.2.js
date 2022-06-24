class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
// При переопределении конструктора:
// Обязателен вызов конструктора родителя super() в конструкторе Child до обращения к this.
   super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); 
alert(rabbit.name);

