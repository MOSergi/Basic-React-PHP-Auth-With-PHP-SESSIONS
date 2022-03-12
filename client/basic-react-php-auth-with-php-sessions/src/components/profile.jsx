import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContextLog from "../context/userContext";


function Profile(){

    const {loginStatus, setLoginStatus} = useContext(userContextLog);
    const [name, setName] = useState("");


    const navegar = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:5065/Basic-React-PHP-Auth-With-PHP-SESSIONS/server/mostrarNombreUsuario.php", {
            credentials : "include"
        })
        .then(respuesta => respuesta.json())
        .then((info) =>{
            if (info == "No Login"){
                setLoginStatus(false);
                navegar("/Login/");
            } else {
                setName(info);
            }
        })
        .catch(errores => console.log(errores))
    }, []);

    const logout = ()=>{
        fetch("http://localhost:5065/Basic-React-PHP-Auth-With-PHP-SESSIONS/server/logout.php", {
            credentials : "include"
        })
        .then(respuesta => respuesta.json())
        .then((res)=>{
            alert(res);
            navegar("/Login/");
            setLoginStatus(false);
        })
        .catch(error => console.log(error))
    }


    return(
        <div>
            <h2>Bienvenido {name}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
}


export default Profile;