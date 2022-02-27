import React, {Suspense} from "react";
import {BrowserRouter, Routes, Route, Outlet, useLocation, Link} from "react-router-dom";

const App2 = React.lazy(() => import("app2/AppRoutes"));

const Root = () => {
    const location = useLocation();
    console.log(location);

    return (
        <Outlet/>
    );
};
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <nav>
                    <Link to="/app-1/">App1</Link>
                    <br/>
                    <Link to="/app-2/kkk">App2</Link>
                </nav>
                <Routes>
                    <Route paht={"/"} element={<Root/>}>
                        <Route path="app-1/*" element={<div>app 1 router</div>}/>
                    <Route path={"app-2/*"} element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <App2/>
                        </Suspense>
                    }/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
