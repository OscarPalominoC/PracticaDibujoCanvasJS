var lienzo = document.getElementById("areaDeTrabajo");
var contexto = lienzo.getContext("2d");
// Esta función detecta la posición del mouse, así se podrá dibujar con el clic sostenido.
function onMousePos(lienzo, evento) {
  // El método getBoundingClientRect() devuelve el tamaño de un elemento y la posición relativa respecto al puntero, así que en sí no tendremos que calcular la posición del puntero en diferentes puntos de la pantalla.
  var ClientRect = lienzo.getBoundingClientRect();
  return {
    x: Math.round(evento.clientX - ClientRect.left),
    y: Math.round(evento.clientY - ClientRect.top)
  }
}
//Finalización de la función de detección del mouse.
// Inicializamos el canvas, hubo la necesidad de inicializarlo acá, de lo contrario la función de limpiar el dibujo no funcionaba.
var cAncho = lienzo.width = 400,
  cx = cAncho / 2;
var cAlto = lienzo.height = 400,
  cy = cAlto / 2;
// Fin inicialización del canvas.
// Se inicializa la variable dibujo, es un booleano, si es verdadero dibuja, si es falso no dibuja.
var dibujar = false;
// Esta función borra el dibujo que se haya realizado.
function limpiar(){
    contexto.clearRect(0, 0, cAncho, cAlto);
}
// Fin función de borrar el dibujo.
// Inicializar el dibujo. Detecta el clic y empieza a dibujar.
lienzo.addEventListener('mousedown', function(evento) {
  dibujar = true;
  contexto.beginPath();

}, false);
// Fin del evento, deja de dibujar.
// Función que detecta que dejaste de hacer clic, deja de dibujar.
lienzo.addEventListener('mouseup', function(evento) {
  dibujar = false;
}, false);
// Fin función
// Función que detecta que el puntero se salió del lienzo, deja de dibujar.
lienzo.addEventListener("mouseout", function(evento) {
  dibujar = false;
}, false);
// Fin función.
// Función que detecta el movimiento del mouse.
lienzo.addEventListener("mousemove", function(evento) {
  if (dibujar) {
    // al llamar la función onMousePos podemos detectar la posición del mouse en todo momento.
    var m = onMousePos(lienzo, evento);
    // Con las siguientes 2 líneas se traza una línea muy corta, desde el punto anterior al punto actual.
    contexto.lineTo(m.x, m.y);
    contexto.stroke();
  }
}, false);
// Fin función.
// Fin programa.