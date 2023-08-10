function setup() {
    video = createCapture(VIDEO);
    video.size(50, 50);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses); //supongo que esto es inicializar posenet 🧍‍♂️
}

function gotPoses(results) {
    if(results.length > 0)
    {leftWristX = result[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWrist;

        console.log("leftWristX = " + leftWristX + "tightWristX = " + rightWristX + "difference = " + difference);
        //no sabia que tenia que poner aqui perdon 😭
   }
}

function draw(){
    background('ccff99');
    textsize('20px');
    fill('ccff99');
    text('Carmina', 20, 100);
}
