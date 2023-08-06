import { nuevoRegistro,logeate } from "./API.js";

const formulario = document.querySelector("#formRegistre")
formulario.addEventListener('submit', validarRegistro)

function validarRegistro(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#correo").value;
    const password = document.querySelector("#password").value;

    const resgist = {
        nombre,
        email,
        password
    }
    if(validate(resgist)){
        alert ('todos los campos son obligatirios')
        return 
        
    }

    nuevoRegistro (resgist)

}

/* const formularioLogin = document.querySelector("#formlogin");
formularioLogin.addEventListener('submit', validarLogin);

function validarLogin(e){
    e.preventDefault();
    console.log(1);
    const email = document.querySelector("#emailLogin").value;
    const password = document.querySelector("#passwordLogin").value;

    const registroLogin = {
        email,
        password
    };

    if (!email || !password) {
        alert('Todos los campos son obligatorios');
        return;
    }

    console.log("registrado");

    logeate(registroLogin);
}



function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

}  */

const formularioLogin = document.querySelector("#formlogin");
formularioLogin.addEventListener('submit', validarLogin);

async function validarLogin(e) {
    e.preventDefault();
    const correo = document.querySelector('#emailLogin');
    const contraseña = document.querySelector('#passwordLogin');

    const datos = {
        email : correo.value,
        password : contraseña.value,
    };

 
        const response = await logeate(datos);
        if (response) {
            alert("¡Enviado!");
            setTimeout(()=>{
                window.location = '../home/home.html';

            },2000)


       }else{
        alert("Cancelado");
            setTimeout(()=>{
                window.location = 'index.html';

            },2000)
       }

}