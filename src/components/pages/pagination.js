import React, { useReducer } from "react"
import { range } from "lodash"
import ClassNames from "classnames"

const PaginationComponent = props => {
  return (
    <ul>
      <li
        className="btn-circle"
        onClick={() => props.action({ type: "PAGINATION_MOVE", page: 0 })}
      >
        <i className="material-icons">skip_previous</i>
      </li>
      <li
        className="btn-circle"
        onClick={() =>
          props.state.page !== 0 && props.action({ type: "PAGINATION_PREV" })
        }
      >
        <i className="material-icons">navigate_before</i>
      </li>
      {props.list.map((index, i) => {
        return (
          <li
            key={i}
            className={ClassNames("btn-circle", {
              active: props.state.page === index,
            })}
            onClick={() =>
              props.action({ type: "PAGINATION_MOVE", page: index })
            }
          >
            {index + 1}
          </li>
        )
      })}
      <li
        className="btn-circle"
        onClick={() =>
          props.state.page !== props.list.length - 1 &&
          props.action({ type: "PAGINATION_NEXT" })
        }
      >
        <i className="material-icons">navigate_next</i>
      </li>
      <li
        className="btn-circle"
        onClick={() =>
          props.action({ type: "PAGINATION_MOVE", page: props.list.length - 1 })
        }
      >
        <i className="material-icons">skip_next</i>
      </li>
    </ul>
  )
}

export const paginationReducer = (state, action) => {
  switch (action.type) {
    case "PAGINATION_NEXT":
      return { page: state.page + 1 }
    case "PAGINATION_PREV":
      return { page: state.page - 1 }
    case "PAGINATION_MOVE":
      return { page: action.page }
    default:
      return state
  }
}

export const initialPaginationState = { page: 0 }

export const Pagination = () => {
  const [paginationState, paginationAction] = useReducer(
    paginationReducer,
    initialPaginationState
  )
  return (
    <section className="pagination">
      <h1>ページネーション</h1>
      <PaginationComponent
        list={range(10)}
        state={paginationState}
        action={paginationAction}
      />
    </section>
  )
}
