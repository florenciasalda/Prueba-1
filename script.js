alert("Bienvenidos");

document.getElementById("btn-iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn-registrarse").addEventListener("click", register);
const formulario_login = document.querySelector(".formulario-login");
const formulario_register = document.querySelector(".formulario-regiter");
const caja_trasera_login = document.querySelector("caja-login");
const caja_trasera_register = document.querySelector("caja-trasera-registro");
const contenedor_login_register = document.querySelector(".contenedor-login-register");

function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}
function iniciarSesion(){
    if(window.innerWidth > 850){
    formulario_register.style.display = "none"; 
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
} else{
    formulario_register.style.display = "none"; 
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "block";
    caja_trasera_login.style.opacity = "none";
}

function register(){
    if(window.innerWidth > 850){
    formulario_register.style.display = "block"; 
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
}else{
    formulario_register.style.display = "block"; 
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.opacity = "1";
}
}
}