import React from "react"

const Messages = [
  {
    title: "密集",
    className: "",
    contents: [
      { msg: "人の多いところにいかない", cls: "" },
      { msg: "人との間隔をあける", cls: "" },
      { msg: "不要な行動をしない", cls: "" },
    ],
  },
  {
    title: "密接",
    className: "",
    contents: [
      { msg: "できるだけマスクをする", cls: "" },
      { msg: "近距離での会話を避ける", cls: "" },
    ],
  },
  {
    title: "密閉",
    className: "",
    contents: [
      { msg: "空気の籠る場所にいつづけない", cls: "" },
      { msg: "適度な換気を意識する", cls: "" },
    ],
  },
]

export const List = () => {
  return (
    <section>
      <h1>リスト展開</h1>
      <div>
        {Messages.map((message, i) => {
          return (
            <div>
              <span>{message.title}</span>
              <ul>
                {message.contents.map((li, j) => {
                  return <li className={li.cls}>{li.msg}</li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
