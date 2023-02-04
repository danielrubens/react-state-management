import { useRef, useEffect, useState } from 'react'

function App() {
  //useRef: when you change the value of a reference, it doesn't acctually cause a component rerender
  const inputRef = useRef(null)

  useEffect(() => {inputRef.current.focus()}, [])
  
  const idRef = useRef(1)
  const [names, setNames] = useState([
    {id: idRef.current++, name:"John"  }, {id: idRef.current++, name: "Jane"}
  ])

  const onAddName = () =>{
    setNames([...names, 
      {
      id: idRef.current++,
      name: inputRef.current.value
    }
    ])
    inputRef.current.value = ''

  }

  return (
    <div>
      <div>
        {names.map((name, index) => (<p key={index}>{`id: ${name.id} Name: ${name.name}`}</p>))}
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
