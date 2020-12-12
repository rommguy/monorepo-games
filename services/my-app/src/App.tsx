import React from "react"
import logo from "./logo.svg"
import "./App.css"

interface GeneralObj {
  prop1: any
  prop2: boolean
}

const bla = async (someObj: any) => {
  try {
    return someObj.getNumber()
  } catch (err) {
    return 10
  }
}

function App() {
  const title = "hello" + "world"
  const someObj: GeneralObj = {
    prop1: "hello",
    prop2: false,
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <div>{title}</div>
      <div>{someObj.prop1}</div>
    </div>
  )
}

export default App
