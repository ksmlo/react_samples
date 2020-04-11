import React, { useState, useRef, useEffect } from "react"
import { Router, Route, Switch } from "react-router"
import { createBrowserHistory } from "history"
import dayjs from "dayjs"

import { Header } from "./templates/header"
import { ROUTE } from "./route/index"

export const Main = props => {
  const [now, setNow] = useState(new Date())
  const openTime = new Date(2020, 3, 12, 20)
  const isBeforeOpen = dayjs(now).isAfter(openTime)
  const animationId = useRef()
  useEffect(() => {
    if (!isBeforeOpen) {
      animationId.current = requestAnimationFrame(() => {
        setNow(new Date())
      })
    } else if (dayjs(now).isSame(dayjs(openTime), "m")) {
      window.location.reload()
    }
  })
  const lastTime = dayjs(openTime).diff(now)
  return isBeforeOpen ? (
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
  ) : (
    <div className="timer-wrapper">
      <span>{lastTime}</span>
    </div>
  )
}
