import { useState } from 'react'

function Counter({value}) {
  let [count, setCount] = useState(10)
  const addOne = () => setCount(count+1)
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
