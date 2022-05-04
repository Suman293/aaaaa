image_show = "";
status3 = "";

function preload()
{
   image_show = loadImage("Canvas.jpg");

}

function setup() 
{
  canvas= createCanvas(600,500);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("status3").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
   console.log("Model Loaded!");
   status3 = true;
   objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
   if (error) {
       console.log(error);
   }
   console.log(results);
}

function draw()
{
   image(image_show,0, 0, 640, 420);
   fill("#FF0000");
   text("Windows and plants", 45, 75);
   noFill();
   stroke("#FF0000");
   rect(30, 60, 450, 350);

   fill("#FF0000");
   text("Bed", 320, 120);
   noFill();
   stroke("#FF0000");
   rect(300, 90, 270, 320);

}

