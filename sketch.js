let weather = "sunny";
let canvasWidth = 1280;
let canvasHeight = 720;
let keys = {};
let rainImg;


let sun;
/*let clouds = [] ;
for (let i = 0; i < 5; i++) {
  clouds.push(new Cloud(random(canvasWidth), random(canvasHeight / 2)));
}*/

function preload() {
  rainImg = loadImage("./media/raindrop.svg");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  canvasSizeControl();
  weatherControl();
  generateClouds();
  generateRain(rainImg);
  sun = new Sun();

}



function draw() {

  switch (weather) {
    case "sunny":
      drawSunnyWeather();
      break;
    case "cloudy":
      drawCloudyWeather();
      break;
    case "rainy":
      drawRainyWeather();
      break;
   /* case "snowy":
      drawSnowyWeather();
      break;*/

    default:
      drawSunnyWeather();
  }
}