import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post ,setPost] = useState({})
    const [ id , setId] = useState(1)
    const [idBtnClick , setIdBtnClick] = useState(1)

    useEffect(() => {
        console.log("useffect called")
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idBtnClick}`)
         .then(res => {
            console.log(res)
            setPost(res.data)
         })
         .catch(err => {
            console.log(err)
         })
    },[idBtnClick])

    const handleClick = () =>{
        setIdBtnClick(id)
    }

  return (
    <div>
        <input type="text" value={id}
         onChange={e => setId(e.target.value)}/>
         <button type="button" onClick={handleClick} >Fetch Post</button>

         <div>{post.title}</div>
        {/* <ol>
            {
                posts.map(post => 
                    <li key={post.id}>{post.title}</li>
                )
            }
        </ol> */}
    </div>
  )
}

export default DataFetching