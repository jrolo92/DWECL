
// Llamamos al método una vez se cargue el html para mostrar los nombres en el select
cargarNombres();

/*
    Función que hace una petición AJAX y cuando recibe la respuesta ejecuta la función fun
*/
function funAjax(url, fun) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            fun(this);
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
}

/* 
    Función que obtiene un JSON con los datos de la bd (a partir de la url sin parámetros)
    Recorre estos datos y pinta el nombre y el id como opciones del select.
    Llama a la función cargar tabla cuando se selecciona una opción del select.
*/
function cargarNombres() {
    
    // Llamamos a funAjax pasando:
    // 1. La URL del PHP que devuelve la lista de nombres.
    // 2. Una función que se ejecuta cuando llega la respuesta.
    funAjax("jsonGET.php", function fun1 (xhttp){
        let obj = JSON.parse(xhttp.responseText);
        let opcion = document.getElementById("sel");
        opcion.innerHTML = "<option>Seleccione nombre</option>";
        // Recorremos el JSON y pintamos cada nombre en el select
        obj.forEach(opciones => {
            opcion.innerHTML += `<option value=${opciones.id}>${opciones.nombre}</option>`;
        });

        // Evento para añadir la tabla cuando se seleccione un nombre del select
        opcion.addEventListener("change", function (){
            if (this.value !== ""){
                cargarTabla(this.value);
            }
        });
    });
}

/*
    Función que obtiene un JSON con los datos de la bd (a partir de la url con parámetros)
    y pinta una tabla con los datos del id indicado.
*/
function cargarTabla(id){

    // Llamamos a funAjax pasando:
    // 1. La URL del PHP que devuelve los datos de un registro (id).
    // 2. Una función que se ejecuta cuando llega la respuesta.
    funAjax("jsonGET.php?id=" + id, function fun2 (xhttp){
        let obj = JSON.parse(xhttp.responseText);
        let tabla = document.getElementById("cont");
        tabla.innerHTML = `<table border="1">
            <tr><th>ID</th><td>${obj.id}</td></tr>
            <tr><th>Nombre</th><td>${obj.nombre}</td></tr>
            <tr><th>Apellidos</th><td>${obj.apellidos}</td></tr>
            <tr><th>Ciudad</th><td>${obj.ciudad}</td></tr>
            </table>`
        ;
    });
}
