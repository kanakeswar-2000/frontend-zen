import "./index.css"
import { useState,useEffect, } from "react"
import {useParams} from "react-router-dom"
import {ThreeDots} from "react-loader-spinner"
const User=()=>{
     
    const [userDetails,setUserDetails]=useState({})
    const [error,setError]=useState(false)
    const [isLoading,setIsLoading]=useState(true)
    const {username}=useParams()
    useEffect(()=>{
        const getData=async ()=>{
            const response=await fetch(`https://api.github.com/users/${username}`)
            const data=await response.json()
            if (response.ok){ 
                setUserDetails(data)
                setIsLoading(false)
            }
            else{
                setError(true)
                setUserDetails(data)
                setIsLoading(false)
            }
        }
        getData()
    },[username])

    const {avatar_url,bio,name,public_repos,followers,message,status}=userDetails

    return <>{isLoading &&  <ThreeDots
    height="80"
    width="80"
    color="blue"
  />}
    {!isLoading && error ?
        <div>
            <p>{status}</p>
            <p>{message}</p>
        </div>:
        <div> 
             <img src={avatar_url} alt="avatar" className="image"/>
             <p>{bio}</p>
             <p>{name}</p>
             <p>Repos : {public_repos}</p>
             <p>Followers : {followers}</p>
        </div> 
         
    }
    </>
}
export default User