
/*Por medio del método getElementId capturo el id del contenido HTML y en este caso se refiere al div creado en el index*/
const foodcontent = document.getElementById("foodcontent");

/*Por medio del método getElementId capturo el id del contenido HTML y en este caso se refiere al h1 que contiene el logo del carrito*/
const verCarrito = document.getElementById("verCarrito");

/*Por medio del método getElementId capturo el id del contenido HTML y en este caso se refiere al menú del carrito*/
const carritoContainer = document.getElementById("carritoContainer");

/*Creo un array con los productos o los objetos que estan disponibles a la venta*/
const productos = [
  { id: 1, nombre: "hamburguesa", precio: 2000, cantidad: 1 },
  { id: 2, nombre: "lomito", precio: 2500, cantidad: 1 },
  { id: 3, nombre: "pizza", precio: 1500, cantidad: 1 },
  { id: 4, nombre: "papas", precio: 500, cantidad: 1 },
  { id: 5, nombre: "pancho", precio: 800, cantidad: 1 },
  { id: 6, nombre: "gaseosa", precio: 1000, cantidad: 1 },
];


/*Creo un array vacío que se irá llenando a medida que vaya cargando mi carrito */
let carrito = [];


/*Por medio del método forEach recorro mi array que contiene los productos para luego mostrarlos*/
productos.forEach((product) => {
  let content = document.createElement("div"); /*Creo la variable content y dentro el elemento div en mi "document" por medio de la función createElement*/
  content.className = "card"; /*Le asigno una clase con la propiedad className para agregar luego estilo css*/
  content.innerHTML = `
<h3>${product.nombre}</h3>
<p class="price">$${product.precio}</p>
`; /*Inserto contenito HTML con la propiedad innerHTML al elemento div creado anteriormente*/

  /*Inserto los elementos creados dentro de mi div a un div padre que cree previamente en el index llamado foodcontent y todo esto mediante la función append*/
  foodcontent.append(content);

  /*Creo el botón a través de la función createElement que va permitir al usuario comprar alguno de los productos que aparecen en el documento HTML*/
  let comprar = document.createElement("button");
  comprar.innerText = "Comprar"; /*A través de la propiedad innerText inserto texto que va ir dentro del botón */
  comprar.className = "compra"; /*Le asigno una clase con la propiedad className para agregar luego estilo css*/

  /*A través de la función append inserto mi botón creado en el paso anterior a content que es el contenido que ya aparece en index*/
  content.append(comprar);

  /*Por medio de la función addEventListener le doy funcionalidad a mi botón y en este caso al hacer click va a disparar algún evento*/
  comprar.addEventListener("click", () => {
    alert("Su producto fue agregado al carrito"); /*Por medio de este alert informo que mi producto se encuentra agregado en el carrito */

    /*Creo una constante llamada repeat y por medio del método some recorro mi array llamado carrito
    para verificar si hay un producto repetido comparando repeatProduct.id con product.id para que luego
    some me devuelva un true o un false*/
    const repeat = carrito.some((repeatProduct) => repeatProduct.id == product.id);

    /*Si repeat es igual a true (ya hay un elemento igual) recorro mi carrito con el método
    map para crear un nuevo array modificado pasandole la variable prod para que realice una nueva evaluación
    en la que compare a prod.id con product.id y si es igual a prod.id le sume uno más con el comando de incremento ++ */
    if(repeat == true){
      carrito.map((prod) => {
        if(prod.id == product.id){
          prod.cantidad++;
        }
      });
    } else {
  /*si repeat es igual a false va a pushear los elementos del array al carrito por medio del método push*/
    carrito.push({
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
      cantidad: product.cantidad,
    });
  }
    console.log(carrito);
  });
});