let cells = [];
let cellsd = [];
let w = 15;
let y = 300;
let m = 0;
let x1 = [], y1 = [], d = [], f1 = [], f2 = [], f3 = [];
function setup() {
  createCanvas(600, 600);
 
  let total = width / w;
  for (let i = 0; i < total; i++) {
    cells[i] = 1;
  }
  cellsd = cells;
 
  for (let i = 0; i<10; i++){
  x1[i] = random(0,600);
  y1[i] = random(0,600);
  d[i] = random(50,100);
  f1[i] = random(0,255);
  f2[i] = random(0,255);
  f3[i] = random(0,255);
 
  }
  background(155,60,240);
}

function draw() {
  frameRate(20);
 
  if(m < 400 || m > 560){
   background(155,70,240);
    for (let i = 0; i<10; i++){
    noStroke();
    fill(f1[i],f2[i],f3[i]);
    circle((int)(x1[i]+random(-5,5)),(int)(y1[i]+random(-5,5)),(int)(d[i]+random(-3,3)));
  }
  }
  else{
  background(155,70,240);
   for (let i = 0; i<10; i++){
    noStroke();
    fill(f2[i],f1[i],f3[i]);
    circle((int)(x1[i]+random(-5,5)),(int)(y1[i]+random(-5,5)),(int)(d[i]+random(-3,3)));
  }
  }
 
  if(m >= 2080){
  for (let i = 0; i < cells.length; i++) {
    let x = i * (1*w) + 7;
    noStroke();
    fill(cells[i] * 255, 120, 100);
    circle(x, y, w);
    fill(255);
    if(cells[i] > 0.5){
      h = 'u';
    }
    else
      h = 'n';
    text(h ,x-4, y+4);
  }
   
  m++;
  let nextCells = [];

  let len = cells.length;
  for (let i = 0; i < len; i++) {
    if(random(0,1) < 0.9)
    nextCells[i] = cells[i]+random(-1,1);
    else
    nextCells[i] = cells[i];
  }

  if(m < 2400|| m > 2480 )
  cells = nextCells;
  else
  cells = cellsd;
}
 
 
  else{
    if(m < 2000){
    for (let i = 0; i < cells.length; i++) {
      let x = i * (1*w) + 7;
      noStroke();
      fill(255);
      circle(x, y, w);
      m++;
      }
    }
    else if(m < 2050) {
      noStroke();
      fill(1 * 255, 120, 100);
      circle(300, y, 20);
      fill(255);
      text('u',300-4, y+4);
      m++;
    }
    else if(m < 2080) {
      noStroke();
      fill(0 * 255, 120, 100);
      circle(300, y, 20);
      fill(255);
      text('n',300-4, y+4);
      m++;
    }
  }
  console.log(m);
}
