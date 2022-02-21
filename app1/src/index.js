window.app1Url = "http://localhost:3002";
import {datadogRum} from "@datadog/browser-rum";

datadogRum.init({
    applicationId: "my-own-application-id",
    clientToken: "my-own-client-token",
    env: "local",
    service: "galaxy",
    site: "datadoghq.com",
    trackInteractions: false,
    version: "Unknown Version"
});

import("./bootstrap");
