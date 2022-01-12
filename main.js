random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1);
elementarray= quick_draw_data_set[random_no];
console.log(elementarray);
random_sketchname=elementarray;
document.getElementById("sketch").innerHTML='Sketch to be drawn :'+random_sketchname;
time_counter=0;
timecheck="";
drawn_sketch="";
answer_holder="";
score=0;
function preload()
{
    classifier=ml5.imageClassifier('DoodleNet');
}
function setup()
{
    canvas=createCanvas(280,280);
    canvas.center();  
    background("white");
    canvas.mouseReleased(classifyCanvas);
}
function update_canvas()
{
    background("white");
}
function draw()
{
    strokeWeight(10);
    stroke(0);
    if (mouseIsPressed)
    {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    check_sketch();
    if (drawn_sketch == sketch)
    {
        answer_holder="set";
        score++;
        document.getElementById("score").innerHTML="Score : "+score;
    }
}
function classifyCanvas()
{
    classifier.classify(canvas, gotResults);
}
function check_sketch()
{
    time_counter++;
    document.getElementById("timer").innerHTML="Timer : "+time_counter;
    console.log(time_counter);
    if (time_counter > 400)
    {
        time_counter=0;
        timecheck="completed";
    }
    if(timecheck == "completed" || answer_holder=="set");
    {
        timecheck="";
        answer_holder="";
        update_canvas();
    }
}