function usFisrt(str) {
  str = str[0].toUpperCase() + str.slice(1);
  return str;
}
alert(usFisrt("дарья"));

//-----------------------------------------------------------------------------------------------------


function checkSpam(str) {
 let flag = false
  let strUpper = str.toUpperCase();
  if (strUpper.includes("VIAGRA") || strUpper.includes("XXX")) 
  {
    flag=true;
    return flag;
  }
  else
  {
    return flag;
  } 
}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

//-----------------------------------------------------------------------------------------------------

function truncate(str, maxlength){
    if(str.length>maxlength)
    {
    str = str.slice(0,maxlength-1)
    }
    
    return str
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
alert(truncate("Всем привет!", 20))

//-----------------------------------------------------------------------------------------------------

function extractCurrencyValue(str){
    let num = str.slice(1);
    return +num;
}
alert(extractCurrencyValue('$120'))