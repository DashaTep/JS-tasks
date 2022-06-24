let div = document.body.firstElementChild;
let ul = document.body.children[1];
let li = document.body.children[1].lastElementChild;

let table = document.body.children[2];
let countRows = table.rows.length;

for (let i = 0; i < countRows; i++) {
  let tr = table.rows[i];
  tr.cells[i].style.backgroundColor = 'red';
}