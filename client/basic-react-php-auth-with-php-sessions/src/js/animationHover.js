export default function animacionHover(){

    let mensajeHover = document.querySelector(".mensajeHover");
    let a = document.querySelector("a");

    mensajeHover.innerHTML = "";

    let h4 = document.createElement("h4");

    h4.innerText = "Enlace para visitar mi Github";

    mensajeHover.style.backgroundColor = "gray";
    mensajeHover.style.width = "250px";
    mensajeHover.style.height = "60px";

    mensajeHover.append(h4);

    

}

