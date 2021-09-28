let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
    // image()
      text("halloween is coming up", 5, 22) ;
      break ;

      case 1:
      // image()
       text("im not sure what i wanna be", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      // (image)
      text("maybe one of the guards from squid games", 5, 22) ;
            // put a picture here
      break ;

      case 3:
      // image()
     text("or the dude from The Big Labowski", 5, 22) ;
            // put a picture here
      break ;


  }

}
