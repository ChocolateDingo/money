function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  myFont = loadFont("Jersey10.ttf");

  const linkElement = document.getElementById("myExistingLink");
  linkElement.href = "firstgame.html";
  linkElement.textContent = "START";
  linkElement.style.fontFamily = "Jersey10";
  linkElement.style.fontSize = "90px";
  linkElement.style.color = "#FFEB3B";
  linkElement.style.textAlign = "center";
  linkElement.style.position = "absolute";
  linkElement.style.left = "50%";
  linkElement.style.top = "60%";
  linkElement.style.transform = "translate(-50%, -50%)";
  linkElement.style.textDecoration = "none";
}

function draw() {
  background(220);
  background("#000000");

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

  textSize(200);
  textFont(myFont);
  textAlign(CENTER);
  text("CASH GRAB", windowWidth / 2, windowHeight / 2);
  fill(255);
}
