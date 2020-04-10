import React from "react"
import {
  Switch,
  Route,
  Link,
  withRouter,
  useRouteMatch,
  useParams,
} from "react-router-dom"
import { find, get } from "lodash"

import { DiffCounter } from "./counter"

const testRouting = [
  { name: "挨拶", path: "greeting", component: () => <div>こんにちは</div> },
  { name: "ニュース", path: "news", component: () => <div>ニュースです</div> },
  {
    name: "カウント",
    path: "count",
    component: () => (
      <div className="counter">
        <DiffCounter />
      </div>
    ),
  },
]

const Container = () => {
  const param = useParams()
  const exactPathInfo = find(testRouting, { path: param.id })
  const PathComponent = get(exactPathInfo, "component", null)
  return !!PathComponent ? PathComponent() : null
}

export const Routing = withRouter(() => {
  const match = useRouteMatch()
  return (
    <section className="routing">
      <h1>ルーティング</h1>
      <span>下記の文字をクリックしてください</span>
      <div className="routing-container">
      <ul>
        {testRouting.map((li, i) => {
          return (
            <li key={i}>
              <Link to={`${match.url}/${li.path}`}>{li.name}</Link>
            </li>
          )
        })}
      </ul>
      <Switch>
        {testRouting.map((li, i) => (
          <Route key={i} path={`${match.path}/:id`} component={Container} />
        ))}
      </Switch>
      </div>
    </section>
  )
})
