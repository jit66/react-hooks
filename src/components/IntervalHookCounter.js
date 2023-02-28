import React,{useEffect, useState} from 'react'

function IntervalHookCounter() {

    const [ count , setCount] = useState(0)

    const tick = () => {
        console.log("tick called")
        setCount( prevcount => prevcount + 1)
    }

    useEffect(() => {
        console.log("usefect called")
        const interval = setInterval(tick,1000)
        
        return () => {
            console.log("clear called")
            clearInterval(interval)
        }
    },[])
    
    console.log("n called")
  return (
    <div>
        {count}
    </div>
  )
}

export default IntervalHookCounter