let user = {
    name: "Василий Иванович",
    age: 35
  };

let json = JSON.parse(JSON.stringify(user))
console.log(json)

//------------------------------------------------------------------------------------------------------

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
    // качестве replacer мы можем использовать функцию, а не массив.Функция будет вызываться для каждой пары (key, value), 
    //и она должна возвращать заменённое значение, которое будет использоваться вместо исходного. Или undefined, чтобы пропустить значение.
  alert( JSON.stringify(meetup, function replacer(key, value) {
    if (value == meetup && key!=="") return undefined
    else return value
  }));
  
  
