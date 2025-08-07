import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setcounter] = useState(0)

  const addValue = ()=>
  {
    setcounter(counter + 1)
    if(counter > 19)
    {
      setcounter(0)
      alert("Counter is reset to 0 after reaching 20")

    }
  }
  const RemoveValue = ()=>
  {
    setcounter(counter - 1)
    if (counter <= 0) {
      setcounter(0)
      alert("Counter cannot go below 0")
    }

  }

  return (
    <>
    <h1>Code With Aziz</h1>
    <button onClick={addValue}>Add Value</button>
    <button onClick={RemoveValue}>Remove Value</button>

    <h2>{counter}</h2>
    <h2>{counter}</h2>
    <h2>{counter}</h2>

<footer>
      <p>Counter App</p>
      <p>Aziz</p>
      <p>2023</p>
      <p>All rights reserved</p>
</footer>
    </>
  )
}

export default App
