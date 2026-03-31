function preload() {

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  myFont = loadFont('Jersey10.ttf'); 

  
}


function draw() {
  background('#000000');
  textSize(120);
  textFont (myFont);
  textAlign (CENTER);
  fill(255);
  text('YOURE OUT OF LIVES', windowWidth/2, windowHeight/3.4);
  
  textSize(120);
  textFont (myFont);
  textAlign (CENTER);
  fill(255);
  text('AND ONLY GOT YOUR', windowWidth/2, windowHeight/2.55);

  textSize(100);
  textFont (myFont);
  textAlign (CENTER);
  fill('#FFEB3B');
  text('1P', windowWidth/20, windowHeight/11);
  
   textSize(120);
  textFont (myFont);
  textAlign (CENTER);
  fill(255);
  text('BACK', windowWidth/2, windowHeight/1.45);

    textSize(120);
  textFont (myFont);
  textAlign (CENTER);
  fill('#FFEB3B');
  text('START OVER', windowWidth/2, windowHeight/1.1);
  
   textSize(300);
  textFont (myFont);
  textAlign (CENTER);
  fill('#4CAF50');
  text('$XXX', windowWidth/2, windowHeight/1.7);
  
  textSize(100);
  textFont (myFont);
  textAlign (CENTER);
  fill('#FFEB3B');
  fill('#4CAF50');
  text('$000', windowWidth/1.07,windowHeight/11); 
  
  
  
}
