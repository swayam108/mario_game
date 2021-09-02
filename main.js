function preload(){
	world_start=loadSound("world_start.wav");
   mario_jump=loadSound("jump.wav");
   mario_coin=loadSound("coin.wav");
   mario_gameOver=loadSound("gameover.wav");
   mario_dead=loadSound("mariodie.wav");
   mario_kick=loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}
function setup(){
   canvas=createCanvas(1240,336);
   canvas.parent('canvas');
   instializeInSetup(mario);
   video=createCapture(VIDEO);
   video.size(800,325);
   video.parent('game_Console')
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}
function draw(){
	game();
}
function modelLoaded(){
	console.log("model Loaded");
}
function gotPoses(results){
   if (results.length > 0) {
	   console.log(results);
	   nosex=results[0].pose.nose.x;
	   nosey=results[0].pose.nose.y;
   }
}