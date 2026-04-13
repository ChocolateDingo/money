let clickCount = 0;
let score = 0;

function preload() {}
xpos = 1;
xspeed = 0;

xpos2 = 1;
xspeed2 = 0;

xpos3 = 1;
xspeed3 = 0;

xpos4 = 1;
xspeed4 = 0;

let img2;
let img3;
let img4;
let img5;
let img4WasClicked = false;
let img2WasClicked = false;
let img3WasClicked = false;
let img5WasClicked = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myFont = loadFont("Jersey10.ttf");

  let savedScore = getItem('gameScore');

  if (savedScore !== null) {
    score = savedScore;
  }


  img = loadImage("game1.png");
  img2 = loadImage("Drump.png");
  img3 = loadImage("Jezos2.png");
  img4 = loadImage("Bates.png");
  img5 = loadImage("Muckerberg.png");
}

function draw() {
  background(img);

  textSize(100);
  textFont(myFont);
  textAlign(CENTER);
  fill("#FFEB3B");
  text("1P", windowWidth / 20, windowHeight / 11);

  textSize(100);
  textFont(myFont);
  textAlign(CENTER);
  fill("#FFEB3B");
  fill("#4CAF50");
  text("$" + score, windowWidth / 1.07, windowHeight / 11);

  textSize(60);
  textFont(myFont);
  textAlign(CENTER);
  fill("#000000");
  text(
    "CLICK THE BILLIONARES TO GET RID OF THEM",
    windowWidth / 2,
    windowHeight / 10,
  );

  if (img4WasClicked == false) {
    image(img4, xpos, 600, 300, 300);
    if (xpos > 2) {
      xspeed = 2;
    }
    if (xpos < 2) {
      xspeed = 2;
    }
  }
  if (img5WasClicked == false) {
    image(img5, xpos2, 620, 300, 300);
    if (xpos2 > 2) {
      xspeed2 = 4;
    }
    if (xpos2 < 2) {
      xspeed2 = 4;
    }
  }

  if (img2WasClicked == false) {
    image(img2, xpos3, 500, 300, 300);
    if (xpos3 > 2) {
      xspeed3 = 0.5;
    }
    if (xpos3 < 2) {
      xspeed3 = 0.5;
    }
  }

  if (img3WasClicked == false) {
    image(img3, xpos4, 550, 300, 300);
    if (xpos4 > 2) {
      xspeed4 = 6;
    }
    if (xpos4 < 2) {
      xspeed4 = 6;
    }
  }

  xpos += xspeed;
  xpos2 += xspeed2;
  xpos3 += xspeed3;
  xpos4 += xspeed4;
}


function mousePressed() {
  if (
    mouseX > 1 && //if the mouse is greather than 200 we're over the image
    mouseX < 1000 && //if the mouse is less than 300 were over the image (since the image is at 200 and is 100 wide = 300)
    mouseY > 1 && //same idea but on the vertical axis.
    mouseY < 500
  ) {
    img2WasClicked = true;
  }
  if (
    mouseX > 1000 && //if the mouse is greather than 200 we're over the image
    mouseX < 2000 && //if the mouse is less than 300 were over the image (since the image is at 200 and is 100 wide = 300)
    mouseY > 1 && //same idea but on the vertical axis.
    mouseY < 500
  ) {
    img3WasClicked = true;
  }
  if (
    mouseX > 1000 && //if the mouse is greather than 200 we're over the image
    mouseX < 2000 && //if the mouse is less than 300 were over the image (since the image is at 200 and is 100 wide = 300)
    mouseY > 500 && //same idea but on the vertical axis.
    mouseY < 1000
  ) {
    img4WasClicked = true;
  }
  if (
    mouseX > 1 && //if the mouse is greather than 200 we're over the image
    mouseX < 1000 && //if the mouse is less than 300 were over the image (since the image is at 200 and is 100 wide = 300)
    mouseY > 500 && //same idea but on the vertical axis.
    mouseY < 1000
  ) {
    img5WasClicked = true;
  }

  clickCount++;

  if (clickCount >= 4) {
    window.location.href = "firstwin.html";
  }

   score ++;
  storeItem('gameScore', score);
}

