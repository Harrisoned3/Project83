var mouse_event="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color = "black";
width_of_line = 2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
ctx.strokeStyle=color;
ctx.linewidth=width_of_line;
mouse_event="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouse_event="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove (e){
current_position_of_mouse_x - e.touches[0].clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
if(mouse_event == "mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.linewidth=width_of_line;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
ctx.stroke();
}
last_position_of_x=current_position_of_mouse_x;
last_position_of_y-current_position_of_mouse_y;
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
last_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
last_position_of_y= e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle - color;
ctx.linewidth - width_of_line;
ctx.moveTo(last_position_of_x, last_position_of_y);
ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
ctx.stroke();
last_position_of_x = current_position_of_touch_x; 
last_position_of_y = current_position_of_touch_y;
}