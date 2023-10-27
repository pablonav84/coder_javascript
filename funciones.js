/*Para crear el menú de mi carrito de compras lo voy a crear en 3 partes
las cuales constan de:
Header(contiene un titulo y un botón para cerrar)
Cuerpo (contiene el detalle de las compras a realizar y un botón de eliminar productos)
Footer (contiene el total a pagar de la compra)*/


/*------------------------------------HEADER DEL CARRITO--------------------------------- */
/*Para empezar creo una función en el Header que luego llamaré para su ejecución */
const llenarCarrito = () =>{
    carritoContainer.innerHTML =""; /*Esto me sirve para limpiar todo antes de volver a repetir todo el proceso y no se duplique el contenido*/
    carritoContainer.style.display = "flex"; /*Por medio de esta línea puedo volver a visualizar el menú carrito después de cerrarlo*/
    const carritoHeader = document.createElement("div"); /*Creo un elemento div*/
    carritoHeader.className = "carrito-Header";
    carritoHeader.innerHTML = `
      <h1 class="carrito-header-title">Su Pedido</h1>
      `; /*Le inserto contenido HTML (título) */
  
      /*Creo un contenedor padre en el index llamado carritoContainer y en él inserto el div creado acá */
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



/*----------------------------------CUERPO O BODY DEL CARRITO------------------------------------ */
/*En la segunda parte de mi menú voy a insertar el contenido de mi carrito:
  Primero: recorro mi array con el método forEach*/
  carrito.forEach((product) => {
    /*segundo: creo la etiqueta div e inserto contenido HTML que contiene los elementos
    de mis productos existentes en el array*/
    let carritoContent = document.createElement("div");
    carritoContent.className = "carrito-content";
    carritoContent.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
  <p>$${product.precio}</p>
  <p>Cantidad: ${product.cantidad}</p>
  <p>Total: ${product.cantidad * product.precio}<p>
  <span class="delete-product"> ❌ </span>
    `;
  
    /*Inserto el contenido del menú carrito al div padre creado en el index por medio de la función append */
    carritoContainer.append(carritoContent);
    
  let eliminar = carritoContent.querySelector(".delete-product");



/*Creo la función para darle funcionalidad al botón "eliminar" */
const eliminarProducto = (id) => {
  /*Creo la constante foundId y con el método "find" busco el id del producto que el usuario está queriendo eliminar*/
  const foundId = carrito.find((element) => element.id == id);

  /*Con el método "filter" sobreescribo el valor de carrito con todos los resultados
  excepto el id que encontré anteriormente con "find", lo hago comparando la constante
  creada anteriormente llamada foundId con el parámetro enviado llamado carritoId y
  de esta forma con return devuelve todos los elementos excepto el id encontrado con find*/
  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  llenarCarrito(); /*Por último utilizo la función creada anteriormente llenarCarrito para mostrar el resultado */
  local();
};
    
/*Asocio la función "eliminarProducto" por medio de addEventListener
al botón eliminar para indicar cuando ejecutar el proceso */  
eliminar.addEventListener("click", ()=> {
  eliminarProducto(product.id);
});

  });

  

  /*---------------------------------FOOTER DEL CARRITO----------------------------------- */
  /*Para crear el Footer del menú carrito utilizo el método "reduce"
  que sirve para calcular los valores que estén dentro del carrito */
  /*Los parámetros que le paso a este método son acc(acumulador), el(elemento)
  sumo el acumulador con el precio y lo multiplico con la cantidad. El acumulador inicia en 0*/
 
  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  
  /*En este paso creo un elemento div para introducir el resultado de la constante "total"*/
  const totalBuying = document.createElement("div")
  totalBuying.className = "total-content"
  totalBuying.innerHTML = `
  <p>Total a pagar: $${total}</p>
  `;
 
 /*Por último inserto mi Footer en el contenedor padre llamado carritoContainer*/
  carritoContainer.append(totalBuying);
  };
  
  /*Por medio de la función addEventListener voy a lograr desplegar mi menú carrito especificando
que a través de un click en el h1 creado anteriormente llamado verCarrito
ejecute la función llenarCarrito */
verCarrito.addEventListener("click", llenarCarrito);

