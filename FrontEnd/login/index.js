document.addEventListener('DOMContentLoaded',cambio)
function cambio(){
    const btn = document.querySelector('#registrarB');
    const cambio = document.querySelector('.registroD');
    btn.addEventListener('click',()=>{
        cambio.innerHTML=`
        <div class="titulo">
            <img id="logo" src="../img/logoRVG.png" alt="Not Found">
            <h1>Bacteriologia_RVG</h1>
            
        </div>
        
        `
    })
}

