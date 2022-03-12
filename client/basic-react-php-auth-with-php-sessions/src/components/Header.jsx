import { React } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header(){
    return(
        <header>
            <nav className="Menu">
                <Link className="Links" to="/">Home</Link>
                <Link className="Links" to="/Login">Login</Link>
                <Link className="Links" to="/Register">Registro</Link>
            </nav>
        </header>
    );
}


export default Header;