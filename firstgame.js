function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  myFont = loadFont("Jersey10.ttf");

  img = loadImage("game1.png");
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
  text("$000", windowWidth / 1.07, windowHeight / 11);

  textSize(60);
  textFont(myFont);
  textAlign(CENTER);
  fill("#000000");
  text("CLICK THE BILLIONARES TO GET RID OF THEM", windowWidth /2, windowHeight /10);



}
