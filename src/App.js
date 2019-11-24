import React from 'react';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';


import { createStore } from "redux";
import { Provider } from 'react-redux';

const initialState = {
  value: 42,
  status: "Unknown",
  make: "Unknown"
}

/**
 * The reducer is the only function that modifies the state
 * @param state 
 * @param action 
 */
function reducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case "decrement":
      return {
        ...state,
        value: state.value - 1,
        status: (state.value+1) > 45 ? "HOT" : "COOL"
      }
      break;
    case "increment":
      return {
        ...state,
        value: state.value + 1,
        status: (state.value+1) > 45 ? "HOT" : "COOL"
      }
      break;
    case "set_make":
      return {
        ...state,
        make: action.make
      }
      break;
  }
  return state;
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Component1></Component1>
      <Component2></Component2>
    </Provider>
  );
}

export default App;
