import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AppRoutes from "./AppRoutes";

const App = () => {
    return (
        <div>
            <BrowserRouter basename={"app-2/"}>
                    <AppRoutes/>
            </BrowserRouter>
        </div>
    )
}


export default App;
