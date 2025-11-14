class BajaVehiculo {
    constructor() {
        this.#fEvento();    // Cuando se cree un objeto de esta clase se va a disparar el fEvento directamente y estará preparado para los posibles eventos futuros
    }

    // Método que va a estar preparado para los posibles eventos que se produzcan en el formulario.
    #fEvento() {
        // Obtenemos los datos con los que se van a disparar eventos por su id.
        var dni = document.getElementById("dni");
        var matricula = document.getElementById("matricula");

        // Controladores de los futuros eventos.
        // Con la funcion flecha te aseguras de que el this hace referncia a la clase y no al input. Con el bind tambien nos aseguramos de que sea de la clase
        dni.addEventListener('focus', () => this.#cambiarEtiqueta());           // Cuando se haga click en DNI se ejecuta el método cambiarEtiqueta
        // dni.addEventListener('focus', this.#cambiarEtiqueta.bind(this));
        dni.addEventListener('blur', () => this.#etiquetaOriginal());           // Cuando se salga del DNI se ejecuta el método etiquetaOriginal
        matricula.addEventListener('keyup', () => this.#validarMatricula());
    }

    #cambiarEtiqueta() {
        var etiqueta = document.getElementById("etiquetadni");      // Obtenemos el valor de la etiqueta de dni por su id
        etiqueta.innerHTML = "Editando DNI...";                     // La cambiamos a "Editando DNI..."
    }

    #etiquetaOriginal() {
        var etiqueta = document.getElementById("etiquetadni");      // Obtenemos el valor de la etiqueta de DNI por su id
        etiqueta.innerHTML = "DNI:";                                // La cambiamos al valor inicial
    }

    #validarMatricula() {
        var matricula = document.getElementById("matricula");
        // El método checkValidity devolverá true si el campo cumple todas las restricciones html (required, pattern o type)
        if (matricula.validity.patternMismatch) {                      // Cuando sea false
            matricula.setCustomValidity("Tiene que ser: 1234ABC");     // Devolverá el mensaje personalizado
        } else {
            matricula.setCustomValidity("");
        }
    }

}

// La instanciamos con un onload si vamos a poner el codigo interno en el html
// document.addEventListener('onload', new BajaVehiculo());

// Si vamos a enlazar el javascript en el html (como es el caso) basta con crear el objeto.
new BajaVehiculo();
