Status  = "";
objects = "";


function setup(){
canvas = createCanvas(380,380);
canvas.center();
video = createCapture(VIDEO);
video.hide();
video.size(380,380);
objectDetector = ml5.objectDetector("cocossd" , ModelLoaded);
document.getElementById("status").innerHTML= "status:detecting objects";


}

img="";


function preload(){
img=loadImage("dog_cat.jpg");
}

function draw(){
image(video,0,0,380,380);
objectDetector.detect(video,gotresults);
if(Status != ""){
r = random(255);
g = random(255);
b = random(255);

   objectDetector.detect(video,gotresults);
for(i = 0; i < objects.length; i++)
{
   
document.getElementById("status").innerHTML = "Status:Object detected";
document.getElementById("no_of_objects").innerHTML = "number of objects detected are: " + objects.length;
fill(r,g,b);
percent = floor(objects[i].confidence*100);
text(objects[i].label + "" + percent + "%",objects[i].x + 15,objects[i].y + 15);
noFill();
stroke(r,g,b);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);


}
}

}

function ModelLoaded(){
console.log("model has been printed");
Status = true;




}


function gotresults(error,results){
if(error){
console.log(error);
}
console.log(results);

objects = results;
}


