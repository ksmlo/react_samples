import "react-app-polyfill/ie11"
import React from "react"
import ReactDOM from "react-dom"
import "react-datepicker/dist/react-datepicker.css"
import "./style/app.scss"

import { Main } from "./components"

ReactDOM.render(<Main />, document.getElementById("root"))
