import { obtenerPaciente,obtenerCuadroH } from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()
    mostrarListac()
});



async function mostrarLista() {
    const pacientes = await obtenerPaciente();
    const contenedor = document.querySelector(".contenido");
    const arrayPacientes = pacientes.pacientes;
    console.log(arrayPacientes);

    let contenidoHTML = "";

    arrayPacientes.forEach((elemento) => {
        const { idPaciente, nombre, examen,_id } = elemento;
        contenidoHTML += `
        <tr>
            <th scope="row">${idPaciente}</th>
            <td>${nombre}</td>
            <td>${examen}</td>
            <td>
                <button class="btn obte" id="${idPaciente}" nombre=${nombre} style="background-color: #937DE9; color: white; width: 100px;" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
        console.log(_id,nombre); 
    }
}

async function mostrarListac() {
    const hematico = await obtenerCuadroH();
    const pacientes = await obtenerPaciente();
    const contenedor = document.querySelector(".modal-content");
    const arrayHema = hematico.cuadrohematico;
    const arrayPacientes= pacientes.pacientes
    console.log(arrayHema);

    let contenidoHTML = ""; 

    arrayHema.forEach((elemento) => {

        const paciente = arrayPacientes.find((p) => p.id === elemento.idPaciente);

        if (!paciente) return
        
        const { hematocrito,hemoglobina,eritrocitos,leucositos,neutrofilos,eosinofilos,linfocitos,plaquetas,proteinasTotales,idExamenCuadro } = elemento;
        const { fecha,examen,hora, nombre,edad,idPaciente} = paciente
        contenidoHTML += `
        <div style="height: 93px;" class="modal-header">
                <div>
                    <h3>RESULTADOS</h3>
                    <p class="form-label">Fecha: ${fecha}</p>
                </div>
                <div>
                    <h3>${examen}</h3>
                    <p>Hora: ${hora}</p>
                </div>
                <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
            </div>
            <div class="modal-body">
                <div class="descarga">
                    <div class="d-flex justify-content-between">
                        <p class="form-label">Nombre: ${nombre}</p>
                        <p class="form-label">Edad: ${edad} años</p>
                    </div>
                    <div >
                        <p class="form-label">Id del Paciente:${idPaciente}</p>
                        <p class="form-label">examen: ${idExamenCuadro}</p>
                    </div>
                    <table class="table">
                        <thead>
                        <tr style="border-bottom: 2px solid black; border-top: 2px solid black;">
                            <th scope="col">Parametro</th>
                            <th scope="col">U</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Referencia</th>
                        </tr>
                        </thead>
                        <tbody class="contenido">
                            <tr style="border-bottom: 2px solid black;">
                                <td>Hematocrito</td>
                                <td>%</td>
                                <td>${hematocrito}</td>
                                <td>32.2-52.8</td>
                            </tr>
                            <tr style="border-bottom: 2px solid black;">
                                <td>Hemoglobina</td>
                                <td>%</td>
                                <td>${hemoglobina}</td>
                                <td>12.7-16.3</td>
                            </tr>
                            <tr style="border-bottom: 2px solid black;">
                                <td>Eritrocitos</td>
                                <td>Eri/ul</td>
                                <td>${eritrocitos}</td>
                                <td>5.3000.000-8600.00</td>
                            </tr>
                            <tr style="border-bottom: 2px solid black;">
                                <td>Leucositos</td>
                                <td>Leu/ul</td>
                                <td>${leucositos}</td>
                                <td>8.300-17.500</td>
                            </tr>
                            <tr style="border-bottom: 2px solid black;">
                                <td>Neutrofilos</td>
                                <td>%</td>
                                <td>${neutrofilos}</td>
                                <td>65-73</td>
                            </tr>
                            <tr style="border-bottom: 2px solid black;">
                                <td>Eosinofilos</td>
                                <td>%</td>
                                <td>${eosinofilos}</td>
                                <td>1-8</td>
                            </tr>
                            <tr style="border-bottom: 2px solid black;">
                                <td>Linfocitos</td>
                                <td>%</td>
                                <td>${linfocitos}</td>
                                <td>9-26</td>
                            </tr>
                            <tr>
                                <td>Plaquetas</td>
                                <td>Plt/ul</td>
                                <td>${plaquetas}</td>
                                <td>160.000-525.000</td>
                            </tr>
                            <tr style="border-bottom: 2px solid black;">
                                <td>Proteinas total</td>
                                <td>g/dl</td>
                                <td>${proteinasTotales}</td>
                                <td>65-73</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="botones-peque">
                    <button type="submit" class="btnForm" id="cancelar">Descargar PDF</button>
                    <button type="submit" class="btnForm" id="guardar">Descargar Exc</button>
                </div>
            </div>

        
        `;
    });

    contenedor.innerHTML = contenidoHTML;
}