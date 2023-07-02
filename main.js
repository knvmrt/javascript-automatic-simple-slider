let i = 0;
let images = [];
let time = 2000;

images[0] = "images/a.jpg";
images[1] = "images/b.jpg";
images[2] = "images/c.jpg";
images[3] = "images/d.jpg";

function changeImg(){
   document.slide.src = images[i]

   if(i<images.length - 1){
      i++;
   }else{
      i = 0;
   }

   setTimeout("changeImg()", time);
}

window.onload = changeImg;