import React from "react";
import {Route,Routes} from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/kkk" element={<div>app 2 kkk</div>}/>
            <Route path="/omg" element={<div>app 2 omg</div>}/>
        </Routes>
    )
}


export default AppRoutes;
