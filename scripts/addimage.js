// Add image
function showImage() {
    if(this.files && this.files[0]) {
        let obj= new FileReader();
        obj.onload = function(data) {
        let image = document.getElementById("image");
        image.setAttribute('class','imageclass');
       var resizable =document.createElement("div");
      resizable.setAttribute("class",'resizable');
  
  
  var resizers= document.createElement("div");
  resizers.setAttribute("class",'resizers');
  
  var divheader= document.createElement("div");
  divheader.setAttribute("class", 'divheader');
  
  var divtypeArea= document.createElement("div");
  divtypeArea.setAttribute("class",'divtypeArea');
  
  var top_left= document.createElement("div");
  top_left.setAttribute("class",'resizer top-left');
  
  var top_right= document.createElement("div");
  top_right.setAttribute("class",'resizer top-right');
  
  var bottom_left= document.createElement("div");
  bottom_left.setAttribute("class",'resizer bottom-left');
  
  var bottom_right= document.createElement("div");
  bottom_right.setAttribute("class", 'resizer bottom-right');
  
  
  
  
  dropLoc.appendChild(resizable);
  
  
  
  resizable.appendChild(resizers);
  resizers.appendChild(divheader);
  resizers.appendChild(divtypeArea);
  
  resizers.appendChild(top_left);
  resizers.appendChild(top_right);
  resizers.appendChild(bottom_left);
  resizers.appendChild(bottom_right);
  divtypeArea.appendChild(image);
        makeResizableDiv1();
        dragElement();
        
        image.src = data.target.result;
        image.style.display = "block";
  
        }
      obj.readAsDataURL(this.files[0]);
    }
  }
  