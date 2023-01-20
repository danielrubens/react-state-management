import { useState } from 'react'

function Counter({value}) {
  let [count, setCount] = useState(10)
  const addOne = () => setCount(count+1)
  const [name, setName] = useState(() => Jack)
  // arrow function on useState to have a initial value after refresh 
  // setter enqueue a request to rerender the component
  return (
    <div className="App">
      <button onClick={addOne}>{count}</button>
    </div>
  )
}

const App = () => {
  return(
    <>
    <Counter />
    <Counter />
    <Counter />
    <Counter />

    </>
  )
}

export default App
