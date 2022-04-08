import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GetExamplePage from "./app/view/components/ExampleComponent";
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <GetExamplePage />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <div key={"1"}>
      <GetExamplePage key={"1"} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
