function helloWorld() {
  return "Hello World";
}

function changeParagraph() {
  document.getElementById("paragraphToChange").innerHTML = helloWorld();
}

module.exports = helloWorld;