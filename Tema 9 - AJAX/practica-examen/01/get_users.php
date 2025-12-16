<?php
// Archivo: get_users.php
// Usamos el método mysqli que ya sabes que funciona en tu entorno

// 1. Cabeceras
header('Content-Type: application/json');
// Para solicitudes de otros dominios (aunque no lo necesites en localhost, es buena práctica)
header("access-control-allow-origin: *"); 

// 2. Conexión a la BBDD (tu código de conexión probado)
$conexion = new mysqli('localhost', 'root', '', 'tema9');
$conexion->set_charset("utf8");

// Manejo de error de conexión (CRUCIAL para no devolver página en blanco)
if ($conexion->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => true, 'message' => 'Fallo en la conexión a MySQL: ' . $conexion->connect_error]);
    die();
}

try {
    // 3. Consulta SQL para obtener toda la lista (como requiere el ejercicio)
    $sql = "SELECT id, nombre, apellidos, ciudad FROM datos ORDER BY id";
    $stmt = $conexion->query($sql);

    // 4. Devolvemos datos en formato JSON
    if ($stmt) {
        $datos = $stmt->fetch_all(MYSQLI_ASSOC);
        echo json_encode($datos);
        $stmt->close();
    } else {
        http_response_code(500);
        echo json_encode(['error' => true, 'message' => 'Error en la consulta SQL.']);
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => true, 'message' => 'Error inesperado.']);
}

$conexion->close();
?>