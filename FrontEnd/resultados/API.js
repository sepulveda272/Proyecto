const url = "http://localhost:5000/api/pacientes"


export const obtenerPaciente = async () => {
    try {
        const pacientes = await fetch(url);
        const datosPacientes = await pacientes.json();
        return datosPacientes;
    } catch (error) {
        console.log(error,"no sirve");
    }
};



const urlOne = "http://localhost:5000/api/cuadroHematico"

export const obtenerCuadroH = async (_id) => {
    console.log(_id);
    try {
        const cuadroH = await fetch(urlC,`/`,_id);
        console.log(cuadroH);
        const datosCuadroH = await cuadroH.json();
        return datosCuadroH;
    } catch (error) {
        console.log(error,"no sirve");
    }
}; 


/* export async function obtenerCuadroH(_id) {
    try {
        const response = await fetch(`${urlOne}/${_id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}; */