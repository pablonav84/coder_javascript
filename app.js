
/*Por medio del método getElementId capturo el id del contenido HTML y en este caso se refiere al div creado en el index*/
const foodcontent = document.getElementById("foodcontent");

/*Por medio del método getElementId capturo el id del contenido HTML y en este caso se refiere al h1 que contiene el logo del carrito*/
const verCarrito = document.getElementById("verCarrito");

/*Por medio del método getElementId capturo el id del contenido HTML y en este caso se refiere al menú del carrito*/
const carritoContainer = document.getElementById("carritoContainer");

/*Creo un array con los productos o los objetos que estan disponibles a la venta*/
const productos = [
  { id: 1, nombre: "Hamburguesa", precio: 2000, img: src="./imagenes/burguer.jpg", cantidad: 1 },
  { id: 2, nombre: "Lomito", precio: 2500, img: src="./imagenes/lomito.jpg", cantidad: 1 },
  { id: 3, nombre: "Pizza", precio: 1500, img: src="./imagenes/pizza.jpg", cantidad: 1 },
  { id: 4, nombre: "Papas", precio: 500, img: src="./imagenes/papas.png", cantidad: 1 },
  { id: 5, nombre: "Pancho", precio: 800, img: src="./imagenes/pancho.jpg", cantidad: 1 },
  { id: 6, nombre: "Gaseosa", precio: 1000, img: src="./imagenes/gaseosa.jpg", cantidad: 1 },
];


/*-----Creo un array vacío que se irá llenando a medida que vaya cargando mi carrito-----*/

/*Parse me sirve para obtener el contenido almacenado anteriormente por medio de "setItem" y uso JSON.parse para parsear el contenido,
es decir transformar de string a objeto del array nuevamente*/

/*Además introduzco la línea de "getItem" en mi array vacío con el comando "or" para indicarle a la variable que tome el valor del localstorage,
y si no hay nada almacenado tome el contenido vacío tal cual era antes de agregar contenido en el almacenamiento del navegador*/
let carrito = JSON.parse(localStorage.getItem("productos")) || [];

