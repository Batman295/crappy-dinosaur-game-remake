let unicorn;
let uImg;
  let tImg;
  let bImg;
let trains = [];
let soundClassifier;

function preload(){
  const options={probablityThreshold:0.95};
  soundClassifier=ml5.soundClassifier("SpeechCommands18w",options);
uImg = loadImage('unicorn.png');
tImg = loadImage('train.png');
  bImg = loadImage('background.jpg');
  
}

function setup() {
  createCanvas(800, 450);
  unicorn = new Unicorn();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results){
if(error){
console.error(error);
}
console.log(results[0].label,results[0].confidence)
if (results[0].label=='up'){
unicorn.jump();
}
}


function keyPressed() {
if (key == ' ') {
unicorn.jump();
}
}

function draw() {
  if (random(1)<0.005) {
  trains.push(new Train());    
  }
  background(bImg);  
  unicorn.show();
  unicorn.move();
  
for (let t of trains){
  t.move();
  t.show();
  if (unicorn.hits(t)){
    console.log("GAME OVER");
    noLoop();
  }
}
  
  
}  
