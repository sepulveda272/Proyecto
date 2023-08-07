import { obtenerGlisemia, nuevaGlisemia } from "./API.js"

document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()
});


/* LISTAR CATEGORIAS  - CRUD (R) */

async function mostrarLista() {
    const glisemia = await obtenerGlisemia();
    const contenedor = document.querySelector(".contenido");
    const arrayGlisemia = glisemia.result;
    console.log(arrayGlisemia);

    let contenidoHTML = "";

    arrayGlisemia.forEach((elemento) => {
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

const formulario =document.querySelector('#formGlisemia')
formulario.addEventListener('submit',nuevasGlisemia)

function nuevasGlisemia(e){
    e.preventDefault();

    const glisemiaBasal = document.querySelector('#inputGlisemiaBasal').value
    const ingestion = document.querySelector('#inputIngestion').value
    const idExamenGlisemia = document.querySelector('#inputIdPaciente').value
    
    const registrar={
        glisemiaBasal,ingestion,idExamenGlisemia
    }

    if(validate(registrar)){
        alert ('todos los campos son obligatirios')
        return 
        
    }
    
    console.log(registrar);
    nuevaGlisemia(registrar)
}

function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

}