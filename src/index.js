import "react-app-polyfill/ie11"
import React from "react"
import "./style/app.scss"

import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"
import { Main } from "./components"

ReactDOM.render(
  <Main />,
  document.getElementById("root")
)
