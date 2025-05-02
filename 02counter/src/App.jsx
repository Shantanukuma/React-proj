import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  
  const [counter, setCounter]= useState(2);     /// useState()/////

  const addValue = () => {
    setCounter(counter + 1)

  }
  const removeValue = () =>{
   
      // setCounter(counter - 1);
      setCounter((hitesh) => hitesh - 1);
      setCounter((hitesh) => hitesh - 1);
      setCounter((hitesh) => hitesh - 1);
      setCounter((hitesh) => hitesh - 1);
      setCounter((hitesh) => hitesh - 1);//////   Use of callback.............NICE     NICE    NICE

  
  }

  return (
    <>
     <h1>React course with hitesh on Udemy {counter}</h1>
     <h1>Counter value:{counter} </h1>
     <button
     onClick={addValue}
     >Add value</button>
     <button
     onClick={removeValue}
     >Remove value</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
