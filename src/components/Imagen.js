import React from "react"
import {Col, Image } from "react-bootstrap";

export default function Imagen({numero})
{
    const nroImagen = numero % 10; // obtengo numero de la imagen

    return (
        <Col  xs="10" md="6" lg="4"  className="text-center rounded border border-5 border-warning">
            <Image
                variant="top" 
                className="img-fluid mt-4" 
                width="160"
                height="160"
                src={"img/ahorcado" + nroImagen + ".png"} 
            />
            {numero < 7? null: <Image //muestro la imagen cuando hay un ganador o perdedor
                variant="top" 
                className="img-fluid mt-4" 
                width="160"
                height="160"
                src={"img/ahorcado" + (numero - nroImagen) + ".png"} //obtengo la imagen de ganador o perdedor
            />}
        </Col>
    )
}