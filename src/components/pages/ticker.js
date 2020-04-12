import React, { useState, useEffect, useRef } from "react"
import { range } from "lodash"
import dayjs from "dayjs"

const TICKER_MOVEMENT = 1
const ANIMATION_TIME = 5

const sampleList = [
  {
    title:
      "国内株式市場見通し：感染者情報を睨みつつ、日経平均19000円台の値固めへ",
    time: "20200410150900",
  },
  {
    title: "株式週間展望＝アク抜けの動き一服も、コロナ・経済対策に不安―...",
    time: "20200410081200",
  },
  { title: "リンナイの業績と給料", time: "20200410160000" },
  {
    title:
      "【来週の注目材料】中国第1四半期の景気悪化は歴史的な数字に＜中国第...",
    time: "20200410170700",
  },
  {
    title: "富田隆弥の【CHART CLUB】　「2万円接近だが、慎重姿勢を忘れず」",
    time: "20200410101200",
  },
]

const TickerComponent = props => {
  const [currentTime, setTime] = useState(0)
  const animationId = useRef()
  const container = useRef()
  const wrapper = useRef()
  const lastItem = useRef()
  const containerWidth = useRef(0)
  const containerNum = useRef(1) //container数は一番最初でも1に設定

  const cancelAnimation = () =>
    !!animationId.current && window.clearTimeout(animationId.current)

  useEffect(() => {
    if (!!wrapper.current && !!lastItem.current) {
      const wrapperRect = wrapper.current.getBoundingClientRect()
      const wrapperLeft = wrapperRect.left
      const lastItemX = lastItem.current.getBoundingClientRect().right
      // 初回のみcontainerWidth, containerNumの値を入れます
      if (!containerWidth.current) {
        const containerRect = container.current.getBoundingClientRect()
        const wrapperRight = wrapperRect.right
        containerNum.current =
          Math.ceil((wrapperRight - wrapperLeft) / lastItemX) + 1
        containerWidth.current = containerRect.right - containerRect.left
      }

      if (wrapperLeft >= lastItemX) {
        // 一番最初に表示した項目に戻ってきた時に、リセット
        setTime(Math.floor(wrapperLeft - lastItemX))
      } else {
        animationId.current = window.setTimeout(() => {
          setTime(currentTime + TICKER_MOVEMENT)
        }, ANIMATION_TIME)
      }
    }
    return () => cancelAnimation()
  }, [currentTime])

  return (
    <div ref={wrapper} className="ticker-wrapper">
      {range(containerNum.current).map((index, i) => {
        const containerStartPosition = containerWidth.current * index
        return (
          <ul
            key={i}
            ref={elm => (!i ? (container.current = elm) : null)}
            style={{ left: -currentTime + containerStartPosition }}
          >
            {props.list.map((li, j) => (
              <li
                ref={elm =>
                  !i && j === props.list.length - 1
                    ? (lastItem.current = elm)
                    : null
                }
                key={j}
              >
                <span className="ticker-title">{li.title}</span>
                <span className="time">{dayjs(li.time).format("HH:mm")}</span>
              </li>
            ))}
          </ul>
        )
      })}
    </div>
  )
}

export const Ticker = () => {
  return (
    <section className="ticker">
      <h1>ティッカー</h1>
      <TickerComponent list={sampleList} />
    </section>
  )
}
