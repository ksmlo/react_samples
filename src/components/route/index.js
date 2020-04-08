import React from "react"

import { Index } from "../pages/index"
import { Switch } from "../pages/switch"
import { Counter } from "../pages/counter"
import { Props } from "../pages/props"
import { List } from "../pages/list"
import { Table } from "../pages/table"
import { Pagination } from "../pages/pagination"
import { Routing } from "../pages/routing"
import { Modal } from "../pages/modal"
import { Ticker } from "../pages/ticker"
import { Carousel } from "../pages/carousel"
import { Calendar } from "../pages/calendar"
import { Memo } from "../pages/memolize"

const Test = () => {
  return <div />
}

export const ROUTE = [
  { title: "TOP", path: "/", component: Index },
  { title: "切替ボタン", path: "/switch", component: Switch },
  { title: "カウンター", path: "/counter", component: Counter },
  { title: "プロップス", path: "/props", component: Props },
  { title: "リスト", path: "/list", component: List },
  { title: "テーブル", path: "/table", component: Table },
  { title: "ページネーション", path: "/pagination", component: Pagination },
  { title: "ルーティング", path: "/routing", component: Routing },
  { title: "モーダル", path: "/modal", component: Modal },
  { title: "ティッカー", path: "/ticker", component: Ticker },
  { title: "カルーセル", path: "/carousel", component: Carousel },
  { title: "カレンダー", path: "/calendar", component: Calendar },
  { title: "メモ", path: "/memo", component: Memo },
]
