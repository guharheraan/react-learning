import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setcounter] = useState(5)
  // let counter = 15;

  const increaseValue = () =>{
    // counter + 1;
    // console.log("clicked", Math.random())

    if(counter < 12){
      setcounter(counter + 1)
    }else{
      alert("value can not exceed 12.")
    }
    
  }

  const decreaseValue = () =>{
    // counter - 1;
    // console.log("clecked decrease", Math.random())

    if(counter > 0){
      setcounter(counter - 1)
    }else{
      alert("value can not be lower than 0")
    }
    
  }
  return (
    <>
      <h1>guhar heraan</h1>
      <h3>counter project</h3>
      <br />
      <p>counter value = {counter} </p>

      <button onClick={increaseValue}>increase value {counter}</button>
       <br /> <br />
      <button onClick={decreaseValue}>decrease value {counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
