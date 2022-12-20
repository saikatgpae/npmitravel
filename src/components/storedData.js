import React from 'react'
import { useSelector } from 'react-redux'
// import { useState } from 'react';

export default function StoreData(prop) {
  // const [todos, setTodos] = useState([]);
  const myState = useSelector((state) => state.reducer);
  console.log(myState)
  return (
    <div>
      <h1>Welcom to  {prop.company}</h1>
      {/* <h2>Agenda: {myState[0]}</h2> */}
    </div>
  )
}
