import React, {useState} from "react";
import Imagen from "./Imagen";
import { Container, Row, Col, Button } from "react-bootstrap";
import Volver from "./Volver";
import Palabras from "./Json/palabras.json"


function Juego() {
    const [contador, setContador] = useState(6); //cuenta errores del juegador
    const [palabra, setPalabra] = useState(""); // Palabra elegida al azar
    const [pantalla, setPantalla] = useState(""); // Palabra que se muestra en la pantalla
    const [teclasUsadas, setTeclasUsadas] = useState(''); // guarda teclas precionadas
    let teclado = Array.from("QWERTYUIOPASDFGHJKLÑZXCVBNM"); //generea el array del teclado
    /** cargo los audios */
    const audioGameOver = new Audio("sound/GameOver.ogg");
    const audioWinner = new Audio("sound/LevelComplete.ogg")
    const audioButton = new Audio("sound/Button.ogg")

    /** Inicializo las variables del juego */
    function inicializarJuego(){
        let position = Math.round(Math.random()*Palabras.length);
        let word = Palabras[position].palabra.toUpperCase();
        setPalabra(word);
        setPantalla("-------------------------".substring(0, word.length));
        setTeclasUsadas("");
        setContador(0);
        console.log(word);
    }
    /** Logica del Juego */
    function seleccionarLetra(letra) {
        audioButton.play();
        let auxPantalla = ""; // se usa para generar la nueva pantalla
        let huboAcierto = palabra.includes(letra); // cuantrolo si el jugador acerto.
        setTeclasUsadas(teclasUsadas + letra); // guardo la tecla para desabilitarla
        if(huboAcierto){ //si hubo asiertos genero la nueva pantalla
            for(let i = 0; i < palabra.length; i++){
                if (palabra[i]==letra){ 
                    auxPantalla += letra; // agrego la letra
                }else{
                    auxPantalla += pantalla[i]; // copio de la pantalla
                }
            }
            setPantalla(auxPantalla); // guardo el nuevo valor de pantalla
            if (!auxPantalla.includes('-')) { // si no quedaron lineas el jugador gano
                console.log('GANASTE')
                audioWinner.play();
                setContador(contador+60); // le sumo 60 al contador para indicar que gano
            }
        }else{
            if (contador == 5){ // si se cumple el jugador peridio
                console.log('PERDISTE')
                setContador(contador + 41); // le sumo 40 para indicar que perdio y 1 mas porque fallo
                audioGameOver.play();
            }else{
                setContador(contador+1); // le sumo una falla
            }
        }
    }

     return(
        <Container>
            <Row className="justify-content-center">
                <h1 className="text-center" > Juego Ahorcado </h1>
            </Row>
            <Row className="justify-content-center text-center">
                <Imagen 
                    numero={contador} 
                />
                <h2>{pantalla} </h2>
            </Row>
            <Row className="justify-content-center">
                <Col xs="12" md="8" lg="6" className="">
                    <Row className="justify-content-center">
                        {teclado.map((tecla, index) =>
                            <Button 
                                key={index} 
                                //pinto de rojo si ya fue apretada la tecla sino pinto verde
                                variant = {teclasUsadas.includes(tecla)? 'danger': 'success'}
                                //desactivo la tecla si fue apretada o el contador es mayor que 5
                                disabled = {teclasUsadas.includes(tecla) || contador > 5? true: false}
                                style={{width: "40px", height: "40px", margin: "2px",}}
                                onClick={() => seleccionarLetra(tecla)}>{tecla} 
                            </Button>
                        )}
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="4" className="text-center mt-3">
                    <Button 
                        onClick={() => inicializarJuego()} 
                        variant="primary" size="lg" 
                        //desactivo boton si el contador es mayor que 5
                        disabled = {contador > 5? false : true}>
                        Iniciar Juego
                    </Button>
                    <Volver/>
                </Col>
            </Row>
        </Container>
    )
}
export default Juego;