export class Carga {
    #fun; //Función a ejecutar tras la llamada AJAX
    constructor() {
        //Establece la función a ejecutar en la primera llamada AJAX
        this.#fun=this.#funCarga;
        this.#funAjax("");   
    }

    #funAjax (param)  {
        if(param!="Selecciona un nombre"){
            let xhttp;  
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = ()=> {
                if (xhttp.readyState == 4 && xhttp.status == 200) {    
                    let obj = JSON.parse(xhttp.responseText);   
                    this.#fun(obj);
                }
            }
            xhttp.open("GET", 'tarea1Tema9.php?nombreID='+param, true);
            xhttp.send();
        }
    }
    #cargaTabla(obj){ 
    // Rellena la tabla de datos del nombre seleccionado en el SELECT
       
            let tabla=` <table>
                        <tr><th>ID</th>
                        <td>${obj.id} </td></tr>
                        <tr><th>Nombre</th>
                        <td>${obj.nombre}</td></tr>
                        <tr><th>Apellidos</th>
                        <td>${obj.apellidos}</td></tr>
                        <tr><th>Ciudad</th>
                        <td> ${obj.ciudad} </td></tr>
                        </table>`
         
         // Vuelca datos en el contenedor identificado.
            document.getElementById("cont").innerHTML = tabla; 
    }
    
    #funCarga (obj) {
       // Rellena el SELECT con los datos obtenidos de la BBDD 
        
        let sele=document.getElementById("sel"); 
        // Cambia la función a ejecutar en la siguiente llamada AJAX
        this.#fun=this.#cargaTabla;
        sele.addEventListener("change",()=>this.#funAjax(sele.value));
        let op=document.createElement("option");
        op.innerHTML="Selecciona un nombre";
        sele.appendChild(op);
        for(let i of obj ){      
                op=document.createElement("option");
                op.setAttribute("value",i.id);
                op.innerHTML=i.nombre;
                sele.appendChild(op);      
        }
    
    }  
}
