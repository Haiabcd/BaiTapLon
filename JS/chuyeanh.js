
var chooseList = document.querySelectorAll(".choose_img> .lableslider >label >img");
for(var i=0 ;i<chooseList.length;i++){
   chooseList[i].onmouseover = function(){
       //alert(this.src);
       var mainImg = document.querySelector(".choose_img>.choose_hover>.mainpicture");
       mainImg.src= this.src;
   }
}

var chooseList = document.querySelectorAll(".choose_img> .lableslider >.at6 >img");
for(var i=0 ;i<chooseList.length;i++){
   chooseList[i].onmouseover = function(){
       //alert(this.src);
       var mainImg = document.querySelector(".choose_img>.choose_hover>.pictureat6");
       mainImg.src= this.src;
   }
}

var chooseList = document.querySelectorAll(".choose_img> .lableslider >.pl6 >img");
for(var i=0 ;i<chooseList.length;i++){
   chooseList[i].onmouseover = function(){
       //alert(this.src);
       var mainImg = document.querySelector(".choose_img>.choose_hover>.picturepo5");
       mainImg.src= this.src;
   }
}

var chooseList = document.querySelectorAll(".choose_img> .lableslider >.sm2 >img");
for(var i=0 ;i<chooseList.length;i++){
   chooseList[i].onmouseover = function(){
       //alert(this.src);
       var mainImg = document.querySelector(".choose_img>.choose_hover>.picturesm2");
       mainImg.src= this.src;
   }
}

var chooseList = document.querySelectorAll(".choose_img> .lableslider >.sm5 >img");
for(var i=0 ;i<chooseList.length;i++){
   chooseList[i].onmouseover = function(){
       //alert(this.src);
       var mainImg = document.querySelector(".choose_img>.choose_hover>.picturesm5");
       mainImg.src= this.src;
   }
}

var chooseList = document.querySelectorAll(".choose_img> .lableslider >.sm6 >img");
for(var i=0 ;i<chooseList.length;i++){
   chooseList[i].onmouseover = function(){
       //alert(this.src);
       var mainImg = document.querySelector(".choose_img>.choose_hover>.picturesm6");
       mainImg.src= this.src;
   }
}
