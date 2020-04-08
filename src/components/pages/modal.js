import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

export const ModalComponent = props => {
  const body = document.getElementsByTagName("body")[0]
  return props.isShow
    ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-header"></div>
          <div className="modal-body"></div>
          <div className="modal-footer"></div>
        </div>,
        body
      )
    : null
}

export const Modal = () => {
  const [showModal, changeShow] = useState(false)
  useEffect(() => {
    return changeShow(false)
  }, [])
  return (
    <section className="modal-section">
      <h1>モーダル</h1>
      <div class="modal-btn" onClick={() => changeShow(true)}>
        OPEN
      </div>
      <ModalComponent isShow={showModal} onHide={() => changeShow(false)} />
    </section>
  )
}
