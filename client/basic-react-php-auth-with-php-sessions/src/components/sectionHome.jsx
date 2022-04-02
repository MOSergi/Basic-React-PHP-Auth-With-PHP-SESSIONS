import { React, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userContextLog from "../context/userContext";
import "../styles/sectionHome.css";


function SectionHome(){

    const [option, setOption] = useState("");
    const { loginStatus, setLoginStatus } = useContext(userContextLog);

    useEffect(()=>{
        fetch("http://localhost:5065/Basic-React-PHP-Auth-With-PHP-SESSIONS/server/userLoged.php", {
            credentials : "include"
        })
        .then(respuesta => respuesta.json())
        .then((info) =>{
            if (info == "isLogedIn"){
                setLoginStatus(true);
            } else {
                setLoginStatus(false);
            }
        })
        .catch(errores => console.log(errores))
    }, []);


    return(
        <section className="sectionHome">
            <h2>Esta aplicación muestra un ejemplo de autenticación con React y Php utilizando
                PHP-Sessions
            </h2>
            <button><Link className="Links" to={loginStatus ? "/Profile" : "/Register"}>Get Started</Link></button>
            <h3>App desarrollada por<a onMouseEnter={()=> setOption("mensajeHoverM")} onMouseLeave={()=> setOption("")} style={{"textDecoration" : "none", "color" : "#252d6b", "fontSize" : "25px"}} href="https://github.com/MOSergi"> Sergio</a></h3>
            <div className={option == "" ? "mensajeHoverOC" : "mensajeHoverOC mensajeHoverM"}>My Github</div>
        </section>
    );
}


export default SectionHome;