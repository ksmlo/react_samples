import React, { useReducer } from "react"
import ClassNames from "classnames"

//useReducer
const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    default:
      return state
  }
}

const Counter = props => {
  let count
  if (props.count < props.min) {
    count = props.min
  } else if (props.count > props.max) {
    count = props.max
  } else {
    count = props.count
  }

  return (
    <div className="component-area">
      <span className="count-position">{count}</span>
      <div className="btn-area">
        <div
          className={ClassNames("btn-circle", {
            disabled: count === props.min,
          })}
          onClick={() =>
            count !== props.min && props.action({ type: "decrement" })
          }
        >
          <i className="material-icons">remove</i>
        </div>
        <div
          className={ClassNames("btn-circle", {
            disabled: count === props.max,
          })}
          onClick={() =>
            count !== props.max && props.action({ type: "increment" })
          }
        >
          <i className="material-icons">add</i>
        </div>
      </div>
    </div>
  )
}

export const Props = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 })
  return (
    <section className="counter">
      <h1>Props</h1>
      <Counter count={state.count} action={dispatch} min={0} />
      <Counter count={state.count} action={dispatch} max={10} />
      <Counter count={state.count} action={dispatch} min={1} max={5} />
    </section>
  )
}
