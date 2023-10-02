alert("Bienvenido/a al Servicio de comidas")
let respuesta = prompt("¿Desea realizar una compra? Presione s (si) o n (no)")
while (respuesta != "n") {
  if (respuesta == "s") {
    let entrada = prompt(`Ingrese una opción para continuar:
    1: Hamburguesa
    2: Pizza
    3: Lomito
    4: Pancho
    5: Papas`);
    let porcion = prompt("Ingrese Cantidad")
    
      switch (entrada) {
        case "1":
          console.log(`Usted seleccionó ${porcion} Hamburguesa`);
          break;
        case "2":
          console.log(`Usted seleccionó ${porcion} Pizza`);
          break;
        case "3":
          console.log(`Usted seleccionó ${porcion} Lomito`);
          break;
        case "4":
          console.log(`Usted seleccionó ${porcion} Pancho`);
          break;
        case "5":
          console.log(`Usted seleccionó ${porcion} Papas`);
          break;
        default:
          alert("Por favor seleccione una opción valida");
          break;
      }
  }
  else {
      alert("Respuesta Incorrecta");
  }
  respuesta = prompt("¿Desea realizar otra compra? Presione s (si) o n (no)")
}
console.log("¡Muchas Gracias!")