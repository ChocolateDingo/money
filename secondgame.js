let Thief1;
let taxis = [];
let totalTaxis = 100;
let hitSnd;
let goalSnd;
let TaxiImg;
let ThiefImg;
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

  img = loadImage("game222.png");
  img2 = loadImage("thief.png");
  img3 = loadImage("taxi.png");

  Thief1 = new Thief();

  for (let i = 0; i < totalTaxis; i++) {
    taxis[i] = new Taxi(i);
  }
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

  for (let i = 0; i < totalTaxis; i++) {
    taxis[i].move();
    taxis[i].display();
    taxis[i].checkCollision();
  }

  Thief1.display();
  Thief1.checkOnscreen();
  if (Thief1.y <= 0) {
    window.location.href = "secondwin.html";
  }
}

class Taxi {
  constructor(i) {
    this.w = 175;
    this.h = 160;

    this.x = width + i * 300;

    let lanes = [
      height * 0.25,
      height * 0.4,
      height * 0.55,
      height * 0.7,
      height * 0.85,
      height * 1.0,
      height * 1.15,
      height * 1.3,
      height * 1.45,
      height * 1.6,
      height * 1.75,
    ];

    this.y = random(lanes);

    //this.speed = random(2, 5);
    this.speed = 5;
  }

  display() {
    image(img3, this.x, this.y, this.w, this.h);
  }

  move() {
    this.x -= this.speed;

    if (this.x < -this.w) {
      this.x = width + random(200, 500);
    }
  }

  checkCollision() {
    if (dist(this.x, this.y, Thief1.x, Thief1.y) < 80) {
      window.location.href = "secondloss.html";
    }
  }
}

class Thief {
  constructor() {
    this.w = 220;
    this.h = 220;
    this.x = width / 2.3;
    this.y = height / 0.5;
  }

  display() {
    image(img2, this.x, this.y, this.w, this.h);
  }

  checkOnscreen() {
    this.x = constrain(this.x, 0, width - this.w);
    this.y = constrain(this.y, 0, height - this.h);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    Thief1.x -= 75;
  }

  if (keyCode === RIGHT_ARROW) {
    Thief1.x += 75;
  }

  if (keyCode === UP_ARROW) {
    Thief1.y -= 75;
  }

  if (keyCode === DOWN_ARROW) {
    Thief1.y += 75;
  }

  score += 250;
sessionStorage.setItem("gameScore", score);

}
