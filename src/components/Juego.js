import React, {useState} from "react";
import Boton from "./Boton";
import Imagen from "./Imagen";
import { Container, Row, Col, Button } from "react-bootstrap";
import Volver from "./Volver";

function Juego() {
    const [contador, setContador] = useState(0);

    let teclado = Array.from("QWERTYUIOPASDFGHJKLÑZXCVBNM");
    function seleccionarLetra(letra) {
        console.log(letra);
        setContador(contador+1)
        return letra;
    }


    return(
        <Container>
            <Row className="justify-content-md-center mb-4">
                <h1 className="text-center" > Juego Ahorcado </h1>
            </Row>
            <Row className="justify-content-md-center">
                <Imagen 
                    numero={contador} 
                />
            </Row>
            <Row className="justify-content-md-center mb-4">
                {teclado.map(tecla =>
                <Boton manejarClick = {seleccionarLetra}>
                    {tecla}
                </Boton>
                )}
            </Row>
            <Row className="justify-content-md-center">
                <Col md="4" className="text-center mt-5">
                    <Button  variant="primary" size="lg" >
                        Jugar
                    </Button>
                    <Volver/>
                </Col>
            </Row>
        </Container>
    )
}
export default Juego;