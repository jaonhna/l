noseX=0;
noseY=0;

function preload() {
    hat = loadImage("earing.png")
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(200,170);
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    rightEarX = results[0].pose.rightEar.x;
    rightEarY = results[0].pose.rightEar.y;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  
  image( hat , rightEarX, rightEarY, 10, 30 )
}

function take_snapshot(){    
  save('myFilterImage.png');
}
