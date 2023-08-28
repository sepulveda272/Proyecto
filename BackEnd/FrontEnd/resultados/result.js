import { obtenerPaciente,obtenerCuadroH} from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()
    
});



async function mostrarLista() {
    const pacientes = await obtenerPaciente();
    const contenedor = document.querySelector(".contenido");
    const arrayPacientes = pacientes.pacientes;
    console.log(arrayPacientes);

    let contenidoHTML = "";

    arrayPacientes.forEach((elemento) => {
        const { idPaciente, nombre, examen,edad,fecha,hora,_id } = elemento;
        contenidoHTML += `
        <tr>
            <th scope="row">${idPaciente}</th>
            <td>${nombre}</td>
            <td>${examen}</td>
            <td>
                <button class="btn obte" id="${idPaciente}" nombre=${nombre} edad=${edad} examen=${examen} fecha=${fecha} hora=${hora} style="background-color: #937DE9; color: white; width: 100px;" data-bs-toggle="modal" data-bs-target="#exampleModal">
            VER
          </button>
            </td>
            <td><button style="width: 100px; height: 31px;" class="btn btn-danger"></button></td>
        
        </tr>

        
        `;
    });

    contenedor.innerHTML = contenidoHTML;
}

const tablapaciente = document.querySelector(".contenido");
tablapaciente.addEventListener('click', obteneId)

function obteneId(e){
    if(e.target.classList.contains('obte')){
        const _id = e.target.getAttribute('id')
        const nombre = e.target.getAttribute('nombre')
        const edad = e.target.getAttribute('edad')
        const examen = e.target.getAttribute('examen')
        const fecha = e.target.getAttribute('fecha')
        const hora = e.target.getAttribute('hora')
        console.log(_id,nombre,edad,examen,fecha,hora); 


        const nombre_Edad = document.querySelector('#nombre-edad')
        nombre_Edad.innerHTML=`
        <p class="form-label">Nombre: ${nombre}</p>
        <p class="form-label">Edad: ${edad} </p>
        
        `

        const examne_id= document.querySelector('#examen-id')
        examne_id.innerHTML=`
        <p class="form-label">Id del Paciente:${_id}</p>
        <p class="form-label">examen: ${examen}</p>
        
        `

        const fechaExamen = document.querySelector('#fecha')
        fechaExamen.innerHTML=`
        <h3>RESULTADOS</h3>
        <p class="form-label">Fecha: ${fecha}</p>
        
        `


        const examenModal = document.querySelector('#examen')
        examenModal.innerHTML=`
        <h3>${examen}</h3>
        <p>Hora: ${hora}</p>
        
        `
    }
}





