import React from "react";
import imagen from "./images/Principal.jpg";
import estilo from "./styles/Menu.module.css";
import { Link } from "react-router-dom";

export function MenuInicio(){

    return(
        <>
        <body className={estilo.main}>
        <header className={estilo.tamanio}>
            <h1 className="titulos">Piedra, Papel o Tijera</h1>
        </header>
            <main>
                <img className={estilo.imagenEdit}src={imagen} alt="imagen principal"/>
                    <Link to= "/juego">
                        <button className={estilo.boton}>Empezar a jugar</button>
                    </Link>
                    <Link to= "/reglasdeljuego">
                        <button className={estilo.boton}>Reglas del Juego</button>
                    </Link>
                    <Link to= "/desarrolladores">
                        <button className={estilo.boton}>Desarrolladores</button>
                    </Link>
            </main>
        <footer className={estilo.tamanio}>
            <h3 className="Pie">Diviértete!!</h3>
        </footer>
        </body>
        </>
    );
}