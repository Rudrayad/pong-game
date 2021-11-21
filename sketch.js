class paddle{
  constructor(){
    this.x=0;
    this.y=0;
    this.height=0;
    this.width=0;
    this.radius=10;
    
  }
  display(){
    rect(this.x,this.y,this.height,this.width);
    
  }
  show(){
    circle(this.x,this.y,this.radius);
  }
}
var playerpaddle;
var computerpaddle;
var ball;
function setup() {
  createCanvas(400, 400);
  playerpaddle=new paddle;
  playerpaddle.x=380;
  playerpaddle.height=10,
  playerpaddle.width=100;
  
  computerpaddle=new paddle;
  computerpaddle.x=10;
  computerpaddle.y=170;
  computerpaddle.height=10;
  computerpaddle.width=100;

  ball=new paddle;
  ball.x=200;
  ball.y=200;
  
}

function draw() {
  background("white");
  playerpaddle.y=mouseY;
  playerpaddle.display();
  //rect(390, mouseY, 10, 70);
  computerpaddle.display();
  //rect(0,160,10,100);
  ball.show();
  //rect(185,185,10,10);
}