import { useReducer } from 'react'

function UseForm(){
  const initialState = {Name: "", Lastname: "", Role: "" }
  const [state, setState] = useReducer((state, action) => ({...state, ...action }), initialState)
  const keys = Object.keys(state)
  return (
    <div>
      {keys.map((_, index) =>(
        <input type="text" onChange={({target}) => setState({[keys[index]]: target.value})}/>
      ) )}
      {keys.map((el, index) => (<p>{`${keys[index]} : ${state[el]}`}</p>))}
    </div>
  )
}

function NameList() {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type){
      case 'SET_NAME':
        return {...state, name: action.payload}
      case 'ADD_NAME':
        return {...state, names:[...state.names, state.name], name:''}
    }
  }, { names: [], name: "" })

  const showElements = (object, key) => (object[key].map((i) => (<p>{i}</p>)))

  return (
    <div className="App">
      <div>
        {showElements(state, 'names')}
      </div>
      <input 
        type="text"
        value={state.name}
        onChange={e => dispatch({type: 'SET_NAME', payload: e.target.value})}
      />
      <button
        onClick={() => dispatch({type: 'ADD_NAME'})}
      >Add Name
      </button>
    </div>
  )
}

function App(){
  return(
    <div>
      <UseForm />
      <NameList />
    </div>
  )
}

export default App;
