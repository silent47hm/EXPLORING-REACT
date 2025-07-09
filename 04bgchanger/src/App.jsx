import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor]  = useState('skyblue') //userState means normal state default state
  //basically this setcolor is used because of constant changing values inside it and it pass the value "color"


  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}
    // assigning the "backgroundColor" to "color" variable
    >  
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'red'}}  //Button color for test change
          >Red</button>
          <button
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'green'}} //Button color for test change
          >Green</button>
          <button
          onClick={() => setColor('orange')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'orange'}} //Button color for test change
          >Orange</button>
          <button
          onClick={() => setColor('yellow')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'yellow'}} //Button color for test change
          >Yellow</button>
          <button
          onClick={() => setColor('black')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-white'
          style={{backgroundColor: 'black'}} //Button color for test change
          >Black</button>

          </div>
      </div>
    </div>
  )
}

export default App
