"use client"

import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"
dayjs.extend(localizedFormat)

const DateFormatter = ({ dateTime }: { dateTime: string }) => {
  return (
    <time dateTime={dateTime}>{dayjs(dateTime).format("MMMM D, YYYY")}</time>
  )
}

export default DateFormatter
