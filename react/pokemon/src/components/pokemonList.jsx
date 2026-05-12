import {useState,useEffect} from "react"
 
import EachPokemon from "./pokemon"

const PokemonList=()=>{
    const [pokemons,setPokemons]=useState([])
    const [searchInput,setSearchInput]=useState("")

    const searchpokemon=(e)=>{
        setSearchInput(e.target.value)
    }
    useEffect(()=>{
        const getData=async()=>{
            const response=await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
            const data=await response.json()
            const updatedData=data.results.map((eachItem,index)=>{
                return {...eachItem,id:index+1}
            })
            setPokemons(updatedData)
        }
        getData()
    },[])
    const filteredPokemons=pokemons.filter(eachPokemon=>eachPokemon.name.includes(searchInput.toLowerCase()))
    return <div className="flex flex-col items-center">
        <input type="search" placeholder="Search Pokemon" onChange={searchpokemon} value={searchInput}
        className="p-1 border w-1/2"/>
        <ul className="flex flex-wrap">
            {
                filteredPokemons.map(eachPokemon=><EachPokemon key={eachPokemon.id} pokemonDetails={eachPokemon}/>)
            }
        </ul>
    </div>

}
export default PokemonList

/* Learning Points 
    1.Id not created or destructured from urls
*/