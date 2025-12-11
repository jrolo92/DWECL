<?php
    // Para solicitudes de otros dominios.
    header("access-control-allow-origin: *");
    //......................................
    $nombre = $_GET['nombre'];
    $ciudad = $_GET['ciudad'];
    
    // Devuelve cadena JSON de objetos
    echo '{"nombre":"' . $nombre . '","ciudad":"' . $ciudad . '"}';
?>