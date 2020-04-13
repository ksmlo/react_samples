import React, { useReducer, useRef, useMemo } from "react"
import ClassNames from "classnames"

import img1 from "../../img/1.jpg"
import img2 from "../../img/2.jpg"
import img3 from "../../img/3.jpg"
import img4 from "../../img/4.jpg"

const imgList = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
]

const carouselInitialState = {
  current: 0,
}

const carouselReducer = (state, action) => {
  switch (action.type) {
    case "CAROUSEL_NEXT":
      return { current: state.current + 1 }
    case "CAROUSEL_PREV":
      return { current: state.current - 1 }
    case "CAROUSEL_MOVE":
      return { current: action.move }
    default:
      return state
  }
}

export const CarouselContent = props => {
  const item = useRef()
  const currentLeft = useMemo(
    () =>
      !!item.current ? -item.current.offsetWidth * props.state.current : 0,
    [props.state.current]
  )
  return (
    <div className="carousel-wrapper">
      <ul className="carousel-container" style={{ left: currentLeft }}>
        {props.list.map((li, i) => (
          <li key={i} ref={elm => (!i ? (item.current = elm) : null)}>
            <img src={li.img} />
          </li>
        ))}
      </ul>
    </div>
  )
}

const CarouselWrapper = props => {
  const isFirst = props.state.current === 0
  const isLast = props.state.current === props.list.length - 1
  return (
    <div className="carousel-content">
      <div
        className={ClassNames("carousel-btn", { disabled: isFirst })}
        onClick={() => !isFirst && props.action({ type: "CAROUSEL_PREV" })}
      >
        <i className="material-icons">navigate_before</i>
      </div>
      {props.children}
      <div
        className={ClassNames("carousel-btn", { disabled: isLast })}
        onClick={() => !isLast && props.action({ type: "CAROUSEL_NEXT" })}
      >
        <i className="material-icons">navigate_next</i>
      </div>
      <CarouselIndicator {...props} />
    </div>
  )
}

const CarouselIndicator = props => {
  return (
    <div className="carousel-indicator">
      {props.list.map((li, i) => {
        const isSelected = props.state.current === i
        return (
          <div
            className={ClassNames("carousel-indicator-item", {
              disabled: isSelected,
            })}
            key={i}
            onClick={() =>
              !isSelected && props.action({ type: "CAROUSEL_MOVE", move: i })
            }
          />
        )
      })}
    </div>
  )
}

export const Carousel = () => {
  const [carouselState, carouselAction] = useReducer(
    carouselReducer,
    carouselInitialState
  )
  return (
    <section>
      <h1>カルーセル</h1>
      <CarouselWrapper
        list={imgList}
        state={carouselState}
        action={carouselAction}
      >
        <CarouselContent
          list={imgList}
          state={carouselState}
          action={carouselAction}
        />
      </CarouselWrapper>
    </section>
  )
}
