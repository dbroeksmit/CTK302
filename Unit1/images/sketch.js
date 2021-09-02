let camera, cooking, pen ;

function setup() {
  createCanvas(500, 500);
  camera = loadImage("assets/camera.jpg") ;
  cooking = loadImage("assets/cooking.jpg") ;
  pen = loadImage("assets/pen.jpg") ;
  imageMode(CENTER) ;

}

function draw() {
  background('green');
  image(camera, width/2, height/2, 100, 100) ;
  image(cooking, width/2, height/2-120, 100, 100) ;
  image(pen, width/2, height/2+120, 100, 100) ;

}
