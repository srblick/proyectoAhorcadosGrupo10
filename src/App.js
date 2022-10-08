import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MenuInicio} from "./components/MenuInicio";
import PageError from "./components/PageError";

function App() {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<MenuInicio/>} />
            <Route path="*" element={<PageError/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;