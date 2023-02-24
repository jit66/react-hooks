import React,{useState} from 'react'

function HookCounterFour() {
    const [items,setItems] = useState([])

    const addItem = () =>{
        setItems([...items,
        {
          id: items.length,
          value:Math.floor(Math.random() * 100) +90
        }
        ])
    }
  return (
    <div>
        <button onClick={addItem}>Add a number</button>
        <ul>
            {
                items.map(item =>{

                    console.log(item.id);
                return <li 
                    key={item.id}>{item.value}</li>
                }
                )
            }
        </ul>
    </div>
  )
}

export default HookCounterFour