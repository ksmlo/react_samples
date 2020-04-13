import React, { useReducer, useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import ClassNames from "classnames"
import { reject, clone, concat } from "lodash"
import { v4 as uuid } from "uuid"

const initialState = {
  list: [],
  inputValue: "",
  modalInputValue: "",
  modalId: null,
}

const keyEnterEvent = (e, fn) => e.key === "Enter" && fn()

const memoReducer = (state, action) => {
  let currentList = clone(state.list)
  switch (action.type) {
    case "ADD_LIST":
      if (!state.inputValue) return state
      return {
        ...state,
        inputValue: "",
        list: concat(currentList, { id: uuid(), content: state.inputValue }),
      }
    case "REMOVE_LIST":
      const removedList = reject(currentList, li => li.id === action.id)
      return { ...state, list: removedList }
    case "CHANGE_LIST":
      if (!state.modalInputValue) return
      const changeList = currentList.map(li =>
        li.id === state.modalId
          ? { id: li.id, content: state.modalInputValue }
          : li
      )
      return { ...state, list: changeList, modalInputValue: "", modalId: null }
    case "CHANGE_VALUE":
      return { ...state, inputValue: action.value }
    case "CHANGE_MODAL_VALUE":
      return { ...state, modalInputValue: action.value }
    case "DISPLAY_MODAL":
      return { ...state, modalId: action.id, modalInputValue: action.value }
    default:
      return state
  }
}

export const Input = props => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={props.state.inputValue}
        onChange={e =>
          props.action({ type: "CHANGE_VALUE", value: e.target.value })
        }
        onKeyDown={e =>
          keyEnterEvent(e, () => props.action({ type: "ADD_LIST" }))
        }
      />
      <div className="btn" onClick={() => props.action({ type: "ADD_LIST" })}>
        登録
      </div>
    </div>
  )
}

export const MemolizeList = props => {
  return (
    <ul className="memo-list">
      {props.state.list.map((li, i) => {
        return (
          <li key={i}>
            <span
              onClick={() =>
                props.action({
                  type: "DISPLAY_MODAL",
                  id: li.id,
                  value: li.content,
                })
              }
            >
              {li.content}
            </span>
            <i
              className="material-icons"
              onClick={() => props.action({ type: "REMOVE_LIST", id: li.id })}
            >
              close
            </i>
          </li>
        )
      })}
    </ul>
  )
}

export const InputModal = props => {
  const input = useRef()
  const body = document.getElementsByTagName("body")[0]

  useEffect(() => {
    if (!!props.state.modalId && !!input.current) input.current.focus()
  }, [props.state.modalId])
  return ReactDOM.createPortal(
    <>
      <div
        className={ClassNames("modal input-modal", {
          show: !!props.state.modalId,
        })}
      >
        <input
          ref={input}
          type="text"
          value={props.state.modalInputValue}
          onChange={e =>
            props.action({
              type: "CHANGE_MODAL_VALUE",
              value: e.target.value,
            })
          }
          onKeyDown={e =>
            keyEnterEvent(e, () => props.action({ type: "CHANGE_LIST" }))
          }
        />
        <div
          className="btn"
          onClick={e => props.action({ type: "CHANGE_LIST" })}
        >
          登録
        </div>
        <i
          className="material-icons"
          onClick={() =>
            props.action({ type: "DISPLAY_MODAL", id: null, value: "" })
          }
        >
          close
        </i>
      </div>
      <div
        className={ClassNames("modal-bg", { show: !!props.state.modalId })}
        onClick={() =>
          props.action({ type: "DISPLAY_MODAL", id: null, value: "" })
        }
      />
    </>,
    body
  )
}

export const Memo = () => {
  const [memoState, memoAction] = useReducer(memoReducer, initialState)
  return (
    <div>
      <h1>メモ機能</h1>
      <Input state={memoState} action={memoAction} />
      <MemolizeList state={memoState} action={memoAction} />
      <InputModal state={memoState} action={memoAction} />
    </div>
  )
}
