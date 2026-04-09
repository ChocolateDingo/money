function preload() {

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  myFont = loadFont('Jersey10.ttf'); 

  img = loadImage('game2setup.png');

  
}


function draw() {
  background(img);

  textSize(100);
  textFont (myFont);
  textAlign (CENTER);
  fill('#FFEB3B');
  text('1P', windowWidth/20, windowHeight/11);
  
  textSize(100);
  textFont (myFont);
  textAlign (CENTER);
  fill('#FFEB3B');
  fill('#4CAF50');
  text('$000', windowWidth/1.07,windowHeight/11); 
  
  
  
}
