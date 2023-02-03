import React, {useState, useMemo} from 'react'

//hooks to monitor state
// useMemo takes a function and that functions does the calculation

function App() {
  const [numbers, setNumbers] = useState([10,20,30])
  const total = useMemo(() => numbers.reduce((a,b) => a+b, 0), [numbers])
  const names = useState(["John", "Paul", "George", "Ringo"])
  return (
    <div>
      {`Total: ${total}`}
    </div>
  )
}

export default App
