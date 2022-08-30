import TDACadena from './TDACadena.js'

// ? Creacion de instancia
const cadena = new TDACadena;

window.addEventListener('load', listaEventos);

function listaEventos() {
    const btnBorrarInicio = document.querySelector('#btn-borrarInicio');

    btnBorrarInicio.addEventListener('click', borrarInicio);
}

function borrarInicio() {
    const divResultado = document.querySelector('#resultado-borrarInicio')
    const stringBorrar = document.querySelector('#input-borrarInicio').value;

    //* Elimino contenido anterior
    limpiaContenido(divResultado);

    // * Toma 1 cadena | retorna arreglo con cadena modificada y dato eliminado 
    const BorraInicio = cadena.borraInicio(stringBorrar);
    const [cadenaModificada, caracter] = BorraInicio;

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
}

function limpiaContenido(elemento) {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

