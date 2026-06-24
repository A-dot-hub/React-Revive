import { useState ,useCallback, useEffect,useRef} from "react"


function App() {
 const [length,setlength]=useState(8)
 const [numallowed,setnumallowed]=useState(false)
 const [charallowed,setcharallowed]=useState(false)
const [password,setpassword]=useState("")

//ref hook
const passwordref=useRef(null)

const passwordGenerator=useCallback(()=>{
  let pass=""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


  if(numallowed) str +="0123456789"
  if(charallowed) str +="!@#$%^&*(){}[],.<>/?:;'~*-/+"
for(let i=1;i<=length;i++){
  let char=Math.floor(Math.random()*str.length+1)
pass +=str.charAt(char)
}

setpassword(pass)
},[length,numallowed,charallowed,setpassword])


const copypasswordtoclipboard=useCallback(()=>{
  passwordref.current?.select()
  passwordref.current?.setSelectionRange(0,99)
  window.navigator.clipboard.writeText(password)
},[password])


useEffect(()=>{
passwordGenerator()
},[length,numallowed,charallowed,passwordGenerator])

  return (
    <>
     {/* <h1 className="text-4xl text-center text-yellow-200">Password generator</h1> */}
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-10 text-blue-400 bg-black-50 ">
      <h1 className="text-center text-white my-3 font-mono font-semibold">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-5 my-1 font-mono">


        <input type="text" value={password} className="outline-none w-full py-1 px-4" placeholder="password" readOnly ref={passwordref}/>


        <button onClick={copypasswordtoclipboard} className="rounded-r-lg bg-blue-700 mx-1 p-2 text-white  hover:bg-blue-800 hover:scale-105 transition-all duration-200">Copy</button>



      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" 
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label htmlFor="">Length: {length}</label>

        </div>
        <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={numallowed}
          id="numberInput"
          onChange={()=>{
            setnumallowed((prev)=> !prev)
          }}
          />
          <label htmlFor="numberInput">Numbers</label>

          <input
          type="checkbox"
          defaultChecked={charallowed}
          id="charInput"
          onChange={()=>{
            setcharallowed((prev)=> !prev)
          }}
          />
          <label htmlFor="charInput">Character</label>


        </div>

      </div>

     </div>
    </>
  )
}

export default App
