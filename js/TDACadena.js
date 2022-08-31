class TDACadena {

    // Al no ser tipado así quedan los atributos
    cadena;

    constructor(cadena){
        this.cadena = cadena
    }

    borraInicio(cadena) {
        if (cadena.length > 0) {
            //? retorna el carácter más a la izquierda de la cadena S y la cadena S modificada
            const cadenaModificada = cadena.slice(1); 
            const caracter = cadena[0];

            return [cadenaModificada, caracter];
        }
    }

    agreagaFinal(cadena, caracter) {
        if (cadena.length > 0 && cadena.length <80) {
            return cadena.concat(caracter);
        }
    }

    vacia(cadena) {

        if (cadena === '' | null) {
            return true
        }

        return false
    }

}

export default TDACadena;