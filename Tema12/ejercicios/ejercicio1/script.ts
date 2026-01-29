
interface Botones {
    add(): void;
    rest(): void;
}

class GrupoBot implements Botones{

    contador: number = 0;

    constructor(){
        $("#añade").on("click", () => this.add());
        $("#quita").on("click", () => this.rest());
    }

    add(): void {
        this.contador ++;
        new Boton(this.contador);  
    }

    rest(): void {
        if (this.contador > 0){
            $("#botones button").last().remove();
            this.contador --;
        }
    }
}

class Boton {

    constructor(id: number){
        const boton = $(`<button>${id}</button>`); 
        boton.on("click", () => { 
            alert(`Has pulsado el botón número ${id}`); }); 
        $("#botones").append(boton);
    }
}

new GrupoBot();