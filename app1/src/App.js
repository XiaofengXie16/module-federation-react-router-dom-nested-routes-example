import React,{Suspense} from "react";
const RemoteButton = React.lazy(()=>import("app2/Button"));

const App = () => {
    return(
        <div>
        <h1 style={{background: "cyan"}}>Hello this is App 1</h1>
            <Suspense fallback={"loading..."}>
                <RemoteButton/>
            </Suspense>
        </div>)
}


export default App;
