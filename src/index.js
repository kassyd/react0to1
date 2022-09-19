// import React from "react"
// import ReactDOM from "react-dom/client"
import React from "./react_module/react/index"
import ReactDOM from "./react_module/react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))

function ListItem(props) {
  return (
    <div style={{ color: "red" }}>
      <span name="jack" style={{ color: "green" }}>
        123
      </span>
      <span name="rose">{props.name}</span>
    </div>
  )
}

class ClassComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { num: 1 }
  }
  add = () => {
    this.setState({ num: this.state.num + 1 })
  }
  render() {
    return (
      <div>
        <h4>{this.state.num}</h4>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
    }
  }
  render() {
    return <h1>Hello, {`${this.props.name} ${this.state.num}`}</h1>
  }
}

class ClassComp1 {
  constructor(props) {
    this.state = { num: 1 }
  }
  add = () => {
    this.setState({ num: this.state.num + 1 })
  }
  render() {
    return (
      <div>
        <h4>{this.state.num}</h4>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

console.log("ClassComp", React.createElement(ClassComp, {}), <ClassComp1 />)

console.log("list", <ListItem />)
console.log("listitem", React.createElement(ListItem, {}))

root.render(
  // React.createElement(Welcome, { name: "1" })
  <Welcome name="zyq" />
  // React.createElement(ClassComp, {})
)
// React.createElement(Welcome, {})
// <div style={{ color: "red" }}>
//   <span name="jack">123</span>
//   <span name="rose">456</span>
// </div>
// <ListItem />
// React.createElement(
//   "div",
//   { style: { color: "red" } },
//   React.createElement("span", { style: { color: "red" }, name: "jack" }, 1),
//   React.createElement("span", { style: { color: "yellow" } }, 1)
// )
