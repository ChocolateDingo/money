function preload() {

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  myFont = loadFont('Jersey10.ttf'); 

  
}


function draw() {
  background(220);
  background('#000000');
  textSize(150);
  textFont (myFont);
  textAlign (CENTER);
  text('CASH GRAB', windowWidth/2, windowHeight/2);
  fill(255);

  textSize(100);
  textFont (myFont);
  textAlign (CENTER);
  fill('#FFEB3B');
  text('1P', windowWidth/20, windowHeight/11);
  
   textSize(80);
  textFont (myFont);
  textAlign (CENTER);
  fill('#FFEB3B');
  text('START', windowWidth/2, windowHeight/1.65);
  
  textSize(100);
  textFont (myFont);
  textAlign (CENTER);
  fill('#FFEB3B');
  fill('#4CAF50');
  text('$000', windowWidth/1.07,windowHeight/11); 
  
  
  
}
