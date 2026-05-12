// 1.5 hr
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import PokemonList from "./components/pokemonList"
import PokemonDetails from "./components/pokemonDetails"
function App() {
   

  return (
    <div className="app p-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonList />}/>
          <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
        </Routes>
      </BrowserRouter>
       
    </div>
  )
}

export default App
/*
  Learning Points
    1.syntax wrong for component embbeding in element
*/