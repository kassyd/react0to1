// import React from "react"
// import ReactDOM from "react-dom/client"
import React from "./react_module/react/index"
import ReactDOM from "./react_module/react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log("root", root)
console.log(
  <div style={{ color: "red" }}>
    <span>1</span>
    <span>2</span>
  </div>
)

root.render(
  React.createElement(
    "div",
    { style: { color: "red" } },
    React.createElement("span", { style: { color: "red" }, name: "jack" }, 1),
    React.createElement("span", { style: { color: "yellow" } }, 1)
  )
)
