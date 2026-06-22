import { useState } from 'react'
import './App.css'

function App() {
  
let [counter,setcounter]=useState(5)

  // let counter=5
function addvalue(){
  if(counter>=20){
    setcounter(0)
    return
  }
  
  counter++
  setcounter(counter)
  // console.log("value added ", counter)
}

function removeValue(){
  if(counter === 0){
    setcounter(0)
    return
  }
  counter--;
  setcounter(counter)
}

  return (
    <>
      <h1>Chis or codes</h1>
      <h2>Counter vlaue:{counter}</h2>
      <button
      onClick={addvalue}
      >add value</button>
      <br/>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
