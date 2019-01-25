var a = document.getElementsByClassName("button button--primary button--large button--chromeless u-accentColor--buttonNormal button--withIcon button--withSvgIcon clapButton js-actionMultirecommendButton")[0];

 var hoverElement = document.getElementsByClassName("multirecommend js-actionMultirecommend u-flexColumn u-marginBottom10 u-width60")[0];
 var a1 = document.getElementsByClassName("button button--large button--circle button--withChrome button--withIcon button--withSvgIcon clapButton clapButton--largePill")[0];
 var followButton = document.getElementsByClassName("button-label button-defaultState js-buttonLabel")[1];
 var followingButton = document.getElementsByClassName("button button--primary button--small is-active u-noUserSelect button--withChrome u-accentColor--buttonNormal button--follow js-followButton")[0];
 var signInButton = document.getElementsByClassName("js-signInButton")[0];

 function GetColorCode(color){

 rgbArray = color.split(',');
 redArray = rgbArray[0];
 red = redArray.split('(')[1];
 green = rgbArray[1];
 blueArray = rgbArray[2];
 blueArray1 = blueArray.split(')');
 blue = blueArray1[0];
 colorCode = hexColorCode(red,green,blue);

 function rgbToHex(rgb) { 
 var hex = Number(rgb).toString(16);
 if (hex.length < 2) {
 hex = "0" + hex;
 }
 return hex;
 };

 function hexColorCode(r,g,b) { 
 var red = rgbToHex(r);
 var green = rgbToHex(g);
 var blue = rgbToHex(b);
 return red+green+blue;
 };
 
 ColorCode = "#" + colorCode;
 return ColorCode;
 }

 var ColorCode;
 var rgbColor;
 if(followButton){
 rgbColor = window.getComputedStyle(followButton, null).getPropertyValue("color");
 ColorCode = GetColorCode(rgbColor);
 }
 else if (followingButton)
 {
 rgbColor = window.getComputedStyle(followingButton, null).getPropertyValue("background-color");
 ColorCode = GetColorCode(rgbColor);

 }

 

 var btnOne = document.createElement('button');
 btnOne.setAttribute("id","b1");
 var textOne = document.createElement('span');
 textOne.textContent = '5';
 textOne.style.color = ColorCode
textOne.style.fontSize  = "15px";
 btnOne.appendChild(textOne);
 btnOne.setAttribute("style","display:block;position: absolute;left:-5px;top:-22px;border:1px solid #ccc; background-color: #fff;text-align: center; width: 25px;height: 25px;line-height: 28px;border-radius: 50%; transition: background-color 0.5s ease")

 var btnTwo = document.createElement('button');
 btnTwo.setAttribute("id","b2");
 var textTwo = document.createElement('span');
 textTwo.textContent = '25';
 textTwo.style.color = ColorCode
textTwo.style.fontSize  = "15px";
 btnTwo.appendChild(textTwo);
 btnTwo.setAttribute("style","display:block;position: absolute;left:-30px;top:0px ;border:1px solid #ccc; background-color: #fff;text-align: center; width: 25px;height: 25px;line-height: 28px;border-radius: 50%; transition: background-color 0.5s ease")

 var btnThree = document.createElement('button');
 btnThree.setAttribute("id","b3");
 var textThree = document.createElement('span');
 textThree.textContent = '50';
 textThree.style.color = ColorCode
textThree.style.fontSize  = "15px";
 btnThree.appendChild(textThree);
 btnThree.setAttribute("color", colorCode);
 btnThree.setAttribute("style","display:block;position: absolute;left:-10px;top:23px;border:1px solid #ccc; background-color: #fff;text-align: center; width: 25px;height: 25px;line-height: 28px; border-radius: 50%; transition: background-color 0.5s ease")

 var count;
 var delay=3000, setTimeoutConst;
 var p = document.getElementsByClassName("multirecommend js-actionMultirecommend u-flexColumn u-marginBottom10 u-width60")[0];

 function RemoveButtons(){
 textOne.style.color = ColorCode
 btnOne.setAttribute("style","display:block;position: absolute;left:-5px;top:-22px;border:1px solid #ccc; background-color: #fff; border-radius: 50%;text-align: center; width: 25px;height: 25px;line-height: 28px; transition: background-color 0.5s ease")
 textTwo.style.color = ColorCode
 btnTwo.setAttribute("style","display:block;position: absolute;left:-30px;top:0px ;border:1px solid #ccc; background-color: #fff;border-radius: 50%;text-align: center; width: 25px;height: 25px;line-height: 28px;transition: background-color 0.5s ease")
 textThree.style.color = ColorCode
 btnThree.setAttribute("style","display:block;position: absolute;left:-10px;top:23px;border:1px solid #ccc; background-color: #fff; border-radius: 50%;text-align: center; width: 25px;height: 25px;line-height: 28px;transition: background-color 0.5s ease")
 a.removeChild(btnOne);
 a.removeChild(btnTwo);
 a.removeChild(btnThree);
 }



 $(a).hover(function(e) {

 if (!a.contains(btnOne)) {
 a.appendChild(btnOne);
 a.appendChild(btnTwo);
 a.appendChild(btnThree);

 $("#b1" ).hover(function(){
 textOne.style.color = "#fff"
 btnOne.setAttribute("style","display:block;position: absolute;left:-5px;top:-22px;border:1px solid #ccc;background-color:"+ColorCode+"; border-color:"+ColorCode+";border-radius: 50%;text-align: center; width: 25px;height: 25px;line-height: 28px;transition: background-color 0.5s ease");
 },function(){
 textOne.style.color = ColorCode
 btnOne.setAttribute("style","display:block;position: absolute;left:-5px;top:-22px;border:1px solid #ccc; background-color: #fff; border-radius: 50%;text-align: center; width: 25px;height: 25px;line-height: 28px; transition: background-color 0.5s ease")
 });

 $("#b2" ).hover(function(){
 textTwo.style.color = "#fff"
 btnTwo.setAttribute("style","display:block;position: absolute;left:-30px;top:0px;border:1px solid #ccc;background-color:"+ColorCode+"; border-color:"+ColorCode+";border-radius: 50%;text-align: center; width: 25px;height: 25px;line-height: 28px;transition: background-color 0.5s ease");
 },function(){
 textTwo.style.color = ColorCode
 btnTwo.setAttribute("style","display:block;position: absolute;left:-30px;top:0px ;border:1px solid #ccc; background-color: #fff;border-radius: 50%;text-align: center; width: 25px;height: 25px;line-height: 28px;transition: background-color 0.5s ease")
 });

 $("#b3" ).hover(function(){
 textThree.style.color = "#fff"
 btnThree.setAttribute("style","display:block;position: absolute;left:-10px;top:23px;border:1px solid #ccc; background-color:"+ColorCode+";border-color:"+ColorCode+";border-radius: 50%;text-align: center; width: 25px;height: 25px;line-height: 28px;transition: background-color 0.5s ease");
 },function(){
 textThree.style.color = ColorCode
 btnThree.setAttribute("style","display:block;position: absolute;left:-10px;top:23px;border:1px solid #ccc; background-color: #fff; border-radius: 50%;text-align: center; width: 25px;height: 25px;line-height: 28px;transition: background-color 0.5s ease")
 });

 


 $("#b1").unbind('click').bind('click', function (e)
 {
 console.log("1");
 if(signInButton){
 a.click();
 }
 else{
 clap(5);
 $('#b1').off('click')
 RemoveButtons();
 }
 });

 $("#b2").unbind('click').bind('click', function (e)
 { console.log("2");

 if(signInButton){
 a.click();
 }
 else{
 clap(25);
 $('#b2').off('click')
 RemoveButtons();
 }
 });

 $("#b3").unbind('click').bind('click', function (e)
 { console.log("3");

 if(signInButton){
 a.click();
 }
 else{
 clap(50);
 $('#b3').off('click')
 RemoveButtons();
 }
 });
 }


 },
 function(e) {
 clearTimeout(setTimeoutConst);
 setTimeoutConst = setTimeout(function(){
 if(btnOne){
 $('#b1').off('click');
 $('#b2').off('click');
 $('#b3').off('click');
 if (a.contains(btnOne)) {
 RemoveButtons();
 }
 }
 }, delay);
 });





function clap(c){
 if (a) {
 let i = 1;
 do{
 triggerMouseEvent (a, "mousedown");
 triggerMouseEvent (a, "mouseup");
 i = i + 1
 }while(i < c)
 }
 else
 console.log ("*** Target node not found!");

 function triggerMouseEvent (node, eventType) {
 var clickEvent = document.createEvent ('MouseEvents');
 clickEvent.initEvent (eventType, true, true);
 node.dispatchEvent (clickEvent);
 }
}

//second button

var btnOne1 = document.createElement('button');
 btnOne1.setAttribute("id","b12");
 var textOne1 = document.createElement('span');
 textOne1.textContent = '5';
 textOne1.style.color = ColorCode
 btnOne1.appendChild(textOne1);
 btnOne1.setAttribute("style","display:block;position: absolute;left:-25px;top:-22px;text-align: center; width: 32px;height: 32px;line-height: 28px;border:1px solid #ccc; background-color: #fff; border-radius: 50%; transition: background-color 0.5s ease")

 var btnTwo1 = document.createElement('button');
 btnTwo1.setAttribute("id","b22");
 var textTwo1 = document.createElement('span');
 textTwo1.textContent = '25';
 textTwo1.style.color = ColorCode
 btnTwo1.appendChild(textTwo1);
 btnTwo1.setAttribute("style","display:block;position: absolute;left:-40px;top:15px ;text-align: center; width: 32px;height: 32px;line-height: 28px;border:1px solid #ccc; background-color: #fff;border-radius: 50%; transition: background-color 0.5s ease")

 var btnThree1 = document.createElement('button');
 btnThree1.setAttribute("id","b32");
 var textThree1 = document.createElement('span');
 textThree1.textContent = '50';
 textThree1.style.color = ColorCode
 btnThree1.appendChild(textThree1);
 btnThree1.setAttribute("color", colorCode);
 btnThree1.setAttribute("style","display:block;position: absolute;left:-23px;top:50px;text-align: center; width: 32px;height: 32px;line-height: 28px;border:1px solid #ccc; background-color: #fff; border-radius: 50%; transition: background-color 0.5s ease")


 function RemoveButtons1(){
 textOne1.style.color = ColorCode
 btnOne1.setAttribute("style","display:block;position: absolute;left:-25px;top:-22px;text-align: center; width: 32px;height: 32px;line-height: 28px;border:1px solid #ccc; background-color: #fff; border-radius: 50%; transition: background-color 0.5s ease")
 textTwo1.style.color = ColorCode
 btnTwo1.setAttribute("style","display:block;position: absolute;left:-40px;top:15px ;text-align: center; width: 32px;height: 32px;line-height: 28px;border:1px solid #ccc; background-color: #fff;border-radius: 50%; transition: background-color 0.5s ease") 
 textThree1.style.color = ColorCode
 btnThree1.setAttribute("style","display:block;position: absolute;left:-23px;top:50px;text-align: center; width: 32px;height: 32px;line-height: 28px;border:1px solid #ccc; background-color: #fff; border-radius: 50%; transition: background-color 0.5s ease")
 a1.removeChild(btnOne1);
 a1.removeChild(btnTwo1);
 a1.removeChild(btnThree1);
 }

 $(a1).hover(function(e) {
 clearTimeout(setTimeoutConst);

 if (!a1.contains(btnOne1)) {
 a1.appendChild(btnOne1);
 a1.appendChild(btnTwo1);
 a1.appendChild(btnThree1);

 $("#b12" ).hover(function(){
 textOne1.style.color = "#fff"
 btnOne1.setAttribute("style","display:block;position: absolute;left:-25px;top:-22px;text-align: center; width: 32px;height: 32px;line-height: 28px;border:1px solid #ccc;background-color:"+ColorCode+"; border-color:"+ColorCode+";border-radius: 50%; transition: background-color 0.5s ease");
 },function(){
 textOne1.style.color = ColorCode
 btnOne1.setAttribute("style","display:block;position: absolute;left:-25px;top:-22px;text-align: center; width: 32px;height: 32px;line-height: 28px;border:1px solid #ccc; background-color: #fff; border-radius: 50%; transition: background-color 0.5s ease")
 });

 $("#b22" ).hover(function(){
 textTwo1.style.color = "#fff"
 btnTwo1.setAttribute("style","display:block;position: absolute;left:-40px;top:15px;text-align: center; width: 32px;height: 32px;line-height: 28px;border:1px solid #ccc;background-color:"+ColorCode+"; border-color:"+ColorCode+";border-radius: 50%; transition: background-color 0.5s ease");
 },function(){
 textTwo1.style.color = ColorCode
 btnTwo1.setAttribute("style","display:block;position: absolute;left:-40px;top:15px ;text-align: center; width: 32px;height: 32px;line-height: 28px;border:1px solid #ccc; background-color: #fff;border-radius: 50%; transition: background-color 0.5s ease")
 });

 $("#b32" ).hover(function(){
 textThree1.style.color = "#fff"
 btnThree1.setAttribute("style","display:block;position: absolute;left:-23px;top:50px;text-align: center; width: 32px;height: 32px;line-height: 28px;border:1px solid #ccc; background-color:"+ColorCode+";border-color:"+ColorCode+";border-radius: 50%; transition: background-color 0.5s ease");
 },function(){
 textThree1.style.color = ColorCode
 btnThree1.setAttribute("style","display:block;position: absolute;left:-23px;top:50px;text-align: center; width: 32px;height: 32px;line-height: 28px;border:1px solid #ccc; background-color: #fff; border-radius: 50%; transition: background-color 0.5s ease")
 });

 


 $("#b12").unbind('click').bind('click', function (e){
 if(signInButton){
 a.click();
 }
 else{
 clap1(5);
 $('#b12').off('click')
 RemoveButtons1();
 }
 });

 $("#b22").unbind('click').bind('click', function (e){
 if(signInButton){
 a.click();
 }
 else{
 clap1(25);
 $('#b22').off('click')
 RemoveButtons1();
 }
 });

 $("#b32").unbind('click').bind('click', function (e){
 if(signInButton){
 a.click();
 }
 else{
 clap1(50);
 $('#b32').off('click')
 RemoveButtons1();
 }
 });
 }

 },
 function(e) {
 clearTimeout(setTimeoutConst);
 setTimeoutConst = setTimeout(function(){
 if(btnOne1){
 $('#b12').off('click');
 $('#b22').off('click');
 $('#b32').off('click');
 if (a1.contains(btnOne1)) {
 RemoveButtons1();
 }
 }
 }, delay);
 });



function clap1(c){
 if (a1) {
 let i = 1;
 do{
 triggerMouseEvent (a1, "mousedown");
 triggerMouseEvent (a1, "mouseup");
 i = i + 1
 }while(i < c)
 }
 else
 console.log ("*** Target node not found!");

 function triggerMouseEvent (node, eventType) {
 var clickEvent = document.createEvent ('MouseEvents');
 clickEvent.initEvent (eventType, true, true);
 node.dispatchEvent (clickEvent);
 }
}
