import React from 'react'
import { useSelector } from 'react-redux'

export default function StoreData(prop) {
  const myState = useSelector((state) => state.reducer);
  console.log(myState)
  return (
    <div>
      <h1>Welcom to  {prop.company}</h1>
      {/* <h2>Agenda: {myState[0].Agenda}</h2> */}
    </div>
  )
}
