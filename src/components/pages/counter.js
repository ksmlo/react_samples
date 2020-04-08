import React, { useState, useReducer } from "react"

//useState
const SimpleCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="component-area">
      <span className="count-position">{count}</span>
      <div className="btn-area">
        <div className="btn-circle" onClick={() => setCount(count - 1)}>
          <i className="material-icons">remove</i>
        </div>
        <div className="btn-circle" onClick={() => setCount(count + 1)}>
          <i className="material-icons">add</i>
        </div>
      </div>
    </div>
  )
}

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

const DiffCounter = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 })
  return (
    <div className="component-area">
      <span className="count-position">{state.count}</span>
      <div className="btn-area">
        <div
          className="btn-circle"
          onClick={() => dispatch({ type: "decrement" })}
        >
          <i className="material-icons">remove</i>
        </div>
        <div
          className="btn-circle"
          onClick={() => dispatch({ type: "increment" })}
        >
          <i className="material-icons">add</i>
        </div>
      </div>
    </div>
  )
}

export const Counter = () => {
  return (
    <section className="counter">
      <h1>カウンター</h1>
      <span className="title">useState版</span>
      <SimpleCounter />
      <span className="title">useEffect版</span>
      <DiffCounter />
    </section>
  )
}
