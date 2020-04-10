import React, { useReducer } from "react"
import DatePicker from "react-datepicker"
import dayjs from "dayjs"

const calendarReducer = (state, action) => {
  let newDate
  switch (action.type) {
    case "CHANGE_FROM":
      newDate = dayjs(action.date).isBefore(state.date[1])
        ? action.date
        : state.date[0]
      return { date: [newDate, state.date[1]] }
    case "CHANGE_TO":
      newDate = dayjs(action.date).isAfter(state.date[0])
        ? action.date
        : state.date[1]
      return { date: [state.date[0], newDate] }
    default:
      return state
  }
}

const calendarInitialState = {
  date: [new Date(), new Date()],
}

export const SelectCalendar = props => {
  return (
    <div className="calendar-wrapper">
      <DatePicker
        selected={props.date[0]}
        onChange={date => props.action({ type: "CHANGE_FROM", date: date })}
        dateFormat="yyyy年M月d日"
      />
      <span>〜</span>
      <DatePicker
        selected={props.date[1]}
        onChange={date => props.action({ type: "CHANGE_TO", date: date })}
        dateFormat="yyyy年M月d日"
      />
    </div>
  )
}

export const Calendar = () => {
  const [calendarState, calendarAction] = useReducer(
    calendarReducer,
    calendarInitialState
  )
  return (
    <section className="calendar">
      <h1>カレンダー</h1>
      <SelectCalendar date={calendarState.date} action={calendarAction} />
      <span className="attention">日付を逆転させて設定した場合、元に戻ります</span>
    </section>
  )
}
