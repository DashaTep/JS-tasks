// alert(null || 2 || undefined); // 2
// alert(alert(1) || 2 || alert(3)); // 1 2
// alert(1 && null && 2); // null
// alert(alert(1) && alert(2)); // 1 undefined
// alert(null || (2 && 3) || 4); // 3
// //if(age>=14 && age<=90)
// if(!(age>=14 && age<=90))
// if(age<14 && age>90)

// if (-1 || 0) alert("first"); //first
// if (-1 && 0) alert("second"); // без вывода
// if (null || (-1 && 1)) alert("third"); //third

let login = prompt("Кто там?", "");
if ((login = "Админ")) {
  let password = prompt("Пароль", "");
  if (password === "Я Главный") alert("Здравствуйте");
  else if (password == "" || password == null) alert("Отменено");
  else alert("Неверный пароль");
} else if (login == "" || login == null) alert("Отменено");
else alert("Я вас не знаю");
