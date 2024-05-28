import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const MyFunction = () => {
  return <h1>Chai With Papay</h1>
}
const anyElement = {
  type: "a",
  props: {
      href: "https://google.com",
      target: "_blank",
      style: "background: green; padding: 1rem; color: white; text-decoration: none;",
      children: {
          type: 'span',
          children: 'Inner'
      }
  },
  children: "Click Me"
}

const anotherElement = (
  <a href="https://google.com">Visit Me</a>
)

const finalElement = React.createElement(
  "input",
  {
    type: "time"
  }
)

ReactDOM.createRoot(document.getElementById("root")).render(
    // <MyFunction />
    // MyFunction()
    // anyElement()
    // anotherElement
    // finalElement
    <App />
)