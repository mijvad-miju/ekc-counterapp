import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './components/Users'

function App()
{
  const[count,setCount]=useState(0)
  const [msg,setMsg]=useState("")
  useEffect(()=>
    {
      console.log("count modified",count)
    let m="count modified"+String(count)
    setMsg(m),[count]
    }
  )

  return (
    <>
      <h1 class="counter">Counter App</h1>
      <h1 class="counter">{count}</h1>
      <button onClick={()=>setCount(count+1)}>count</button>
      
      <Users />
    </>
  )
}

export default App
