import { useState, useEffect } from 'react'

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

const usePokemon = () : { pokemon: Pokemon[] } => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  useEffect(() => {
    fetch('./pokemon.json').then((response) => response.json()).then((data) => setPokemon(data))
  }, [])
  return {pokemon}
}

function App() {
  const {pokemon} = usePokemon()
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>{JSON.stringify(pokemon)}</p>
    </div>
  )
}

export default App
