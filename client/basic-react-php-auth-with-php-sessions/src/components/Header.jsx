import { React, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContextLog from "../context/userContext";
import "../styles/header.css";

function Header(){

    const {loginStatus, setLoginStatus} = useContext(userContextLog);

    useEffect(()=>{
        fetch("http://localhost:5065/Basic-React-PHP-Auth-With-PHP-SESSIONS/server/userLoged.php", {
            credentials : "include"
        })
        .then(respuesta => respuesta.json())
        .then((infob) =>{
            if (infob == "isLogedIn"){
                setLoginStatus(true);
            } else if (infob == "No Login"){
                setLoginStatus(false);
            }
        })
        .catch(errores => console.log(errores))
    },[])

    if (loginStatus == false){
        return(
            <header>
                <nav className="Menu">
                    <Link className="Links" to="/">Home</Link>
                    <Link className="Links" to="/Login">Login</Link>
                    <Link className="Links" to="/Register">Registro</Link>
                </nav>
            </header>
        );
    } else {
        return(
            <header>
                <nav className="Menu">
                    <Link className="Links" to="/">Home</Link>
                    <Link className="Links" to="/Profile">Profile</Link>
                </nav>
            </header>
        );
    }
}


export default Header;