import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App";
import Search from "../pages/Search";
import NotFound from "../components/errors/NotFound";

const routes = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App />}>
                <Route index element={ <Search /> } />
            </Route>

            <Route path="*" element={ <NotFound /> } />
        </Routes>
    </BrowserRouter>
)

export default routes;
