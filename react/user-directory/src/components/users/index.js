import "./index.css"
import {useState,useEffect} from "react"
import EachUser from "../EachUser"
const Users=()=>{
    const [users,setUsersList]=useState([])
    const [search,setSearch]=useState("")
    
    const filteredUsers=users.filter(eachUser=>eachUser.name.toLowerCase().startsWith(search.toLowerCase()))

    useEffect(()=>{
        const getData=async()=>{
            const response=await fetch("https://jsonplaceholder.typicode.com/users")
            const data=await response.json()
            setUsersList(data)
        }
        getData()
    },[])
    return <div className="users">
        <input type="text" onChange={(e)=>setSearch(e.target.value)} className="search-name"
        placeholder="search name" value={search}/>
        <h1>Users</h1>
        <ul className="users-list">{
            filteredUsers.map(eachUser=><EachUser userDetails={eachUser} key={eachUser.id}/>)
        }</ul>
    </div>
}
export default Users

/* Learning Points :
    1.data fetching directly implemented in useEffect callback function 
    2.await not used for response onbject
*/