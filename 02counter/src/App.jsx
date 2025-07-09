import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  //let counter = 4

  const addValue = () => {
    setCounter(counter + 1) 
    //setCounter((previouscounteradd) => previouscounteradd + 1) // nested also for adding number twice
    console.log(counter);
  }

  const removeValue = () => {
    let remvingvalue = counter - 1
    setCounter(remvingvalue)
    //setCounter((previouscountersub) => previouscountersub - 1) // nested also for subtract number twice
    console.log(remvingvalue);
    
  }

  return (
    <>
  <h1>React Course with silent47hm {counter} </h1>
  <h2>Counter Value: {counter}</h2>
  <button
  onClick={addValue}
  >Add value</button>
  <button
  onClick={removeValue}
  >Remove value</button>
  <p>Footer</p>
    </>
  )
}

export default App
