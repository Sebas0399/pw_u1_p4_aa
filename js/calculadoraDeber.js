var numers = [];
var opcion = "";
function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}

function saveOpt(operacion) {
  numers.push(parseInt(document.getElementById("numero").value));

  document.getElementById("numero").value = "";
  opcion = operacion;
}
function solve() {
 
  numers.push(parseInt(document.getElementById("numero").value));
  if (opcion == "suma") {
    document.getElementById("resultado").innerHTML =
      "Resultado: " + sumar(numers[0], numers[1]);
  } else if (opcion == "resta") {
    document.getElementById("resultado").innerHTML =
      "Resultado: " + restar(numers[0], numers[1]);
  } else if (opcion == "multiplicacion") {
    document.getElementById("resultado").innerHTML =
      "Resultado: " + multiplicar(numers[0], numers[1]);
  } else if (opcion == "division") {
    document.getElementById("resultado").innerHTML =
      "Resultado: " + dividir(numers[0], numers[1]);
  }
  numers = [];
  opcion = "";
  document.getElementById("numero").value = "";
}
function saveNum(num1) {
  document.getElementById("numero").value =
  document.getElementById("numero").value + num1;
}
