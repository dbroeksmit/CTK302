let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
  dog = loadImage("assets/dog.jpg") ;
  bridge = loadImage("assets/bridge.jpg") ;
  sky = loadImage("assets/sky.jpg") ;
  building = loadImage("assets/building.jpg") ;
  imageMode(CENTER) ;

}

function draw() {
  clear();
  numberOfTouches = touches.length;
//  text(numberOfTouches + ' touches', 5, 10);


  switch(numberOfTouches) {
    case 0:
      image(dog, width/2, height/2, 200, 200) ;
      text("say hello to my puppy chico", 40, 62) ;
      textSize(20);
      break ;

      case 1:
      // image()
       text("i like to travel and take pictures of cool things like this bridge", 40, 62) ;
       image(bridge, width/2, height/2, 200, 200) ;
      break ;

      case 2:
      // (image)
      text("i also enjoy nature check out this sunset", 40, 62) ;
      image(sky, width/2, height/2, 200, 200) ;
      break ;

      case 3:
      // image()
     text("and lastly i enjoy architecture", 40, 62) ;
     image(building, width/2, height/2, 200, 200) ;
      break ;


  }

}
