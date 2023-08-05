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

const formularioLogin = document.querySelector("#formlogin");
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

    // Validar campos (en este caso, solo comprobamos que no estén vacíos)
    if (!email || !password) {
        alert('Todos los campos son obligatorios');
        return;
    }

    console.log("registrado");

    // Llamar a la función para loguearse
    logeate(registroLogin);
}



function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

} 