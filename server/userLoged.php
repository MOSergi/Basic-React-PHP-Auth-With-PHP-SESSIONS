<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Credentials: true');

    session_start();

    if (isset($_SESSION["loginStatus"]) && $_SESSION["loginStatus"] == true){
        echo json_encode("isLogedIn");
    } else {
        echo json_encode("No Login");
    }


?>