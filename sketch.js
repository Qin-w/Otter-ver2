let x = 1;
let knock = 0;
let close = 0;
let button;
let img;

 function setup() {
  createCanvas(720, 720);
   img1 = loadImage('assets/1.gif'); // Load the image
   img2 = loadImage('assets/2.gif'); 
   img3 = loadImage('assets/3.gif'); 
   img4 = loadImage('assets/4.gif'); 
   img5 = loadImage('assets/5.gif'); 
   img6 = loadImage('assets/6.gif'); 
   img7 = loadImage('assets/7.gif'); 
   img8 = loadImage('assets/8.gif');
   img9 = loadImage('assets/9.gif'); 
   img10 = loadImage('assets/10.gif'); 
   img11 = loadImage('assets/11.gif'); 
   img12 = loadImage('assets/12.gif'); 
   norclo = loadImage('assets/norclo.gif'); 
   chiclo = loadImage('assets/chiclo.gif'); 
   seclo = loadImage('assets/seclo.gif'); 
   norkn1 = loadImage('assets/norkn1.png'); 
   norkn2 = loadImage('assets/norkn2.png'); 
   chikn1 = loadImage('assets/chikn1.png'); 
   chikn2 = loadImage('assets/chikn2.png'); 
   norbk = loadImage('assets/norbk.gif');
   chibk = loadImage('assets/chibk.gif'); 
   sebk = loadImage('assets/sebk.gif'); 
   sekn1 = loadImage('assets/sekn.png'); 
   sekn2 = loadImage('assets/sekn1.png'); 
   jar1 = loadImage('assets/jar1.png');
   // button1 = createButton('カワウソ');
   // button1.position(550, 30);
   // button1.mousePressed(ch1);
   // button2 = createButton('吉甫ウソ');
   // button2.position(550, 85);
   // button2.mousePressed(ch2);
   // button3 = createButton('セクシーウソ');
   // button3.position(534, 140);
   // button3.mousePressed(ch3);
   button4 = createButton('knock');
   button4.position(550, 40);
   button4.mousePressed(kn);
   button5 = createButton('close');
   button5.position(550, 100);
   button5.mousePressed(clo);
}
function ch1() {
  x = 1;
  knock = 0;
  close = 0;
}
function ch2() {
  x = 2;
  knock = 0;
  close = 0;
}
function ch3() {
  x = 3;
  knock = 0;
  close = 0;
}
function kn() {
  if(knock<5){
    knock = knock+1;
    }
  else{
    knock = 4;
  }
}
function clo() {
  if(close < 3){
    close = close + 1;
    }
  else{
    close = 0;
  }
}
 function draw() {
 if(x == 1){
   if(close == 0){
   if(knock == 0){
  background(255,255,255);
  image(img1, 0, 0,img1.width / 6, img1.height / 6);
     }
   else if(knock == 1){
     background(255,255,255);
  image(img2, 0, 0,img2.width / 6, img2.height / 6); 
           }
   else if(knock == 2){
     background(255,255,255);
  image(img3, 0, 0,img3.width / 6, img3.height / 6);
   }
   else if(knock == 3){
     background(255,255,255);
  image(img4, 0, 0,img4.width / 6, img4.height / 6);
   }
   else if(knock == 4){
     background(255,255,255);
  image(norkn1, 0, 0,norkn1.width / 6, norkn1.height / 6);
  image(norkn2, 0, 0,norkn2.width / 6, norkn2.height / 6);
     knock = knock+1;
   }
   else{
     background(255,255,255);
     image(norkn1, 0, 0,norkn1.width / 6, norkn1.height / 6);
   }
     }
   if(close == 1){
    background(255,255,255);
    image(norbk, 0, 0,norbk.width / 6, norbk.height / 6);
    image(norclo, 70, 0,norclo.width / 6, norclo.height / 6);
   }
   if(close == 2){
    background(255,255,255);
    image(norbk, 0, 0,norbk.width / 6, norbk.height / 6);
    image(norclo, 30, 0,norclo.width / 4, norclo.height / 4);
   }
   if(close == 3){
    background(255,255,255);
    image(norbk, 0, 0,norbk.width / 6, norbk.height / 6);
    image(norclo, 0, 0,norclo.width / 2, norclo.height / 2);
   }
   }
 if(x == 2){
   if(close == 0){
   if(knock == 0){
     background(255,255,255);
  image(img5, 0, 0,img5.width / 6, img5.height / 6);
     }
   else if(knock == 1){
     background(255,255,255);
  image(img6, 0, 0,img6.width / 6, img6.height / 6); 
           }
   else if(knock == 2){
     background(255,255,255);
  image(img7, 0, 0,img7.width / 6, img7.height / 6);
   }
   else if(knock == 3){
     background(255,255,255);
  image(chibk, 0, 0,chibk.width / 6, chibk.height / 6);
  image(img8, 0, 70,img8.width / 6, img8.height / 6);
   }
   else if(knock == 4){
     z = random(30);
     y = random(300);
     u = random(300);
  image(img8, y, u,img8.width / z, img8.height / z ,z);
  image(chikn1, 6, 89,chikn1.width / 6, chikn1.height / 6);
  image(chikn2, 6, 89,chikn2.width / 6, chikn2.height / 6);
     knock = knock+1;
   }
   else{
     image(chikn1, 6, 89,chikn1.width / 6, chikn1.height / 6);
   }
   }
   if(close == 1){
    background(255,255,255);
    image(chibk, 0, 0,chibk.width / 6, chibk.height / 6);
    image(chiclo, 70, 0,norclo.width / 6, norclo.height / 6);
   }
   if(close == 2){
    background(255,255,255);
    image(chibk, 0, 0,chibk.width / 6, chibk.height / 6);
    image(chiclo, 30, 0,chiclo.width / 4, chiclo.height / 4);
   }
   if(close == 3){
    background(255,255,255);
    image(chibk, 0, 0,chibk.width / 6, chibk.height / 6);
    image(chiclo, 0, 10,chiclo.width / 2, chiclo.height / 2);
   }
   }
   if(x == 3){
     if(close == 0){
   if(knock == 0){
     background(255,255,255);
  image(img9, 0, 0,img9.width / 6, img9.height / 6);
     }
   else if(knock == 1){
     background(255,255,255);
  image(img10, 0, 0,img10.width / 6, img10.height / 6); 
           }
   else if(knock == 2){
     background(255,255,255);
  image(img11, 0, 0,img11.width / 6, img11.height / 6);
   }
  else if(knock == 3){
    background(255,255,255);
  image(img12, 0, 0,img12.width / 6, img12.height / 6);
   }
  else if(knock == 4){
    background(255,255,255);
  image(sekn2, 0, 0,sekn2.width / 6, sekn2.height / 6);
  image(sekn1, 0, 0,sekn1.width / 6, sekn1.height / 6);
     knock = knock+1;
   }
   else{
     background(255,255,255);
     image(sekn2, 0, 0,sekn2.width / 6, sekn2.height / 6);
   }
   }
    if(close == 1){
    background(255,255,255);
    image(sebk, 0, 0,sebk.width / 6, sebk.height / 6);
    image(seclo, 70, 0,seclo.width / 6, seclo.height / 6);
   }
     if(close == 2){
    background(255,255,255);
    image(sebk, 0, 0,sebk.width / 6, sebk.height / 6);
    image(seclo, 30, 0,seclo.width / 4, seclo.height / 4);
   }
   if(close == 3){
    background(255,255,255);
    image(sebk, 0, 0,sebk.width / 6, sebk.height / 6);
    image(seclo, 0, 0,seclo.width / 2, seclo.height / 2);
   }
     }
 }