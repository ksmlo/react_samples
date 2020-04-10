import React from "react"

export const createTableColumn = (title, cls, content) => {
  return {
    title: title,
    cls: cls,
    content:
      typeof content === "string"
        ? data => data[content]
        : data => content(data),
  }
}

const sampleTable = [
  createTableColumn("名前", "name-cell", "name"),
  createTableColumn("年齢", "age-cell", "age"),
  createTableColumn("誕生日", "birth-cell", "birth"),
]

const sampleData = [
  { name: "田中", age: "20", birth: "2000/01/01" },
  { name: "中村", age: "19", birth: "2000/07/09" },
  { name: "佐々木", age: "28", birth: "1992/04/01" },
  { name: "田村", age: "107", birth: "1912/10/01" },
  { name: "田代", age: "9", birth: "2010/08/31" },
]

export const BaseTable = props => {
  return (
    <table>
      <thead>
        <tr>
          {props.list.map((li, i) => (
            <th key={i} className={li.cls}>
              {li.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((data, i) => (
          <tr key={i}>
            {props.list.map((list, j) => (
              <td key={j} className={list.cls}>
                {list.content(data)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export const Table = () => {
  return (
    <section className="table">
      <h1>テーブル</h1>
      <BaseTable data={sampleData} list={sampleTable} />
    </section>
  )
}
