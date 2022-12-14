import React from 'react'
import { useSelector } from 'react-redux'

export default function StoreData(prop) {
  const myState = useSelector((state) => state.reducer);
  console.log(myState[0])
  return (
    <div>
      <h1>Welcom to  {prop.company}</h1>
      <h2>{myState[0].Name}</h2>
    </div>
  )
}
