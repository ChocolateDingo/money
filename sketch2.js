function preload() {

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  myFont = loadFont('Jersey10.ttf'); 

  
}


function draw() {
  background('#000000');
  textSize(80);
  textFont (myFont);
  textAlign (CENTER);
  fill(255);
  text('CONGRATULATIONS,', windowWidth/2, windowHeight/2.4);
  
  textSize(80);
  textFont (myFont);
  textAlign (CENTER);
  fill(255);
  text('YOU GOT YOUR', windowWidth/2, windowHeight/2);

  textSize(60);
  textFont (myFont);
  textAlign (CENTER);
  fill('#FFEB3B');
  text('1P', windowWidth/20, windowHeight/11);
  
   textSize(80);
  textFont (myFont);
  textAlign (CENTER);
  fill(255);
  text('BACK', windowWidth/2, windowHeight/1.2);
  
   textSize(150);
  textFont (myFont);
  textAlign (CENTER);
  fill('#4CAF50');
  text('$XXX', windowWidth/2, windowHeight/1.45);
  
  textSize(60);
  textFont (myFont);
  textAlign (CENTER);
  fill('#FFEB3B');
  fill('#4CAF50');
  text('$000', windowWidth/1.07,windowHeight/11); 
  
  
  
}
