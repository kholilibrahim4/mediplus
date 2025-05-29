import React, { useState } from 'react'
import TopBar from './topBar/TopBar'
import HeaderInner from './headerInner/HeaderInner'

export default function Header({children}) {
  const [tiggerAct, setTiggerAct] = useState(false)


  return (
    <>
      <TopBar />
      <HeaderInner  tiggerAct={tiggerAct} setTiggerAct={setTiggerAct}/>
      {children }
    </>
  )
}
