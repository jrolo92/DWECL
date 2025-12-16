<?php
// Archivo: get_all_users.php (Para el ejercicio avanzado)

header('Content-Type: application/json');
header("access-control-allow-origin: *"); 

$conexion = new mysqli('localhost', 'root', '', 'tema9');
$conexion->set_charset("utf8");

if ($conexion->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => true, 'message' => 'Fallo en la conexión a MySQL: ' . $conexion->connect_error]);
    die();
}

try {
    $sql = "SELECT id, nombre, apellidos, ciudad FROM datos ORDER BY id DESC"; // Ordenamos por ID descendente para ver el nuevo registro primero
    $stmt = $conexion->query($sql);

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