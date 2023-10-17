
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

/*Para crear el menú de mi carrito de compras lo voy a crear en 3 partes
las cuales constan de:
Header(contiene un titulo y un botón para cerrar)
Cuerpo (contiene el detalle de las compras a realizar y un botón de eliminar productos)
Footer (contiene el total a pagar de la compra)*/

  /*Para empezar creo el Header*/
  const llenarCarrito = () =>{
    carritoContainer.innerHTML =""; /*Esto me sirve para limpiar todo antes de volver a repetir todo el proceso y no se duplique el contenido*/
    carritoContainer.style.display = "flex"; /*Por medio de esta línea puedo volver a visualizar el menú carrito después de cerrarlo*/
    const carritoHeader = document.createElement("div"); /*Creo un elemento div*/
    carritoHeader.className = "carrito-Header";
    carritoHeader.innerHTML = `
      <h1 class="carrito-header-title">Carrito</h1>
      `; /*Le inserto contenido HTML (título) */
  
      /*Creo un contenedor padre en el index llamado carritoContainer y en él inserto el div creado después*/
      carritoContainer.append(carritoHeader);
  
    /*Procedo a la creación del botón cerrar mediante un span con texto adentro que será una "X" */
    const carritobutton = document.createElement("span");
    carritobutton.innerText = "X";
    carritobutton.className = "carrito-header-button";
  
    /*Por medio de la herramienta addEventListener le doy la orden de que desaparezca el menú al hacer click*/
    carritobutton.addEventListener("click", () => {
    carritoContainer.style.display = "none"; /*Al hacer click mediante la propiedad de css "none" el contenido desaparece*/
  });
  
  /*Inserto el botón a carritoHeader*/
  carritoHeader.append(carritobutton);
  
  
  /*En la segunda parte de mi menú voy a insertar el contenido de mi carrito:
  Primero: recorro mi array con el método forEach*/
  carrito.forEach((product) => {
    /*segundo: creo la etiqueta div e inserto contenido HTML que contiene los elementos de mis productos existentes en el array*/
    let carritoContent = document.createElement("div");
    carritoContent.className = "carrito-content";
    carritoContent.innerHTML = `
    <h3>${product.nombre}</h3>
  <p>$${product.precio}</p>
  <p>Cantidad: ${product.cantidad}</p>
  <p>Total: ${product.cantidad * product.precio}<p>
    `;
  
    /*Creo botón para eliminar productos agregados al carrito*/
    let eliminar = document.createElement("span");
  
    eliminar.innerText = "❌";
    eliminar.className = "delete-product";
  
    /*Inserto el botón eliminar al contenido de mi carrito */
    carritoContent.append(eliminar);

/*Creo la función para darle funcionalidad al botón eliminar*/
const eliminarProducto = () => {
  /*Creo la constante foundId y con el método "find" busco el id del producto que el usuario está queriendo eliminar*/
  const foundId = carrito.find((element) => element.id);

  /*Con el método "filter" sobreescribo el valor de carrito con todos los resultados
  excepto el id que encontré anteriormente con "find", lo hago comparando la constante
  creada anteriormente llamada foundId con el parámetro enviado llamado carritoId y
  de esta forma con return devuelve todos los elementos excepto el id encontrado con find*/
  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  llenarCarrito(); /*Por último llamo nuevamente a la función llenarCarrito para mostrar todos los productos sin ese id eliminado*/
};

    /*LLamo a la función "eliminarProducto" por medio de la función addEventListener*/  
    eliminar.addEventListener("click", eliminarProducto);
  
    /*Inserto el contenido del menú carrito al div padre creado en el index por medio de la función append*/
    carritoContainer.append(carritoContent);
  
  });
  
  /*Para crear el Footer del menú carrito utilizo el método "reduce"
  que sirve para calcular los valores que estén dentro del carrito */
  /*Los parámetros que le paso a este método son acc(acumulador), el(elemento)
  sumo el acumulador con el precio y lo multiplico con la cantidad. El acumulador inicia en 0*/
  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  
  /*En este paso creo un elemento div para introducir el resultado de la constante "total"*/
  const totalBuying = document.createElement("div")
  totalBuying.className = "total-content"
  totalBuying.innerHTML = `total a pagar: $${total}`;
 
 /*Por último inserto mi Footer en el contenedor padre llamado carritoContainer*/
  carritoContainer.append(totalBuying);
  };

/*Por medio de la función addEventListener voy a lograr desplegar mi menú carrito especificando
que a través de un click en el h1 creado anteriormente llamado verCarrito
ejecute la función llenarCarrito */
verCarrito.addEventListener("click", llenarCarrito);

