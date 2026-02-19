interface Tarea {
    id: number;
    titulo: string;
    estado: string;
}

class Peticion {
    constructor(public estado: string) {

    }

    async ejecutarPeticion(): Promise<Tarea[]> {
        try {
            let url: string;
            console.log(this.estado);
            if (this.estado == 'todas') {
                url = `http://localhost:3000/tareas`
            } else {
                url = `http://localhost:3000/tareas/estado/${this.estado}`;
            }
            
            let conexion = await fetch(url);

            let datos = await conexion.json() as Tarea[];
            
            return datos;

        } catch(e) {
            console.log('Error: ', e);
            return [];
        }
    }
}

class Visualizacion {
    render(tareas: Tarea[]) {
        let contenedor = document.getElementById('cuerpoTabla');
        if (!contenedor) return;

        contenedor.innerHTML = ''; // Limpiamos antes de pintar

        for (let tarea of tareas) {
            let tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${tarea.id}</td>
            <td>${tarea.titulo}</td>
            <td>${tarea.estado}</td>
            `;
            contenedor.appendChild(tr);
        } 
    }
}

const btnBuscar = document.getElementById('btnBuscar');
const select = document.getElementById('desplegable') as HTMLSelectElement;
btnBuscar?.addEventListener('click', async () => {
    let estado = select.value;
    if (estado == 'Seleccionar') {
        return alert('Debes seleccionar un estado');
    }

    let peticion = new Peticion(estado).ejecutarPeticion();

    let visualizar = new Visualizacion;
    visualizar.render(await peticion);
    


});