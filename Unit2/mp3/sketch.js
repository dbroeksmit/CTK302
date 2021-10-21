let cars = [];
let maxCars = 15 ;
let timer = 0 ;
let state = 0 ;
let hoop ;
let frogPos;
let basketball ;
let score = 0 ;
let bg ;
let f1 ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER) ;
  f1 = loadFont ("assets/SCOREBOARD.ttf") ;
  hoop = loadImage("assets/whitehoop.png") ;
  basketball = loadImage("assets/basketball.png") ;
  bg = loadImage("assets/background.jpg") ;
  // Spawn many objects

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 70);
}

function draw() {

  switch(state) {

    case 0 : // welcome
      background('red') ;
      textFont(f1) ;
      textSize (28);
      fill ('white');
      text ("welcome", width/2, height/2) ;
      break ;

      case 1 : // game state
        game() ;
        timer++ ;
      if (timer > 10*60){
        timer = 0 ;
        state = 3 ;
      }

      if (score > 10) {stte = 2}
      break ;

      case 2 : // win state
      background ("green") ;
      textFont(f1) ;
      textSize (28);
      fill ('white');
      text("YOU WON", 100, 100) ;
      break ;

      case 3 : //lose state
      background ("blue") ;
      textSize (28);
      fill ('white');
      text ("YOU LOST", width/2, height/2) ;
      break ;

  }

}


function mouseReleased() {
  switch(state) {
    case 0 :
      state = 1 ;
      break ;

      case 2 : // they won
      resetTheGame() ;
      state = 0 ;
      break ;

      case 3 :
      resetTheGame() ;
      state = 0 ;
      break ;



  }

}



function game() {

  background('yellow') ;
  image(bg, width/2, height/2, width, height) ;
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1) ;
      score++;
    }
  }

    if (cars.length == 0) {
      state = 2 ;
    }

  image(hoop, frogPos.x, frogPos.y, 50, 50);
  checkForKeys() ;
  textSize(50);
  fill("white") ;
  text(score, width/2, 200);
}

function resetTheGame(){
  timer = 0 ;
  cars = [] ;

   // Spawn many objects

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}

// Car class
class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height-120));
    this.vel = createVector(random(-5, 5), random (-5,5)) ;
    this.cor = color(0, random(50, 100), random(190, 245), random(100));
    this.size = random(25, 50);
  }

  // methods

  display() {
    // rect(this.pos.x, this.pos.y, 75, 25);
    image(basketball, this.pos.x, this.pos.y, this.size, this.size);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
