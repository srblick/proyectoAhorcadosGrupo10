import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MenuInicio} from "./components/MenuInicio"

function App() {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<MenuInicio/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;