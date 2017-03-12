import * as redux from 'redux'
import * as ReactDOM from 'react-dom'
import * as React from 'react'
const reducer = (state =0,action) => {
  switch (action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state -1;
    default:
      return state;
  }
}

const store = redux.createStore(reducer);

const CounterComponent = ({value,onIncrement,onDecrement}) => (
   <div>
     <h1>{value}</h1>
     <button className="pure-button" onClick={onDecrement}>Decrement</button>
    <a> </a>
     <button className="pure-button" onClick={onIncrement}>Increment</button>
   </div>
)

const render = () => {
  ReactDOM.render(
    <CounterComponent
      value={store.getState()}
      onIncrement={() => store.dispatch({type: "INCREMENT"})}
      onDecrement={() => store.dispatch({type: "DECREMENT"})}
      />,
    document.getElementById('root')
  )
  }


store.subscribe(render);
render();
