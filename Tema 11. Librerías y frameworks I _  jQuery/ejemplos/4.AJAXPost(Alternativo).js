$.ajax({
    'type': "POST",
    'url': "jsonPOST.php",
    'data': {
        nombre: 'Juan',
        ciudad: 'Ubrique'
    },
    'success': function (obj) {
        obj = JSON.parse(obj);
        $("#demo").html(`Desde servidor ${obj.nombre} de ${obj.ciudad}`)
    }
});