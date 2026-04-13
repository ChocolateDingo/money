score = 0;

function preload() {

}

function setup() {

  let savedScore = getItem('gameScore');

  if (savedScore !== null) {
    score = savedScore;
  }

  createCanvas(windowWidth, windowHeight);
  myFont = loadFont('Jersey10.ttf'); 

  img = loadImage('game2.png');

  
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
  text('$' + score, windowWidth/1.07,windowHeight/11); 
  
  
  
}
