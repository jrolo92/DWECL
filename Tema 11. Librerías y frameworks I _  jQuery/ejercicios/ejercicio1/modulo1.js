

/*
    Función exportable de acceso a JSON usando Jquery
    Hace la petición AJAX por el método GET usando la url y una función callback 
    a la que le pasamos el JSON como parámetro pasandolo antes a objeto JSON.
*/
export function funAjax(url, fun){
    $.get(url, function(obj){
        obj = JSON.parse(obj);
        fun(obj);
    });
}