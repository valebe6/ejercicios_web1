let ejecicio;

ejercicio = Number(prompt("Que ejercicio desea ver (1 a 3)"));

switch (ejercicio) {
  case 1:
    ejercicio1();
    break;
  case 2:
    ejercicio1();
    break;
  case 3:
    ejercicio3();
    break;
  default:
    break;
}

function ejercicio1() {
  let numbers = [];
  let num = Number(
    prompt("Ingrese la canidad de veces que desea ingresar el numero")
  );
  for (let i = 1; i <= num; i++) {
    askNumber(i);
  }
  let impar = "";
  let par = "";
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] % 2 == 0) {
      par += numbers[j] + " ";
    } else {
      impar += numbers[j] + " ";
    }
  }
  console.log("los numeros ingresados fuerons ", ...numbers);
  console.log("Los numeros pares son ", par);
  console.log("los numeros impares son ", impar);

  function askNumber(contador) {
    numbers.push(Number(prompt("ingrese el numero " + contador)));
  }
}

function ejercicio3() {
  let gasto = Number(prompt("Ingrese la cantidad de gastos"));
  let comida = 0,
    pasajes = 0,
    vivienda = 0,
    ocio = 0;
  if (gasto <= 30) {
    let categroria = Number(
      prompt(
        "Ingrese la categoria \n Comida = 1 \n Pasajes = 2 \n Vivienda = 3 \n Ocio = 4"
      )
    );
    let totalGasto = Number(prompt("Ingrese el total gastado"));
    switch (categroria) {
      case 1:
        comida += totalGasto;
        break;
      case 2:
        pasajes += totalGasto;
        break;
      case 3:
        vivienda += totalGasto;
        break;
      case 4:
        ocio += totalGasto;
        break;
    }
    let total = comida + pasajes + vivienda + ocio;
    let tPresupuesto;
    console.log("El total gastado en comida es " + comida);
    console.log("El total gastado en pasajes es " + pasajes);
    console.log("El total gastado en vivienda es " + vivienda);
    console.log("El total gastado en ocio es " + ocio);
    console.log("El total gastado es " + total);
    if (tPresupuesto < 0) {
      console.log("Se exedio por " + tPresupuesto);
    } else {
      console.log("no se exedió el limite y sobró " + tPresupuesto);
    }
  } else {
    alert("Los gastos deben ser menor o igual a 30");
  }
}
