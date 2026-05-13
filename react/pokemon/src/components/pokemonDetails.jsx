import {useParams,useNavigate} from "react-router-dom"
import {useState,useEffect} from "react"
import {ThreeDots} from "react-loader-spinner"
const PokemonDetails=()=>{
    const [pokemonDetails,setPokemonDetails]=useState({})
    const [loading,setLoading]=useState(true)

    const {id}=useParams()


    const navigate=useNavigate()

    useEffect(()=>{
        const getData=async()=>{
            const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            const data=await response.json()
            setPokemonDetails(data)
            setLoading(false)
        }
        getData()
    },[id])

    const onClickGoBack=()=>{
        navigate("/")
    }
    console.log(pokemonDetails)
    const {height,weight,abilities,stats,types,name}=pokemonDetails

    return<div>{loading ?  <ThreeDots height="80" width="80" color="blue"/>: (
    <div className="p-4">
        <h1 className="font-bold text-center p-4">{name}</h1>
        <div className="flex justify-center">
            <p className="mr-4">Height : {height}</p>
            <p>Weight : {weight}</p>
        </div>
        <div className="flex flex-wrap justify-around">
            <div className="m-2"> 
            <h1 className="text-2xl p-2">Abilities</h1>
            <ul>
                {
                    abilities.map(eachAbility=><li>{eachAbility.ability.name}</li>)
                }
            </ul>
            </div>
            <div className="m-2"> 
            <h1 className="text-2xl p-2">Stats</h1>
            <ul>
                {
                    stats.map(eachStat=><li>{eachStat.stat.name}</li>)
                }
            </ul>
            </div>
            <div className="m-2"> 
            <h1 className="text-2xl p-2">Types</h1>
            <ul>
                {
                    types.map(eachType=><li>{eachType.type.name}</li>)
                }
            </ul>
            </div>
        </div>
        <button className="border p-2 m-2" onClick={onClickGoBack}>Go Back</button>
    </div>) }
    </div>
}
export default PokemonDetails

/* Learning Points 
    1.jsx not wrapped with div
*/