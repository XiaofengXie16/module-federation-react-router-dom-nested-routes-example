import {datadogRum} from "@datadog/browser-rum";
import React from "react";

const Button =()=>{
    datadogRum.setRumGlobalContext({"state":"MA"})
    console.log(React.version)
    return <button>This is a button from App 2</button>
}

export default Button;
