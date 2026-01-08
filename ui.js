function changeCanvasSize(width, height) {
    canvasWidth = width;
    canvasHeight = height;
    resizeCanvas(canvasWidth, canvasHeight);
}

function canvasSizeControl() {

    let smallBtn = createButton("800 × 600");
    smallBtn.position(20, windowHeight - 60);
    smallBtn.size(120, 40);
    smallBtn.mousePressed(() => changeCanvasSize(800, 600));

    let hdBtn = createButton("1280 x 720");
    hdBtn.position(160, windowHeight - 60);
    hdBtn.size(120, 40);
    hdBtn.mousePressed(() => changeCanvasSize(1280, 720));

    /* let fullBtn = createButton("1920 × 1080");
     fullBtn.position(320, height + 20);
     fullBtn.size(160, 40);
     fullBtn.mousePressed(() => changeCanvasSize(1920, 1080));
     */
}

function weatherControl() {
    let yPos = windowHeight - 110;

    let sunnyBtn = createButton("Slunečno");
    sunnyBtn.position(20, yPos);
    sunnyBtn.size(120, 40);
    sunnyBtn.mousePressed(() => {
        weather = "sunny";
        sun = new Sun();
        generateClouds();
    });


    let cloudyBtn = createButton("Zataženo");
    cloudyBtn.position(160, yPos);
    cloudyBtn.size(120, 40);
    cloudyBtn.mousePressed(() => {
        weather = "cloudy"
        generateClouds();
    });


    let rainBtn = createButton("Deštivo");
    rainBtn.position(300, yPos);
    rainBtn.size(120, 40);
    rainBtn.mousePressed(() => {
        weather = "rainy"
        generateRain();
    });


    /*  let snowBtn = createButton("Sněží");
      snowBtn.position(440, yPos);
      snowBtn.size(120, 40);
      snowBtn.mousePressed(() => weather = "snowy");*/
}