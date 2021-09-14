let x = 0 ;

// Reed Cavi's Rain Man

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  ellipseMode(CENTER); 
}

function draw() {

push() ;
translate(x, 0) ;
avatar() ;
pop() ;

x=x+3 ;
if (x>width){
  x=-200 ;
}

}

function avatar() {



  background(100);
  //body
  //body
fill ("yellow")
rect(300, 325, 100, 150);


    fill("black")
    rect (300, 300, 20, 50);

    fill("black")
    circle(300, 230, 50, 50);


    fill("black")
    rect (320, 450, 20, 100);

    fill("black")
    rect (280, 450, 20, 100);

    fill("black")
    rect (200, 280, 100, 20);


    fill("black")
    rect (400, 280, 100, 20);
}
