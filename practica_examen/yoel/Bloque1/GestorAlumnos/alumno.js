class Alumno {
    #nombre;
    #notas = [];
    constructor(nombre) {
        this.#nombre = nombre;
    }

    añadirNota(nota) {
        if (nota < 0 || nota > 10) {
            throw 'la nota debe estar entre 0 y 10';
        } else {
            this.#notas.push(nota);
        }
    }

    calcularMedia() {
        let suma = 0;
        for (let nota of this.#notas) {
            suma += nota;
        }
        let notaFinal = suma / this.#notas.length;
        return notaFinal;
    }
}



let alumno1 = new Alumno('Jorge');
alumno1.añadirNota(5);
alumno1.añadirNota(5);
alumno1.añadirNota(5);

let alumno2 = new Alumno('Paco');
alumno2.añadirNota(2);
alumno2.añadirNota(4);
alumno2.añadirNota(1);

let alumno3 = new Alumno('Anchelotti');
alumno3.añadirNota(10);
alumno3.añadirNota(5);
alumno3.añadirNota(10);

const arrayAlumnos = [
    alumno1,
    alumno2,
    alumno3
];

let obtenerAprobados = (arrayAlumnos) => {
    let alumnosAprobados = arrayAlumnos.filter(alumno => alumno.calcularMedia() >= 5);
    return alumnosAprobados;
};

console.log(obtenerAprobados(arrayAlumnos));