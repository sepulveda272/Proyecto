import { nuevoBacteriologo } from "./API.js";

const formulario = document.querySelector("#formBacteriologo")
formulario.addEventListener('submit', nuevoBacte)

function nuevoBacte(e){
    e.preventDefault();
    const imagen = document.querySelector('#inputImagen').value
    const nombre = document.querySelector('#inputNombre').value
    const edad = document.querySelector('#inputEdad').value
    const email = document.querySelector('#inputEmail').value
    const experiencia = document.querySelector('#inputAñosEx').value
    const cedula = document.querySelector('#inputCedula').value
    

    const registrar={
        imagen,nombre,edad,email,experiencia,cedula
    }

    if(validate(registrar)){
        alert ('todos los campos son obligatirios')
        return 
        
    }
    
    console.log(registrar);
    nuevoBacteriologo(registrar)
}

function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

}



