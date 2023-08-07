 const url = "http://localhost:5000/api/search/pacientes/Glisemia"

export const obtenerGlisemia = async () => {
    try {
        const glisemia = await fetch(url);
        const datosGlisemia = await glisemia.json();
        return datosGlisemia;
    } catch (error) {
        console.log(error,"no sirve");
    }
};

const urlN = "http://localhost:5000/api/glisemia"

export const nuevaGlisemia = async (glisemiass) => {
    try {
        const response = await fetch(urlN, {
            method: "POST",
            body: JSON.stringify(glisemiass),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            // La solicitud se ha realizado correctamente (código de respuesta 200-299)
            window.location.href ="glisemia.html"
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