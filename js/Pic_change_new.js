var img = new Array(3); 
 var start = null;
 var counter = 1;
 var delayTime = null;
if(document.images) 
 {
for(i = 1; i <= 4; i++)
   {
     img[i] = new Image();
     img[i].src ="Images/life_photo_"+ i + ".jpg";
   }
 }
function getDelayTime(dlTime)
 {
   var temp = parseInt(dlTime);
   if(temp != NaN)
    delayTime = temp * 1000;
 else
    delayTime = 2000;
 }
function anim()
 {   
	if(counter > 3)
		counter = 1;
	document.life_photo.src = img[counter].src;
	counter++;
 }
function slide()
 {
   getDelayTime(document.pic_form.delay.value);

   with(document.pic_form)
   {
     start = setInterval("anim()", delayTime);
     stShow.disabled = true;
     spShow.disabled = false;
   }
 }
function stopSlide()
 {
   clearInterval(start);
   document.pic_form.stShow.disabled = false;
   document.pic_form.spShow.disabled = true;
 }