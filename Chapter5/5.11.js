let date = new Date(2012, 1, 20, 3, 12);
alert(date);
//------------------------------------------------------------------------------------------------------

function getWeekDay(date) {
  let days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  let day = date.getDay() - 1;
  if (day == -1) {
    day = 6;
  }
  return days[day];
}
let date1 = new Date(2022, 5, 22);
alert(getWeekDay(date1));
//------------------------------------------------------------------------------------------------------

function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}
alert(getLocalDay(date1));
//------------------------------------------------------------------------------------------------------

let date2 = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  let date1 = new Date(date);
  date1.setDate(date1.getDate() - days);
  return date1.getDate();
}

alert(getDateAgo(date2, 1)); // 1, (1 Jan 2015)
//------------------------------------------------------------------------------------------------------

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert(getLastDayOfMonth(2012, 0)); // 31
alert(getLastDayOfMonth(2012, 1)); // 29

//------------------------------------------------------------------------------------------------------

function getSecondsToday() {
  let d = new Date();
  let s = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  return s;
}

alert(getSecondsToday());
//------------------------------------------------------------------------------------------------------

function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.round((tomorrow - now) / 1000);
}

alert(getSecondsToTomorrow());
//------------------------------------------------------------------------------------------------------

function formatDate(date) {
  let now = new Date();
  let difference = Math.round(now - date) / 1000;

  if (difference < 1) {
    return "прямо сейчас";
  }

  if (difference < 60) {
    return difference + " сек. назад";
  }

  let minutes = Math.round(difference/60);
  if( minutes < 60){
    return minutes + ' мин. назад';
  }

    let stringDate = date;
       return stringDate.getDate() + '.' + Number(stringDate.getMonth()+1) +'.' + +stringDate.getFullYear().toString().slice(-2) + ' ' + +stringDate.getHours() + ':'+ +stringDate.getMinutes()

}

alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
alert( formatDate(new Date(new Date - 86400 * 1000)) ); 
