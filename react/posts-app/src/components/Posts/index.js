import "./index.css"
import {useState,useEffect} from "react"
import EachPost from "../EachPost"
const Posts=()=>{
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        const getData=async ()=>{
            const response=await fetch("https://jsonplaceholder.typicode.com/posts")
            const data=await response.json()
            setPosts(data)
        }
        getData()
    },[])
    return <div>
        <h1>Posts</h1>
        <ul className="posts-list">
            {
                posts.map(eachPost=><EachPost postDetails={eachPost} key={eachPost.id}/>)
            }
        </ul>
    </div>

}

export default Posts