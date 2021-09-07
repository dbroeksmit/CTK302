function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  ellipseMode(CENTER);

}



function draw() {

  background(100)



  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed




               //sky
      fill ("blue")
      rect(300, 500, 600, 1000);


             //grass
      fill ("green");
      rect (0, 600, 2000, 400);

      //building
      fill ("silver")
      rect (100, 325, 75, 150);


             //right building
            fill ("silver")
      rect(500, 325, 75, 150);


          fill("yellow")
          rect("20, 200, 200, 200");


           //body
          fill ("yellow")
      rect(300, 200, 100, 175);


         //rocket
        fill("red")
        rect (280, 400, 20, 20);

              //rocket
        fill("red")
        rect (320, 400, 20, 20);

              fill("black")
      rect (300, 180, 20, 50);


              //head
               fill("black")
      circle(300, 110, 50, 50)

         //leg
    fill("black")
      rect (320, 340, 20, 100);

       //leg
      fill("black")
      rect (280, 340, 20, 100);

           //forearm
      fill("black")
      rect (200, 100, 20, 100);


           //forearm
      fill("black")
      rect (400, 100, 20, 100);



          //tricep
             fill("black")
      rect (220, 150, 60, 20);

             //tricep
             fill("black")
      rect (380, 150, 60, 20);




  } else {
    // when the mouse isn't pressed!

      //sky
      fill ("orange")
      rect(300, 500, 600, 1000);

                  //building
      fill ("silver")
      rect(100, 350, 75, 300);


             //right building
            fill ("silver")
      rect(500, 350, 75, 300);

      //body
      fill ("yellow")
      rect(300, 400, 100, 350);

      //grass
      fill ("green");
      rect (0, 600, 2000, 400);

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



  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}

 






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
