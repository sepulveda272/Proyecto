import { obtenerPerfil, nuevoPerfilL } from "./API.js"

document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()
});


/* LISTAR CATEGORIAS  - CRUD (R) */

async function mostrarLista() {
    const perfil = await obtenerPerfil();
    const contenedor = document.querySelector(".contenido");
    const arrayPerfil = perfil.result;
    console.log(arrayPerfil);

    let contenidoHTML = "";

    arrayPerfil.forEach((elemento) => {
        const { idPaciente, nombre,_id } = elemento;
        contenidoHTML += `
        <tr>
            <td></td>
            <th scope="row">${idPaciente}</th>
            <td>${nombre}</td>
            <td><button style="background-color: #36FC79;" class="btn" id="${_id}">Resultados</button></td>
        </tr>
        `;
    });

    contenedor.innerHTML = contenidoHTML;
}

const formulario =document.querySelector('#formResultadosPerfil')
formulario.addEventListener('submit',nuevoPerfil)

function nuevoPerfil(e){
    e.preventDefault();

    const glucosa = document.querySelector('#inputGlucosa').value
    const colesterolTotal = document.querySelector('#inputColesterolT').value
    const colesterolHDL = document.querySelector('#inputColesterolhdl').value
    const colesterolLDL = document.querySelector('#inputColesterolLDL').value
    const colesterolVLDL = document.querySelector('#inputColesterolVLDL').value
    const triglicerios = document.querySelector('#inputTrigliceridos').value
    const idExamenPerfil = document.querySelector('#inputIdPaciente').value
    
    const registrar={
        glucosa,colesterolTotal,colesterolHDL,colesterolLDL,colesterolVLDL,triglicerios,idExamenPerfil
    }

    if(validate(registrar)){
        alert ('todos los campos son obligatirios')
        return 
        
    }
    
    console.log(registrar);
    nuevoPerfilL(registrar)
}

function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

}
