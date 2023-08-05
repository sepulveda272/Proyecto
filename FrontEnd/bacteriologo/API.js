const url = "http://localhost:5000/api/bacteriologos"


export const obtenerBacteriologo = async () => {
    try {
        const bacteriologos = await fetch(url);
        const datoBacteriologo = await bacteriologos.json();
        console.log(datoBacteriologo);
        return datoBacteriologo;
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const nuevoBacteriologo = async (bacteriologos) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(bacteriologos),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            // La solicitud se ha realizado correctamente (código de respuesta 200-299)
            window.location.href ="bateriologo.html"
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


export const deleteBacteriologo = async (_id) => {
  try {
        await fetch(`${url}/${_id}`,{
            method:'DELETE'
        })
        window.location.href ="bateriologo.html"
    } catch (error) {
        console.log(error);
    }
};


export const editarBacteriologo = async (datos) => {
    try {
        await fetch(`${url}/${datos._id}`, {
            method: "PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datos)
        }).then(response => response.json()).then(updatedDatos => {
            console.log('Datos actualizados:', updatedDatos);
        });
        window.location.href ="bateriologo.html"
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
};