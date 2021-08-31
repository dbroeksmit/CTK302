var f1 ;

function setup() {
  createCanvas(500, 500);
  f1= loadFont ("assets/BetterGrade.ttf") ;
}

function draw() {
  background("yellow") ;
  textFont(f1) ;
  textSize(48) ;
  text("hellow world", 100, 100) ;

}
