let f1 ; f2;

function setup() {
  createCanvas(500, 500);
  f1= loadFont ("assets/BetterGrade.ttf") ;
  f2= loadFont("assets/HAPPYWINTER.ttf") ;
}

function draw() {
  background("yellow") ;
  textFont(f1) ;
  textSize(48) ;
  text("hello world", width/2, 100) ;

  textFont(f2) ;
  textSize(24) ;
  text("i like turtles", width/2, 100) ;

}
