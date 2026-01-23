var GrupoBot = /** @class */ (function () {
    function GrupoBot() {
        var _this = this;
        this.contador = 0;
        $("#añade").on("click", function () { return _this.add(); });
    }
    GrupoBot.prototype.add = function () {
        this.contador++;
        new Boton(this.contador);
    };
    GrupoBot.prototype.rest = function () {
    };
    return GrupoBot;
}());
var Boton = /** @class */ (function () {
    function Boton(id) {
        var boton = $("<button>".concat(id, "</button>"));
        boton.on("click", function () {
            alert("Has pulsado el bot\u00F3n n\u00FAmero ".concat(id));
        });
        $("#botones").append(boton);
    }
    return Boton;
}());
new GrupoBot();
