 function upDate(previewPic){
   console.log(previewPic)
   document.getElementById("image").style.backgroundImage="url("+previewPic.src+")"
   document.getElementById("image").innerHTML = previewPic.alt 
}

   function unDo(){
      document.getElementById("image").style.backgroundImage="url()"
      
}