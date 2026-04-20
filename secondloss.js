let score = 0;

function preload() {

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  myFont = loadFont('Jersey10.ttf'); 

let savedScore = getItem('gameScore');

  if (savedScore !== null) {
    score = savedScore;
  }

  img = loadImage('game2setup.png');

  const linkElement = document.getElementById('myFifthExistingLink');
linkElement.href = 'index.html';
linkElement.textContent = 'START OVER';
linkElement.style.fontFamily = 'Jersey10';
linkElement.style.fontSize = '90px';
linkElement.style.color = '#FFEB3B';
linkElement.style.textAlign = 'center';
linkElement.style.position = 'absolute';
linkElement.style.left = '50%';
linkElement.style.top = '71%';
linkElement.style.transform = 'translate(-50%, -50%)';
linkElement.style.textDecoration = 'none';

  
}


function draw() {
  background("#000000");
  textSize(120);
  textFont(myFont);
  textAlign(CENTER);
  fill(255);
  text("YOU GOT HIT BY A TAXI", windowWidth / 2, windowHeight / 3.6);

  textSize(120);
  textFont(myFont);
  textAlign(CENTER);
  fill(255);
  text("AND LOST YOUR", windowWidth / 2, windowHeight / 2.68);

  textSize(100);
  textFont(myFont);
  textAlign(CENTER);
  fill("#FFEB3B");
  text("1P", windowWidth / 20, windowHeight / 11);

  textSize(300);
  textFont(myFont);
  textAlign(CENTER);
  fill("#4CAF50");
  text("$" + score, windowWidth / 2, windowHeight / 1.65);

  textSize(100);
  textFont(myFont);
  textAlign(CENTER);
  fill("#FFEB3B");
  fill("#4CAF50");
  text("$000", windowWidth / 1.07, windowHeight / 11);
}

  
  
