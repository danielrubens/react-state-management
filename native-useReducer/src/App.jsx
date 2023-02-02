import { useReducer } from 'react'

function UseForm(){
  useReducer((state, action) => { ({...state, ...action }) }, { fisrt: "", last: "" })

  return (
    <div>
      <input type="text" value={state.first} />
      <input type="text" value={state.last} />
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

export default NameList
