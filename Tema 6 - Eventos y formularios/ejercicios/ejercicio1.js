class BajaVehiculo{
    constructor (){
        this.#fEvento();
    }

    #fEvento(){
        // Controladores de los futuros eventos
        dni.addEventListener('click', cambiarEtiqueta);
        dni.addEventListener('blur', etiquetaOriginal);
        matricula.addEventListener('keyup', validarMatricula);
    }

    #cambiarEtiqueta(){
    var dni = document.getElementById("dni");
    var etiqueta = document.getElementById("etiquetadni");   
    etiqueta.innerHTML = "Editando DNI...";
    }

    #etiquetaOriginal(){
    var dni = document.getElementById("dni");
    var etiqueta = document.getElementById("etiquetadni");
    etiqueta.innerHTML = "DNI:";
    }
}

// La instanciamos con un onload
// document.addEventListener('onload', new BajaVehiculo());
// Si lo vamos a importar basta con crear el objeto.
new BajaVehiculo();

// var etiqueta = document.getElementById("etiquetadni");





function validarMatricula(){
    var matricula = document.getElementById("matricula");
    if(matricula.validity.typeMismatch){
        matricula.setCustomValidity("Tiene que ser: 1234ABC");
    } else {
        matricula.setCustomValidity("");
    }
}

