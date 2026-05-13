import {useState,useEffect} from "react"
 
import EachPokemon from "./pokemon"
import {ThreeDots} from "react-loader-spinner"
const PokemonList=()=>{
    const [pokemons,setPokemons]=useState([])
    const [searchInput,setSearchInput]=useState("")
    const [offset,setOffset]=useState(0)
    const [loading,setIsLoading]=useState(true)

    const searchpokemon=(e)=>{
        setSearchInput(e.target.value)
    }
    const decrementOffset=()=>{
        if (offset>=20){
            setOffset(offset-20)
             
        }
    }
    const incrementOffset=()=>{
        setOffset(offset+20)
         
    }

    useEffect(()=>{
        const getData=async()=>{
            const response=await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
            const data=await response.json()
            const updatedData=data.results.map((eachItem,index)=>{
                return {...eachItem,id:offset+index+1}
            })
            setPokemons(updatedData)
            setIsLoading(false)
        }
        getData()
    },[offset])
    const filteredPokemons=pokemons.filter(eachPokemon=>eachPokemon.name.includes(searchInput.toLowerCase()))
    return<div>{loading?<ThreeDots height="80" width="80" color="blue"/> :<div className="flex flex-col items-center">
        <input type="search" placeholder="Search Pokemon" onChange={searchpokemon} value={searchInput}
        className="p-1 m-2 border w-1/2"/>
        {filteredPokemons.length===0 && <h1 className="text-xl p-2">No Pokemons with Search result</h1>}
        <ul className="flex flex-wrap">
            {
                filteredPokemons.map(eachPokemon=><EachPokemon key={eachPokemon.id} pokemonDetails={eachPokemon}/>)
            }
        </ul>
        <div>
            <button onClick={decrementOffset} className="border p-2 m-2">Previous</button>
            <button onClick={incrementOffset} className="border p-2 m-2">Next</button>
        </div>
    </div>}
    </div>

}
export default PokemonList

/* Learning Points 
    1.Id not created or destructured from urls
*/