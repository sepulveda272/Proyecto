import {obtenerPaciente,nuevoPacientes,deletePacientes,editarPacientes} from "./API.js"

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
        const { idPaciente, nombre, edad, nombreBacteriologo, hora } = elemento;
        contenidoHTML += `
        <tr>
            <th scope="row">${idPaciente}</th>
            <td>${nombre}</td>
            <td>${edad}</td>
            <td>${nombreBacteriologo}</td>
            <td>${hora}</td>
            <td>
                <button type="button" class="btn" style= "background-color: #937DE9;" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Actualizar
                </button>
            </td>
            <td><button class="btn btn-danger">Borrar</button></td>
        </tr>
        `;
    });

    contenedor.innerHTML = contenidoHTML;
}
