import { useState, useEffect } from 'react'

function App() {
  const [names, setNames] = useState([])
  const [data, setData] = useState([])

  // useEffect takes a function and call once the DOM is rendered or
  // when the dependencie array changes
  
  useEffect(() => {
    fetch("/names.json").then((response) => response.json().then((data) => setNames(data)))
  }, [])

  return (
    <div className="App">
      <div>Names: {names.join(", ")}</div>
    </div>
  )
}

export default App
