
function funAjax(url, fun){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200) {
            fun(this);
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
}

function eventoBoton (){
    let boton = document.getElementById("boton");
    boton.addEventListener("click", cargarUsuarios);
}

function cargarUsuarios(){
    
    let contenedor = document.getElementById("contenedor");

    funAjax("get_users.php", function fun1(xhttp){
        let obj = JSON.parse(xhttp.responseText);
        let tablaHTML = `<table border=1>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nombre</th>
                                            <th>Apellidos</th>
                                            <th>Ciudad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
        `;                    
        
        obj.forEach(usuario => {
            tablaHTML += `<tr>
                                        <td>${usuario.id}</td>
                                        <td>${usuario.nombre}</td>
                                        <td>${usuario.apellidos}</td>
                                        <td>${usuario.ciudad}</td>
                                     </tr>
            `;
        });

        tablaHTML += `</tbody></table>`;

        contenedor.innerHTML = tablaHTML;
    });
}

eventoBoton();