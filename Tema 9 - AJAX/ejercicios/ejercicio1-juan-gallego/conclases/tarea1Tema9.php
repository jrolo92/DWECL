<?php
$base = new mysqli("localhost", "root", "", "tema9");
if($base->connect_error) {
  exit('No conecta');
}

if($_GET['nombreID']!=""){
    $sql = "SELECT id, nombre, apellidos, ciudad
    FROM datos WHERE id = ?";

    $prep = $base->prepare($sql);
    $prep->bind_param("s", $_GET['nombreID']);
    $prep->execute();
    $prep->store_result();
    $prep->bind_result($id, $nombre, $apellidos, $ciudad);
    $prep->fetch();
    $prep->close();

    // Para crear un objeto vacío y cumplir modo estricto...
    $miObj = new \stdClass();
    $miObj->id=$id;
    $miObj->nombre=$nombre;
    $miObj->apellidos=$apellidos;
    $miObj->ciudad=$ciudad;
    $miJSON = json_encode($miObj);
    echo $miJSON;
} else{
    $sql = "SELECT id,nombre FROM datos";
    $result = $base->query($sql);
    $reg=array();
    while($row = $result->fetch_assoc()) {
        $miObj = new \stdClass();
        $miObj->id=$row["id"]; 
        $miObj->nombre=$row["nombre"];
        $reg[]=$miObj;
    }
    $base->close();
    $miJSON = json_encode($reg);
    echo $miJSON;
   

}

?>