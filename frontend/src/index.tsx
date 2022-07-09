import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Form from "./Form";
import reportWebVitals from "./reportWebVitals";

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "75vh",
};

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <div style={style}>
            <Form />
        </div>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
