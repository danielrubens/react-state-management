import { useRef, useEffect, useState } from 'react'

function App() {
  //useRef: when you change the value of a reference, it doesn't acctually cause a component rerender
  const inputRef = useRef(null)

  useEffect(() => {inputRef.current.focus()}, [])

  const onAddName = () =>{
    setNames([...names, inputRef.current.value])
    inputRef.current.value = ''

  }

  const [names, setNames] = useState([])
  return (
    <div>
      <div>
        {names.map((name, index) => (<p key={index}>{name}</p>))}
      </div>
      <input type="text" ref={inputRef}/>
      <buton
      type="button"
      onClick={onAddName}
      >
        
        Add Name</buton>
    </div>
  )
}

export default App
