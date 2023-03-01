import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext,NameContext } from '../App'

function ComponentE() {

    const user = useContext(UserContext)
    const name = useContext(NameContext)


  return (
    <div>
        {user} - {name}
    </div>
  )
}

export default ComponentE