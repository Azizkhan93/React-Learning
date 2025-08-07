import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {

  return (
    <>
              <link href="/src/style.css" rel="stylesheet"></link>

              {/* <h1 className='bg-sky-500/50 text-7xl'>Hello world</h1> */}
              <Cards username='Aziz' btnText='Click me'/>
              <br/>
              <Cards username='Aiman' btnText='Click me'/>

      
    </>
  )
}

export default App
