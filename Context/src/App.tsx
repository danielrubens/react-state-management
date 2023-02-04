import {usePokemon} from './store'

const PokemonList = () => {
  const { pokemon }= usePokemon()
  return(
    <div>
      {pokemon.map((p, index) => (<p key={index}>{p.name}</p>))}
    </div>
  )
  
}

function App() {
  return (
    <div className="App">
      {/* <PokemonContext.Provider value={usePokemonSource()}> */}
        <PokemonList />
      {/* </PokemonContext.Provider> */}
    </div>
  )
}

export default App
