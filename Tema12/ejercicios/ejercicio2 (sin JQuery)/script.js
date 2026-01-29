var GrupoBot = /** @class */ (function () {
    function GrupoBot() {
        var _this = this;
        this.contador = 0;
        // Guardamos las referencias en variables
        var btnAñade = document.getElementById("añade");
        var btnQuita = document.getElementById("quita");
        // Hay que comprobar que los botones existen para poder aplicar el evento
        if (btnAñade) {
            btnAñade.addEventListener("click", function () { return _this.add(); });
        }
        if (btnQuita) {
            btnQuita.addEventListener("click", function () { return _this.rest(); });
        }
    }
    GrupoBot.prototype.add = function () {
        this.contador++;
        new Boton(this.contador);
    };
    GrupoBot.prototype.rest = function () {
        var contenedor = document.getElementById("botones");
        // Comprobamos que el contenedor exista y que sea mayor que 0
        if (contenedor && this.contador > 0) {
            var ultimo = contenedor.lastElementChild;
            if (ultimo) {
                contenedor.removeChild(ultimo);
                this.contador--;
            }
        }
    };
    return GrupoBot;
}());
var Boton = /** @class */ (function () {
    function Boton(id) {
        var contenedor = document.getElementById("botones");
        // Igual que antes hay que comprobar que el contenedor existe
        if (contenedor) {
            var btn = document.createElement("button");
            // Le damos el id como contenido al botón (hay que pasarlo a tipo string).
            btn.textContent = id.toString();
            // Evento para que aparezca el mensaje cuando se pulsa en el botón creado
            btn.addEventListener("click", function () {
                alert("Has pulsado el bot\u00F3n n\u00FAmero ".concat(id));
            });
            // Añadimos cada botón que se cree al contenedor principal
            contenedor.appendChild(btn);
        }
    }
    return Boton;
}());
new GrupoBot();
