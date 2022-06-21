// let calculator = {
//   read() {
//     this.x = +prompt('введите х', 0);
//     this.y = +prompt('введите y', 0);
//   },

//   sum() {
//     return +this.x + +this.y;
//   },

//   mul() {
//     return this.x * this.y;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());



let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  }
  ladder.up().up().down().showStep() 
