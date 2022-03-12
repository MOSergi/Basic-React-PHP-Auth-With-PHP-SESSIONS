<?php
    
    header('Access-Control-Allow-Origin: http://localhost:3000');

    require_once "./database/conection.php";

    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $pass = $_POST["password"];

    $password_hash = password_hash($pass, PASSWORD_BCRYPT);

    $emailExistQuery = $conexion->prepare("SELECT nombre FROM usuarios WHERE email = :correo");
    $emailExistQuery->bindParam(":correo", $email);
    $emailExistQuery->execute();
    $resultadoEmail = [];
    $resultadoEmail = $emailExistQuery->fetch(PDO::FETCH_ASSOC);

    if ($resultadoEmail == false){
        $insertUser = $conexion->prepare("INSERT INTO usuarios (nombre, email, password) VALUES ('$nombre', '$email', '$password_hash')");
        $insertUser->execute();
        echo json_encode("Registered Succesfully");
    } else {
        echo json_encode("already registered");
    }

?>