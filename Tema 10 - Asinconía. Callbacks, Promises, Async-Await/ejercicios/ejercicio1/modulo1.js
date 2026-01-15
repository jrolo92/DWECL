/*
    Función exportable llamada AJAX (acceso a JSON) usando fetch
*/
// export function funAjax(url, fun) {
//     // Hace la petición a la URL
//     fetch(url)
//         // Convierte la respuesta en JSON
//         .then(result => result.json())
//         // LLama a la función callback pasando el JSON como parámetro
//         .then(obj =>fun(obj))
//         // Si hay algun error lo muestra por consola
//         .catch(e => console.log(`Error: ${e}`))
// }

/*
    Función exportable y asincrona de llamada AJAX (acceso a JSON)
*/
export async function funAjax(url, fun){
    try{
        // Hace la petición a la URL
        const response = await fetch (url);
        // Convierte la respuesta en un objeto JSON
        const obJson = await response.json();
        // LLama a la función callback pasando el JSON como parámetro
        fun(obJson);
    }catch (e){
        // Si hay algun error lo muestra por consola
        console.log(`Error: ${e}`)
    }
}