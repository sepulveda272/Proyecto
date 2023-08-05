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


export const nuevoPacientes = async (pacientes) => {
    try {
        await fetch(url,{
            method: "POST",
            body:JSON.stringify(pacientes),
            headers:{'Content-Type':'application/json'}
        });
        window.location.href ="home.html"
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const deletePacientes = async (_id) => {
  try {
        await fetch(`${url}/${_id}`,{
            method:'DELETE'
        })
        window.location.href ="home.html"
    } catch (error) {
        console.log(error);
    }
};


export const editarPacientes = async (datos) => {
    try {
        await fetch(`${url}/${datos._id}`, {
            method: "PATCH",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datos)
        }).then(response => response.json()).then(updatedDatos => {
            console.log('Datos actualizados:', updatedDatos);
        });
        window.location.href ="home.html"
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
};