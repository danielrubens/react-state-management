import { useState, useEffect } from 'react'

function App() {
  const [names, setNames] = useState([])
  const [data, setData] = useState([])
  
  // useEffect takes a function and call once the DOM is rendered or
  // when the dependencie array changes
  
  useEffect(() => {
    fetch("/names.json").then((response) => response.json().then((data) => setNames(data)))
  }, [])
  
  const [selectedName, setSelectName] = useState(null)
  const [selectedNameDetails, setSelectNameDetails] = useState(null)
  useEffect(() => {
    fetch(`/${selectedName}.json`).then((response) => response.json().then((data) => setSelectNameDetails(data)))
  }, [selectedName])

  return (
    <div className="App">
      <div>{names.map((name) => (
          <button onClick={() => setSelectName(name)}>{name}</button>))}
      </div>
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </div>

  )
}

export default App
