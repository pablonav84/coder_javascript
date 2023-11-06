
/*Creo esta función que va a permitir que aparezca y desaparezca el formulario de inicio de sesión*/
const menuSesion = () =>{
input.innerHTML =""; /*Esto me sirve para limpiar todo antes de volver a repetir todo el proceso y no se duplique el contenido*/
input.style.display = "flex";
const inputHeader = document.createElement("div"); /*Creo un elemento div*/
inputHeader.className = "input-Header";
inputHeader.innerHTML = `
<h1 class="input-header-title">Inicio de Sesion</h1>
`; /*Inyecto un h1 al HTML*/

/*Inserto al div el elemento recién creado*/
input.append(inputHeader);

/*Creo un botón el cuál permitirá cerrar el menú*/
const inputbutton = document.createElement("span");
    inputbutton.innerText = "X";
    inputbutton.className = "input-header-button";
  
    /*Por medio de la herramienta addEventListener le doy la orden de que desaparezca el menú al hacer click*/
    inputbutton.addEventListener("click", () => {
    input.style.display = "none"; /*Al hacer click mediante la propiedad de css "none" el contenido desaparece*/
  });

  inputHeader.append(inputbutton);

  /*Creo el div con los input del formulario*/
  let inputContent = document.createElement("div");
    inputContent.className = "input-content";
    inputContent.innerHTML = `
    <label>Ingrese su nombre:</label>
    <input id="ingreso">
    <label class="label2">Ingrese su contraseña:</label>
    <input id="clave" type="password">
    <button id="boton" class="boton">Ingresar</button>
    <p id="mensaje"></p>
    `;
/*Inserto el formulario dentro del div "input"*/
    input.append(inputContent);

    //Creo una variable llamada "nombre" la cual reutilizaré cuando el usuario ingrese un valor
let nombre;

//Le doy funcionalidad al botón cuando el usuario haga click en el
document.getElementById("boton").addEventListener("click",datos);

//Creo un nuevo evento para que al dar enter también sea posible acceder
document.getElementById("clave").addEventListener("keydown", teclado);

//uso esta funcion para limpiar al principio
limpiar();

//Creo la primer funcion la cual permitirá evaluar lo que el usuario ingrese
function datos(){
    if (document.getElementById("clave").value=="12345"){
        
    //Evalúa los datos ingresados
    //uso la función "trim" para eliminar los espacios al principio y al final del contenido y de esta forma no los contemplará
    //uso "toUpperCase" para convertir el contenido en mayúscula
    nombre = document.getElementById("ingreso").value.trim().toUpperCase();
    //Cuando la variable "nombre" sea igual a algo inyecto en mi html un saludo
    (nombre) && (document.getElementById("mensaje").innerHTML=`✅ Hola ${nombre} Bienvenido a Sabor Urbano por favor seleccione su pedido`);

    }
    else {
        //Si la contraseña no coincide con la correcta envía un mensaje de error
        document.getElementById("mensaje").innerHTML=`❌ Su contraseña es incorrecta, por favor ingresela nuevamente`;
    }

    //llamo a la función para limpiar el contenido
    limpiar()
}

//Creo mi función para que tome la tecla enter y permita acceder de este modo al igual que haciendo click
function teclado(e){
    //funciona cuando "e.key" que es la propiedad que indica que pulse una tecla es igual a enter y además ejecuta la función "verificarClave"
    (e.key==="Enter") && datos()
}

//creo una nueva función que voy a utilizar para limpiar el contenido de mi input y meter el cursor nuevamente adentro luego de escribir algo
function limpiar(){
    //creo esta constante para ahorrarme de volver a escribir nuevamente toda la línea document.etc
    const input1=document.getElementById("ingreso");
    const input2=document.getElementById("clave");
    //ahora la constante "elemnet" se mete en mi input y lo limpia
    input1.value="";
    input2.value="";
    //con la función focus el cursor se mantiene siempre dentro del input
    input1.focus();
    input2.focus();
}
}

/*Creo el evento que le da funcionalidad al ícono de inicio de sesión*/
inicioSesion.addEventListener("click", menuSesion);