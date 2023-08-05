import {obtenerPaciente,deletePacientes,editarPacientes} from "./API.js"

document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()
});


/* LISTAR CATEGORIAS  - CRUD (R) */

async function mostrarLista() {
    const pacientes = await obtenerPaciente();
    const contenedor = document.querySelector(".contenido");
    const arrayPacientes = pacientes.pacientes;
    console.log(arrayPacientes);

    let contenidoHTML = "";

    arrayPacientes.forEach((elemento) => {
        const { idPaciente, nombre, edad, nombreBacteriologo, hora,_id } = elemento;
        contenidoHTML += `
        <tr>
            <th scope="row">${idPaciente}</th>
            <td>${nombre}</td>
            <td>${edad}</td>
            <td>${nombreBacteriologo}</td>
            <td>${hora}</td>
            <td>
                <button class="btn update" idActualizar=${_id} style="background-color: #937DE9;" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Actualizar
                </button>
            </td>
            <td><button class="btn btn-danger eliminar" id="${_id}">Borrar</button></td>
        </tr>
        `;
    });

    contenedor.innerHTML = contenidoHTML;
}


const tablapaciente = document.querySelector(".contenido");
tablapaciente.addEventListener('click', confirmDelete)


/* ELIMINAR CATEGORIA  - CRUD (D) */

function confirmDelete(e){
    if(e.target.classList.contains('eliminar')){
        const _id = e.target.getAttribute('id')
        console.log(_id);
        const confirmar = confirm('¿DESEAS ELIMNAR AL PACIENTE?')
        if(confirmar){
            deletePacientes(_id)
        }   
    }
}


//EDITAR CATEGORIA - CRUD (U)const 
const nuevosDatos = document.querySelector('.contenido')
nuevosDatos.addEventListener('click',actualizar)


function actualizar(e){
    e.preventDefault();
  
    if(e.target.classList.contains('update')){
        
        const idActualizar= e.target.getAttribute('idActualizar')
        console.log(idActualizar);

        const datosNuw = document.querySelector('#formEditPaciente')
        datosNuw.addEventListener('submit',uppdateCiclista)
    
    function uppdateCiclista(e){
        e.preventDefault();
        
        const nombre = document.querySelector('#nombreEdit').value
        const edad = document.querySelector('#edadEdit').value
        const sexo = document.querySelector('#sexoEdit').value
        const direccion = document.querySelector('#direccionEdit').value
        const celular = document.querySelector('#celularEdit').value
        const fecha = document.querySelector('#fechaEdit').value
        const hora = document.querySelector('#horaEdit').value
        const nombreBacteriologo = document.querySelector('#nombreBacEdit').value
        const examen = document.querySelector('#examenEdit').value

        
    
        const datos={
            _id:idActualizar,
            nombre,edad,sexo,direccion,celular,fecha,hora,nombreBacteriologo,examen
            
        }
        console.log(datos);
    
        editarPacientes(datos)
    }  

    }

    }