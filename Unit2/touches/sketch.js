let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
  halloween = loadImage("assets/halloween.jpg") ;
  shrug = loadImage("assets/shrug.jpg") ;
  squid = loadImage("assets/squid.jpg") ;
  dude = loadImage("assets/dude.jpg") ;
  imageMode(CENTER) ;

}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      image(halloween, width/2, height/2, 200, 200) ;
      text("halloween is coming up", 5, 22) ;
      break ;

      case 1:
      // image()
       text("im not sure what i wanna be", 5, 22) ;
       image(shrug, width/2, height/2, 200, 200) ;
      break ;

      case 2:
      // (image)
      text("maybe one of the guards from squid games", 5, 22) ;
      image(squid, width/2, height/2, 200, 200) ;
      break ;

      case 3:
      // image()
     text("or the dude from The Big Lebowski", 5, 22) ;
     image(dude, width/2, height/2, 200, 200) ;
      break ;


  }

}
