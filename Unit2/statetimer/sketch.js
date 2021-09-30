let state = 0;
let timer = 0 ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);




  switch (state) {
    case 0:
      background("black");
      text("state 0", 100, 100);

      for (var j = 0; j <= height; j += 20) {
        for (var i = 0; i <= width; i += 20) {
          rect(i, j, 5, 5);
        }
      }

      break;

    case 1:
      background("yellow");
      text("state 1", 100, 100);

      for (var j = 0; j <= height; j += 20) {
        for (var i = 0; i <= width; i += 20) {
          ellipse(i, j, 10, 10);
        }
      }

      break;

    case 2:
      background("blue");
      text("state 2", 100, 100);

      for (var j = 0; j <= height; j += 20) {
        for (var i = 0; i <= width; i += 20) {
          triangle(i, j, 10, 10);
        }
      }

      break;

    case 3:
      background("purple");
