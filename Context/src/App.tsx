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

const usePokemon = () => {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    fetch('./pokemon.json').then((response) => response.json()).then((data) => setPokemon(data))
  }, [])
  return {pokemon}

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>Hello</p>
    </div>
  )
}

export default App
