class Pregunta {

    constructor (){

    }

    pregHTML(enun, resp, cont){
        // Creamos los elementos
        var contenedor = document.createElement("div");
        var enunciado = document.createElement("h3");
        enunciado.textContent = enun;
        var labelA = document.createElement("label");
        labelA.textContent = "a";
        var labelB = document.createElement("label");
        labelB.textContent = "b";
        var labelC = document.createElement("label");
        labelC.textContent = "c";
        var input1 = document.createElement("input");
        input1.setAttribute("type", "radio");
        input1.setAttribute("name", cont);
        var input2 = document.createElement("input");
        input2.setAttribute("type", "radio");
        input2.setAttribute("name", cont);
        var input3 = document.createElement("input");
        input3.setAttribute("type", "radio");
        input3.setAttribute("name", cont);


        // Comprobamos la opción correcta y le damos el atributo para que salga seleccionado
        if(labelA.textContent == resp){
            input1.setAttribute("checked", "true");
        } else if (labelB.textContent == resp){
            input2.setAttribute("checked", "true");
        } else {
            input3.setAttribute("checked", "true");
        }

        // Creamos el contenedor completo
        contenedor.appendChild(enunciado);
        contenedor.appendChild(labelA);
        contenedor.appendChild(input1);
        contenedor.appendChild(labelB);
        contenedor.appendChild(input2);
        contenedor.appendChild(labelC);
        contenedor.appendChild(input3);

        return contenedor;

    }

    colorChange(enun){
        
    }


}

class Main {

    constructor(){
        this.readJSON();
    }

    readJSON(){
        var preguntaClase = new Pregunta();
        var body = document.body;
        var cont = 1;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function (){
            if (this.readyState ==  4 && this.status == 200){
                let obj = JSON.parse(this.responseText);
                obj.forEach(pregunta => {
                    body.appendChild(preguntaClase.pregHTML(pregunta.enunciado,pregunta.respuesta, cont));
                    cont ++;
                });
            }
        }

        xhttp.open("GET", "Examen3_1Eva_25_26.json", true);
        xhttp.send();
    }
}

new Main();