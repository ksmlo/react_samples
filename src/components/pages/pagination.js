import React, { useState } from "react"
import { range } from "lodash"
import ClassNames from "classnames"

const PaginationComponent = props => {
  return (
    <ul>
      <li className="btn-circle" onClick={() => props.change(0)}>
        <i className="material-icons">skip_previous</i>
      </li>
      <li
        className="btn-circle"
        onClick={() => props.change(props.current - 1)}
      >
        <i className="material-icons">navigate_before</i>
      </li>
      {range(props.count).map((index, i) => {
        return (
          <li
            key={i}
            className={ClassNames("btn-circle", {
              active: props.current === index,
            })}
            onClick={() => props.change(index)}
          >
            {index + 1}
          </li>
        )
      })}
      <li
        className="btn-circle"
        onClick={() => props.change(props.current + 1)}
      >
        <i className="material-icons">navigate_next</i>
      </li>
      <li className="btn-circle" onClick={() => props.change(props.count - 1)}>
        <i className="material-icons">skip_next</i>
      </li>
    </ul>
  )
}

export const Pagination = () => {
  const [current, changeCurrent] = useState(0)
  return (
    <section className="pagination">
      <h1>ページネーション</h1>
      <PaginationComponent
        count={10}
        current={current}
        change={p => changeCurrent(p)}
      />
    </section>
  )
}
