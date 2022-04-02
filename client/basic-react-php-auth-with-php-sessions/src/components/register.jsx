import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContextLog from "../context/userContext";
import "../styles/register.css";

function Register(){

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const { setLoginStatus } = useContext(userContextLog);

    const navegar = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:5065/Basic-React-PHP-Auth-With-PHP-SESSIONS/server/userLoged.php", {
            credentials : "include"
        })
        .then(respuesta => respuesta.json())
        .then((data)=>{
            if (data == "isLogedIn"){
                navegar("/Profile/");
                setLoginStatus(true);
            }
        })
        .catch(error => console.log(error))
    }, [])


    const registrarUsuarios = (e)=>{
        e.preventDefault();
        
        let formdata = new FormData();

        formdata.append("nombre", nombre);
        formdata.append("email", email);
        formdata.append("password", pass);

        fetch("http://localhost:5065/Basic-React-PHP-Auth-With-PHP-SESSIONS/server/registrar.php", {
            method: "POST",
            body : formdata
        })
        .then(respuesta => respuesta.json())
        .then((datos)=>{
            if (datos == "already registered"){
                alert("El email introducido no es válido");
            } else {
                alert("Usuario registrado correctamente");
                navegar("/Login/");
            }
        })
        .catch(error => console.log(error))
    }


    return(
        <form onSubmit={registrarUsuarios} className="formRegister">
            <legend>Registro</legend>
            <input onChange={(e)=>{setNombre(e.target.value)}} required type="text" placeholder="Nombre" name="nombre"/>
            <br />
            <input onChange={(e)=>{setEmail(e.target.value)}} required type="email" placeholder="Email" name="email"/>
            <br />
            <input onChange={(e)=>{setPass(e.target.value)}} required type="password" placeholder="Contraseña" name="pass"/>
            <br />
            <button>Registrarse</button>

        </form>
    );
}

export default Register;