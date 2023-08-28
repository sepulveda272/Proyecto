 const url = "http://localhost:5000/api/search/pacientes/Perfil Lipidico"

export const obtenerPerfil = async () => {
    try {
        const perfil = await fetch(url);
        const datosPerfil = await perfil.json();
        return datosPerfil;
    } catch (error) {
        console.log(error,"no sirve");
    }
};

const urlN = "http://localhost:5000/api/perfilLipidico"

export const nuevoPerfilL = async (lipidico) => {
    try {
        const response = await fetch(urlN, {
            method: "POST",
            body: JSON.stringify(lipidico),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            // La solicitud se ha realizado correctamente (código de respuesta 200-299)
            window.location.href ="perfil.html"
            console.log("Paciente agregado exitosamente");
        } else {
            // Si el servidor responde con un código de error
            console.log("Error al agregar el paciente:", response.status, response.statusText);
        }
    } catch (error) {
        // Si hay un error en la conexión o en la solicitud
        console.log("Error en la solicitud:", error);
    }
};