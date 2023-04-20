import './App.css';
import { useReducer } from 'react';

function App() {
  const reducer = (state,action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {count : state.count + 1 , showText: state.showText, number: state.number}
      case 'REVERSE':
        return {count :state.count , showText: !state.showText, number: state.number }
      case 'DECREMENTNUM':
        return {count : state.count , showText : state.showText , number: state.number - 1}
      
      case 'RESET':
        return { count : 0, showText : false , number : 0}

      default:
        return state
    }

  }
  const [state, dispatch] = useReducer(reducer,{count: 0 , showText: false, number: 0 })

  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={()=>{
        dispatch({type : 'INCREMENT'});
        dispatch({type : 'REVERSE'})
      }}>click here</button>
      {state.showText && <p>This is a text</p>}
    <h1>{state.number}</h1>
    <button onClick={()=> {
      dispatch({type: 'DECREMENTNUM'})
    }}>click</button>

    <button onClick={() =>{
      dispatch({type: 'RESET'})
    }}>RESET</button>
    </div>
  );
}

export default App;
