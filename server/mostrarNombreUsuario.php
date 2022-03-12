<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Credentials: true');
    
    require_once "./database/conection.php";

    session_start();

    if (isset($_SESSION["loginStatus"]) && $_SESSION["loginStatus"] == true){
        $sacarUserName = $conexion->prepare("SELECT nombre FROM usuarios WHERE email = :email");
        $sacarUserName->bindParam(":email", $_SESSION["userEmail"]);
        $sacarUserName->execute();
        $resultadoName = $sacarUserName->fetch(PDO::FETCH_ASSOC);

        echo json_encode($resultadoName["nombre"]);

    } else {
        echo json_encode("No Login");
    }



?>