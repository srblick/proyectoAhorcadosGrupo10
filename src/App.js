import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MenuInicio} from "./components/MenuInicio";
import PageError from "./components/PageError";
import Cards from "./components/cards";
import ReglasDelJuego from "./components/ReglasDelJuego";
import Juego from "./components/Juego";


function App() {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<MenuInicio/>} />
            <Route path="/juego" element={<Juego/>} />
            <Route path="/desarrolladores" element={<Cards/>} />
            <Route path="/reglasdeljuego" element={<ReglasDelJuego/>} />
            <Route path="*" element={<PageError/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;