 var mouseevent="empty";
 var last_position_of_x, last_position_of_y;
 
 canvas=document.getElementById("mycanvas");
 ctx=canvas.getContext("2d");

 var color="black";
 width=1;

 canvas.addEventListener("mousedown", mymousedown);
  function mymousedown(e)
{
    mouseevent="MouseDown";
    console.log(mouseevent);

}
 canvas.addEventListener("mousemove", mymousemove);
 function mymousemove(e)
 {
    currentmousex=e.clientX - canvas.offsetLeft; 
    currentmousey=e.clientY - canvas.offsetTop;

   if (mouseevent=="MouseDown"){
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=width;
       ctx.moveTo(last_position_of_x,last_position_of_y);
       ctx.lineTo(currentmousex,currentmousey);
       ctx.stroke();

   }
   last_position_of_x=currentmousex;
   last_position_of_y=currentmousey;
 } 

function cleararea(){
   ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height); 
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e)
{
    mouseevent="MouseUp";
    console.log(mouseevent);

}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e)
{
    mouseevent="MouseLaeve";
    console.log(mouseevent);

}