var canvas=document.getElementById("mycanvas1");
var ctx=canvas.getContext("2d");
var color="purple";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=6;
ctx.arc(200,200,40,0,360);
ctx.stroke();
canvas.addEventListener("mousedown",mousedownf);
function mousedownf(e){
    var mousex=e.clientX-canvas.offsetLeft;
    var mousey=e.clientY-canvas.offsetTop;
    circle(mousex,mousey);
}
    function circle(){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=6;
ctx.arc(200,200,40,0,360);
ctx.stroke();
    }

