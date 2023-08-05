import {obtenerBacteriologo,deleteBacteriologo,editarBacteriologo} from "./API.js"

document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()
});


/* LISTAR CATEGORIAS  - CRUD (R) */

async function mostrarLista() {
    const bacteriologo = await obtenerBacteriologo();
    const contenedor = document.querySelector(".cardds");
    const arrayBacteriologos = bacteriologo.bacteriologos;
    console.log(arrayBacteriologos);

    let contenidoHTML = "";

    arrayBacteriologos.forEach((elemento) => {
        const {imagen,nombre,cedula,edad,email,experiencia,_id} = elemento;
        contenidoHTML += `
        <div class="card">
            <div class="card-border-top">
            </div>
            <div class="img">
            <img style="height: 100%; width: 100%" src="${imagen}" alt="">
            </div>
            <span>${nombre}</span>
            <p class="job">${cedula}</p>
            <hr>
            <div class="info">
                <p>Años de edad: ${edad}</p>
                <p>Experiencia: ${experiencia}</p>
                <p>Correo: ${email}</p>
            </div>
            <div>
            <button class="btn update" idActualizar=${_id} style="background-color: #937DE9;" data-bs-toggle="modal" data-bs-target="#exampleModal"> Actualizar
            </button>
            <button class="btn btn-danger eliminar" id="${_id}"> Borrar
            </button>
            </div>
            
        </div>
        `;
    });

    contenedor.innerHTML = contenidoHTML;
}


const tablapaciente = document.querySelector(".cardds");
tablapaciente.addEventListener('click', confirmDelete)




function confirmDelete(e){
    if(e.target.classList.contains('eliminar')){
        const _id = e.target.getAttribute('id')
        console.log(_id);
        const confirmar = confirm('¿DESEAS ELIMNAR AL PACIENTE?')
        if(confirmar){
            deleteBacteriologo(_id)
        }   
    }
}



const nuevosDatos = document.querySelector('.cardds')
nuevosDatos.addEventListener('click',actualizar)


function actualizar(e){
    e.preventDefault();
  
    if(e.target.classList.contains('update')){
        
        const idActualizar= e.target.getAttribute('idActualizar')
        console.log(idActualizar);

        const datosNuw = document.querySelector('#formEditBacteriologo')
        datosNuw.addEventListener('submit',uppdateCiclista)
    
    function uppdateCiclista(e){
        e.preventDefault();
        
        const nombre = document.querySelector('#nombreEdit').value
        const edad = document.querySelector('#edadEdit').value
        const email = document.querySelector('#emailEdit').value
        const experiencia = document.querySelector('#experienciaEdit').value
        const cedula = document.querySelector('#cedulaEdit').value
        const imagen = document.querySelector('#imagenEdit').value
        
    
        const datos={
            _id:idActualizar,
            nombre,edad,email,experiencia,cedula,imagen
            
        }
        console.log(datos);
    
        editarBacteriologo(datos)
    }  

    }

    }