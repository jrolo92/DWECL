
function funAjax(method, url, data, fun){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200) {
            fun(this);
        }
    };

    xhttp.open(method, url, true);
    if (method === 'POST' && data instanceof FormData) {
        // Para POST con FormData, no es necesario establecer el Content-Type,
        // ya que XMLHttpRequest lo hace automáticamente con el boundary.
        xhttp.send(data);
    } else if (method === 'GET') {
        xhttp.send();
    }
    // Nota: Para peticiones GET, si se usa 'data', se deberían serializar como query string.
    // En este ejercicio, GET no lleva data.
}

function renderizarLista(xhttp) {
    let contenedor = document.getElementById("listaUsuarios");
    
    const listaUsuarios = JSON.parse(xhttp.responseText);

    let htmlTabla = `
        <table class="data-table" border="1">
            <thead>
                <tr><th>ID</th><th>Nombre</th><th>Apellidos</th><th>Ciudad</th></tr>
            </thead>
            <tbody>`
    ;
    
    listaUsuarios.forEach(usuario => {
        htmlTabla += `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.apellidos}</td>
                <td>${usuario.ciudad}</td>
            </tr>
        `;
    });
    
    htmlTabla += `</tbody></table>`;
    contenedor.innerHTML = htmlTabla;
}

function cargarListaUsuarios(){  
    let contenedor = document.getElementById("listaUsuarios");
    contenedor.innerHTML = "Cargando datos..."

    // Llamada AJAX GET
    funAjax('GET', 'get_users.php', null, renderizarLista);

}

function insertarUsuario(e) {
    // Evitar el comportamiento por defecto de recargar la página
    e.preventDefault(); 

    const formulario = document.getElementById('formulario');
    const feedback = document.getElementById('mensajeFeedback');
    
    // Crear el objeto FormData con los datos del formulario
    const formData = new FormData(formulario);

    feedback.innerHTML = '<p>Procesando inserción...</p>';
    feedback.className = '';

    // Llamada AJAX POST
    funAjax('POST', 'insert_users.php', formData, function(xhttp) {
        const respuesta = JSON.parse(xhttp.responseText);

        feedback.innerHTML = `<p>${respuesta.message}</p>`;
        feedback.className = 'success';
        
        // Limpiar el formulario y recargar la lista
        formulario.reset();
        cargarListaUsuarios(); // <--- CLAVE: Actualización dinámica

    });
}

function inicializar() {
    // 1. Asigna el manejador al evento submit del formulario UNA SOLA VEZ
    const formulario = document.getElementById("formulario");
    if (formulario) {
         formulario.addEventListener("submit", insertarUsuario);
    }
    
    // 2. Carga la lista de usuarios al inicio
    cargarListaUsuarios(); 
}

inicializar();
