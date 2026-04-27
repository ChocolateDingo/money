let Score = 0;

function preload() {

}

function setup() {
let savedScore = sessionStorage.getItem("gameScore");

  if (savedScore !== null) {
    score = Number(savedScore);
  } else {
    score = 0;
  }

  createCanvas(windowWidth, windowHeight);
  myFont = loadFont('Jersey10.ttf'); 

  const linkElement = document.getElementById('myFourthExistingLink');
linkElement.href = 'thirdgame.html';
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
  text('YOU CROSSED THE STREET', windowWidth/2, windowHeight/2.65);

  textSize(120);
  textFont (myFont);
  textAlign (CENTER);
  fill(255);
  text('WITH YOUR', windowWidth/2, windowHeight/2.15);

  textSize(100);
  textFont (myFont);
  textAlign (CENTER);
  fill('#FFEB3B');
  text('1P', windowWidth/20, windowHeight/11);
  
   textSize(120);
  textFont (myFont);
  textAlign (CENTER);
  fill(255);
  text('', windowWidth/2, windowHeight/1.40);
  
   textSize(300);
  textFont (myFont);
  textAlign (CENTER);
  fill('#4CAF50');
  text('$' + score, windowWidth/2, windowHeight/1.4);
  
  textSize(100);
  textFont (myFont);
  textAlign (CENTER);
  fill('#FFEB3B');
  fill('#4CAF50');
  text('$' + score, windowWidth/1.07,windowHeight/11); 
  
  
  
}
