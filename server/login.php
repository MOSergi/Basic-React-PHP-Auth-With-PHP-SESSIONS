<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Credentials: true');

    session_start();

    require_once "./database/conection.php";

    $email = $_POST["email"];
    $password = $_POST["pass"];

    $comprobarLogin = $conexion->prepare("SELECT password FROM usuarios WHERE email = :email");
    $comprobarLogin->bindParam(":email", $email);
    $comprobarLogin->execute();
    $resultadoLogin = $comprobarLogin->fetch(PDO::FETCH_ASSOC);

    if ($resultadoLogin == false){
        echo json_encode("Correo no registrado");
    } else {
        if (password_verify($password, $resultadoLogin["password"]) == true){
            $_SESSION["loginStatus"] = true;
            $_SESSION["userEmail"] = $email;
            echo json_encode("LogedIn");
        } else {
            echo json_encode("Wrong username or password");
        }
        
    }


?>