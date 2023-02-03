import React, {useState, useMemo} from 'react'

//hooks to monitor state
// useMemo takes a function and that functions does the calculation

function App() {
  const [numbers, setNumbers] = useState([10,20,30])
  const total = useMemo(() => numbers.reduce((a,b) => a+b, 0), [numbers])
  const [names] = useState(["John", "Paul", "George", "Ringo"])

  const sortedNames = [...names].sort() //copy names, then sort
  return (
    <div>
      {`Total: ${total}`}
      {`Names: ${names.join(", ")}`}
      {`Sorted: ${sortedNames.join(", ")} `}
    </div>
  )
}

export default App
