import React from "react"
import { Router, Route, Switch } from "react-router"
import { createBrowserHistory } from "history"

import { Header } from "./templates/header"
import { ROUTE } from "./route/index"

export const Main = props => {
  return (
    <Router history={createBrowserHistory()}>
      <div className="main">
        <Header />
        <Switch>
          {ROUTE.map((pathList, i) => (
            <Route
              key={i}
              exact={!!pathList.exact}
              path={pathList.path}
              component={pathList.component}
            />
          ))}
        </Switch>
      </div>
    </Router>
  )
}
