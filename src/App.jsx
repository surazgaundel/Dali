import { useState } from 'react'
import NavBar from './component/NavBar'
import Bag from './component/Bag'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Bag/>
  </>
  )
}

export default App
