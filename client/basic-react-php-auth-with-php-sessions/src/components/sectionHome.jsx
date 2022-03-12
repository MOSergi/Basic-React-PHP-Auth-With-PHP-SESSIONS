import { React } from "react";
import { Link } from "react-router-dom";
import "../styles/sectionHome.css";
import animacionHover from "../js/animationHover";
import animacionOut from "../js/animationOut";


function SectionHome(){
    return(
        <section className="sectionHome">
            <h2>Esta aplicación muestra un ejemplo de autenticación con React y Php utilizando
                PHP-Sessions
            </h2>
            <button><Link className="Links" to="/Register">Get Started</Link></button>
            <h3>App desarrollada por<a onMouseMove={animacionHover} onMouseLeave={animacionOut} style={{"textDecoration" : "none", "color" : "#252d6b", "fontSize" : "25px"}} href="https://github.com/MOSergi"> Sergio</a></h3>
            <div className="mensajeHover"></div>
        </section>
    );
}


export default SectionHome;