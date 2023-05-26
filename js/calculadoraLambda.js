const sumar = (num1, num2) => num1 + num2;

const sumarNumeros = () => {
  var numero1 = convertir("num1");
  var numero2 = convertir("num2");
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + sumar(numero1, numero2);
};
const restar = (num1, num2) => num1 - num2;

const restarNumeros = () => {
  var numero1 = convertir("num1");
  var numero2 = convertir("num2");
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + restar(numero1, numero2);
};
const multiplicar = (num1, num2) => num1 * num2;
const multiplicarNumeros = () => {
  var numero1 = convertir("num1");
  var numero2 = convertir("num2");
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + multiplicar(numero1, numero2);
};
const dividir = (num1, num2) => num1 / num2;
const dividirNumeros = () => {
  var numero1 = convertir("num1");
  var numero2 = convertir("num2");
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + dividir(numero1, numero2);
};
const convertir = (idCampo) => parseInt(document.getElementById(idCampo).value);
const insetarElemento = () => {
  document.getElementById("elemento").innerHTML = "<strong>Importante</strong>";
};
const eliminarElemento = () => {
  console.log("Convertir" + 5);
  document.getElementById("idEliminar").remove();
};
const metodoConceptosJavascript = () => {
  //declaracion de varibales
  //var
  //let
  //const
  var variable1 = "Antony";
  var variable2 = 1;
  let variable3 = "Antony";
  let variable4 = 5;
  const variable5 = "Antony";
  const variable6 = 9;
  console.log(variable2);
  //declaracion de arreglos
  const diasSemana = ["Lunes", "Martes", "Miercoles"];
  console.log(diasSemana);
  console.log(diasSemana[0]);
  diasSemana.push("Jueves");
  diasSemana.push("Viernes");
  console.log(diasSemana);
  console.log(diasSemana[0]);
  const diasFin = ["Sabado", "Domingo"];
  console.log(diasSemana.concat(diasFin));
  const diasCompleto = diasSemana.concat(diasFin);
  console.log(diasCompleto);
  for (dia of diasCompleto) {
    console.log(dia);
  }
  //declarcion de objetos
  const persona = {
    nombre: "Antony",
    apellido: "Arguello",
    edad: 33,
    ciudad: "Quito",
  };
  console.log(persona);
  const persona2 = {
    nombre: "Jose",
    apellido: "Arguello",
    edad: 20,
    ciudad: "Quito",
    vehiculo: {
      marca: "Chevrolet",
      modelo: "Aveo",
      anio: "2010",
    },
  };
  const sebas = ["antony"];
  sebas[0] = ["Jose"];
  console.log(sebas);
  //descomposicon
  const dias2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  const [dia1, dia2, dia3, dia4, dia5] = dias2;
  console.log(dia1);
  console.log(dia2);
  console.log(dia5);
  //des estructuracion de objetos
  const persona3 = {
    nombre: "Antony",
    apellido: "Arguello",
    edad: 33,
    ciudad: "Quito",
  };
  const { nombre, ciudad } = persona3;
  console.log(nombre, ciudad);
  const persona4 = {
    nombre: "Jose",
    apellido: "Arguello",
    edad: 20,
    ciudad: "Quito",
    vehiculo: {
      marca: "Chevrolet",
      modelo: "Aveo",
      anio: "2010",
    },
  };
  const { vehiculo } = persona4;
  const { marca } = vehiculo;
  console.log(vehiculo, marca);
};
