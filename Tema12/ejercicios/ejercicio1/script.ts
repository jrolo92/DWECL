
interface Botones {
    add(): void;
    rest(): void;
}

class GrupoBot implements Botones{

    contador: number = 0;

    constructor(){
        $("#añade").on("click", () =>this.add());
    }

    add(): void {
        this.contador ++;
        new Boton(this.contador);  
    }

    rest(): void {

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