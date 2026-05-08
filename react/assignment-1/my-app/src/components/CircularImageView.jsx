
import {useState,useEffect} from "react"
const CircularImageView=()=>{
    const [loading,setLoading]=useState(true)
     
    useEffect(()=>{
       setTimeout(
        ()=>{
            setLoading(false)
        },2000
       )  
    },[])
    return<div className="loading-view circular-view">
        {!loading &&<img src="../../../assets/koru-sprial-shape.jpg" alt="preview-3" class="preview-3"/>}
          </div>
}
export default CircularImageView