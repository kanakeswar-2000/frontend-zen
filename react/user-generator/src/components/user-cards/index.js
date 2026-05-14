import "./index.css"
import {useState,useEffect} from "react"
import EachCard from "../each-card"
const UserCards=()=>{
    const [usersList,setUsersList]=useState([])
    const [count,setCount]=useState(10)

    useEffect(()=>{
        const getData=async ()=>{
            const response=await fetch(`https://randomuser.me/api/?results=${count}`)
            const data=await response.json()
            setUsersList(data.results)
        }
        getData()
    },[count])
    
    const loadMoreCards=()=>{
        setCount(count+10)
    }
    return <div>
        <ul className="cards-container">
            {
                usersList.map(eachCard=><EachCard userDetails={eachCard}/>)
            }
        </ul>
        <button onClick={loadMoreCards}>Load More</button>
    </div>
}

export default UserCards