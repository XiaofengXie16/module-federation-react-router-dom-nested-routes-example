import React,{Suspense} from "react";
import {datadogRum} from "@datadog/browser-rum";
const RemoteButton = React.lazy(()=>import("app2/Button"));

datadogRum.init({
    applicationId: "my-id",
    clientToken: "my-token",
    env: "local",
    service: "galaxy",
    site: "datadoghq.com",
    trackInteractions: false,
    version: "Unknown Version"
});

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
