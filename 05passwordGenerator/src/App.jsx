import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[length, setLength] = useState(9);
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str = str + "1234567890"
    }
    if (charAllowed) {
      str = str + "~!@#$%^&*()|:><}{+_?"
    }

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 2)
      pass = pass + str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }



  useEffect( () => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])                     //              frequently changes


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-700'>
      <h1 className='text-white text-center my-3'>
          Password Generator
      </h1>
      <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3 bg-white '
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPassword}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 text-center shrink-0 cursor-pointer'
        >
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1 '>
          <input
           type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer bg-gray-200'
            onChange={(e) =>setLength(e.target.value)}
          />
          <label className='text-orange-400' htmlFor="length">Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            className='cursor-pointer'
            type="checkbox" 
            defaultValue={numberAllowed}
            onChange={() => {
              setNumberAllowed( (prev) => (!prev))
            }}
            
          />
          <label className='text-orange-400' htmlFor="number">Numbers</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input 
            type="checkbox" 
            defaultValue={charAllowed}
            onChange={ () => {
              setCharAllowed( (prev) => (!prev))
            }}
            />
            <label className='text-orange-400'  htmlFor="char">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
