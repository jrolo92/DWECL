<!DOCTYPE html>
<html lang="es">
<head>
    <style>
        .jumbotron {
   
            max-height: 180px;
        }
    </style>
    <meta charset="UTF-8">
    <title>Ejemplo cálculo cesta de la compra</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
    
    <script>
        class Producto{
            
          // #producto={}; Esta forma solo sería necesaria para privatizar el objeto
            constructor(id,nombre,precio,imagen){
              //  this.#producto.id=id; Así con todos los campos
                this.id=id;
                this.nombre=nombre;
                this.precio=precio;
                this.imagen=imagen;
                console.log(this) // Para comprobar que por cada instancia devuelve un objeto
                //return this.#producto; Solo necesario en caso de privatizar el objeto.
            }
           
        }

        class Cesta{
         
            #itemsCesta=[]; //Inicializa como array
            #productos;

            constructor(productos){ 
                this.#productos=productos;
                this.#load(); // Carga posibles productos desde cesta...
            }
            
            #borraItem (idElim){ 
             
                // Busca en la cesta el producto y lo borra
                let index= this.#itemsCesta.findIndex ((item)=>item.id == idElim); 
                if (index>-1) this.#itemsCesta.splice(index,1);
                // Actualiza vista de la cesta    
                this.#renderCesta();
               
            }

            #filaItem (id,nombre,cantidad,precio) {
                let fila = document.createElement('tr');
                let col = document.createElement('td');
                col.innerText=id;
                fila.appendChild(col);
                col = document.createElement('td');
                col.innerText=nombre;
                fila.appendChild(col);
                col = document.createElement('td');
                col.innerText=cantidad;
                fila.appendChild(col);
                col = document.createElement('td');
                col.innerText=precio;
                fila.appendChild(col);
                col = document.createElement('td');
                col.innerText=cantidad*precio;
                fila.appendChild(col);
                 // Boton de borrar
                let botElim = document.createElement('button');
                botElim.classList.add('btn', 'btn-danger');
                botElim.textContent = 'X';
                botElim.addEventListener('click',()=>this.#borraItem(id));
                fila.appendChild(botElim);      
                return fila;
            }

            
            #storeIn (){
                // Borra almacén, almacena productos añadidos...
                localStorage.clear();
                localStorage.setItem('idCest',JSON.stringify(this.#itemsCesta)); 
                    
            }

            #renderCesta () { //Renderiza los productos añadidos a la cesta...
                // Acumula total
                let total=0;
                let listaCesta = document.getElementById('cesta');
                // Vaciamos cesta
                listaCesta.innerHTML = '';
              
                // Creamos los elems a partir de la cesta
                for (let item of this.#itemsCesta) {
                   
                    // Obtenemos el item de la base de productos por su 'id' 
                    let idItem = this.#productos.find(producto => producto['id'] == item.id);
                    //Genera fila de tabla ...
                    let fila=this.#filaItem(idItem['id'],idItem['nombre'],item.cant,idItem['precio']);         
                    listaCesta.appendChild(fila);
                    total +=(item.cant*idItem['precio']);
                }
                // Render total y totalIva
                let totalP = document.getElementById('total');
                let totalIva = document.getElementById('totalIva');
                totalP.innerHTML =total.toFixed(2);
                totalIva.innerHTML = (total*1.21).toFixed(2);

                // Guarda en almacén
                this.#storeIn();
            }

            #load (){
                // Lee de almacén y carga a cesta ...
                let it=localStorage.getItem("idCest");
                if (it!=null) { 
                    this.#itemsCesta=JSON.parse(it);
                }
                this.#renderCesta(); 
            }  

            addCesta (idBot,cant) {
             
                 //Selecciona input cantidad y su valor coincidente con el botón.
                    // Para el caso de no recibir el segundo argumento 'cant' y buscarlo por atributo ...
                 //let cant=document.querySelector("input[data-iduni='"+idBot+"']").value;
               
                 // Busca item en la cesta coincidente con el botón pulsado.   
                let idItem = this.#itemsCesta.find(items => items.id == idBot);
                
                // Si no existe el item, lo añade
                if(idItem==null) {
                    this.#itemsCesta.push({id:idBot,cant:Number(cant)}); 
                }else{
                    let index= this.#itemsCesta.findIndex(items => items.id == idBot);
                    // Suma cantidad en caso de que exista..
                    this.#itemsCesta[index].cant += Number(cant);
                }
                // Renderiza Cesta ...
                this.#renderCesta();  
                           
            } 
          
        }

        class ContProductos {
            #productos =[]; // Contiene todos los productos disponibles ...
            #cesta; //Instancia a la clase 'Cesta'
            constructor(productos){  
                this.#in(productos);
                this.#cesta=new Cesta(this.#productos);
                this.#renderProductos(); 
            }
            #in (productos){ // Inserta productos...  
                //Usando for-of()
                for (let p of productos){
                    this.#productos.push(new Producto(p[0],p[1],p[2],p[3]));
                }

                //Usando forEach()
                //productos.forEach(p =>this.#productos.push(new Producto(p[0],p[1],p[2],p[3])));

                //Usando map()
                //this.#productos=productos.map(p=>new Producto(p[0],p[1],p[2],p[3])); 

            }

            #renderProductos () { // Renderiza los productos disponibles ...
                    let contProductos = document.getElementById('contProductos');
                    for (let info of this.#productos) {
                        // Contenedor base
                        let elem = document.createElement('div');
                        elem.classList.add('card', 'col-sm-4');
                        // Contenedor cuerpo
                        let elemCardBody = document.createElement('div');
                        elemCardBody.classList.add('card-body');
                        // Título
                        let elemTitle = document.createElement('h5');
                        elemTitle.classList.add('card-title');
                        elemTitle.innerText = info['nombre'];
                        // Imagen
                        let elemImagen = document.createElement('img');
                        elemImagen.classList.add('img-fluid');
                        elemImagen.setAttribute('src', info['imagen']);
                        // Precio
                        let elemPrecio = document.createElement('p');
                        elemPrecio.classList.add('card-text');
                        elemPrecio.innerText = info['precio'] + '€';
                        // Unidades
                        let elemUnidades = document.createElement('input');
                        elemUnidades.setAttribute('data-idUni', info['id']);
                        elemUnidades.setAttribute('type', 'number');
                        elemUnidades.setAttribute('max', '999');
                        elemUnidades.setAttribute('min', '1');
                        elemUnidades.setAttribute('value', '1');
                        elemUnidades.setAttribute('style', 'width:70px');   
                        // Botón 
                        let elemBoton = document.createElement('button');
                        elemBoton.classList.add('btn', 'btn-primary');
                        elemBoton.innerText = 'Añadir';
                       
                        // Crea evento para añadir productos a la cesta, atención al cambio de contexto 'this'
                            // Válido buscando INPUT posteriormente con selector a través de atributo ...
                        //elemBoton.addEventListener('click', this.#cesta.addCesta.bind(this.#cesta,info['id'])); 

                            // Válido enviando la referencia del INPUT, pero NO su valor ya que devuelve el dato por defecto '1'...
                        //elemBoton.addEventListener('click', this.#cesta.addCesta.bind(this.#cesta,info['id'],elemUnidades)); 

                            // Válido enviando la cantidad (VALUE), ya que la función flecha cambia el contexto
                            // de los parámetros de la función/método a la que se llama en el controlador de evento...
                        elemBoton.addEventListener('click', ()=>this.#cesta.addCesta(info['id'],elemUnidades.value));
                        
                        // Componemos
                        elemCardBody.appendChild(elemImagen);
                        elemCardBody.appendChild(elemTitle);  
                        elemCardBody.appendChild(elemPrecio);
                        elemCardBody.appendChild(elemUnidades);
                        elemCardBody.appendChild(elemBoton);
                        elem.appendChild(elemCardBody);
                        contProductos.appendChild(elem);
                    }
                   
            }     

        }
        
        // Productos disponibles, pueden proceder de una BBDD...
        let productos=[
            [1, "Bolso", 20 , "https://cdn.pixabay.com/photo/2017/08/20/11/39/handbag-2661412_1280.jpg"],
            [2, "Móvil", 120 , "https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png"],
            [3, "Taza", 10 , "https://cdn.pixabay.com/photo/2017/05/15/17/43/cup-2315563_1280.jpg"],
            [4, "Zapatos", 50.5 , "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg"],
            [5, "Vestido", 30 , "https://cdn.pixabay.com/photo/2016/06/29/04/17/wedding-dress-1485984_1280.jpg"],
            [6, "Cámara", 100 , "https://cdn.pixabay.com/photo/2014/08/29/14/53/camera-431119_1280.jpg"]
        ]
        

        // Instancia Cesta 
        window.onload=()=>new ContProductos(productos) ;
 
        
    </script>
</head>
<body>
    <div class="container">
         <div class="jumbotron">
            <h1><img src="https://img.icons8.com/color/48/000000/google-photos.png">&nbsp;De todo ...</h1>      
            <h5>Ejemplo cálculo de cesta o carrito de la compra ... </h5>
        </div>
        <div class="row">
            <!-- Productos -->  
            <div id="contProductos" class="col-sm-7 row"></div>
            <!-- Cesta -->      
            <div class="col-sm-5">    
                <h2> <img src="https://img.icons8.com/cute-clipart/64/000000/shopping-basket-success.png">&nbsp;Cesta</h2>
                <table  class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Cod.</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio(€)</th>
                        <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody id="cesta"></tbody>
                </table>
                <hr>
                <!-- Precio total -->
                <p class="text-right">Total: <span id="total"></span>&nbsp;&euro;</p>
                 <!-- Precio total Iva-->
                 <p class="text-right">Total + IVA (21%):<strong> <span id="totalIva"></span></strong>&nbsp;&euro;</p>
            </div>
        </div>
    </div>
</body>
</html>