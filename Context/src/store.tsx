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
  
 export const usePokemonSource = () : { pokemon: Pokemon[] } => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([])
    useEffect(() => {
      fetch('./pokemon.json').then((response) => response.json()).then((data) => setPokemon(data))
    }, [])
    return {pokemon}
  }
  
  export const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>({} as unknown as ReturnType<typeof usePokemonSource>)
  
  export const usePokemon = () => useContext(PokemonContext)