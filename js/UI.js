import TDACadena from './TDACadena.js'

window.addEventListener('load', listaEventos);

// ? Creacion de instancia vacia
const objString = new TDACadena('');


function listaEventos() {
    const cadenaPrincipal = document.querySelector('#string-principal');
    cadenaPrincipal.addEventListener('change',actualizaCadenaPrincipal);

    const btnBorrarInicio = document.querySelector('#btn-borrarInicio');
    const btnStringPrincipal = document.querySelector('#btn-string-principal');


    btnStringPrincipal.addEventListener('click', creaStringPrincipal);
    btnBorrarInicio.addEventListener('click', borrarInicio);
}

//! Crear funcion para eliminar todos los resultados generados por metodos 

function actualizaCadenaPrincipal() {
    const divResultado = document.querySelector('#string-principal')
    limpiaContenido(divResultado);
    
    const parrafoResultado = document.createElement('p');
    parrafoResultado.innerHTML = `<p>String principal "<span class="string-principal">${objString.cadena}</span>"</p>`  
    divResultado.appendChild(parrafoResultado);
}

function creaStringPrincipal() {
    const inpText = document.querySelector('#inp-string-princial').value;
    objString.cadena = inpText;

    const divResultado = document.querySelector('#string-principal');

    const divResultadoBorrarInicio = document.querySelector('#resultado-borrarInicio')
    
    //* Elimino contenido anterior
    limpiaContenido(divResultadoBorrarInicio);

    limpiaContenido(divResultado);
    
    const parrafoResultado = document.createElement('p');
    parrafoResultado.innerHTML = `<p>String principal "<span class="string-principal">${objString.cadena}</span>"</p>`

    divResultado.appendChild(parrafoResultado);
}

function borrarInicio() {
    const divResultado = document.querySelector('#resultado-borrarInicio')
    
    //* Elimino contenido anterior
    limpiaContenido(divResultado);
    
    // * Toma 1 cadena | retorna arreglo con cadena modificada y dato eliminado 
    
    // ! Aqui va una validacion | objString.cadena != 0
    const BorraInicio = objString.borraInicio(objString.cadena);

    const [cadenaModificada, caracter] = BorraInicio;

    objString.cadena = cadenaModificada;
    
    const p = document.createElement('p');
    p.innerHTML = `
    <p class="resaltado"> Nuevo string : 
    <span class="fuente-regular" >${cadenaModificada}</span>
    <span class="color-black"> | </span>
    <span class="color-secundario">
    Caracter eliminado: 
    <span class="fuente-regular" >${caracter} <span/> 
    </span>
    </p>`
    
    divResultado.appendChild(p);

    actualizaCadenaPrincipal();
}

function limpiaContenido(elemento) {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

