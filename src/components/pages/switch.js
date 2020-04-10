import React, { useState } from "react"

const switchLabelSample = [{ id: 0, name: "ON" }, { id: 1, name: "OFF" }]

const SwitchBtn = props => {
  return (
    <div className="radio-btn">
      {props.list.map((li, i) => (
        <label key={i}>
          <input
            type="radio"
            name={li.name}
            checked={props.checked === li.id}
            onChange={() => props.changeCheck(li.id)}
          />
          <span>{li.name}</span>
        </label>
      ))}
    </div>
  )
}

export const Switch = () => {
  const [selectedId, changeSwitch] = useState(switchLabelSample[0].id)
  return (
    <section className="switch">
      <h1>切替ボタン</h1>
      <SwitchBtn
        list={switchLabelSample}
        checked={selectedId}
        changeCheck={id => changeSwitch(id)}
      />
    </section>
  )
}
