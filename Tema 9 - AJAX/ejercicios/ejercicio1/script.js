cargarNombres();

// Crea el objeto AJAX
function funAjax(param, fun) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            fun(this);
        }
    };

    xhttp.open("GET", "jsonGET.php?id=" + param, true);
    xhttp.send();
}

/* 
    Función que obtiene un JSON con los datos de la bd (a partir de una consulta sql mediante php)
    Recorre estos datos y pinta el nombre y el id como opciones del select.
*/
function cargarNombres() {
    
    // xhttp.onreadystatechange = function (){
    //     if (this.readyState == 4 && this.status == 200) {
    //         let obj = JSON.parse(this.responseText);
            let opcion = document.getElementById("sel");
            opcion.innerHTML = "<option>Seleccione nombre</option>";
            obj.forEach(opciones => {
                opcion.innerHTML += `<option value=${opciones.id}>${opciones.nombre}</option>`;
            });
        // }
    // };
}

/*
    Función que obtiene un JSON con los datos de la bd (a partir de una consulta sql mediante php)
    y a partir del id 
*/
function cargarTabla(id){

    // xhttp.onreadystatechange = function (){
    //     if (this.readyState == 4 && this.status == 200){
    //     let obj = JSON.parse(this.responseText);
        let tabla = document.getElementById("cont");
        tabla.innerHTML = `<table>
            <tr><th>ID</th><td>${obj.id}</td></tr>
            <tr><th>Nombre</th><td>${obj.nombre}</td></tr>
            <tr><th>Apellidos</th><td>${obj.apellidos}</td></tr>
            <tr><th>Ciudad</th><td>${obj.ciudad}</td></tr>
        </table>`
        }
//     };
// }