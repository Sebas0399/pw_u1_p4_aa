function sumar(num1, num2) {
  return num1 + num2;
}
function sumarNumeros() {
  var numero1 = convertir("num1");
  var numero2 = convertir("num2");
  console.log(numero1)
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + sumar(numero1, numero2);
}
function restar(num1, num2) {
  return num1 - num2;
}
function restarNumeros() {
  var numero1 = convertir("num1");
  var numero2 = convertir("num2");
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + restar(numero1, numero2);
}
function multiplicar(num1, num2) {
  return num1 * num2;
}
function multiplicarNumeros() {
  var numero1 = convertir("num1");
  var numero2 = convertir("num2");
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + multiplicar(numero1, numero2);
}
function dividir(num1, num2) {
  return num1 / num2;
}
function dividirNumeros() {
  var numero1 = convertir("num1");
  var numero2 = convertir("num2");
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + dividir(numero1, numero2);
}
function convertir(idCampo) {
  return parseInt(document.getElementById(idCampo).value);
}
function insetarElemento() {
  document.getElementById("elemento").innerHTML = "<strong>Importante</strong>";
}
function eliminarElemento() {
  document.getElementById("idEliminar").remove();
}
