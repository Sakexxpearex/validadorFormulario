datos = {
    nombre:'',
    correo:'',
    mensaje: ''
}

//Obtencion del DOM
const nombre = document.querySelector('#nombre')
const correo = document.querySelector('#correo')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario')

//evento Submit

//eventos input
nombre.addEventListener('input',leerTexto)
correo.addEventListener('input',leerTexto)
mensaje.addEventListener('input',leerTexto)

//evento de submit
formulario.addEventListener('submit',function(evento){
    evento.preventDefault()

    //validar formulario
    const {nombre,email,mensaje} = datos

    if (nombre ===''|| email==='' || mensaje==='') {
        mostrarError('todos los campos son obligatorios')
        return;
    }
    console.log(datos)
    //enviar formulario

    esValido('Se ha enviado!!')

})



//Leer formulario
function leerTexto(e){
    
    datos[e.target.id]=e.target.value

    console.log(datos)
}

function mostrarError(mensaje){
    const error = document.createElement('P')
    error.textContent=mensaje;
    error.classList.add('error')
    formulario.appendChild(error)

    setTimeout(() => {
        error.remove()
    }, 5000);
}

function esValido(mensaje){
    const valido = document.createElement('p')
    valido.textContent = mensaje
    valido.classList.add('valido')
    formulario.appendChild(valido)
    setTimeout(() => {
        valido.remove()
    }, 5000);
}








