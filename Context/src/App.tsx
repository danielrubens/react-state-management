import { useState, useEffect, createContext, useContext } from 'react'

interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

const ThemeContext = createContext("light")

const usePokemon = () : { pokemon: Pokemon[] } => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  useEffect(() => {
    fetch('./pokemon.json').then((response) => response.json()).then((data) => setPokemon(data))
  }, [])
  return {pokemon}
}

const PokemonList = ({pokemon} : {pokemon: Pokemon[]}) => {
  const theme = useContext(ThemeContext)
  return(
    <div>
      <div>{`Theme: ${theme}`}</div>
      {pokemon.map((p, index) => (<p key={index}>{p.name}</p>))}
    </div>
  )
  
}

function App() {
  const {pokemon} = usePokemon()
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* {PokemonList({pokemon})} */}
      <ThemeContext.Provider value="green">
        <PokemonList pokemon={pokemon} />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
