import React, { useState } from "react"

const switchLabelSample = [ 
    {id: 0, name: "ON"},
    {id: 1, name: "OFF"},
]

const SwitchBtn = () => {
    return (
        <div></div>
    )
}

export const Switch = () => {
  const [isWhich, changeSwitch] = useState(true)
  return (
      <section>
          <h1>切替ボタン</h1>
      </section>
  )
}
