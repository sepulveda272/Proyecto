const url = "http://localhost:5000/api/usuarios"
const urlLogin = "http://localhost:5000/api/auth/login"

export const nuevoRegistro =  async (resgistros) =>{
    try {
        await fetch(url,{
            method: "POST",
            body:JSON.stringify(resgistros),
            headers:{'Content-Type':'application/json'}
        });
        window.location.href ="index.html"
    } catch (error) {
        console.log(error,"no sirve");
    }
}

/* export const logeate = async (login) => {
    try {
        await fetch(urlLogin, {
            method: "POST",
            body: JSON.stringify(login),
            headers: { 'Content-Type': 'application/json' }
        });
        window.location.href = "../home/home.html"
    } catch (error) {
        console.log(error, "Error en el inicio de sesión.");
    }
}; */

export const logeate = async (datos) => {
    try {
        const response = await fetch(urlLogin, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: { 'Content-Type': 'application/json' }
        });
        /* window.location.href ="../home/home.html" */
        const data = await response.json();

        if (response.ok) {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
};