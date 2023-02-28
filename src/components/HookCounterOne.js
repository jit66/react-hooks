import React,{useEffect, useState} from 'react'

function HookCounterOne() {

    const [count,setCount] = useState(0)

    useEffect(() => {
      document.title = `Clicked ${count} times`
    })

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>CLick {count}</button>
    </div>
  )
}

export default HookCounterOne