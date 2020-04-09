import React from "react"

const PaginationComponent = () => {
  return (
    <ul>
      <li>
        <i className="material-icons">skip_previous</i>
      </li>
      <li>
        <i className="material-icons">navigate_before</i>
      </li>
      <li>
        <i className="material-icons">navigate_next</i>
      </li>
      <li>
        <i className="material-icons">skip_next</i>
      </li>
    </ul>
  )
}

export const Pagination = () => {
  return (
    <section className="pagination">
      <h1>ページネーション</h1>
      <PaginationComponent />
    </section>
  )
}
