class Empleado {
    #nombre;
    #anioContratacion;

    constructor(nombre, anioContratacion) {
        this.#nombre = nombre;
        this.#anioContratacion = anioContratacion;
    }

    getNombre() {
        return this.#nombre;
    }

    calcularAntiguedad() {
        let fecha = new Date;
        let fechaActual = fecha.getFullYear();
        return fechaActual - this.#anioContratacion;
    }
}

class Gerente extends Empleado {
    #departamento;
    constructor(nombre, anioContratacion, departamento) {
        super(nombre, anioContratacion);
        this.#departamento = departamento;
    }

    mostrarInfo() {
        return `Gerente: ${this.getNombre()}\nDepartamento ${this.#departamento}\nAtigüedad: ${this.calcularAntiguedad()}`;
    }
}

const emp2 = new Gerente('manolo', 2005, 'Finanzas');
const emp1 = new Empleado('paco', 2006);
const emp3 = new Gerente('franru', 2015, 'RRHH');

const plantilla = [
    emp2,
    emp1,
    emp3 
];

plantilla.sort((a, b) => a.calcularAntiguedad() - b.calcularAntiguedad());

for (let trabajador of plantilla) {
    if (trabajador instanceof Gerente) {
        console.log(trabajador.mostrarInfo());
    } else {
        console.log(`Nombre: ${trabajador.getNombre()}\nAntigüedad: ${trabajador.calcularAntiguedad()}`)
    }
}