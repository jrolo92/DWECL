<?php
// Archivo: insert_user.php (Versión robusta con mysqli y manejo de errores)

header('Content-Type: application/json');
header("access-control-allow-origin: *");

$conexion = new mysqli('localhost', 'root', '', 'tema9');
$conexion->set_charset("utf8");

if ($conexion->connect_error) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Fallo en la conexión a MySQL: ' . $conexion->connect_error]);
    die();
}

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && 
        isset($_POST['nombre']) && 
        isset($_POST['apellidos']) && 
        isset($_POST['ciudad'])) 
    {
        $nombre = $_POST['nombre'];
        $apellidos = $_POST['apellidos'];
        $ciudad = $_POST['ciudad'];

        // Consulta preparada
        $sql = "INSERT INTO datos (nombre, apellidos, ciudad) VALUES (?, ?, ?)";
        
        // 🚨 PUNTO DE FALLO COMÚN 🚨
        if (!$stmt = $conexion->prepare($sql)) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Error al preparar la consulta: ' . $conexion->error]);
            $conexion->close();
            die();
        }

        $stmt->bind_param('sss', $nombre, $apellidos, $ciudad);
        
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Usuario insertado correctamente.']);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Error al ejecutar la inserción: ' . $stmt->error]);
        }
        $stmt->close();
    } else {
        http_response_code(400); // Bad Request
        echo json_encode(['success' => false, 'message' => 'Datos incompletos o método incorrecto. Use POST.']);
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => "Error inesperado: " . $e->getMessage()]);
}

$conexion->close();
?>