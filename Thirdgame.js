let score = 0;

function preload() {}

function setup() {
  let savedScore = sessionStorage.getItem("gameScore");

  if (savedScore !== null) {
    score = Number(savedScore);
  } else {
    score = 0;
  }

  createCanvas(windowWidth, windowHeight);
  myFont = loadFont("Jersey10.ttf");

  img = loadImage("room.png");
  img2 = loadImage("gold.png");
  img3 = loadImage("money2.png");
}

function draw() {
  background("#929292");

  image(img3, 0, 0, 200, 400);
  image(img3, 200, 0, 200, 400);
  image(img3, 400, 0, 200, 400);
  image(img3, 600, 0, 200, 400);
  image(img3, 800, 0, 200, 400);
  image(img3, 1000, 0, 200, 400);
  image(img3, 1200, 0, 200, 400);
  image(img3, 1400, 0, 200, 400);

  textSize(100);
  textFont(myFont);
  textAlign(CENTER);
  fill("#FFEB3B");
  text("1P", windowWidth / 20, windowHeight / 11);

  textSize(60);
  textFont(myFont);
  textAlign(CENTER);
  fill("#000000");
  text(
    "NOW TAKE AS MUCH MONEY AS YOUR HEART DESIRES",
    windowWidth / 2,
    windowHeight / 11,
  );

  textSize(80);
  textFont(myFont);
  textAlign(CENTER);
  fill("#FFEB3B");
  fill("#FFEB3B");
  text("$" + score, windowWidth / 1.085, windowHeight / 11);

  image(img3, 0, 500, 200, 400);
  image(img3, 200, 500, 200, 400);
  image(img3, 400, 500, 200, 400);
  image(img3, 600, 500, 200, 400);
  image(img3, 800, 500, 200, 400);
  image(img3, 1000, 500, 200, 400);
  image(img3, 1200, 500, 200, 400);
  image(img3, 1400, 500, 200, 400);

  image(img3, 0, 200, 200, 400);
  image(img3, 200, 200, 200, 400);
  image(img3, 400, 200, 200, 400);
  image(img3, 600, 200, 200, 400);
  image(img3, 800, 200, 200, 400);
  image(img3, 1000, 200, 200, 400);
  image(img3, 1200, 200, 200, 400);
  image(img3, 1400, 200, 200, 400);
}

function mousePressed() {
  if (
    mouseX > 0 && //if the mouse is greather than 200 we're over the image
    mouseX < 5000 && //if the mouse is less than 300 were over the image (since the image is at 200 and is 100 wide = 300)
    mouseY > 0 && //same idea but on the vertical axis.
    mouseY < 5000
  ) {
    score += 250;
    storeItem("gameScore", score);
  }
}
