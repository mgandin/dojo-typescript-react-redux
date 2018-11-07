import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputComponent } from "./component/InputComponent";
import State from "./State";
import * as Redux from 'redux'
import reducer from "./reducers/Reducer";
import {Action, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import InputContainer from "./containers/InputContainer";


const store = createStore(
        reducer
)

class App extends Component<any,State> {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Provider store={store}>
                <InputContainer/>
            </Provider>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
