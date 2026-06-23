import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'


function App() {
  
let myObj={
  username:"cheetah",
  age:21
}

let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-blue-400 text-black-400 p-4 rounded-xl mb-4'>
        Tailwind Test
      </h1>
      <Card username="chi aor code" someObj={myObj} someArr={newArr}  btntext="click me"/>
      <Card username="abhishek" btntext="visit me"/>
      
    </>
  )
}

export default App
