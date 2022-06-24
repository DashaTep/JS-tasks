let elem = document.getElementById('elem')
function clear(item){
    elem.innerHTML=""
}
clear(elem)

  //------------------------------------------------------------------------------------------------------

let list = document.getElementById('list')
while(true){
    let item = prompt("Введите пункт списка","");

    if(!item) {
        break
    }
    else{
        let newLi = document.createElement('li');
        newLi.textContent = item;
        list.append(newLi);      
    }
}

  //------------------------------------------------------------------------------------------------------
