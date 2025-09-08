// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Provider } from 'react-redux'
import {store} from '../src/redux/store'

function App() {

  return (
    <Provider store={store}>
      <div>
        <h1 >Vite react app</h1>
        <h1 >Vite react app</h1>
      </div>
    </Provider>
  )
}

export default App
