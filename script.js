 $(document).ready(function() {
   
 });
 
 let divs = document.querySelectorAll('div')
     
     //bubble
      function bubble(e) {
        console.log(this.firstChild.nodeValue.trim() + ' bubbled')
      }
      for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', bubble)
      }
      
      //bubble,stop propagation
      function bubble(e) {
        e.stopPropagation()
        console.log(this.firstChild.nodeValue.trim() + ' bubbled')
      }
        for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', bubble)
      }
      
      //capture
      function capture(e) {
        console.log(this.firstChild.nodeValue.trim() + ' captured')
      }
      for (let i=0; i < divs.length; i++) {
        divs.addEventListener('click', capture, true)
      }
      