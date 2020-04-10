import React from "react"
import { Link, withRouter } from "react-router-dom"
import ClassNames from "classnames"

import { ROUTE } from "../route/index"

export const Header = withRouter(({ location }) => {
  return (
    <header>
      <ul>
        {ROUTE.map((pathList, i) => (
          <li
            key={i}
            className={ClassNames({
              active: location.pathname === pathList.path,
            })}
          >
            <Link to={pathList.path}>{pathList.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
})
