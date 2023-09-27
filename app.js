
let entrada = prompt(`Ingrese una opcion para continuar o 0 para salir:
1: Hamburguesa 2000
2: Pizza 1000
3: Lomito 2500
4: Pancho 600
5: Papas 800`);
while (entrada != "0") {
  switch (entrada) {
    case "1":
      console.log("Usted seleccionó Hamburguesa");
      break;
    case "2":
      console.log("Usted seleccionó Pizza");
      break;
    case "3":
      console.log("Usted seleccionó Lomito");
      break;
    case "4":
      console.log("Usted seleccionó Pancho");
      break;
    case "5":
      console.log("Usted seleccionó Papas");
      break;
    default:
      alert("Por favor seleccione una opción valida");
      break;
  }

entrada = prompt(`Ingrese una opcion para continuar o 0 para salir:
1: Hamburguesa 2000
2: Pizza 1000
3: Lomito 2500
4: Pancho 800
5: Papas 600`);
}