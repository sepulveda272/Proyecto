const boton = document.querySelector('#registrarB');
const botonRegistrar = document.querySelector('#registrarseB')
const registroD = document.querySelector('.registroD');
const registroUser = document.querySelector('.registroUser')

boton.addEventListener('click', ()=>{
    if(registroUser.classList.contains('oculto')){
        registroUser.classList.remove('oculto');
        registroD.classList.add('oculto')
    }
})

botonRegistrar.addEventListener('click', ()=>{   
    if(registroD.classList.contains('oculto')){
        registroD.classList.remove('oculto');
        registroUser.classList.add('oculto')
    }
})