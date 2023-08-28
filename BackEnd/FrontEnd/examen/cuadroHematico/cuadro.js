import { obtenerCuadroH, nuevoCuadro } from "./API.js"

document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()
});


/* LISTAR CATEGORIAS  - CRUD (R) */

async function mostrarLista() {
    const cuadro = await obtenerCuadroH();
    const contenedor = document.querySelector(".contenido");
    const arrayCuadroH = cuadro.result;
    console.log(arrayCuadroH);

    let contenidoHTML = "";

    arrayCuadroH.forEach((elemento) => {
        const { idPaciente, nombre,_id } = elemento;
        contenidoHTML += `
        <tr>
            <td></td>
            <th scope="row">${idPaciente}</th>
            <td>${nombre}</td>
            <td><button style="background-color: #36FC79;" class="btn obte" id="${idPaciente}">Resultados</button></td>
        </tr>
        `;
    });

    contenedor.innerHTML = contenidoHTML;
}


const formulario =document.querySelector('#formResultadosCuadro')
formulario.addEventListener('submit',nuevoCuadrosH)

function nuevoCuadrosH(e){
    e.preventDefault();

    const hematocrito = document.querySelector('#inputHematocrito').value
    const hemoglobina = document.querySelector('#inputHemoglobina').value
    const eritrocitos = document.querySelector('#inputEritrocitos').value
    const leucositos = document.querySelector('#inputLeucositos').value
    const neutrofilos = document.querySelector('#inputNeutrofilos').value
    const eosinofilos = document.querySelector('#inputEosinofilos').value
    const linfocitos = document.querySelector('#inputLinfocitos').value
    const plaquetas = document.querySelector('#inputPlaquetas').value
    const proteinasTotales = document.querySelector('#inputProteinasT').value
    const idExamenCuadro = document.querySelector('#inputIdPaciente').value
    
    const registrar={
        hematocrito,hemoglobina,eritrocitos,leucositos,neutrofilos,eosinofilos,linfocitos,plaquetas,proteinasTotales,idExamenCuadro
    }

    if(validate(registrar)){
        alert ('todos los campos son obligatirios')
        return 
        
    }
    
    console.log(registrar);
    nuevoCuadro(registrar)
}

function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

}
