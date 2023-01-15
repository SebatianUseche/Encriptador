const inputEncriptador = document.querySelector("#TextoEncriptador");
const inputDesencriptador = document.querySelector("#TextoDesencriptador");
const botonEncriptar = document.querySelector("#Encriptar");
const botonDesencriptar = document.querySelector("#Desencriptar");
const botonCopiar = document.querySelector("#Copiar");
const botonPegar = document.querySelector("#Pegar");
const botonBorrar = document.querySelector("#Borrar");
const imagen = document.querySelector(".pensando");
const cuadro = document.querySelector(".imagen");

inputDesencriptador.classList.add("ocultar");
function confirmarEncriptador(){
    var mensaje=inputEncriptador.value;
    let alfabeto="abcdefghijklmnopqrstuvwxyz ";
    for (let letra of mensaje){
        if(!alfabeto.includes(letra)){
            alert("Caracteres invalidos");
            inputEncriptador.focus();
            inputDesencriptador.value="";
            break;
        }
        else{
            imagen.classList.add("ocultar");
            cuadro.classList.add("ocultar");
            inputDesencriptador.classList.remove("ocultar");
            Encriptar();
        }
    }
}
function confirmarDesencriptador(){
    var mensaje=inputEncriptador.value;
    let alfabeto="abcdefghijklmnopqrstuvwxyz ";
    for (let letra of mensaje){
        if(!alfabeto.includes(letra)){
            alert("Caracteres invalidos");
            inputEncriptador.focus();
            inputDesencriptador.value="";
            break;
        }
        else{
            imagen.classList.add("ocultar");
            cuadro.classList.add("ocultar");
            inputDesencriptador.classList.remove("ocultar");
            Desencriptar();
        }
    }
}
function Encriptar(){
    var Texto = inputEncriptador.value;
    var TextoEncriptado = Texto
    .replaceAll("e","enter")  
    .replaceAll("o","ober") 
    .replaceAll("i","imes") 
    .replaceAll("u","ufat")  
    .replaceAll("a","ai");
    inputDesencriptador.value=TextoEncriptado;
}
function Desencriptar(){
    var TexTextoEncriptado = inputEncriptador.value;
    var Texto = TexTextoEncriptado
    .replaceAll("enter","e")  
    .replaceAll("ober","o") 
    .replaceAll("imes","i") 
    .replaceAll("ufat","u")  
    .replaceAll("ai","a");
    inputDesencriptador.value=Texto;
}
function Copiar(){
    var TexTextoEncriptado = inputDesencriptador.value;
    navigator.clipboard.writeText(TexTextoEncriptado);
    inputEncriptador.value="";
    inputEncriptador.focus();
}
function Pegar(){
    var TexTextoEncriptado = inputDesencriptador.value;
    inputEncriptador.value=TexTextoEncriptado;
    inputEncriptador.focus();
}
function Borrar(){
    imagen.classList.remove("ocultar");
    cuadro.classList.remove("ocultar");
    inputDesencriptador.classList.add("ocultar");
    inputEncriptador.value="";
    inputDesencriptador.value="";
    inputEncriptador.focus();
}
botonEncriptar.onclick=confirmarEncriptador;
botonDesencriptar.onclick=confirmarDesencriptador;
botonCopiar.onclick=Copiar;
botonPegar.onclick=Pegar;
botonBorrar.onclick=Borrar;