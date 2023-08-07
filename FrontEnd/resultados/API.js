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

const urlC = "http://localhost:5000/api/cuadroHematico"

export const obtenerCuadroH = async () => {
    try {
        const cuadroH = await fetch(urlC);
        const datosCuadroH = await cuadroH.json();
        return datosCuadroH;
    } catch (error) {
        console.log(error,"no sirve");
    }
};