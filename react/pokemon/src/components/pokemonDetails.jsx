import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
const PokemonDetails=()=>{
    const [pokemonDetails,setPokemonDetails]=useState({})
    const [loading,setLoading]=useState(true)
    const {id}=useParams()

    useEffect(()=>{
        const getData=async()=>{
            const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            const data=await response.json()
            setPokemonDetails(data)
            setLoading(false)
        }
        getData()
    },[id])

    console.log(pokemonDetails)
    const {height,weight,abilities,stats,types,name}=pokemonDetails

    return<div>{loading ? <p>Loading </p>: (
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
    </div>) }
    </div>
}
export default PokemonDetails

/* Learning Points 
    1.jsx not wrapped with div
*/