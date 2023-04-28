var index =1;
changeImage = function (){
    var imgs = ["/IMAGES/slider_1.webp","/IMAGES/slider_2.webp","/IMAGES/slider_3.webp","/IMAGES/slider_4.webp","/IMAGES/slider_5.webp"];
    document.getElementById('img').src =imgs[index];
    index++;
    if(index==5){
        index=0;
    }
}
setInterval(changeImage,1000);