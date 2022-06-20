if ("0") {
  alert("Привет");
}
//выведется, непустая строка в условии всегда true

let result = prompt("Какое «официальное» название JavaScript?", "");
if (result == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

let a = +prompt("Введите число", "");
if (a > 0) {
  alert("1");
} else if (a < 0) {
  alert("-1");
} else {
  alert("0");
}

let result1;
result1 = a + b < 4 ? "Мало" : "Много";

let message = (login == 'Сотрудник') ? 'Привет' :  (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';
