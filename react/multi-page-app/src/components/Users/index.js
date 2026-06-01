import {useState,useEffect} from "react"
const Users=()=>{
    const [usersList,setUsersList]=useState([])

    useEffect( ()=>{
        const getData=async ()=>{
            const response= await fetch("https://jsonplaceholder.typicode.com/users")
            const data=await response.json()
            setUsersList(data)
        }
        getData()
    },[])
    return <div>
        <ul>
            {
                usersList.map(eachUser=><li>{eachUser.name}</li>)
            }
        </ul>
    </div>
}

export default Users