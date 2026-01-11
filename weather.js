let clouds = [];
let rain = [];


function generateClouds() {
  clouds = [];

  for (let i = 0; i < 5; i++) {
    clouds.push(new Cloud(
      random(0.2, 0.8),
      random(0.1, 0.4),
      0.12,
      0.07
    ));
  }
}

function generateRain() {
  rain = [];
  for (let i = 0; i < 250; i++) {
    rain.push(new Raindrop(random(width), random(-200, 0), random(10, 20), rainImg));
  }
}



function drawClouds() {
  //  console.log("draw clouds:", clouds.length);

  for (let c of clouds) {
    c.draw();
  }
}

function drawRain() {
  for (let r of rain) {
    r.update();
    r.draw();
  }
}

function drawGrass(r, g, b) {
  fill(r, g, b); // zelena
  noStroke();
  rect(0, height * 0.75, width, height * 1);
}

function drawSunnyWeather() {
  background(135, 206, 235); // modrá obloha

  //slunce
  sun.draw();
  //mraky
  drawClouds();

  //trava
  drawGrass(50, 200, 50);
}



function drawCloudyWeather() {
  background(200);
  drawClouds();

  //trava
  drawGrass(38, 122, 38);
}

function drawRainyWeather() {
  background(120, 130, 140);
  drawGrass(30, 120, 30);
  drawRain();

}

/*function drawSnowyWeather() {

}*/