    email.addEventListener("keyup", valida);
    
    function valida() {
        var email = document.getElementById("mail");
        if (email.validity.typeMismatch) {                  // Si no coincide con el tipo se motrará un mensaje personalizado. 
            email.setCustomValidity("¡Correo erróneo!");
        } else {
            email.setCustomValidity("");
        }
    }


