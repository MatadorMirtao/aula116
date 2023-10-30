noseX=0;
noseY=0;

function preload() {
  clownNose = loadImage('Imagem-Bigode-PNG-1024x576.png')
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet foi inicializado');
}

function gotPoses(results) {
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-34;
    noseY = results[0].pose.nose.y-13;
    }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clownNose, noseX, noseY, 66, 66);
}

function takeSnapshot(){    
  save('myFilterImage.png');
}