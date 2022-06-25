// let field = document.getElementById('field')
// let coordinatesField = field.getBoundingClientRect();

// let leftTopAngle = [coordinatesField.left, coordinatesField.top]; //верхний левый, внешний угол
// console.log(leftTopAngle)

// let rightLowerAngle = [coordinatesField.right, coordinatesField.bottom]; //нижний правый, внешний угол
// console.log(rightLowerAngle)

// let widthFrame = field.clientLeft;
// let heigthFrame = field.clientTop;

// let leftTopInternalAngle = [coordinatesField.left + widthFrame, coordinatesField.top + heigthFrame]
// console.log(leftTopInternalAngle) //верхний левый, внутренний угол



// let rightLowerInternalAngle = [coordinatesField.left + widthFrame + field.clientWidth, coordinatesField.top + heigthFrame + field.clientHeight]
// console.log(rightLowerInternalAngle) //нижний правый, внутренний угол

function getcoordinatesForAbsolutePosition(elem){
    let elemC = elem.getBoundingClientRect()
    let coordinates = [elemC.top + window.pageYOffset, elemC.left + window.pageXOffset]
    return coordinates
}

function positionAt(anchor, position, elem){
    
    let anchorCoordinates = anchor.getBoundingClientRect()
    //let anchorCoordinates = getcoordinatesForAbsolutePosition(anchor); //лдя абсолютного позиционирования

    if(position == 'top'){
        elem.style.left = anchorCoordinates.left + "px";
        elem.style.top = anchorCoordinates.top - elem.offsetHeight + "px";
    }

    if(position == 'right'){
          elem.style.left = anchorCoordinates.left + anchor.offsetWidth + "px";
          elem.style.top = anchorCoordinates.top + "px";
    }

    if(position == 'bottom'){
          elem.style.left = anchorCoordinates.left + "px";
          elem.style.top = anchorCoordinates.top + anchor.offsetHeight + "px";
    }
}


function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
  }


let blockquote = document.querySelector('blockquote');
showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");