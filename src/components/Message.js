import React from 'react'
import {DateTime} from 'luxon'

const Message = (props) => {
  const postTime = props.value.timestamp
  const formattedDate = (DateTime.fromISO(postTime).toLocaleString(DateTime.DATETIME_MED))
  console.log(formattedDate)
  return (
    <>
      <div>Title: {props.value.title}</div>
      <div>{props.value.message}</div>
      <div>Posted: {formattedDate}</div>
    </>
    
  )
}

export default Message