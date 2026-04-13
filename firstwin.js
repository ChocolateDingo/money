function preload() {

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  myFont = loadFont('Jersey10.ttf'); 

  const linkElement = document.getElementById('myThirdExistingLink');
linkElement.href = 'secondgamesetup.html';
linkElement.textContent = 'NEXT';
linkElement.style.fontFamily = 'Jersey10';
linkElement.style.fontSize = '100px';
linkElement.style.color = '#FFEB3B';
linkElement.style.textAlign = 'center';
linkElement.style.position = 'absolute';
linkElement.style.left = '50%';
linkElement.style.top = '85%';
linkElement.style.transform = 'translate(-50%, -50%)';
linkElement.style.textDecoration = 'none';
  
}


function draw() {
  background('#000000');
  textSize(120);
  textFont (myFont);
  textAlign (CENTER);
  fill(255);
  text('CONGRATULATIONS,', windowWidth/2, windowHeight/3.5);
  
  textSize(120);
  textFont (myFont);
  textAlign (CENTER);
  fill(255);
  text('YOU GOT YOUR', windowWidth/2, windowHeight/2.65);

  textSize(100);
  textFont (myFont);
  textAlign (CENTER);
  fill('#FFEB3B');
  text('1P', windowWidth/20, windowHeight/11);
  
   textSize(120);
  textFont (myFont);
  textAlign (CENTER);
  fill(255);
  text('BACK', windowWidth/2, windowHeight/1.40);
  
   textSize(300);
  textFont (myFont);
  textAlign (CENTER);
  fill('#4CAF50');
  text('$XXX', windowWidth/2, windowHeight/1.65);
  
  textSize(100);
  textFont (myFont);
  textAlign (CENTER);
  fill('#FFEB3B');
  fill('#4CAF50');
  text('$000', windowWidth/1.07,windowHeight/11); 
  
  
  
}
