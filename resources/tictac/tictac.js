let ball = {
  x: 0,
  y: 100,
  xs: 0,
  ys: 0,
  radius: 25
}

function setup(){
  createCanvas(400, 400);
    background(140, 40, 40);
}
function draw(){

  ball.xs += 0.01;
  ball.ys += 0.04;
  ball.x += ball.xs;
  ball.y += ball.ys;

  //leftwall
  if (ball.x < ball.radius){
    ball.x = ball.radius;
    ball.xs = abs(ball.xs);
    console.warn("left");
  }
  //topwall
  if(ball.y < ball.radius){
    ball.y = ball.radius;
    ball.ys = abs(ball.ys)
    console.warn("top");
  }

  //rightwall
  if(ball.x > 400 - ball.radius){
    ball.x = 400 - ball.radius;
    ball.xs = 0 - abs(ball.xs);
    console.warn("right");
  }

  //bottomwall
  if(ball.y > 400 - ball.radius){
    ball.y = 400 - ball.radius;
    ball.ys = 0 - abs(ball.ys);
    console.warn("bottom");
  }
  drawball(ball.x, ball.y);
}

function drawball(x, y){
  const shadowlen = 0;
  const diameter = 50;
  stroke(70, 0, 0);

  //shadow
  fill(70, 20, 20);
  ellipse(x + shadowlen, y + shadowlen, diameter, diameter);

  //Main ball
  fill(240, 240, 255);
  ellipse(x, y, diameter, diameter);
}
