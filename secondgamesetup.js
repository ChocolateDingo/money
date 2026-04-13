function preload() {

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  myFont = loadFont('Jersey10.ttf'); 

  img = loadImage('game2setup.png');

  const linkElement = document.getElementById('mySecondExistingLink');
linkElement.href = 'secondgame.html';
linkElement.textContent = 'NEXT';
linkElement.style.fontFamily = 'Jersey10';
linkElement.style.fontSize = '90px';
linkElement.style.color = '#FFEB3B';
linkElement.style.textAlign = 'center';
linkElement.style.position = 'absolute';
linkElement.style.left = '50%';
linkElement.style.top = '91%';
linkElement.style.transform = 'translate(-50%, -50%)';
linkElement.style.textDecoration = 'none';

  
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

  

  

 textSize(60);
  textFont(myFont);
  textAlign(CENTER);
  fill("#000000");
  text("CROSS THE STREET TO GET INTO THE BUILDING", windowWidth /2, windowHeight /10);


  
  
  
}
