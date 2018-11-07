// var dragItem= document.getElementById("dragElement");
 var dropLoc= document.getElementById("dropLocation");


// //Add image
// function addImage(){




// }


// dragItem.ondragstart = function(evt){

// evt.dataTransfer.setData('key', evt.target.id);
// console.log("its dragging...");

// }



// dropLoc.ondragover = function(evt){
// evt.preventDefault();
// console.log("its dragover....");


// }

// dropLoc.ondrop = function(evt){

//     var dropItem = evt.dataTransfer.getData('key');
//     evt.preventDefault();
//     console.log("its dropped..");
//     console.log(dropItem);
//     var myElement = document.getElementById(dropItem);
//     console.log(myElement);
//     var myNewElement= document.createElement('img');
//     myNewElement.src=myElement.src;
//     dropLoc.appendChild(myNewElement);

// }


// Adding Text
function addText(){
// var div =document.createElement("div");
// div.setAttribute("class",'div');
// div.setAttribute("",'resizable');

var resizable =document.createElement("div");
resizable.setAttribute("class",'resizable');

var divheader= document.createElement("div");
divheader.setAttribute("class", 'divheader');

var divtypeArea= document.createElement("div");
divtypeArea.setAttribute("class",'divtypeArea');
divtypeArea.setAttribute("contentEditable", 'true');

var resizers= document.createElement("div");
resizers.setAttribute("class",'resizers');


// var resizer= document.createElement("div");
// resizer.setAttribute("class",'resizer');


var top_left= document.createElement("div");
top_left.setAttribute("class",'resizer top-left');

var top_right= document.createElement("div");
top_right.setAttribute("class",'resizer top-right');

var bottom_left= document.createElement("div");
bottom_left.setAttribute("class",'resizer bottom-left');

var bottom_right= document.createElement("div");
bottom_right.setAttribute("class", 'resizer bottom-right');


CKEDITOR.inline(divtypeArea);
// div.style="border:1px solid black; width: 100px; height: 100px; position:absolute";
// divheader.style="border:5px solid black ;cursor: move; z-index: 10; background-color: #2196F3; color: #fff";
// divtypeArea.style="border:1px solid black";
// divtypeArea.setAttribute('contentEditable',"true");
// resizers.style="width: 100%; height: 100%; border: 3px solid #4286f4; box-sizing: border-box"
// top_left.style=" width: 5px; height: 5px; border-radius: 50%; background: white; border: 3px solid #4286f4; position: absolute ; left: -5px; top: -5px; cursor: nwse-resize"
// top_right.style=" width: 5px; height: 5px; border-radius: 50%; background: white; border: 3px solid #4286f4; position: absolute ; right: -5px; top: -5px; cursor: nwse-resize"
// bottom_left.style=" width: 5px; height: 5px; border-radius: 50%; background: white; border: 3px solid #4286f4; position: absolute ; left: -5px; bottom: -5px; cursor: nwse-resize"
// bottom_right.style=" width: 5px; height: 5px; border-radius: 50%; background: white; border: 3px solid #4286f4; position: absolute ; right: -5px; bottom: -5px; cursor: nwse-resize"



dropLoc.appendChild(resizable);


resizable.appendChild(resizers);
resizers.appendChild(divheader);
resizers.appendChild(divtypeArea);
resizers.appendChild(top_left);
resizers.appendChild(top_right);
resizers.appendChild(bottom_left);
resizers.appendChild(bottom_right);
dragElement();
makeResizableDiv();
}

// Resizing
function makeResizableDiv() {
  const elements = document.getElementsByClassName("resizable");
  
  for(let i =0;i<elements.size; i++)
    {
      
      let element = elements[i];
      
       const resizers = document.querySelectorAll(div + ' .resizer')
  const minimum_size = 20;
  let original_width = 0;
  let original_height = 0;
  let original_x = 0;
  let original_y = 0;
  let original_mouse_x = 0;
  let original_mouse_y = 0;
  for (let i = 0;i < resizers.length; i++) {
    const currentResizer = resizers[i];
    currentResizer.addEventListener('mousedown', function(e) {
      e.preventDefault()
      original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
      original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
      original_x = element.getBoundingClientRect().left;
      original_y = element.getBoundingClientRect().top;
      original_mouse_x = e.pageX;
      original_mouse_y = e.pageY;
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })
    
    function resize(e) {
      if (currentResizer.classList.contains('bottom-right')) {
        const width = original_width + (e.pageX - original_mouse_x);
        const height = original_height + (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
        }
      }
      else if (currentResizer.classList.contains('bottom-left')) {
        const height = original_height + (e.pageY - original_mouse_y)
        const width = original_width - (e.pageX - original_mouse_x)
        if (height > minimum_size) {
          element.style.height = height + 'px'
        }
        if (width > minimum_size) {
          element.style.width = width + 'px'
          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        }
      }
      else if (currentResizer.classList.contains('top-right')) {
        const width = original_width + (e.pageX - original_mouse_x)
        const height = original_height - (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        }
      }
      else {
        const width = original_width - (e.pageX - original_mouse_x)
        const height = original_height - (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        }
      }
    }
    
    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }
  }
    }
 
}

//makeResizableDiv('.div')


// Dragging the element

function dragElement(elmnt) {
  alert("inside dragelement");
  let elems = document.getElementsByClassName("divheader");
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  for(let i=0; i<elems.length;i++)
  {
   let draggable = elems[i];
   draggable.onmousedown = dragMouseDown;
    let elmnt = draggable.parentElement.parentElement;

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
    /* if present, the header is where you move the DIV from:*/
    // document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 
    /* otherwise, move the DIV from anywhere inside the DIV:*/
  
}