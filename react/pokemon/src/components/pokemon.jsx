import {Link} from "react-router-dom"
const EachPokemon=(props)=>{
    const {pokemonDetails}=props
    const {name,id}=pokemonDetails
    
    return <Link to={`/pokemon/${id}`}> 
    <li className="p-4 h-24 border m-2">
        {name}
    </li>
    </Link>
}
export default EachPokemon
/* Learnin Points 
    1.id destructured in props
*/