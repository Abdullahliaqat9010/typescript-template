import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "App";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then(() => {
      console.log("Background notifications enabled");
    })
    .catch((err) => {
      console.log("Service worker registration failed, error:", err);
    });
}

ReactDOM.render(<App />, document.getElementById("root"));
