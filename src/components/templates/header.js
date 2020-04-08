import React from "react"
import { Link } from "react-router-dom"

import { ROUTE } from "../route/index"

export const Header = () => {
  return (
    <header>
      <ul>
        {ROUTE.map((pathList, i) => (
          <li key={i}><Link to={pathList.path}>{pathList.title}</Link></li>
        ))}
      </ul>
    </header>
  )
}
