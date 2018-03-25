function setup() {
  angleMode(DEGREES);
  createCanvas(500,500);
  background(100);
  x = 0;
  y = 0;
}
function draw() {
varUpdate();
simpleClock();
arcClock();
//arrowClock();
}

function simpleClock() {
  background(100,100,100);
  fill(250);
  textSize(32);
  strokeWeight(5);
  stroke(0,0,0);
  text(hora +":"+ minuto +":"+ segundo,15,30,30);
}
var varUpdate = function(){
 hora = hour() % 12
 minuto = minute();
 segundo = second();
 milesima = millis();
  //console.log(hora +":"+ minuto +":"+ segundo);

  arcHora = map(hora,0,12,0,360);
  arcMinuto = map(minuto,0,60,0,360);
  arcSegundo = map(segundo,0,60,0,360);
  arcMilesima = map(milesima,0,1000,0,360);
  //console.log(arcSegundo);
}
function arrowClock(){
  console.log("Want som Arrows?");
  push();
  rotate(arcSegundo);
  stroke(0,0,250);
  line(x,y,x+100,y);//segundo
  pop();

  push();
  rotate(arcMinuto);
  stroke(0,250,0);
  line(x,y,x+75,y);//minuto
  pop()

  push()
  rotate(arcHora);
  stroke(250,0,0);
  line(x,y,x+50,y);//hora
  pop();
};

function arcClock() {
  translate(width/2,height/2);
  clockSize = 400;
  rotate(270);
  noFill();



  strokeWeight(6);
  stroke(250);
  arc(x,y,clockSize*1.2,clockSize*1.2,0,arcMilesima);//millis

  strokeWeight(20);
  stroke(0,0,250);
  arc(x,y,clockSize*1.1,clockSize*1.1,0,arcSegundo);//Segundo

  stroke(0,250,0);
  arc(x,y,clockSize,clockSize,0,arcMinuto);//minuto


  stroke(250,0,0);
  arc(x,y,clockSize*.9,clockSize*.9,0,arcHora);//horas

}
