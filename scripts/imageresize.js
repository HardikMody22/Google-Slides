// // 
// // Resizing
// function makeResizableDiv1() {
  
//   const elements = document.getElementsByClassName("resizable");
  
//   for(let i =0;i<elements.length; i++)
//     {
      
//       let element = elements[i];
      
//       //  const resizers = element.querySelectorAll('resizers')
//       const resizers = element.getElementsByClassName("resizer");
      
//   const minimum_size = 20;
//   let original_width = 0;
//   let original_height = 0;
//   let original_x = 0;
//   let original_y = 0;
//   let original_mouse_x = 0;
//   let original_mouse_y = 0;
//   for (let i = 0;i < resizers.length; i++) {
//     const currentResizer = resizers[i];
    
//     currentResizer.addEventListener('mousedown', function(e) {
//       e.preventDefault()
//       original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
//       original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
//       original_x = element.getBoundingClientRect().left;
//       original_y = element.getBoundingClientRect().top;
//       original_mouse_x = e.pageX;
//       original_mouse_y = e.pageY;
//       window.addEventListener('mousemove', resize)
//       window.addEventListener('mouseup', stopResize)
//     })
    
//     function resize(e) {
//       if (currentResizer.classList.contains('bottom-right')) {
//         const width = original_width + (e.pageX - original_mouse_x);
//         const height = original_height + (e.pageY - original_mouse_y)
//         if (width > minimum_size) {
//           element.style.width = width + 'px'
//         }
//         if (height > minimum_size) {
//           element.style.height = height + 'px'
//         }
//       }
//       else if (currentResizer.classList.contains('bottom-left')) {
//         const height = original_height + (e.pageY - original_mouse_y)
//         const width = original_width - (e.pageX - original_mouse_x)
//         if (height > minimum_size) {
//           element.style.height = height + 'px'
//         }
//         if (width > minimum_size) {
//           element.style.width = width + 'px'
//           element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
//         }
//       }
//       else if (currentResizer.classList.contains('top-right')) {
//         const width = original_width + (e.pageX - original_mouse_x)
//         const height = original_height - (e.pageY - original_mouse_y)
//         if (width > minimum_size) {
//           element.style.width = width + 'px'
//         }
//         if (height > minimum_size) {
//           element.style.height = height + 'px'
//           element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
//         }
//       }
//       else {
//         const width = original_width - (e.pageX - original_mouse_x)
//         const height = original_height - (e.pageY - original_mouse_y)
//         if (width > minimum_size) {
//           element.style.width = width + 'px'
//           element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
//         }
//         if (height > minimum_size) {
//           element.style.height = height + 'px'
//           element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
//         }
//       }
//     }
    
//     function stopResize() {
//       window.removeEventListener('mousemove', resize)
      
//     }
//   }
//     }
 
// }

makeResizableDiv1 = function(div) {
  var element = document.getElementById('image');
  var resizers = document.querySelectorAll(' .resizer');
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
        element.style.width = original_width + (e.pageX - original_mouse_x)  + 'px'
        element.style.height = original_height + (e.pageY - original_mouse_y)  + 'px'
      }
      else if (currentResizer.classList.contains('bottom-left')) {
        element.style.width = original_width - (e.pageX - original_mouse_x)  + 'px'
        element.style.height = original_height + (e.pageY - original_mouse_y)  + 'px'
        element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
      }
      else if (currentResizer.classList.contains('top-right')) {
        element.style.width = original_width + (e.pageX - original_mouse_x)  + 'px'
        element.style.height = original_height - (e.pageY - original_mouse_y)  + 'px'
        element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
      }
      else {
        element.style.width = original_width - (e.pageX - original_mouse_x)  + 'px'
        element.style.height = original_height - (e.pageY - original_mouse_y)  + 'px'
        element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
      }
    }
    
    function stopResize() {
    window.removeEventListener('mousemove', resize)
    }
  }
}

