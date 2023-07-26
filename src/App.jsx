import { useState } from 'react'
import NavBar from './component/NavBar'
import Bag from './component/Bag'
import { useGlobalContext } from './context'


function App() {
  const {loading}= useGlobalContext();

  if(loading){
    return(
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
}

  return (
    <>
    <NavBar/>
    <Bag/>
  </>
  )
}

export default App
