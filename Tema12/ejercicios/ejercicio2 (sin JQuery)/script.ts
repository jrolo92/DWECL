interface Botones {
    add(): void;
    rest(): void;
}

class GrupoBot implements Botones {
    contador: number = 0;

    constructor() {
        // Guardamos las referencias en variables
        let btnAñade = document.getElementById("añade");
        let btnQuita = document.getElementById("quita");

        // Hay que comprobar que los botones existen para poder aplicar el evento
        if (btnAñade) {
            btnAñade.addEventListener("click", () => this.add());
        }

        if (btnQuita) {
            btnQuita.addEventListener("click", () => this.rest());
        }
    }

    add(): void {
        this.contador++;
        new Boton(this.contador);
    }

    rest(): void {
        // Referencia al contenedor de botones
        const contenedor = document.getElementById("botones");
        // Comprobamos que el contenedor exista y que sea mayor que 0
        if (contenedor && this.contador > 0) {
            // Cogemos el ultimo elemento del contenedor de botones
            let ultimo = contenedor.lastElementChild;
            // Comprobamos de nuevo que existe y en ese caso eliminamos el último elemento y bajamos el contador
            if (ultimo) {
                contenedor.removeChild(ultimo);
                this.contador--;
            }
        }
    }
}

class Boton {
    constructor(id: number) {
        // Referencia al contenedor de botones
        let contenedor = document.getElementById("botones");
        
        // Igual que antes hay que comprobar que el contenedor existe
        if (contenedor) {
            let btn = document.createElement("button");
            // Le damos el id como contenido al botón (hay que pasarlo a tipo string).
            btn.textContent = id.toString();
            
            // Evento para que aparezca el mensaje cuando se pulsa en el botón creado
            btn.addEventListener("click", () => {
                alert(`Has pulsado el botón número ${id}`);
            });

            // Añadimos cada botón que se cree al contenedor principal
            contenedor.appendChild(btn);
        }
    }
}

new GrupoBot();