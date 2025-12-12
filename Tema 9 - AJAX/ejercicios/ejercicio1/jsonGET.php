<?php
    // Para solicitudes de otros dominios.
    header("access-control-allow-origin: *");

    // Conectamos BD
    $conexion = new mysqli('localhost', 'root', '', 'tema9');

    // Obtenemos parámetro id
    $nombreID = $_GET['id'] ?? null;

    /*
        En función de si disponemos del parámetro nos va a devolver una cosa u otra
    */
        
    if ($nombreID == "") {
        // Consulta SQL
        $sql1 = "SELECT id, nombre FROM datos";
        // Ejecutamos consulta
        $stmt = $conexion->query($sql1);
        // Devolvemos datos en un array asociativo
        $datos = $stmt->fetch_all(MYSQLI_ASSOC);
        echo json_encode($datos);
        // Cerramos conexión
        $stmt->close();

    } else {
        // Consulta SQL
        $sql2 = "SELECT * FROM datos WHERE id = ?";
        // Hacemos prepare, vinculamos parámetros y ejecutamos la consulta
        $stmt = $conexion->prepare($sql2);
        $stmt->bind_param('i', $nombreID);
        $stmt->execute();
        // Devolvemos datos de la fila
        $resultado = $stmt->get_result();
        $fila = $resultado->fetch_assoc();
        echo json_encode($fila);
        // Cerramos conexión
        $stmt->close();
    }

     $conexion->close();

?>