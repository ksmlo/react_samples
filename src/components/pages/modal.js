import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import ClassNames from "classnames"

export const ModalComponent = props => {
  const body = document.getElementsByTagName("body")[0]
  return ReactDOM.createPortal(
    <>
      <div className={ClassNames("modal", { show: props.isShow })}>
        <div className="modal-header">
          <div className="icon-area">
            <i className="material-icons" onClick={() => props.onHide()}>
              close
            </i>
          </div>
        </div>
        <div className="modal-body"></div>
        <div className="modal-footer">
          <div className="modal-btn" onClick={() => props.onHide()}>
            閉じる
          </div>
        </div>
      </div>
      <div className={ClassNames("modal-bg", { show: props.isShow })}></div>
    </>,
    body
  )
}

export const Modal = () => {
  const [showModal, changeShow] = useState(false)
  useEffect(() => {
    return changeShow(false)
  }, [])
  return (
    <section className="modal-section">
      <h1>モーダル</h1>
      <div className="modal-btn" onClick={() => changeShow(true)}>
        OPEN
      </div>
      <ModalComponent isShow={showModal} onHide={() => changeShow(false)} />
    </section>
  )
}
