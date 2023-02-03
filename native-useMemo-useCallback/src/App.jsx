import React, {useState, useMemo} from 'react'

// hooks to monitor state
// useMemo takes a function and that functions does the calculation

function SortedList({ list, sortFunc }){
  const sortedList = useMemo(() => [...list].sort(sortFunc), [list, sortFunc])
  return (<div>{sortedList.join(", ")}</div>)
}

const sortFunc = (a,b) => a.localeCompare(b) * -1

function App() {
  const [numbers] = useState([10,20,30])
  const total = useMemo(() => numbers.reduce((a,b) => a+b, 0), [numbers])
  const [names] = useState(["John", "Paul", "George", "Ringo"])

  return (
    <div>
      <SortedList list={names} sortFunc={sortFunc} />
    </div>
  )
}

export default App