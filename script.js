var dragItem= document.getElementById("dragElement");
var dropLoc= document.getElementById("dropLocation");


dragItem.ondragstart = function(evt){

evt.dataTransfer.setData('key', evt.target.id);
console.log("its dragging...");

}



dropLoc.ondragover = function(evt){
evt.preventDefault();
console.log("its dragover....");


}

dropLoc.ondrop = function(evt){

    var dropItem = evt.dataTransfer.getData('key');
    evt.preventDefault();
    console.log("its dropped..");
    console.log(dropItem);
    var myElement = document.getElementById(dropItem);
    console.log(myElement);
    var myNewElement= document.createElement('img');
    myNewElement.src=myElement.src;
    dropLoc.appendChild(myNewElement);

}


// Adding Text
function addText(){
var div =document.createElement("div");
var divheader= document.createElement("div");
var divtypeArea= document.createElement("div");
//CKEditor.inline(div);
div.style="border:1px solid black; width: 50px; height: 50px; position:absolute";
divheader.style="border:1px solid black";
divtypeArea.style="border:1px solid black";
divtypeArea.setAttribute('contentEditable',"true");
dropLoc.appendChild(div);
div.appendChild(divheader);
div.appendChild(divtypeArea);
}


//Make the DIV element draggagle:
dragElement(document.getElementsByName("div"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}