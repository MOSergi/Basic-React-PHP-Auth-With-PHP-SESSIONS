import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContextLog from "../context/userContext";
import "../styles/login.css";


function Login(){

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const navegar = useNavigate();

    const {loginStatus, setLoginStatus} = useContext(userContextLog);


    useEffect(()=>{
        fetch("http://localhost:5065/Basic-React-PHP-Auth-With-PHP-SESSIONS/server/userLoged.php", {
            credentials : "include"
        })
        .then(respuesta => respuesta.json())
        .then((info) =>{
            if (info == "isLogedIn"){
                navegar("/Profile/");
            } 
        })
        .catch(errores => console.log(errores))
    }, []);


    const login = (e)=>{
        e.preventDefault();

        let datosEnviar = new FormData();
        datosEnviar.append("email", email);
        datosEnviar.append("pass", pass);


        fetch("http://localhost:5065/Basic-React-PHP-Auth-With-PHP-SESSIONS/server/login.php", {
            method: "POST",
            body: datosEnviar,
            credentials : "include"
        })
        .then(response => response.json())
        .then((data)=>{
            if (data == "Correo no registrado"){
                alert(data);
            } else if (data == "Wrong username or password"){
                alert(data);
            } else if (data == "LogedIn") {
                setLoginStatus(true);
                navegar("/Profile/");
            }
        })
        .catch(error => console.log(error))


    }


    return(
        <section>
            <form onSubmit={login} className="formLogin">
                <legend>Login</legend>
                <input onChange={(e)=>{setEmail(e.target.value)}} required type="email" placeholder="Email" name="email"/>
                <br />
                <input onChange={(e)=>{setPass(e.target.value)}} required type="password" placeholder="Contraseña" name="pass"/>
                <br />
                <button>Iniciar Sesión</button>
            </form>
        </section>
        
    );
}   

export default Login;