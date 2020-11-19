var circle;
function getMousePos(canvas, evt) {
    return {
      x: evt.clientX,
      y: evt.clientY
    };
}
var canvas = document.getElementById("areaDeTrabajo");
var context = canvas.getContext('2d');
canvas.addEventListener("mousemove", function(evt){
    var mousePos = getMousePos(canvas, evt);
    var mensaje = "Mouse en: " + mousePos.x + ", " + mousePos.y;
    console.log(mensaje);
    circle.beginPath();
    circle.arc(mousePos.x, mousePos.y, 10, 0, Math.PI * 2, true);
    circle.fill();
});
(function(){
    circle = canvas.getContext('2d');
    circle.fillStyle = "rgba(163,208,244,0.5)";
})();
