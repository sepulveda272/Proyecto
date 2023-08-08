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
        const { idPaciente, nombre, edad, nombreBacteriologo, hora,_id,sexo,direccion,fecha,celular,examen } = elemento;
        contenidoHTML += `
        <tr>
            <th scope="row">${idPaciente}</th>
            <td>${nombre}</td>
            <td>${edad}</td>
            <td>${nombreBacteriologo}</td>
            <td>${hora}</td>
            <td>
                <button class="btn update" idActualizar=${_id} 
                nombre="${nombre}" 
                edad="${edad}"
                sexo="${sexo}"
                direccion="${direccion}"
                celular="${celular}"
                fecha="${fecha}"
                hora="${hora}"
                nombreBacteriologo="${nombreBacteriologo}"
                examen="${examen}"
                
                style="background-color: #937DE9;" data-bs-toggle="modal" data-bs-target="#exampleModal">
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

        const nombre= e.target.getAttribute('nombre')
        const edad= e.target.getAttribute('edad')
        const sexo= e.target.getAttribute('sexo')
        const direccion= e.target.getAttribute('direccion')
        const celular= e.target.getAttribute('celular')
        const fecha= e.target.getAttribute('fecha')
        const hora= e.target.getAttribute('hora')
        const nombreBacteriologo= e.target.getAttribute('nombreBacteriologo')
        const examen= e.target.getAttribute('examen')

        const nombreModla=document.querySelector('#nombreEdit')
        nombreModla.value=nombre;

        const edadModla=document.querySelector('#edadEdit')
        edadModla.value=edad;
        
        const sexoModla=document.querySelector('#sexoEdit')
        sexoModla.value=sexo;

        const direccionModla=document.querySelector('#direccionEdit')
        direccionModla.value=direccion;

        const celularModla=document.querySelector('#celularEdit')
        celularModla.value=celular;
        
        const fechaModla=document.querySelector('#fechaEdit')
        fechaModla.value=fecha;
        
        const horaModla=document.querySelector('#horaEdit')
        horaModla.value=hora;

        const nombreBacModla=document.querySelector('#nombreBacEdit')
        nombreBacModla.value=nombreBacteriologo;

        const examenModla=document.querySelector('#examenEdit')
        examenModla.value=examen;

        console.log(idActualizar);

        const datosNuw = document.querySelector('#formEditPaciente')
        datosNuw.addEventListener('submit',uppdatePaciente)
    
    function uppdatePaciente(e){
        e.preventDefault();
        const nombrePaciente = e.target.getAttribute('nombre')
        console.log(nombrePaciente);
        
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