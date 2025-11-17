class Sesion {
    // El atributo será un array de objetos.
    #usuarios = [
        {user: "pepe", password: "Aa123456"},
        {user: "peri", password: "Bb123456"},
        {user: "paco", password: "Cc123456"}
    ]

    /* 
        Cada vez que se cree una instancia de la clase Sesion se va a disparar el fEvento
        que estará preparado para los posibles eventos
    */
    constructor(){
        this.#fEvento(); 
    }

    /*
        Creamos los controladores de eventos.
        Método que va a estar preparado para disparar otros métodos cuando se cumplan ciertos eventos
    */
    #fEvento(){
        // Al escribir la contraseña se va a validar con el método 
        var password = document.getElementById("password");
        password.addEventListener('keyup', ()=> this.#validarPassword());
        // Al iniciar sesión se va a validar con el método validarSesion()
        var sesion = document.getElementById("sesion");
        sesion.addEventListener('submit', () => this.#validarSesion());
    }


    /*
        Método que comprueba si la contraseña introducida en el formulario coincide con el patrón especificado.
    */
    #validarPassword(){
        var password = document.getElementById("password");
        if (password.validity.patternMismatch){
            password.setCustomValidity("El formato debe ser: Aa123456");
        } else {
            password.setCustomValidity("");
        }
    }

    /*
        Método que comprueba si el usuario y contraseña coinciden con los almacenados en el atributo usuarios.
    */
    #validarSesion(){
        // Recogemos los valores de usuario y contraseña del formulario.
        var userForm = document.getElementById("user").value;
        var passForm = document.getElementById("password").value;
        // Por defecto el mensaje será de no coincidencia
        var mensaje = "No coinciden usuario o contraseña";
        // Recorremos el array de usuarios y si coinciden cambiamos el valor del mensaje
        for (var usuario of this.#usuarios){
            if (usuario.user === userForm && usuario.password === passForm ){
                var mensaje = "Se ha iniciado sesión";
                break;
            }
        }
        // Muestra el mensaje
        alert(mensaje);
    }
}


// Iniciamos un objeto de la clase Sesion (IMPORTANTE)
new Sesion();