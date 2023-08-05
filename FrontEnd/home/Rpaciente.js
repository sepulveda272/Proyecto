import { nuevoPacientes } from "./API.js";

const formulario =document.querySelector('#formPaciente')
formulario.addEventListener('submit',nuevoPaciente)

function nuevoPaciente(e){
    e.preventDefault();

    const nombre = document.querySelector('#inputNombre').value
    const edad = document.querySelector('#inputEdad').value
    const sexo = document.querySelector('#inputSexo').value
    const direccion = document.querySelector('#inputDireccion').value
    const celular = document.querySelector('#inputCelular').value
    const fecha = document.querySelector('#inputFecha').value
    const hora = document.querySelector('#inputHora').value
    const nombreBacteriologo = document.querySelector('#inputBacteriologo').value
    const examen = document.querySelector('#inputExamen').value

    const registrar={
        nombre,edad,sexo,direccion,celular,fecha,hora,nombreBacteriologo,examen
    }

    if(validate(registrar)){
        alert ('todos los campos son obligatirios')
        return 
        
    }
    
    console.log(registrar);
    nuevoPacientes(registrar)
}

function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

}



