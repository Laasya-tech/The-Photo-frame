function preload()
{

}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(350,300)
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video , 0 , 0 , 300 , 300);
    tint(tint_color);
}

function take_snapshot()
{
    save('student_name.png')
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}  