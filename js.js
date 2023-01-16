var i = 0;
var txtTitle = "Holla, I'm Artem Rai"
var speed = 50;

typeWriter();

function typeWriter() {
  if (i < txtTitle.length) {
    document.getElementById("hello").innerHTML += txtTitle.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}