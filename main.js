song = "";
leftWristX = 0;
leftWristY = 0;


function preload()
{
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreleftWrist);

        leftWrist = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);
        
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(leftWristX, leftWristY)

    fill("#FF7598");
    stroke("FF7386");

    if(scoreLeftWrist > 0.2)
    {

        circle(leftWristX,leftWristY,20);

        if(leftWristY >0 && leftWristY <= 100)
        {
        document.getElementById("speed").innerHTML = "Speed = 0.5x";
        song.rate(0.5);
        }
        else if(leftWristY >100 && leftWristY <= 200)
        {
        document.getElementById("speed").innerHTML = "Speed = 1x";
        song.rate(1);
        }
        else if(leftWristY >200 && leftWristY <= 300)
        {
        document.getElementById("speed").innerHTML = "Speed = 1.5x";
        song.rate(1.5);
        }
        else if(leftWristY >300 && leftWristY <= 400)
        {
        document.getElementById("speed").innerHTML = "Speed = 2x";
        song.rate(2);
        }
        else if(leftWristY >400 && leftWristY <= 500)
        {
        document.getElementById("speed").innerHTML = "Speed = 2x";
        song.rate(2);
        if(scoreLeftWrist > 0.2)
        {
        circle(leftWristX, leftWristY, 20);
        InNumberleftWristY = Number(leftWristY);
        remove_decimals = floor(InNumberleftWristY);
        volume = remove_decimals/500;
        document.getElementById("volume").innnerHTMl = "Volume = " + volume;
        song.setVolume(volume);
        }
        }
    }
function play()
{
   {if(leftWristY = (0,100))
   song.stop
   }
   song.play();
    song.setVolume(1);
    song.rate(1);
}
}